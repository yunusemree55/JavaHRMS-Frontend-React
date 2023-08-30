import React, { useEffect, useState } from "react";
import { Menu } from "semantic-ui-react";
import JobPositionService from "../../services/jobPositionService";

function Sidebar() {
  const [jobPositions, setJobPositions] = useState([]);

  const getData = () => {
    const jobPositionService = new JobPositionService();
    jobPositionService.getAll().then((result) => setJobPositions(result.data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Menu inverted pointing vertical>
        {jobPositions.map((jobPosition, index) => {
          return <Menu.Item key={index} name={jobPosition.name} />;
        })}
      </Menu>
    </div>
  );
}

export default Sidebar;
