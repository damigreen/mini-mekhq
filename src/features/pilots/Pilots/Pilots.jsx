import React, { Component } from 'react';
import {
    Grid,
    Segment,
    Header,
} from 'semantic-ui-react';

import PilotList from '../PilotList'
import PilotDetails from '../PilotDetails';
import PilotCommands from '../PilotDetails/PilotCommands';

export default class Pilots extends Component {

  render() {

    return (
        <Segment>
            <Grid>
                <Grid.Column width={10}>
                    <Header as="h3">Pilot List</Header>
                    <PilotList />
                </Grid.Column>
                <Grid.Column width={6}>
                  <Header as="h3">Pilot Details</Header>
                  <Segment>
                    <PilotDetails />
                  </Segment>
                  <Segment>
                    <PilotCommands />
                  </Segment>
                </Grid.Column>
            </Grid>
        </Segment>
    );
  }
}
