import firebase from 'firebase';
import moment from 'moment-timezone';
import uuidv4 from 'uuid/v4';

export default {
    create( {title, summary, method, image }, user ){
        firebase.database().ref( 'recipe/' + uuidv4() ).set({
            title, summary, method,
            image : image,
            createdDate :  moment().tz('America/New_York').format(),
            createdBy: user
        });
    },

    read( callback ){
        var database = firebase.database().ref( 'recipe/' );
        database.on( 'value', (snapshot) => {
            let values = snapshot.val();
            let result = Object.keys( values ).map( ( key ) => {
                return {...values[key], "id": key};
            } );

            callback( result );
        });
    }
}

