import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Container, Header, Segment } from "semantic-ui-react";
import CustomIconInput from "../utilities/customInputs/CustomIconInput";
import CustomDatePicker from "../utilities/customInputs/CustomDatePicker";
import CustomTextArea from "../utilities/customInputs/CustomTextArea";
import CityService from "../services/cityService";
import { jobAdvertisementAddValidatorSchema } from "../validators/jobAdvertisementAddValidator";
import JobPositionService from "../services/jobPositionService";
import JobAdvertisementService from "../services/jobAdvertisementService";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function JobAdvertisementAddPage() {

  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);
  const {activeUser} = useSelector(state => state.auth)

  const navigator = useNavigate()
  const notify = toast

  const cityService = new CityService();
  const jobPositionService = new JobPositionService();
  const jobAdvertisementService = new JobAdvertisementService()


  useEffect(() => {
    cityService.getAll().then((result) => setCities(result.data));
    jobPositionService.getAll().then((result) => setJobPositions(result.data));
  });

  return (
    <>
      <ToastContainer position="top-center" />
      <div className="center-page">
        <Container>
          <Header textAlign="center" size="huge">
            İş İlanı
          </Header>
          <Formik
            initialValues={{
              description: "",
              numberOfPosition: "",
              minSalary: "",
              maxSalary: "",
              endingDate: "",
              cityId: undefined,
              jobPositionId: undefined,
              statusId: 1,
            }}
            onSubmit={(values) => {
              const jobAdvertisement = {
                employerId:parseInt(activeUser.id),
                ...values,
                cityId: parseInt(values.cityId),
                jobPositionId: parseInt(values.jobPositionId)
              }

              jobAdvertisementService.add(jobAdvertisement)
              notify.success("İş ilanı eklendi")
              setTimeout(() => {
                navigator("/")

              }, 1500);
            }}
            validationSchema={jobAdvertisementAddValidatorSchema}
          >
            {(props) => (
              <Segment>
                <Form autoComplete="off">
                  <CustomTextArea
                    name="description"
                    className="w-100 text-area"
                  />

                  <CustomIconInput
                    placeholder="Pozisyon Sayısı"
                    type="number"
                    name="numberOfPosition"
                    icon="group"
                  />

                  <CustomIconInput
                    placeholder="Min Maaş"
                    type="number"
                    name="minSalary"
                    icon="lira sign"
                  />
                  <CustomIconInput
                    placeholder="Max Maaş"
                    type="number"
                    name="maxSalary"
                    icon="lira sign"
                  />
                  <CustomDatePicker
                    minDate={new Date()}
                    isClearable
                    placeholderText="Bitiş Tarihi"
                    className={
                      props.errors.endingDate && props.touched.endingDate
                        ? "error-border customDatePicker"
                        : "customDatePicker"
                    }
                    wrapperClassName="wrapDatePicker"
                    name="endingDate"
                  />

                  <Field
                    name="cityId"
                    as="select"
                    className={
                      props.errors.cityId && props.touched.cityId
                        ? "error-border"
                        : ""
                    }
                  >
                    <option>Şehir Seç</option>
                    {cities.map((city) => {
                      return (
                        <option key={city.id} value={city.id}>
                          {city.name}
                        </option>
                      );
                    })}
                  </Field>
                  {props.errors.cityId && props.touched.cityId && (
                    <small className="flex error-message">
                      {props.errors.cityId}
                    </small>
                  )}

                  <Field
                    name="jobPositionId"
                    as="select"
                    className={
                      props.errors.jobPositionId && props.touched.jobPositionId
                        ? "error-border"
                        : ""
                    }
                  >
                    <option>İş Pozisyonu Seç</option>
                    {jobPositions.map((jobPosition) => {
                      return (
                        <option key={jobPosition.id} value={jobPosition.id}>
                          {jobPosition.name}
                        </option>
                      );
                    })}
                  </Field>
                  {props.errors.jobPositionId && props.touched.jobPositionId && (
                    <small className="flex error-message">
                      {props.errors.jobPositionId}
                    </small>
                  )}



                 

                  <Button type="submit" className="mt-1" color="green" fluid>
                    Ekle
                  </Button>
                </Form>
              </Segment>
            )}
          </Formik>
        </Container>
      </div>
    </>
  );
}

export default JobAdvertisementAddPage;
