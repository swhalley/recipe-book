import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import {withStyles} from 'material-ui/styles';

let styles = {
    main : {
        display: 'flex'
    }
}

class LoggedIn extends Component {

    render(){
        let classes = {...this.props.classes};
        return (
            <div className={classes.main}>
                <Button color="secondary" onClick={this.props.logoutClicked}>
                    Log Out
                </Button>
                <Avatar src={this.props.user.photoURL} title={this.props.user.displayName} />
            </div>
        )
    }
}

export default withStyles(styles)(LoggedIn)