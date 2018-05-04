import React, {Component} from 'react';
import {RecipeConsumer} from '../context/RecipeStore';
import RecipeCard from './RecipeCard';
import Grid from 'material-ui/Grid';

class RecipeBoard extends Component {
    render(){
        return (
            <RecipeConsumer>
                {
                    (context) => (
                        <Grid container spacing={8}>
                            {context.state.recipes.map((recipe)=>
                                <Grid item key={recipe.id}>
                                    <RecipeCard {...recipe} />
                                </Grid>)
                            }
                        </Grid>
                    )
                }
            </RecipeConsumer>
        )
    }
}

export default RecipeBoard;