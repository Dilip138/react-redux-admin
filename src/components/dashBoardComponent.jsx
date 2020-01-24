import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { createMuiTheme, MuiThemeProvider, Divider } from '@material-ui/core';
const theme = createMuiTheme({
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: "lightcoral"
            }
        },
    }
})
export default class DashBoard extends Component {
    constructor(props) {
        super(props)
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
                                    <div className="user">
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
                <div className="allTable">
                    <Divider style={{ backgroundColor: 'blue' }} />
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">FirstName</th>
                                <th scope="col">LastName</th>
                                <th scope="col">Email</th>
                                <th scope="col">Service</th>
                            </tr>
                        </thead>
                        {}
                        <tbody>
                            <tr>
                                <td>akash</td>
                                <td >soni</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
