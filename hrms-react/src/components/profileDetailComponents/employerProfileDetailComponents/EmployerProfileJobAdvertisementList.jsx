import React, { useEffect, useState } from "react";
import { Button, Grid, Header, Item } from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import JobAdvertisementService from "../../../services/jobAdvertisementService";


function EmployerProfileJobAdvertisementList() { 
  const { userId } = useParams();
  const { activeUser } = useSelector((state) => state.auth);
  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  const jobAdvertisementService = new JobAdvertisementService();

  useEffect(() => {
    jobAdvertisementService
      .getJobAdvertisementsByEmployerId(userId)
      .then((result) => setJobAdvertisements(result.data));
  }, [jobAdvertisements]);

  return (
    <>
      <Item.Group>
        <Grid>
          {jobAdvertisements.map((jobAdvertisement) => {
            return (
              // <Item className={jobAdvertisement.statusId !== 1 && "ui disabled "} key={jobAdvertisement.id}>
              //   <Item.Image size="small" src={jobAdvertisement.photoUrl} />

              //   <Item.Content verticalAlign="middle">
              //     <Item.Header>{jobAdvertisement.companyName}</Item.Header>
              //     <Item.Description>
              //       {jobAdvertisement.description}
              //     </Item.Description>
              //     <Item.Extra>

              //     </Item.Extra>
              //   </Item.Content>
              // </Item>

              <Grid.Row>
                <Grid.Column  width={2}>
                  <Item.Image className={jobAdvertisement.statusId !== 1 && "ui disabled "} size="small" src={jobAdvertisement.photoUrl} />
                </Grid.Column>
                <Grid.Column width={13}>
                  <Grid.Row >
                    <Header  className={jobAdvertisement.statusId !== 1 && "ui disabled"} >
                      {jobAdvertisement.companyName}
                    </Header>
                  </Grid.Row>
                  <Grid.Row>
                    <Header size="tiny" className={jobAdvertisement.statusId !== 1 && "ui disabled"} >
                      {jobAdvertisement.description}
                    </Header>
                  </Grid.Row>
                </Grid.Column>
                <Grid.Column floated="right" width={1}>
                  {activeUser.id === userId && (
                    <Link
                      to="/jobadvertisementadd"
                      state={{
                        isUpdate: true,
                        jobAdvertisement: jobAdvertisement,
                      }}
                    >
                      <Button color="blue" floated="right">
                        Düzenle
                      </Button>
                    </Link>
                  )}
                </Grid.Column>
              </Grid.Row>
            );
          })}
        </Grid>
      </Item.Group>
    </>
  );
}

export default EmployerProfileJobAdvertisementList;
