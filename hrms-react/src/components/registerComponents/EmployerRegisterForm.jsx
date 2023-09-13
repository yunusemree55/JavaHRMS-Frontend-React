import { useFormik } from "formik";
import React from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";

import EmployerService from "../../services/employerService";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { employerRegisterValidationSchema } from "../../validators/employerValidator";

function EmployerRegisterForm({ handleClickEmployerButton }) {
  const employerService = new EmployerService();
  const notify = toast;
  const navigate = useNavigate();

  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: {
      companyName: "",
      email: "",
      webSite: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      const employer = values;
      employer.phoneNumber = `9${employer.phoneNumber}`
      console.log(employer);
      var isEmailExists = false;
      var checkEmailAndDomainIsEqual =
        employer.email.split("@")[0] === employer.webSite.split(".")[1];

      if (!checkEmailAndDomainIsEqual) {
        notify.error("Email ile websitesi domaini aynı değil");
        return;
      }

      employerService
        .existsEmployerByEmail(employer.email)
        .then((result) => {
          isEmailExists = result.data;
          if (isEmailExists === true) {
            notify.error("Böyle bir email sisteme kayıtlı");
          }
        })
        .finally(() => {
          setTimeout(() => {
            if (checkEmailAndDomainIsEqual === true) {
              employerService.add(employer);
              notify.success("Kayıt başarılı");
              setTimeout(() => {
                navigate("/login");
              }, 1500);
            }
          }, 1000);
        });
    },
    validationSchema: employerRegisterValidationSchema,
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
            İş Veren Kayıt
          </Header>
          <Form onSubmit={handleSubmit} size="large" autoComplete="off">
            <Segment raised>
              <Form.Input
                values={values.companyName}
                onChange={handleChange}
                name="companyName"
                fluid
                icon="factory"
                iconPosition="left"
                placeholder="Şirket adı"
                className={
                  errors.companyName && touched.companyName
                    ? "error-border"
                    : ""
                }
              />
              {errors.companyName && touched.companyName && (
                <small style={{ display: "flex" }} className="error-message">
                  {errors.companyName}
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
                value={values.webSite}
                onChange={handleChange}
                name="webSite"
                fluid
                icon="globe"
                iconPosition="left"
                placeholder="Web sitesi"
                className={
                  errors.webSite && touched.webSite ? "error-border" : ""
                }
              />
              {errors.webSite && touched.webSite && (
                <small style={{ display: "flex" }} className="error-message">
                  {errors.webSite}
                </small>
              )}
              <Form.Input
                value={values.phoneNumber}
                onChange={handleChange}
                name="phoneNumber"
                fluid
                icon="phone"
                iconPosition="left"
                placeholder="Telefon Numarası"
                className={
                  errors.phoneNumber && touched.phoneNumber
                    ? "error-border"
                    : ""
                }
              />
              {errors.phoneNumber && touched.phoneNumber && (
                <small style={{ display: "flex" }} className="error-message">
                  {errors.phoneNumber}
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
            onClick={handleClickEmployerButton}
            fluid
            color="teal"
            style={{ marginTop: "10px", padding: "20px 0px" }}
          >
            İş arayan mısınız ?
          </Button>
        </Grid.Column>
      </Grid>
    </>
  );
}

export default EmployerRegisterForm;
