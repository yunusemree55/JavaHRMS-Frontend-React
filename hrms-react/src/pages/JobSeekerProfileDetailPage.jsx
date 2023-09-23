import React, { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import SocialMediaList from "../components/profileDetailComponents/SocialMediaList";
import { Container, Grid } from "semantic-ui-react";
import JobSeekerDetailTable from "../components/profileDetailComponents/jobSeekerProfileDetailComponent/JobSeekerDetailTable";
import ProfilePhoto from "../components/profileDetailComponents/ProfilePhoto";
import JobSeekerService from "../services/jobSeekerService";
import { useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import LanguageList from "../components/profileDetailComponents/jobSeekerProfileDetailComponent/LanguageList";
import CvContent from "../components/profileDetailComponents/jobSeekerProfileDetailComponent/CvContent";

function JobSeekerProfileDetailPage() {
  const [jobSeeker, setJobSeeker] = useState({});
  const [languages,setLanguages] = useState([])
  //const [socialMedias,setSocialMedias] = useState([])
  const [cv, setCv] = useState(null)
  const { userId } = useParams();
  const jobSeekerService = new JobSeekerService();

  useEffect(() => {
    jobSeekerService.getJobSeeekerById(userId).then((result) => {
      setJobSeeker(result.data);
      setLanguages(jobSeeker.languages)
      //setSocialMedias(jobSeeker.socialMedias)
      setCv(jobSeeker.cv)
    });
  });


  return (
    <>
      <Navbar />
      {!!jobSeeker ? (
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column verticalAlign="middle" width={5}>
                <ProfilePhoto />
              </Grid.Column>
              <Grid.Column width={11} verticalAlign="middle">
                <JobSeekerDetailTable />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={5}>
                <SocialMediaList />
                {!!languages && <LanguageList languages={languages} /> }
              </Grid.Column>
              <Grid.Column width={11}>

                {!!cv && <CvContent cv = {cv} />}

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      ) : (
        <ErrorPage />
      )}
    </>
  );
}

export default JobSeekerProfileDetailPage;
