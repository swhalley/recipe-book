import React, {Component} from 'react';
import recipeRepository from '../../repository/recipeRepository';
import RecipeCard from './RecipeCard';
import Grid from 'material-ui/Grid';

class RecipeBoard extends Component {
    state = { recipes: []}

    render(){
        return (
            <Grid container spacing={8}>
                {this.state.recipes.map((recipe)=>
                    <Grid item li key={recipe.id}>
                        <RecipeCard  {...recipe} />
                    </Grid>)
                }
            </Grid>
        )
    }

    componentDidMount(){

        recipeRepository.read( ( recipes ) => {
            this.setState( {recipes} );
        });
    }
}

export default RecipeBoard;