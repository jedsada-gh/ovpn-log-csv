var admin = require("firebase-admin");

var serviceAccount = require(__dirname + "/service.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "<BUCKET_NAME>.appspot.com"
});

var storage = admin.storage();

module.exports = {
  storage
};
