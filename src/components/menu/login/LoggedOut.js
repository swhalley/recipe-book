import React, {Component} from 'react';
import Button from 'material-ui/Button';


class LoggedOut extends Component {

    render(){
        return (
            <Button color="inherit" onClick={this.props.loginClicked}>
                Login
            </Button>
        )
    }
}

export {LoggedOut};

