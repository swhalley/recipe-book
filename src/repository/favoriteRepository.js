import firebase from 'firebase';

export default {
    favorite( id, user ){
        var database = firebase.database().ref( 'favorite/' + id );

        database.transaction((currentClicks)=> {
            return (currentClicks || 0) + 1;
        });
    }
}