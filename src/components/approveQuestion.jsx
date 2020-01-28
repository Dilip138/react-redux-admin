import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { connect } from 'react-redux';
import { userActions } from '../actions/userActions';
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
  console.log("res in stateApproved", state.approvedQuesReducer.ques) 
  return {
    status:state.approvedQuesReducer.ques
  }
}

const actionCreators = {
  getQues: userActions.getQues
}

class ApproveQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      getAllQues: [],
    }
  }
  componentDidMount() {
    this.props.getQues()
    //this.getQuestion()
  }
  handleDashBoard = () => {
    this.props.history.push('/dashBoardComponent')
  }
  // getQuestion = () => {
  //   getQues().then(res => {
  //     console.log("res in allQuesData", res);
  //     this.setState({
  //       getAllQues: res.data.data
  //     })
  //     console.log("res in allQuesData", this.state.getAllQues);
  //   })

  // }
  render() {
    console.log("res in  ques all ==> ",this.props.status)
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
                  <div className="qAndAns">
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
            {/* {this.props.ques.map(key => {
              console.log("res in key", key)
              return ( */}
            <tbody>
              <tr>
                <td>message</td>
                <td>Approved</td>
                <td>Reject</td>
              </tr>
            </tbody>
            {/* )
            })
            } */}
          </table>
        </div>
      </div>
    );
  }
}
export default connect(mapstate, actionCreators)(ApproveQuestion)