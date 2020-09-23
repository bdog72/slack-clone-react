//
//

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyChLMOIyiyirxI-oCMK_DljfDzZn4NnVAY',
  authDomain: 'slack-clone-react-4a7ee.firebaseapp.com',
  databaseURL: 'https://slack-clone-react-4a7ee.firebaseio.com',
  projectId: 'slack-clone-react-4a7ee',
  storageBucket: 'slack-clone-react-4a7ee.appspot.com',
  messagingSenderId: '667065587263',
  appId: '1:667065587263:web:44cb1f494ccfecbb63ca8a',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
