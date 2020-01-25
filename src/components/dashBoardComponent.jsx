import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { userActions } from '../actions/userActions';
import { createMuiTheme, MuiThemeProvider, Divider } from '@material-ui/core';
import { connect } from 'react-redux';
const theme = createMuiTheme({
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: "lightcoral"
            }
        },
    }
})
function mapstate(state) {
    console.log("res in state", state.adminReducer.user)
    return {
        user: state.adminReducer.user
    };
}
const actionCreator = {
    allData: userActions.allData,
    logout: userActions.logout
}

class DashBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            getList: [],
        }
    }
    componentDidMount() {
        this.props.allData();
    }
    handleQandAns = () => {
        this.props.history.push('/ApproveQandAns')
    }
    handleLogOut = () => {
        this.props.logout()
        this.props.history.push('/')
    }
    render() {
        //console.log("res in props", this.props.user);
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
                                    <div className="user">
                                        user
                            </div>
                                    <div className="qAndAns" onClick={this.handleQandAns}>
                                        Q&A
                            </div>
                                </div>
                                <div className="logOut" onClick={this.handleLogOut} >
                                    logOut
                        </div>
                            </div>
                        </Toolbar>
                    </AppBar>
                </MuiThemeProvider>
                <div className="allTable">
                    <Divider style={{ backgroundColor: 'blue' }} />
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">FirstName</th>
                                <th scope="col">LastName</th>
                                <th scope="col">Email</th>
                                <th scope="col">Service</th>
                            </tr>
                        </thead>
                        {this.props.user.map(key => {
                            //console.log("res in key", key);
                            return (
                                <tbody>
                                    <tr>
                                        <td>{key.firstName}</td>
                                        <td >{key.lastName}</td>
                                        <td>{key.email}</td>
                                        <td>{key.service}</td>
                                    </tr>
                                </tbody>
                            )
                        })
                        }

                    </table>
                </div>
            </div>
        );
    }
}
export default connect(mapstate, actionCreator)(DashBoard)
