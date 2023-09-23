import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Table } from "semantic-ui-react";
import JobSeekerService from "../../../services/jobSeekerService";

function JobSeekerDetailTable() {
  const [user, setUser] = useState({});

  const jobSeekerService = new JobSeekerService();
  const { userId } = useParams();

  useEffect(() => {
    jobSeekerService
      .getJobSeeekerById(parseInt(userId))
      .then((result) => setUser(result.data));
  }, [userId]);

  const entranceInfo = user.entranceDate ? user.entranceDate : "";
  const graduationInfo = user.graduationDate
    ? user.graduationDate
    : "Devam ediyor";

  const entranceAndGraduationInfo =
    entranceInfo && graduationInfo
      ? `${entranceInfo} || ${graduationInfo}`
      : "Girilmedi";

  const isEntrance = entranceAndGraduationInfo === "Girilmedi" ? "active" : "";

  return (
    <>
      <Table selectable celled size="large">
        <Table.Body>
          <Table.Row>
            <Table.HeaderCell textAlign="center">İsim Soyisim</Table.HeaderCell>
            <Table.Cell>{`${user.firstName} ${user.lastName}`}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell textAlign="center">Email</Table.HeaderCell>
            <Table.Cell>{user.email}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell textAlign="center">Doğum Tarihi</Table.HeaderCell>
            <Table.Cell className={!!user.dateOfBirth ? "" : "active"}>
              {!!user.dateOfBirth ? user.dateOfBirth : "Girilmedi"}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell textAlign="center">Üniversite</Table.HeaderCell>
            <Table.Cell className={!!user.universityName ? "" : "active"}>
              {!!user.universityName ? user.universityName : "Girilmedi"}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell textAlign="center">Bölüm</Table.HeaderCell>
            <Table.Cell className={!!user.departmentName ? "" : "active"}>
              {!!user.departmentName ? user.departmentName : "Girilmedi"}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell textAlign="center"> 
              Giriş Tarihi - Mezun Tarihi
            </Table.HeaderCell>
            <Table.Cell className={isEntrance}>
              {" "}
              {entranceAndGraduationInfo}{" "}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
}

export default JobSeekerDetailTable;
