import React from "react";
import { Button, Form, Grid, Header,  Segment } from 'semantic-ui-react'

function EmployerRegisterForm({handleClickEmployerButton}) {
  return (
    <>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            İş Veren Kayıt
          </Header>
          <Form size="large">
            <Segment raised>
              <Form.Input
                fluid
                icon="factory"
                iconPosition="left"
                placeholder="Şirket adı"
              />
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="E-mail address"
              />
              <Form.Input
                fluid
                icon="globe"
                iconPosition="left"
                placeholder="Web sitesi"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />

              <Form.Input
                fluid
                icon="lock"
                type="password"
                iconPosition="left"
                placeholder="Confirm Password"
              />

              <Button color="teal" fluid size="large">
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
