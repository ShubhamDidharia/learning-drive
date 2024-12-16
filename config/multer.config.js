const multer = require('multer');
const firebaseStorage=require('multer-firebase-storage');
const firebase = require('./firebase.config');
const serviceAccount=require('../drive-7f462-firebase-adminsdk-blh51-4684c2df7a.json');

const storage=firebaseStorage({
    credentials:firebase.credential.cert(serviceAccount),
    bucketName:'drive-7f462.firebasestorage.app',
    unique:true
})

const upload =multer({
    storage:storage,

})

module.exports=upload;