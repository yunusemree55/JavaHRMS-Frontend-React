import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Button, Grid, Header, Segment } from "semantic-ui-react";
import CustomIconInput from "../../utilities/customInputs/CustomIconInput";
import { jobSeekerRegisterValidationSchema } from "../../validators/jobSeekerValidator";
import UniversityService from "../../services/universityService";
import DepartmentService from "../../services/departmentService";
import JobSeekerService from "../../services/jobSeekerService";
import { useNavigate } from "react-router-dom";
import CustomDatePicker from "../../utilities/customInputs/CustomDatePicker";

function JobSeekerRegisterForm({ handleJobSeekerButton }) {
  const notify = toast;
  const navigate = useNavigate();
  const [universities, setUniversities] = useState([]);
  const [departments, setDepartments] = useState([]);
  const universityService = new UniversityService();
  const departmentService = new DepartmentService();
  const jobSeekerService = new JobSeekerService();

  useEffect(() => {
    universityService.getAll().then((result) => {
      setUniversities(result.data);
    });
    departmentService.getAll().then((result) => {
      setDepartments(result.data);
    });
  });

  const handleRegisterSubmit = (values) => {
    const user = {
      ...values,
      universityId: parseInt(values.universityId),
      departmentId: parseInt(values.departmentId),
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
            console.log(user);
            setTimeout(() => {
              navigate("/login");
            }, 1000);
          }
        }, 1000);
      });
  };

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
          <Formik
            validationSchema={jobSeekerRegisterValidationSchema}
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              dateOfBirth: "",
              identityNumber: "",
              universityId: "",
              departmentId: "",
              entranceDate: "",
              graduationDate: "",
              password: "",
              confirmPassword: "",
            }}
            onSubmit={handleRegisterSubmit}
          >
            {(props) => (
              <Form autoComplete="off">
                <Segment raised>
                  <CustomIconInput name="firstName" icon="user" />

                  <CustomIconInput name="lastName" icon="user" />

                  <CustomIconInput name="email" icon="mail" />

                  <CustomDatePicker
                    className={
                      props.errors.dateOfBirth && props.touched.dateOfBirth
                        ? "customDatePicker red-border"
                        : "customDatePicker"
                    }
                    wrapperClassName="wrapDatePicker"
                    name="dateOfBirth"
                    placeholderText="Doğum Yılı"
                    isClearable
                  />

                  <Field
                    className={
                      props.errors.universityId &&
                      props.touched.universityId &&
                      "error-border"
                    }
                    name="universityId"
                    as="select"
                  >
                    <option>Üniversite Seç</option>
                    {universities.map((university) => {
                      return (
                        <option key={university.id} value={university.id}>
                          {university.name}
                        </option>
                      );
                    })}
                  </Field>
                  {props.errors.universityId && props.touched.universityId && (
                    <small className="error-message flex">
                      {props.errors.universityId}
                    </small>
                  )}

                  <Field
                    className={
                      props.errors.departmentId &&
                      props.touched.departmentId &&
                      "error-border"
                    }
                    name="departmentId"
                    as="select"
                  >
                    <option>Bölüm Seç</option>
                    {departments.map((department) => {
                      return (
                        <option key={department.id} value={department.id}>
                          {department.name}
                        </option>
                      );
                    })}
                  </Field>

                  {props.errors.departmentId && props.touched.departmentId && (
                    <small className="error-message flex">
                      {props.errors.departmentId}
                    </small>
                  )}

                  <div className="flex space-between">
                    <div>
                      <CustomDatePicker
                        className={
                          props.errors.entranceDate &&
                          props.touched.entranceDate
                            ? "error-border customDatePicker"
                            : "customDatePicker"
                        }
                        placeholderText="Giriş Yılı"
                        isClearable
                        name="entranceDate"
                      />
                    </div>
                    <CustomDatePicker
                      placeholderText="Mezun Yılı"
                      className="customDatePicker"
                      isClearable
                      name="graduationDate"
                    />
                  </div>

                  <CustomIconInput name="identityNumber" icon="id card" />

                  <CustomIconInput
                    name="password"
                    icon="lock"
                    type="password"
                  />

                  <CustomIconInput
                    name="confirmPassword"
                    icon="lock"
                    type="password"
                  />

                  <Button type="submit" color="teal" fluid size="large">
                    Kayıt ol
                  </Button>
                </Segment>
              </Form>
            )}
          </Formik>
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
