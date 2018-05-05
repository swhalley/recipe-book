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

    getCurrentUser(){
        return firebase.auth().currentUser ? firebase.auth().currentUser.uid : {};
    }
}