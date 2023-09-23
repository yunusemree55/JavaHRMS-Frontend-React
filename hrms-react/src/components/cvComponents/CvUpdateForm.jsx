import { Form, Formik } from "formik";
import React from "react";
import CustomTextArea from "../../utilities/customInputs/CustomTextArea";
import { Button } from "semantic-ui-react";
import CvService from "../../services/cvService";

function CvUpdateForm({ data, changeUpdate }) {
  const cvService = new CvService();

  return (
    <>
      <Formik
        initialValues={{
          id: data.id,
          description: data.description,
          jobSeekerId: data.jobSeekerId,
        }}
        onSubmit={(values) => {
          const updatedCv = {
            ...values
          };

          cvService.update(updatedCv)
          changeUpdate(false);
        }}
      >
        {(props) => (
          <Form>
            <CustomTextArea
              rows="5"
              className="w-100 text-area"
              name="description"
            />
            <Button
              type="submit"
              color="green"
              content="Kaydet"
              floated="right"
            />
          </Form>
        )}
      </Formik>
    </>
  );
}

export default CvUpdateForm;
