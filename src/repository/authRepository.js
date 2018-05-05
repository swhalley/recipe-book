import firebase from 'firebase';

export default {

    signIn(){
        let provider = new firebase.auth.GoogleAuthProvider();

        return firebase.auth().signInWithPopup( provider );
    },

    signOut(){
        return firebase.auth().signOut();
    },

    awaitLoginState( callback ){
        firebase.auth().onAuthStateChanged( callback );
    },

    isLoggedIn(){
        return firebase.auth().currentUser;
    },

    get currentUser(){
        return this.isLoggedIn() ? firebase.auth().currentUser.uid : {} 
    }
}