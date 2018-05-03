import React, {Component} from 'react';
import recipeRepository from '../../repository/recipeRepository';
import RecipeCard from './RecipeCard';

class RecipeBoard extends Component {
    state = { recipes: []}

    render(){
        return (
            <ul>
                {this.state.recipes.map((recipe)=>
                    <li key={recipe.id}>
                        <RecipeCard  {...recipe} />
                    </li>)
                }
            </ul>
        )
    }

    componentDidMount(){

        recipeRepository.read( ( recipes ) => {
            this.setState( {recipes} );
        });
    }
}

export default RecipeBoard;