import React, { useEffect, useState } from "react";
import JobExperienceService from "../../../services/jobExperienceService";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Modal, Table } from "semantic-ui-react";
import JobExperienceAdd from "./JobExperienceAdd";

function JobExperienceTable() {
  const [open, setOpen] = useState(false);
  const [jobExperiences, setJobExperiences] = useState([])
  const jobExperienceService = new JobExperienceService();
  const { userId } = useParams();
  const { activeUser } = useSelector((state) => state.auth);

  const handleAddJobExperience = (values) => {
    const jobExperience = {
      ...values
    }
    jobExperienceService.add(jobExperience)

    setOpen(false);
  };

  useEffect(() => {
    jobExperienceService.getJobExperiencesByJobSeekerId(parseInt(userId)).then(result => {
      setJobExperiences(result.data)
    })
  })

  return (
    <>
      <Table celled compact definition>
        <Table.Header fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>Şirket adı</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Giriş Yılı</Table.HeaderCell>
            <Table.HeaderCell>Çıkış Yılı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobExperiences.map(jobExperience => {
            return(<Table.Row>
              <Table.Cell />
              <Table.Cell>{jobExperience.companyName}</Table.Cell>
              <Table.Cell>{jobExperience.position}</Table.Cell>
              <Table.Cell>{jobExperience.entranceDate}</Table.Cell>
              <Table.Cell>{!!jobExperience.leavingDate ? jobExperience.leavingDate : "Devam ediyor" }</Table.Cell>
            </Table.Row>)
          })}
        </Table.Body>

        <Table.Footer fullWidth>
          {activeUser.id === userId && <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan="4">
              <Button
                onClick={() => setOpen(true)}
                floated="right"
                content="Ekle"
                positive
                size="small"
              />
              <Modal size="tiny" open={open} onClose={() => setOpen(false)}>
                <Modal.Header>İş Deneyimi Ekle</Modal.Header>
                <Modal.Content>
                  <JobExperienceAdd
                    handleAddJobExperience={handleAddJobExperience}
                  />
                </Modal.Content>
                <Modal.Actions>
                  <Button negative onClick={() => setOpen(false)}>
                    Geri dön
                  </Button>
                </Modal.Actions>
              </Modal>
            </Table.HeaderCell>
          </Table.Row>}
        </Table.Footer>
      </Table>
    </>
  );
}

export default JobExperienceTable;
