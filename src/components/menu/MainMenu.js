import React, {Component} from 'react';
import CreateNew from '../recipes/CreateNew';
import AppBar from 'material-ui/AppBar';
import Toolbar  from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

const styles = {
    between: {
        justifyContent : 'space-between'
    }
}

class MainMenu extends Component {

    render(){
        let {classes} = this.props;

        return (
        <AppBar position="static">
            <Toolbar classes={{ root : classes.between }}>
                <CreateNew color="secondary" />
                <Button color="inherit">
                    Login
                </Button>
            </Toolbar>
        </AppBar>
        )
    }
}

export default withStyles(styles)(MainMenu)