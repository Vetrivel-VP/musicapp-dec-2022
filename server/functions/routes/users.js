const router = require("express").Router();
const admin = require("firebase-admin");

router.get("/", (req, res) => {
  return res.send("Inside users API");
});

router.get("/jwtTokenValidation", async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(500).send({ msg: "Invalid Token" });
  }

  const token = req.headers.authorization.split(" ")[1];

  try {
    const decodeValue = await admin.auth().verifyIdToken(token);
    if (!decodeValue) {
      return res.status(500).send({ msg: "Unauthorized Access" });
    }

    return res.status(200).send({ success: true, data: decodeValue });
  } catch (error) {}
});

module.exports = router;
