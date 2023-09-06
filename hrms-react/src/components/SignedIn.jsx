import React from "react";
import { useSelector } from "react-redux";
import { Dropdown, Image } from "semantic-ui-react";

function SignedIn({ signOut}) {

  const {activeUser,isEmployer} = useSelector(state => state.auth)

  return (
    <>
      <Image
        avatar
        src={activeUser.photoUrl}
      />
      <Dropdown labeled floating pointing="top right" text={isEmployer ? activeUser.companyName : activeUser.firstName + " " + activeUser.lastName}>
        <Dropdown.Menu style={{ padding: "10px 0px" }}>
          <Dropdown.Item icon="info" text="Bilgilerim" />
          <Dropdown.Item onClick={signOut} icon="sign-out" text="Çıkış Yap" />
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default SignedIn;
