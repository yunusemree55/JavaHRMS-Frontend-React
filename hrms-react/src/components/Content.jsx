import React from "react";
import JobAdvertisementList from "./JobAdvertisementList";
import { Grid} from "semantic-ui-react";
import Sidebar from "./common/Sidebar";


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
