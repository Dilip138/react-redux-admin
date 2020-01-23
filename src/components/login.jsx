import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      submitted: false
    };
  }

  handleChangeEmail = (event) => {
    const username = event.target.value;
    this.setState({
      username: username
    })
  }
  handleChangePassword = (event) => {
    const password = event.target.value;
    this.setState({
      password: password
    })
  }
  handleSubmit = () => {

  }
  render() {
    return (
      <div className="mainLogin">
        <div className="d-flex justify-content-center" style={{ fontSize: '30px' }}>Login page</div>
        <div className="emailAndPassword">
          <div className="fixed d-flex justify-content-center" >
            <TextField
              required
              label="Username"
              type="username"
              autoComplete="current-username"
              value={this.state.username}
              onClick={this.handleChangeEmail}
              variant="outlined" />
          </div>
          <div className="fixed d-flex justify-content-center">
            <TextField
              required
              label="Password"
              type="password"
              autoComplete="current-password"
              value={this.state.password}
              onChange={this.handleChangePassword}
              variant="outlined" />
          </div>
          <div className="fixed d-flex justify-content-center">
            <button className="btn btn-primary" onClick={this.handleSubmit}>Login</button>
          </div>
        </div>
      </div>
    );
  }
}
