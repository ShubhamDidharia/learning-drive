const Firebase=require('firebase-admin');

const serviceAccount=require('../drive-7f462-firebase-adminsdk-blh51-4684c2df7a.json')

const firebase=Firebase.initializeApp({
    credential:Firebase.credential.cert(serviceAccount),
    storageBucket:'drive-7f462.firebasestorage.app',

})

module.exports=Firebase;