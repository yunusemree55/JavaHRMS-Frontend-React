import React from "react";
import { useSelector } from "react-redux";
import { Card, Container, Grid } from "semantic-ui-react";
import Navbar from "../components/common/Navbar";
import ProfileDetailTable from '../components/profileDetailComponents/ProfileDetailTable'
import SocialMediaList from "../components/profileDetailComponents/SocialMediaList";

function ProfileDetailPage() {
  const {activeUser} = useSelector((state) => state.auth);



  return (
    <>
      <Navbar />
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column verticalAlign="middle" width={5}>
              <Card  centered raised image={activeUser.photoUrl} />
            </Grid.Column>
            <Grid.Column width={11} verticalAlign="middle">
              <ProfileDetailTable />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={5}>
              <SocialMediaList />
            </Grid.Column>
            <Grid.Column  width={11}>
              <p>asdasd</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
}

export default ProfileDetailPage;
