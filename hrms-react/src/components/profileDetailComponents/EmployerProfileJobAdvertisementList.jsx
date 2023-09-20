import React, { useEffect, useState } from "react";
import { Button, Item } from "semantic-ui-react";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import { useParams } from "react-router-dom";

function EmployerProfileJobAdvertisementList() {
  const { userId } = useParams();
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
        {jobAdvertisements.map((jobAdvertisement) => {
          return (
            <Item key={jobAdvertisement.id}>
              <Item.Image
                size="small"
                src={jobAdvertisement.photoUrl}
              />

              <Item.Content verticalAlign="middle">
                <Item.Header>{jobAdvertisement.companyName}</Item.Header>
                <Item.Description>{jobAdvertisement.description}</Item.Description>
                <Item.Extra>
                  <Button color="blue" floated="right">
                    Düzenle
                  </Button>
                </Item.Extra>
              </Item.Content>
            </Item>
          );
        })}
      </Item.Group>
    </>
  );
}

export default EmployerProfileJobAdvertisementList;
