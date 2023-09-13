import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Form, Icon, Input, Table } from "semantic-ui-react";
import { socialMediaValidationSchema } from "../../validators/socialMediaValidator";
import SocialMediaService from "../../services/socialMediaService";

function SocialMediaAdd({userId}) {
  const [add, setAdd] = useState(false);
  const socialMediaService = new SocialMediaService();

  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues: {
      url: "",
    },
    onSubmit: (values) => {
        userId = parseInt(userId)
        const socialMedia ={
            userId: userId ,
            ...values
        }
        console.log(socialMedia);
        socialMediaService.add(socialMedia)
    },
    validationSchema: socialMediaValidationSchema,
  });

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
              />
              {errors.url && touched.url ? (
                <>
                  <small>{errors.url}</small>
                </>
              ) : (
                ""
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
      )}
    </>
  );
}

export default SocialMediaAdd;
