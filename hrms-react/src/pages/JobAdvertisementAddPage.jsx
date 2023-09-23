import React, { useEffect, useState } from "react";
import {Container, Header} from "semantic-ui-react";
import { ToastContainer } from "react-toastify";
import JobAdvertisementAddForm from "../components/jobAdvertisementComponents/JobAdvertisementAddForm";
import { useLocation } from "react-router-dom";
import JobAdvertisementUpdateForm from "../components/jobAdvertisementComponents/JobAdvertisementUpdateForm";

function JobAdvertisementAddPage() {

  const location = useLocation()
  const [isUpdate, setIsUpdate] = useState(false)
  
  useEffect(() => setIsUpdate(!!location.state ? location.state.isUpdate  : false))

  return (
    <>
      <ToastContainer position="top-center" />
      <div className="center-page">
        <Container>
          <Header textAlign="center" size="huge">
            İş İlanı
          </Header>
          {!!isUpdate ? <JobAdvertisementUpdateForm jobAdvertisement={location.state.jobAdvertisement} /> : <JobAdvertisementAddForm/>}
        </Container>
      </div>
    </>
  );
}

export default JobAdvertisementAddPage;
 