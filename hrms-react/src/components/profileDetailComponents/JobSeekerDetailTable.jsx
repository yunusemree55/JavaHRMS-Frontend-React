import React from "react";
import { useSelector } from "react-redux";
import { Table } from "semantic-ui-react";

function JobSeekerDetailTable() {
    
  const { activeUser } = useSelector((state) => state.auth);

  const entranceInfo = activeUser.entranceDate ? activeUser.entranceDate : ""
  const graduationInfo = activeUser.graduationDate ? activeUser.graduationDate : "Devam ediyor"
  
  const entranceAndGraduationInfo = entranceInfo&&graduationInfo ? `${entranceInfo} || ${graduationInfo}` : "Girilmedi"

  const isEntrance = entranceAndGraduationInfo==="Girilmedi" ? "active" : ""


  return (
    <>
      <Table selectable celled size="large">
        <Table.Body>
          <Table.Row>
            <Table.HeaderCell textAlign="center">İsim Soyisim</Table.HeaderCell>
            <Table.Cell>{`${activeUser.firstName} ${activeUser.lastName}`}</Table.Cell>
          </Table.Row>
          <Table.Row >
            <Table.HeaderCell textAlign="center">Email</Table.HeaderCell>
            <Table.Cell >{activeUser.email}</Table.Cell>
          </Table.Row>
          <Table.Row >
            <Table.HeaderCell textAlign="center">Doğum Tarihi</Table.HeaderCell>
            <Table.Cell className={!!activeUser.dateOfBirth ? "" : "active"}>{!!activeUser.dateOfBirth ? activeUser.dateOfBirth : "Girilmedi"}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell textAlign="center">Üniversite</Table.HeaderCell>
            <Table.Cell className={!!activeUser.universityName ? "" : "active"}>{!!activeUser.universityName ? activeUser.universityName : "Girilmedi" }</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell textAlign="center">Bölüm</Table.HeaderCell>
            <Table.Cell className={!!activeUser.departmentName ? "" : "active"}>{!!activeUser.departmentName ? activeUser.departmentName : "Girilmedi"}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell textAlign="center">Giriş Tarihi - Mezun Tarihi</Table.HeaderCell>
            <Table.Cell className={isEntrance} > {entranceAndGraduationInfo}  </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
}
// {activeUser.entranceDate} ||{ activeUser.graduationDate ? activeUser.graduationDate : "Devam ediyor"}

export default JobSeekerDetailTable;
