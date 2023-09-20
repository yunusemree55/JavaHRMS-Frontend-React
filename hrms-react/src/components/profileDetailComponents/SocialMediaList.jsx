import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import SocialMediaService from "../../services/socialMediaService";
import { useSelector } from "react-redux";
import SocialMediaAdd from "./SocialMediaAdd";
import { useParams } from "react-router-dom";

function SocialMediaList() {
  const { activeUser } = useSelector((state) => state.auth);
  const {userId} = useParams()
  const socialMediaService = new SocialMediaService();
  const [socialMedias, setSocialMedias] = useState([]);

  useEffect(() => {
    socialMediaService.getSocialMediaByUserId(userId).then((result) => {
      setSocialMedias(result.data);
    });
  });

  return (
    <>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center">
              {" "}
              Sosyal Medya{" "}
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {socialMedias.map((socialMedia) => {
            return (
              <Table.Row key={socialMedia.id}>
                <Table.Cell>{socialMedia.url}</Table.Cell>
              </Table.Row>
            );
          })}

          <Table.Row>
            <SocialMediaAdd activeUserId={activeUser.id} />
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
}

export default SocialMediaList;
