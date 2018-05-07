import React, { Component } from 'react';
import MainMenu from './components/menu/MainMenu';
import RecipeBoard from './components/recipes/RecipeBoard';
import RecipeProvider from './components/context/RecipeStore';
import Oops from './components/common/Oops';
import firebase from 'firebase';

class App extends Component {
  constructor(){
    super();

    var config = {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL
    };
    firebase.initializeApp(config);
}

  render() {
    return (
      <div>
         <Oops>
          <RecipeProvider>
            <MainMenu />
            <RecipeBoard />
          </RecipeProvider>
        </Oops>
      </div>
    );
  }
}

export default App;
