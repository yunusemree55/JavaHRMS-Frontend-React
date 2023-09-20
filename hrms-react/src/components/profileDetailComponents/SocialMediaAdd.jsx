import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Form, Icon, Input, Table } from "semantic-ui-react";
import { socialMediaValidationSchema } from "../../validators/socialMediaValidator";
import SocialMediaService from "../../services/socialMediaService";
import { useParams } from "react-router-dom";

function SocialMediaAdd({ activeUserId }) {
  const [add, setAdd] = useState(false);
  const [hide, setHide] = useState(false);
  const socialMediaService = new SocialMediaService();
  const { userId } = useParams();

  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues: {
      url: "",
    },
    onSubmit: (values) => {
      activeUserId = parseInt(activeUserId);
      const socialMedia = {
        userId: activeUserId,
        ...values,
      };
      console.log(socialMedia);
      socialMediaService.add(socialMedia);
    },
    validationSchema: socialMediaValidationSchema,
  });

  useEffect(() => {
    activeUserId !== userId ? setHide(true) : setHide(false);
  }, []);

  

  return (
    <>
      {add ? (
        <>
          <Table.Cell>
            <Form onSubmit={handleSubmit} autoComplete="off">
              <Input
                fluid
                name="url"
                value={values.url}
                onChange={handleChange}
                className={errors.url && touched.url && "error-border"}
              />
              {errors.url && touched.url && (
                <small className="error-message">{errors.url}</small>
              )}

              <div style={{ display: "flex", marginTop: "7px" }}>
                <Button type="submit" color="green" fluid content="Ekle" />

                <Button
                  type="submit"
                  onClick={() => setAdd(false)}
                  color="red"
                  fluid
                  content="Geri Dön"
                />
              </div>
            </Form>
          </Table.Cell>
        </>
      ) : (
        hide ? (
          <></>
        ) : (
          <Table.Cell>
            <Button
              onClick={() => setAdd(true)}
              color="green"
              fluid
              animated="vertical"
            >
              <Button.Content hidden>Ekle</Button.Content>
              <Button.Content visible>
                <Icon name="add" />
              </Button.Content>
            </Button>
          </Table.Cell>
        )
      )}
    </>
  );
}

export default SocialMediaAdd;
