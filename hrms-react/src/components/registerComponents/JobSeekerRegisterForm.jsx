import { useFormik } from "formik";
import React from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import JobSeekerService from "../../services/jobSeekerService";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { jobSeekerRegisterValidationSchema } from "../../validators/jobSeekerValidator";



function JobSeekerRegisterForm({ handleJobSeekerButton }) {
  const jobSeekerService = new JobSeekerService();
  const notify = toast;
  const navigate = useNavigate();
  
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth:null,
      identityNumber: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: () => {
      const user = {
        ...values,
      };
      var isIdentityNumberExists = false;
      var isEmailExists = false;

      jobSeekerService
        .existsJobSeekerIdentity(user.identityNumber)
        .then((result) => {
          isIdentityNumberExists = result.data;
          if (isIdentityNumberExists === true) {
            notify.error("Böyle bir TC kimlik numarası sisteme kayıtlı");
          }
        });

      jobSeekerService
        .exitsJobSeekerEmail(user.email)
        .then((result) => {
          isEmailExists = result.data;
        })
        .then(() => {
          if (isEmailExists === true) {
            notify.error("Böyle bir email sisteme kayıtlı");
            return;
          }
        })
        .finally(() => {
          setTimeout(() => {
            if (isEmailExists === false && isIdentityNumberExists === false) {
              jobSeekerService.add(user);
              notify.success("Kayıt başarılı");
              setTimeout(() => {
                navigate("/login");
              }, 1000);
            }
          }, 1000);
        });
    },
    validationSchema: jobSeekerRegisterValidationSchema,
  });

  

  return (
    <>
      <ToastContainer position="top-center" />
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      > 
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            İş Arayan Kayıt
          </Header>
          <Form onSubmit={handleSubmit} size="large" autoComplete="off">
            <Segment raised>
                <Form.Input
                
                  value={values.firstName}
                  onChange={handleChange}
                  name="firstName"
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="İsim"
                  className={
                    errors.firstName && touched.firstName ? "error-border" : ""
                  }
                />
                {errors.firstName && touched.firstName && (
                  <small style={{ display: "flex" }} className="error-message">
                    {errors.firstName}
                  </small>
                )}

                <Form.Input
                
                  value={values.lastName}
                  onChange={handleChange}
                  name="lastName"
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Soy isim"
                  className={
                    errors.lastName && touched.lastName ? "error-border" : ""
                  }
                />
                {errors.lastName && touched.lastName && (
                  <small style={{ display: "flex" }} className="error-message">
                    {errors.lastName}
                  </small>
                )}
              <Form.Input
                value={values.email}
                onChange={handleChange}
                name="email"
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="E-mail"
                className={errors.email && touched.email ? "error-border" : ""}
              />
              {errors.email && touched.email && (
                <small style={{ display: "flex" }} className="error-message">
                  {errors.email}
                </small>
              )}

              <Form.Input
                value={values.nationalIdentity}
                onChange={handleChange}
                name="identityNumber"
                fluid
                type="number"
                icon="id card"
                iconPosition="left"
                placeholder="TC Kimlik Numarası"
                className={
                  errors.identityNumber && touched.identityNumber
                    ? "error-border"
                    : ""
                }
              />
              {errors.identityNumber && touched.identityNumber && (
                <small style={{ display: "flex" }} className="error-message">
                  {errors.identityNumber}
                </small> 
              )}
              <Form.Input
                value={values.password}
                onChange={handleChange}
                name="password"
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Şifre"
                type="password"
                className={
                  errors.password && touched.password ? "error-border" : ""
                }
              />
              {errors.password && touched.password && (
                <small style={{ display: "flex" }} className="error-message">
                  {errors.password}
                </small>
              )}

              <Form.Input
                value={values.confirmPassword}
                onChange={handleChange}
                name="confirmPassword"
                fluid
                icon="lock"
                type="password"
                iconPosition="left"
                placeholder="Şifre Tekrarı"
                className={
                  errors.confirmPassword && touched.confirmPassword
                    ? "error-border"
                    : ""
                }
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <small style={{ display: "flex" }} className="error-message">
                  {errors.confirmPassword}
                </small>
              )}

              <Button type="submit" color="teal" fluid size="large">
                Kayıt ol
              </Button>
            </Segment>
          </Form>
          <Button
            fluid
            color="teal"
            onClick={handleJobSeekerButton}
            style={{ marginTop: "10px", padding: "20px 0px" }}
          >
            İş veren misiniz ?
          </Button>
        </Grid.Column>
      </Grid>
    </>
  );
}

export default JobSeekerRegisterForm;
