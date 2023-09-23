import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Progress, Table } from "semantic-ui-react";
import LanguageAdd from "./LanguageAdd";


function LanguageList({ languages }) {
  const { userId } = useParams();
  const { activeUser } = useSelector((state) => state.auth);

  return (
    <>
      <Table definition>
        <Table.Body>
          {languages.map((language, index) => {
            return (
              <Table.Row key={index}>
                <Table.Cell collapsing>{language.name}</Table.Cell>
                <Table.Cell>
                  <Progress value={language.level} total="5" indicating />
                </Table.Cell>
              </Table.Row>
            );
          })}

          {activeUser.id === userId && (
            <Table.Row>
              <Table.Cell collapsing />
              <Table.Cell >
                <LanguageAdd />
                
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </>
  );
}

export default LanguageList;
