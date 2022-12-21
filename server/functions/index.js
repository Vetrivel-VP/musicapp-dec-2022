const functions = require("firebase-functions");
const admin = require("firebase-admin");

const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors({ origin: true }));

app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

var serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
// get, put, post, delete
app.get("/", (req, res) => {
  return res.send("Hello Word");
});

const userRoute = require("./routes/users");
app.use("/api/users", userRoute);

exports.app = functions.https.onRequest(app);
