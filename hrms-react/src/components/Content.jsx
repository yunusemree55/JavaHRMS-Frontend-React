import React from "react";
import { Grid} from "semantic-ui-react";
import Sidebar from "./common/Sidebar";
import JobAdvertisementList from "./jobAdvertisementComponents/JobAdvertisementList";


function Content() {
  

  return (
    <div>
        <Grid>
        <Grid.Row>
          <Grid.Column></Grid.Column>
          <Grid.Column width={3}>
            <Sidebar />
          </Grid.Column>
          <Grid.Column width={8}>
            <JobAdvertisementList/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Content;
