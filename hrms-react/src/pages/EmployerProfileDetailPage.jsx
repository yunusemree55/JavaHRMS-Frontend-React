import React, { useEffect, useState } from "react";
import { Container, Grid,} from "semantic-ui-react";
import Navbar from "../components/common/Navbar";
import SocialMediaList from "../components/profileDetailComponents/SocialMediaList";
import EmployerProfilePhoto from "../components/profileDetailComponents/ProfilePhoto";
import EmployerDetailTable from "../components/profileDetailComponents/employerProfileDetailComponents/EmployerDetailTable";
import EmployerService from "../services/employerService";
import { useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import EmployerProfileJobAdvertisementList from "../components/profileDetailComponents/employerProfileDetailComponents/EmployerProfileJobAdvertisementList";

function EmployerProfileDetailPage() {

  const employerService = new EmployerService()
  const [employer, setEmployer] = useState({}) 
  const {userId} = useParams()

  useEffect(() => {
    employerService.getById(parseInt(userId)).then(result => {
      setEmployer(result.data)
    })
  })
  
  
  return (
    <>
      <Navbar />
      {!!employer ? <Container>
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
              <EmployerProfileJobAdvertisementList />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container> : <ErrorPage />}
    </>
  );
}

export default EmployerProfileDetailPage;
