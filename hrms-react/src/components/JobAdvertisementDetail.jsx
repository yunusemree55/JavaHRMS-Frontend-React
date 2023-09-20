import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobAdvertisementService from "../services/jobAdvertisementService";
import { Container,  Item, List } from "semantic-ui-react";
import Navbar from "./common/Navbar";
import { useSelector } from "react-redux";

function JobAdvertisementDetail() {
  const { id } = useParams();
  const [jobAdvertisement, setJobAdvertisement] = useState({});
  const {activeUser} = useSelector(state => state.auth)

  useEffect(() => {
    const jobAdvertisementService = new JobAdvertisementService();

    jobAdvertisementService.getById(id).then((result) => {
      setJobAdvertisement(result.data);
      
    });
  }, [id]);

  return (
    <>
    <Navbar />
      <Container>
        <Item.Group relaxed="very">
          <Item>
            <Item.Image
              size="large"
              src={jobAdvertisement.photoUrl}
            />
            <Item.Content verticalAlign="middle">
              <Item.Header as="a">{jobAdvertisement.companyName}</Item.Header>
              <Item.Description>
                {jobAdvertisement.description}
              </Item.Description>
              <Item.Extra>
                <List>
                  <List.Item>
                    <List.Icon color="black" name="user" />
                    <List.Content>
                      {jobAdvertisement.jobPositionName}
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon
                      color="black"
                      name="users"
                    />
                    <List.Content>
                      
                      {jobAdvertisement.numberOfPosition} Kişi
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon color="black" name="marker" />
                    <List.Content>{jobAdvertisement.cityName}</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon color="black" name="mail" />
                    <List.Content>
                      {jobAdvertisement.employerEmail}
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon color="black" name="linkify" />
                    <List.Content>
                      {jobAdvertisement.employerWebsite}
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon color="black" name="money" />
                    <List.Content>
                      {jobAdvertisement.minSalary} TL -
                      {jobAdvertisement.maxSalary} TL
                    </List.Content>
                  </List.Item>
                  
                </List>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Container>
    </>
  );
}

export default JobAdvertisementDetail;
