import firebase from 'firebase';
import moment from 'moment-timezone';
import uuidv4 from 'uuid/v4';

export default {
    create( {title, summary, method, image } ){
        firebase.database().ref( 'recipe/' + uuidv4() ).set({
            title, summary, method,
            image : image,
            createdDate :  moment().tz('America/New_York').format(),
            createdBy: firebase.auth().currentUser ? firebase.auth().currentUser.uid : "Testing" 
        });
    }
}

