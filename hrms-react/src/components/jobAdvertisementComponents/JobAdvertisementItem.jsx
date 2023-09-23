import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Icon, Item, Label } from "semantic-ui-react";

function JobAdvertisementItem() {
  const { jobAdvertisementList } = useSelector(
    (state) => state.jobAdvertisement
  );

  return (
    <div>
      <Item.Group divided>
        {jobAdvertisementList.map((jobAdvertisement) => {
          return (
            <Item key={jobAdvertisement.id}>
              <Item.Image
                src={
                  jobAdvertisement.photoUrl
                    ? jobAdvertisement.photoUrl
                    : "https://react.semantic-ui.com/images/wireframe/image.png"
                }
              />
              <Item.Content>
                <Item.Header >
                  <Link to={`/employers/${parseInt(jobAdvertisement.employerId)}`}>
                    {jobAdvertisement.companyName}
                  </Link>
                </Item.Header>
                <Item.Meta>
                  <span className="cinema">
                    {jobAdvertisement.jobPositionName}
                  </span>
                </Item.Meta>
                <Item.Description>
                  {jobAdvertisement.description}

                  <Link to={`/detail/${jobAdvertisement.id}`}>
                    <Button floated="right" color="instagram">
                      Detay
                    </Button>
                  </Link>
                </Item.Description>

                <Item.Extra>
                  <Label color="blue">
                    <Icon name="calendar alternate outline" /> Bitiş Tarihi:
                    {jobAdvertisement.endingDate.split("-").reverse().join("/")}
                  </Label>
                  <Label color="black">
                    <Icon name="lira sign" /> Maaş:
                    {jobAdvertisement.minSalary} -{jobAdvertisement.maxSalary}
                  </Label>
                </Item.Extra>
              </Item.Content>
            </Item>
          );
        })}
      </Item.Group>
    </div>
  );
}

export default JobAdvertisementItem;
