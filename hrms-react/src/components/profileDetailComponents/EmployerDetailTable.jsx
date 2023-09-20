import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import EmployerService from "../../services/employerService";
import { useParams } from "react-router-dom";

function EmployerDetailTable() {
    const [employer, setEmployer] = useState({})
    const {userId} = useParams()
    const employerService = new EmployerService()

    useEffect(() => {
      employerService.getById(parseInt(userId)).then(result => {
        setEmployer(result.data)
      })
    })


  return (
    <>
      <Table celled size="large">
        <Table.Body>
          <Table.Row>
            <Table.HeaderCell textAlign="center">Şirket Adı</Table.HeaderCell>
            <Table.Cell>{employer.companyName}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell textAlign="center">Email</Table.HeaderCell>
            <Table.Cell>{employer.email}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell textAlign="center">Web Site</Table.HeaderCell>
            <Table.Cell>{employer.webSite}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell textAlign="center">Email</Table.HeaderCell>
            <Table.Cell>{employer.email}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell textAlign="center">Telefon</Table.HeaderCell>
            <Table.Cell>{employer.phoneNumber}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
}

export default EmployerDetailTable;
