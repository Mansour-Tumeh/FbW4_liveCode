import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Enter User Details' />
          <TextField
            hintText='Enter Your First Name' //placeHolder
            floatingLabelText='First Name' // label
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            hintText='Enter Your Last Name' //placeHolder
            floatingLabelText='Last Name' // label
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            hintText='Enter Your Email' //placeHolder
            floatingLabelText='Email' // label
            onChange={handleChange('email')}
            defaultValue={values.email}
          />
          <br />
          <RaisedButton
            label='Continue'
            color='primary'
            style={style.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const style = {
  button: {
    margin: 15
  }
};

export default FormUserDetails;
