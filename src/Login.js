import React, { Component } from 'react';
import { Button, TextField} from '@material-ui/core';
import './Reg.js';
class Loginpage extends Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitLoginForm = this.submitLoginForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }

  submitLoginForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
        let fields = {};
        fields["emailid"] = "";
        fields["password"] = "";
        this.setState({fields:fields});
        this.props.history.push('/reg')


    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    
    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";

    }

    if (typeof fields["emailid"] !== "undefined") {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }

    

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter correct password";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;


  }


render() {
  return (
   <div id="login">
      <h1><center>LOGIN</center></h1>
      <form onSubmit= {this.submitLoginForm}>
      <TextField variant="outlined" align="left" label="Email Address" type="text" size="small" fullWidth="true"color="primary" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange} />
      <div className="errorMsg">{this.state.errors.emailid}</div>
      <TextField variant="outlined" align="left" label="Password" type="password" size="small"fullWidth="true" color="primary" name="password" value={this.state.fields.password} onChange={this.handleChange} />
      <div className="errorMsg">{this.state.errors.password}</div>
      <center><Button variant="contained" color="primary" onClick={this.submitLoginForm}>LOGIN</Button></center>
     
      </form>
  </div>
    );
}
}
export default Loginpage;