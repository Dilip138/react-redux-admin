import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../actions/userActions';
import TextField from '@material-ui/core/TextField';
function mapState(state) {
  console.log("res in state",state);
  return { state };
}
const actionCreator = {
  login:userActions.login
};
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChangeUsername = (event) => {
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
    let data = {
      username: this.state.username,
      password: this.state.password
    }
    console.log("res in login data", data)
    this.props.login(data)
    localStorage.setItem("username",this.state.username)

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
              onChange={this.handleChangeUsername}
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


export default connect(mapState, actionCreator)(Admin);
