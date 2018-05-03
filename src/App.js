import React, { Component } from 'react';
import MainMenu from './components/menu/MainMenu';
import firebase from 'firebase';

class App extends Component {
  render() {
    return (
      <div>
        <MainMenu />
      </div>
    );
  }

  componentDidMount(){
    var config = {
      apiKey: "AIzaSyDUTdna7AN7hMLIS2jPPZVLKIxj4rURduU",
      authDomain: "recipe-book-prep.firebaseapp.com",
      databaseURL: "https://recipe-book-prep.firebaseio.com"
    };
    firebase.initializeApp(config);
  }
}

export default App;
