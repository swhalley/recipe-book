import React, {Component} from 'react';
import firebase from 'firebase';
import recipeRepository from '../../repository/recipeRepository';


const RecipeContext = React.createContext();

class RecipeProvider extends Component{
    constructor(){
        super();
        
        this.state = {
            recipes : [],
            user : null
        }

        this.createRecipe = this.createRecipe.bind(this);
        this.loginAction = this.loginAction.bind(this);
    }
    

    render(){
        return (
            <RecipeContext.Provider value={{
                state: this.state,
                user: null,
                createRecipe : this.createRecipe
            }}>
                {this.props.children}
            </RecipeContext.Provider>
        )
    }
        
    componentDidMount(){
        firebase.auth().onAuthStateChanged((user)=> {
            if (user) {
                this._loginState( user );
            }
        });

        recipeRepository.read( ( recipes ) => {
            this.setState( {recipes} );
        });
    }

    createRecipe( recipe ){
        recipeRepository.create( recipe, this.state.user );
    }

    loginAction(){
        firebase.auth().signInWithPopup( new firebase.auth.GoogleAuthProvider() )
            .then((result)=> this._loginState( result.user ))
            .catch((error)=> console.error("PC LOAD LETTER", error));
    }

    logoutAction(){
        firebase.auth().signOut()
            .then(()=>this.setState({user:null}))
            .catch(()=>this.setState({user:null}));
    }

    _loginState( user ){
        const {displayName, photoURL, uid} = {...user}
        this.setState({
            user : {displayName, photoURL, uid}
        });
    }
}

class RecipeConsumer extends Component {
    render(){
        return (
            <RecipeContext.Consumer>
                {this.props.children}
            </RecipeContext.Consumer>
        )
    }
}

export {RecipeConsumer}
export default RecipeProvider;