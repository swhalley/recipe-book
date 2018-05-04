import React, {Component} from 'react';
import {LoggedIn, LoggedOut} from './index';

class Login extends Component {

    render(){
        var dom = !!this.props.user ? 
            (<LoggedIn logoutClicked={this.logoutAction} user={this.props.user} />) : 
            (<LoggedOut loginClicked={this.loginAction} />);

        return dom;
    }

}

export default Login;