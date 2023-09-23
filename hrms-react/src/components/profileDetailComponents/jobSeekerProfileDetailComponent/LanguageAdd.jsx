import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import CustomIconInput from "../../../utilities/customInputs/CustomIconInput";
import { useParams } from "react-router-dom";
import CustomErrorMessage from "../../../utilities/errors/CustomErrorMessage";
import { languageValidatorSchema } from "../../../validators/languageValidator";
import LanguageService from "../../../services/languageService";

function LanguageAdd() {
  const [add, setAdd] = useState(false);
  const { userId } = useParams();
  const levels = [
    { key: "1", value: "1", level: 1 },
    { key: "2", value: "2", level: 2 },
    { key: "3", value: "3", level: 3 },
    { key: "4", value: "4", level: 4 },
    { key: "5", value: "5", level: 5 },
  ];

  const languageService = new LanguageService()

  return (
    <>
      {add ? (
        <Formik
          initialValues={{
            name: "",
            level: "",
            jobSeekerId: parseInt(userId),
          }}
          onSubmit={(values) => {
            const data = {
                ...values,
                level: parseInt(values.level)
            }

            languageService.add(data)

            setAdd(false);
          }}
          validationSchema={languageValidatorSchema}
        >
          {(props) => (
            <Form autoComplete="off">
              <CustomIconInput
                name="name"
                placeholder="Yabancı dili giriniz"
                icon="language"
              />
              <Field
                name="level"
                as="select"
                className={
                  props.errors.level && props.touched.level && "error-border"
                }
              >
                <option>Seviye seçiniz</option>
                {levels.map((level) => {
                  return (
                    <option key={level.key} value={level.value}>
                      {level.level}
                    </option>
                  );
                })}
              </Field>
              <CustomErrorMessage name="level" />

              <Button color="green" type="submit" fluid>
                Ekle
              </Button>
            </Form>
          )}
        </Formik>
      ) : (
        <Button onClick={() => setAdd(true)} color="green" fluid>
          Yabancı Dil Ekle
        </Button>
      )}
    </>
  );
}

export default LanguageAdd;
