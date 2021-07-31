import firebase from 'firebase';
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var config = {
    apiKey: "AIzaSyCURwNeurD4e6h-7H4MzB5-a-A2se5q8kU",
    // databaseURL: "https://chopshop-53e49.firebaseio.com",
    authDomain: "zebra-e64f2.firebaseapp.com",
    projectId: "zebra-e64f2",
    storageBucket: "zebra-e64f2.appspot.com",
    messagingSenderId: "658067807025",
    appId: "1:658067807025:web:996ca68e0e31c3dafa6e10",
    measurementId: "G-GRQT201JS0"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.analytics();


  // The default cache size threshold is 40 MB. Configure "cacheSizeBytes"
  // for a different threshold (minimum 1 MB) or set to "CACHE_SIZE_UNLIMITED"
  // to disable clean-up.
  firebase.firestore().settings({
    cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
  });

  firebase.firestore().enablePersistence()
  .catch((err) => {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });
// Subsequent queries will use persistence, if it was enabled successfully

  export default firebase;