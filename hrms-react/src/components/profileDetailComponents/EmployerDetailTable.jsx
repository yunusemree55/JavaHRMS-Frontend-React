import React from "react";
import { useSelector } from "react-redux";
import { Table } from "semantic-ui-react";

function EmployerDetailTable() {
    const {activeUser} = useSelector(state =>state.auth)
  return (
    <>
      <Table celled size="large">
        <Table.Body>
          <Table.Row>
            <Table.HeaderCell textAlign="center">Şirket Adı</Table.HeaderCell>
            <Table.Cell>{activeUser.companyName}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell textAlign="center">Email</Table.HeaderCell>
            <Table.Cell>{activeUser.email}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell textAlign="center">Web Site</Table.HeaderCell>
            <Table.Cell>{activeUser.webSite}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell textAlign="center">Email</Table.HeaderCell>
            <Table.Cell>{activeUser.email}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell textAlign="center">Telefon</Table.HeaderCell>
            <Table.Cell>{activeUser.phoneNumber}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
}

export default EmployerDetailTable;
