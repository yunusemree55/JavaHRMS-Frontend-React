import { Form, Formik } from "formik";
import React from "react";
import CustomIconInput from "../../../utilities/customInputs/CustomIconInput";
import { Button, Grid } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import CustomDatePicker from "../../../utilities/customInputs/CustomDatePicker";
import { jobExperienceValidationSchema } from "../../../validators/jobExperienceValidator";

function JobExperienceAdd({handleAddJobExperience}) {

  const {userId} = useParams()

  return (
    <>
      <Grid>
        <Grid.Row centered>
          <Grid.Column width={7}>
            <Formik
              initialValues={{
                jobSeekerId: parseInt(userId),
                companyName: "",
                position:"",
                entranceDate:null,
                leavingDate:null
              }}

              validationSchema={jobExperienceValidationSchema}

              onSubmit={(values) => {

                handleAddJobExperience(values)
              }}


            >
              {(props) => (
                <Form autoComplete="off">
                  <CustomIconInput name="companyName" icon="factory" placeholder="Şirket adı" />
                  <CustomIconInput name="position" icon="user" placeholder="Pozisyon adı" />
                  <CustomDatePicker name="entranceDate" className="w-100 customDatePicker" wrapperClassName="wrapDatePicker" placeholderText="Giriş tarihi" />
                  <CustomDatePicker name="leavingDate" className="w-100 customDatePicker mt-2" wrapperClassName="wrapDatePicker" placeholderText="Çıkış tarihi" />
                  <Button positive className="mt-2" type="submit" floated="right">Ekle</Button>
                </Form>
              )}
            </Formik>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

export default JobExperienceAdd;
