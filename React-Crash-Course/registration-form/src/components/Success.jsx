import React, { Component, Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Fragment>
          <AppBar title='Success' />
          <h1>Thank you for your submission</h1>
          <p>You will get an email with futher instructions</p>
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
