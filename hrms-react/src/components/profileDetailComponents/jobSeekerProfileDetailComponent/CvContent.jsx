import React, { useState } from "react";
import { Button, Container, Header, Icon } from "semantic-ui-react";
import CvUpdateForm from "../../cvComponents/CvUpdateForm";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


function CvContent({ cv }) {
  const [isUpdate, setIsUpdate] = useState(false);
  
  const {activeUser} = useSelector(state => state.auth)
  const {userId} = useParams()
  
  const handleChangeUpdate = (value) => {

    setIsUpdate(value)

  }

  return (
    <>
      {isUpdate ? (
        <>
          <Container text>
            <Header textAlign="center" size="huge" content="CV" />
            <CvUpdateForm data={cv} changeUpdate = {handleChangeUpdate} />
          </Container>
        </>
      ) : (
        <>
          {activeUser.id === userId && <Button
            onClick={() => {
              setIsUpdate(true);
            }}
            color="green"
            floated="right"
            animated="vertical"
          >
            <Button.Content hidden>Düzenle</Button.Content>
            <Button.Content visible>
              <Icon name="pencil alternate" />
            </Button.Content>
          </Button>}
          <Container text>
            <Header textAlign="center" size="huge" content="CV" />
            <p>{cv.description}</p>
          </Container>
        </>
      )}
    </>
  );
}

export default CvContent;
