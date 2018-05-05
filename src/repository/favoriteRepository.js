import firebase from 'firebase';

export default {
    read( callback ){
        let database = firebase.database().ref( 'favorite/' );
    
        database.on( 'value', (snapshot) => {
            callback( snapshot.val() );
        });
    },

    favorite( id, userId ){
        let database = firebase.database().ref( `favorite/${id}/${userId}` );

        database.transaction((currentState)=> {
            return currentState ? !currentState : true;
        });
    }
}