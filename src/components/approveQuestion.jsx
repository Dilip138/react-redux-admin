import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { createMuiTheme, MuiThemeProvider, Divider } from '@material-ui/core';
import { connect } from 'react-redux';
const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "white"
      }
    },
  }
})

export default class ApproveQuestion extends Component {
  constructor(props) {
    super(props)
  }
  handleDashBoard = () => {
    this.props.history.push('/dashBoardComponent')
  }
  render() {
    return (
      <div className="mainDashboard">
        <MuiThemeProvider theme={theme}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <div className="navBar">
                <div className="allName">
                  <div className="admin">
                    ADMIN DASHBOARD
                  </div>
                  <div className="user" onClick={this.handleDashBoard}>
                    user
                  </div>
                  <div className="qAndAns" onClick={this.handleQandAns}>
                    Q&A
                  </div>
                </div>
                <div className="logOut">
                  logOut
              </div>
              </div>
            </Toolbar>
          </AppBar>
        </MuiThemeProvider>
      </div>
    );
  }
}
