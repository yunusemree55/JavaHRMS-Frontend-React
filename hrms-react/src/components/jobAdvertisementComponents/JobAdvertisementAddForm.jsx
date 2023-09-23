import React, { useEffect, useState } from 'react'
import { Field, Form, Formik } from "formik";
import { Button, Segment } from "semantic-ui-react";
import CityService from '../../services/cityService';
import JobPositionService from '../../services/jobPositionService';
import JobAdvertisementService from '../../services/jobAdvertisementService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import CustomTextArea from '../../utilities/customInputs/CustomTextArea';
import CustomIconInput from '../../utilities/customInputs/CustomIconInput';
import { useSelector } from 'react-redux';
import CustomDatePicker from '../../utilities/customInputs/CustomDatePicker';
import { jobAdvertisementAddValidatorSchema } from '../../validators/jobAdvertisementValidator';


function JobAdvertisementAddForm() {

  const navigator = useNavigate()
  const notify = toast
    

  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);
  const {activeUser} = useSelector(state => state.auth)

  const cityService = new CityService();
  const jobPositionService = new JobPositionService();
  const jobAdvertisementService = new JobAdvertisementService()

  useEffect(() => {
    cityService.getAll().then((result) => setCities(result.data));
    jobPositionService.getAll().then((result) => setJobPositions(result.data));
  });

  return (
    <>
    
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
    </>
  )
}

export default JobAdvertisementAddForm