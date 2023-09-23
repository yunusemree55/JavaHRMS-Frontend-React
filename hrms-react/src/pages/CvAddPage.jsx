import React from "react";
import { Container, Header } from "semantic-ui-react";
import CvAddForm from "../components/cvComponents/CvAddForm";
import { ToastContainer } from "react-toastify";

function CvAddPage() {
  return (
    <>
        <ToastContainer position="top-center" />
      <div className="center-page">
        <Container>
          <Header textAlign="center" size="huge">
            Cv
          </Header>

          <CvAddForm/>
        </Container>
      </div>
    </>
  );
}

export default CvAddPage;
