import React from "react";
import { Container, Grid,} from "semantic-ui-react";
import Navbar from "../components/common/Navbar";
import SocialMediaList from "../components/profileDetailComponents/SocialMediaList";
import EmployerProfilePhoto from "../components/profileDetailComponents/ProfilePhoto";
import EmployerDetailTable from "../components/profileDetailComponents/EmployerDetailTable";

function EmployerProfileDetailPage() {
  
  
  return (
    <>
      <Navbar />
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column verticalAlign="middle" width={5}>
              <EmployerProfilePhoto />
            </Grid.Column>  
            <Grid.Column width={11} verticalAlign="middle">
              <EmployerDetailTable />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={5}>
              <SocialMediaList />
            </Grid.Column>
            <Grid.Column width={11}>
              
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
}

export default EmployerProfileDetailPage;
