import React, {Component} from 'react';
import CreateNew from '../recipes/CreateNew';
import Login from './login';
import AppBar from 'material-ui/AppBar';
import Toolbar  from 'material-ui/Toolbar';
import { withStyles } from 'material-ui/styles';
import { RecipeConsumer } from '../context/RecipeStore';

const styles = {
    between: {
        justifyContent : 'space-between'
    }
}

class MainMenu extends Component {

    render(){
        let {classes} = this.props;

        return (
            <RecipeConsumer>
            {
                (context) => (
                    <AppBar position="static">
                        <Toolbar classes={{ root : classes.between }}>
                            <CreateNew color="secondary" createRecipe={context.createRecipe} />
                            <Login user={context.state.user} />
                        </Toolbar>
                    </AppBar>
                )
            }
            </RecipeConsumer>
        )
    }
}

export default withStyles(styles)(MainMenu)