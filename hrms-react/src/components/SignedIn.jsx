import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Dropdown, Image } from "semantic-ui-react";

function SignedIn({ signOut }) {
  const { activeUser, isEmployer } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  

  const goToProfileDetail = () => {
    if (isEmployer) {
      navigate(`/employers/${activeUser.id}`);
    } else {
      navigate(`/jobSeekers/${activeUser.id}`);
    }
  };

  const goToJobAdvertisementAddPage = () => {
    navigate("/jobadvertisementadd");
  };

  const goToCvAddPage = () => {

    navigate("/cv/add")

  }

  return (
    <>
      <Image avatar src={activeUser.photoUrl} />
      <Dropdown
        labeled
        floating
        pointing="top right"
        text={
          isEmployer
            ? activeUser.companyName
            : activeUser.firstName + " " + activeUser.lastName
        }
      >
        <Dropdown.Menu style={{ padding: "10px 0px" }}>
          <Dropdown.Item
            onClick={goToProfileDetail}
            icon="info"
            text="Bilgilerim"
          />
          {isEmployer && (
            <Dropdown.Item
              onClick={goToJobAdvertisementAddPage}
              icon="add"
              text="İş İlanı ekle"
            ></Dropdown.Item>
          )}
          {
            !isEmployer && activeUser.cv === null && (
              <Dropdown.Item
              onClick={goToCvAddPage}
              icon="add"
              text="Cv ekle"
            ></Dropdown.Item>
            )
          }
          <Dropdown.Item onClick={signOut} icon="sign-out" text="Çıkış Yap" />
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default SignedIn;
