const client = require("./postgres");

module.exports = async (req, res, next) => {
  const result = await client.query("SELECT * FROM VOTED WHERE UID=$1", [
    req.authorizedUser.uid,
  ]);

  if (result.rows.length > 0) {
    res.status(200).send("Already Voted");
  } else {
    await client.query(
      "INSERT INTO VOTED(UID, VOTE) VALUES($1, $2)",
      [req.authorizedUser.uid, "1"],
      (err, res_) => {
        if (err) {
          console.log(err);
          res.status(503).send("error");
        } else {
          next();
        }
      }
    );
  }
};
