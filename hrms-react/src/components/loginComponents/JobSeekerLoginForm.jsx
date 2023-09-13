import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
} from "semantic-ui-react";
import JobSeekerService from "../../services/jobSeekerService";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginToPage } from "../../store/actions/authActions";
import { jobSeekerLoginValidationSchema } from "../../validators/jobSeekerValidator";



function JobSeekerLoginForm({ handleJobSeekerButtonClick }) {
  
  const notify = toast
  const jobSeekerService = new JobSeekerService();
  const dispatch = useDispatch()
  
  const navigate = useNavigate();
  let dbData;

  const { values, handleSubmit, handleChange, errors, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: jobSeekerLoginValidationSchema,
    onSubmit: () => {
      jobSeekerService
        .getJobSeekerByEmail(values.email)
        .then((result) => {
          if (result.data.length !== 0) {
            dbData = result.data;
            
            if(dbData.dateOfBirth){
              dbData.dateOfBirth = reverseDate(dbData.dateOfBirth)
            }

            if(dbData.entranceDate){
              dbData.entranceDate = reverseDate(dbData.entranceDate)
            }
            if(dbData.graduationDate){
              dbData.graduationDate = reverseDate(dbData.graduationDate)
            }
            if(values.email === dbData.email && values.password === dbData.password){
              delete dbData.password
              dispatch(loginToPage(dbData))
              navigate("/")
            }else{
              notify.error("Bilgiler uyuşmuyor")
            }

          } else {

            notify.error("Böyle bir kullanıcı kayıtlı değil")
            
          }
        });
    },
  });

  function reverseDate(date) {

    return date.split('-').reverse().join('/')
    
  }

  return (
    <>
      <ToastContainer position="top-center"/>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>İş Arayan Giriş</Header>

          <Form onSubmit={handleSubmit} size="large" autoComplete="off">
            <Segment raised>
              <Form.Input
                fluid
                icon="user"
                name="email"
                iconPosition="left"
                value={values.email}
                onChange={handleChange}
                placeholder="E-mail"
                className={errors.email && touched.email ? "error-border" : ""}
              />

              {errors.email && touched.email && (
                <small className="error-message" style={{ display: "flex" }}>
                  {" "}
                  {errors.email}{" "}
                </small>
              )}

              <Form.Input
                fluid
                icon="lock"
                name="password"
                iconPosition="left"
                value={values.password}
                onChange={handleChange}
                placeholder="Şifre"
                type="password"
                className={
                  errors.password && touched.password ? "error-border" : ""
                }
              />

              {errors.password && touched.password && (
                <small className="error-message" style={{ display: "flex" }}>
                  {errors.password}
                </small>
              )}

              <Button type="submit" color="teal" fluid size="large">
                Giriş Yap
              </Button>
            </Segment>
          </Form>
          <Button
            onClick={handleJobSeekerButtonClick}
            color="teal"
            fluid
            style={{ marginTop: "10px", padding: "20px 0px" }}
          >
            İş veren misiniz?
          </Button>
        </Grid.Column>
      </Grid>
    </>
  );
}

export default JobSeekerLoginForm;
