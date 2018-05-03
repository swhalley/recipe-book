import React, { Component } from 'react';
import MainMenu from './components/menu/MainMenu';
import RecipeBoard from './components/recipes/RecipeBoard';
import firebase from 'firebase';

class App extends Component {
  constructor(){
    super();

    var config = {
      apiKey: "AIzaSyDUTdna7AN7hMLIS2jPPZVLKIxj4rURduU",
      authDomain: "recipe-book-prep.firebaseapp.com",
      databaseURL: "https://recipe-book-prep.firebaseio.com"
    };
    firebase.initializeApp(config);
}

  render() {
    return (
      <div>
        <MainMenu />
        <RecipeBoard />
      </div>
    );
  }
}

export default App;
