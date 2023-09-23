import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import CustomIconInput from "../../utilities/customInputs/CustomIconInput";
import CustomTextArea from "../../utilities/customInputs/CustomTextArea";
import CustomDatePicker from "../../utilities/customInputs/CustomDatePicker";
import JobPositionService from "../../services/jobPositionService";
import CityService from "../../services/cityService";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import StatusService from "../../services/statusService";
import { jobAdvertisementUpdateValidatorSchema } from "../../validators/jobAdvertisementValidator";
import CustomErrorMessage from "../../utilities/errors/CustomErrorMessage";

function JobAdvertisementUpdateForm({ jobAdvertisement }) {
  const [cities, setCities] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);
  const [statuses, setStatus] = useState([]);

  const cityService = new CityService();
  const jobPositionService = new JobPositionService();
  const jobAdvertisementService = new JobAdvertisementService();
  const statusService = new StatusService();

  const notify = toast;
  const navigate = useNavigate();

  useEffect(() => {
    cityService.getAll().then((result) => setCities(result.data));
    jobPositionService.getAll().then((result) => setJobPositions(result.data));
    statusService.getAll().then((result) => setStatus(result.data));
  });

  return (
    <>
      <Formik
        initialValues={{
          id: jobAdvertisement.id,
          employerId: jobAdvertisement.employerId,
          description: jobAdvertisement.description,
          numberOfPosition: jobAdvertisement.numberOfPosition,
          minSalary: jobAdvertisement.minSalary,
          maxSalary: jobAdvertisement.maxSalary,
          endingDate: jobAdvertisement.endingDate,
          jobPositionId: undefined,
          cityId: undefined,
          statusId: undefined,
        }}
        onSubmit={(values) => {
          const updateJobAdvertisement = {
            id: parseInt(values.id),
            ...values,
            jobPositionId: parseInt(values.jobPositionId),
            cityId: parseInt(values.cityId),
            statusId: parseInt(values.statusId),
          };

          jobAdvertisementService.update(updateJobAdvertisement);
          notify.success("Güncellendi !");
          setTimeout(() => {
            navigate(`/employers/${jobAdvertisement.employerId}`);
          }, 1500);
        }}
        validationSchema={jobAdvertisementUpdateValidatorSchema}
      >
        {(props) => (
          <Form>
            <CustomTextArea name="description" className="w-100 text-area" />

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

            <CustomErrorMessage name="cityId" />

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

            <CustomErrorMessage name="jobPositionId" />

            <Field
              className={
                props.errors.statusId &&
                props.touched.statusId &&
                "error-border"
              }
              name="statusId"
              as="select"
            >
              <option>Durumu seç</option>
              {statuses.map((status) => {
                return (
                  <option key={status.id} value={status.id}>
                    {status.name}
                  </option>
                );
              })}
            </Field>
            <CustomErrorMessage name="statusId" />

            <Button fluid color="blue" type="submit">
              Düzenle
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default JobAdvertisementUpdateForm;
