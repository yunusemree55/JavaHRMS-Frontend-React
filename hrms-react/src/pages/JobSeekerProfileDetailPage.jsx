import React from 'react'
import Navbar from '../components/common/Navbar'
import SocialMediaList from '../components/profileDetailComponents/SocialMediaList'
import { Container, Grid } from 'semantic-ui-react'
import JobSeekerDetailTable from '../components/profileDetailComponents/JobSeekerDetailTable'
import ProfilePhoto from '../components/profileDetailComponents/ProfilePhoto'

function JobSeekerProfileDetailPage() {
  return (
    <>

        <Navbar/>
        <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column verticalAlign="middle" width={5}>
              <ProfilePhoto />
            </Grid.Column>
            <Grid.Column width={11} verticalAlign="middle">
                <JobSeekerDetailTable/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={5}>
              {/* <SocialMediaList /> */}
            </Grid.Column>
            <Grid.Column width={11}>
              
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    
    </>
  )
}

export default JobSeekerProfileDetailPage