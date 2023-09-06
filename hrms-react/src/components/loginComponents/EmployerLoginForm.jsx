import { useFormik } from "formik";

import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import * as Yup from "yup";
import EmployerService from "../../services/employerService";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { isEmployer, loginToPage } from "../../store/actions/authActions";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email alanını doldurunuz"),
  password: Yup.string().required("Şifre alanını doldurunuz"),
});

function EmployerLoginForm({ handleEmployerButtonClick }) {
  const notify = toast;
  const dispatch = useDispatch();

  const navigate = useNavigate();
  let dbData;

  const employerService = new EmployerService();

  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      employerService.getEmployerByEmail(values.email).then((result) => {
        if (result.data.length !== 0) {
          dbData = result.data;
          if (
            values.email === dbData.email &&
            values.password === dbData.password
          ) {
            dispatch(loginToPage(dbData));
            dispatch(isEmployer(true));
            navigate("/");
          } else {
            notify.error("Bilgiler uyuşmuyor");
          }
        } else {

          notify.error("Böyle bir kullanıcı bulunamadı");
        }
      });
    },
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
          <Header as='h2' color='teal' textAlign='center'>İş Veren Giriş</Header>
          <Form onSubmit={handleSubmit} autoComplete="off" size="large">
            <Segment raised>
              <Form.Input
                onChange={handleChange}
                value={values.email}
                name="email"
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail"
                className={errors.email && touched.email ? "error-border" : ""}
              />

              {errors.email && touched.email && (
                <small className="error-message" style={{ display: "flex" }}>
                  {errors.email}
                </small>
              )}

              <Form.Input
                onChange={handleChange}
                value={values.password}
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
            onClick={handleEmployerButtonClick}
            color="teal"
            fluid
            style={{ marginTop: "10px", padding: "20px 0px" }}
          >
            İş arayan mısınız?
          </Button>
        </Grid.Column>
      </Grid>
    </>
  );
}

export default EmployerLoginForm;
