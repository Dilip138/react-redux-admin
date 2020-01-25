import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { connect } from 'react-redux';
import {userActions} from '../actions/userActions';
const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "white"
      }
    },
  }
})
function mapstate(state) {
  return { state }
}

const actionCreators = {
  getQues:userActions.getQues
}

class ApproveQuestion extends Component {
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
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr align='center'>
                <th rowSpan="2">QuestionList</th>
                <th colspan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>dilip</td>
                <td>akash</td>
                <td>bikash</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default connect(mapstate, actionCreators)(ApproveQuestion)