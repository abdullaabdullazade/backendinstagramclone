const admin = require("firebase-admin");
const serviceAccount = require("./path/to/your/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "firebase-adminsdk-heo8x@instagram-78503.iam.gserviceaccount.com"

});

const db = admin.database();
module.exports = db;
