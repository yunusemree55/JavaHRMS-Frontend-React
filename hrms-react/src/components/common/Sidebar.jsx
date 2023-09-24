import React, { useEffect, useState } from "react";
import { Menu } from "semantic-ui-react";
import JobPositionService from "../../services/jobPositionService";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import { useDispatch } from "react-redux";
import { setJobAdvertisementList } from "../../store/actions/jobAdvertisementActions";

function Sidebar() {
  const [jobPositions, setJobPositions] = useState([]);
  const jobAdvertisementService = new JobAdvertisementService()
  const dispatch = useDispatch()

  const getData = () => {
    const jobPositionService = new JobPositionService();
    jobPositionService.getAll().then((result) => setJobPositions(result.data));
  };

  useEffect(() => {
    getData();
  }, []);

  const filterByJobPosition = (id) => {
    jobAdvertisementService.getJobAdvertisementsByJobPositionId(id).then(result => {
      dispatch(setJobAdvertisementList(result.data))
    })
  }

  const getAllJobAdvertisements = () => {

    jobAdvertisementService.getAllActiveJobAdvertisements().then(result => {
      dispatch(setJobAdvertisementList(result.data))
    })

  }

  return (
    <div>
      <Menu inverted pointing vertical>
        {jobPositions.map((jobPosition, index) => {
          return <Menu.Item onClick={() => filterByJobPosition(jobPosition.id)} key={index} name={jobPosition.name} />;
        })}
        <Menu.Item onClick={getAllJobAdvertisements} content="Hepsini göster"></Menu.Item>
      </Menu>
    </div>
  );
}

export default Sidebar;
