import React, {Component} from 'react';
import {recipeRepository, favoriteRepository, authRepository} from '../../repository/';


const RecipeContext = React.createContext();

class RecipeProvider extends Component{
    constructor(){
        super();
        
        this.state = {
            recipes : [],
            favorites: {},
            user : null
        }

        this.createRecipe = this.createRecipe.bind(this);
        this.loginAction = this.loginAction.bind(this);
        this.logoutAction = this.logoutAction.bind(this);
        this.favoriteAction = this.favoriteAction.bind(this);
    }
    
    render(){
        return (
            <RecipeContext.Provider value={{
                state: this.state,
                user: null,
                createRecipe : this.createRecipe,
                loginAction : this.loginAction, 
                logoutAction: this.logoutAction,
                favoriteAction : this.favoriteAction
            }}>
                {this.props.children}
            </RecipeContext.Provider>
        )
    }
        
    componentDidMount(){
        authRepository.awaitLoginState((user)=> {
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
        authRepository.signIn()
            .then((result)=> this._loginState( result.user ))
            .catch((error)=> console.error("PC LOAD LETTER", error));
    }

    logoutAction(){
        authRepository.signOut()
            .then(()=>this.setState({user:null}))
            .catch(()=>this.setState({user:null}));
    }

    _loginState( user ){
        const {displayName, photoURL, uid} = user;
        this.setState({
            user : {displayName, photoURL, uid}
        });
    }

    favoriteAction(recipeId){
        if( !authRepository.isLoggedIn())
            return;
        
        favoriteRepository.favorite( recipeId, authRepository.currentUser);
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