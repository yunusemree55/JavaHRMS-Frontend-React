import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Icon, Item, Label } from 'semantic-ui-react';

function JobAdvertisementItem({data}) {
  return (
    <div>
        <Item.Group divided>
              {data.map((jobAdvertisement) => {
                return (
                  <Item key={jobAdvertisement.id}  >
                    <Item.Image
                      src={
                        jobAdvertisement.photoUrl
                          ? jobAdvertisement.photoUrl
                          : "https://react.semantic-ui.com/images/wireframe/image.png"
                      }
                    />
                    <Item.Content>
                      <Item.Header as="a">
                        {jobAdvertisement.companyName}
                      </Item.Header>
                      <Item.Meta>
                        <span className="cinema">
                          {jobAdvertisement.jobPositionName}
                        </span>
                      </Item.Meta>
                      <Item.Description> 
                        {jobAdvertisement.description}
                        
                        <Link to={`/detail/${jobAdvertisement.id}`}>
                        <Button floated='right' color='instagram'>Detay</Button>
                        </Link>
                      
                      </Item.Description>
                      
                      <Item.Extra>
                        <Label color="blue">
                          <Icon name="calendar alternate outline" /> Ending
                          Date:
                          {jobAdvertisement.endingDate
                            .split("-")
                            .reverse()
                            .join("/")}
                        </Label>
                        <Label color="black">
                          <Icon name="lira sign" /> Wage:
                          {jobAdvertisement.minSalary} -
                          {jobAdvertisement.maxSalary}
                        </Label>
                      </Item.Extra>
                    </Item.Content>
                  </Item>
                );
              })}
            </Item.Group>
    </div>
  )
}

export default JobAdvertisementItem