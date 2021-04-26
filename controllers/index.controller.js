const reqBuild = require("../aadhar/xmls");
const jwtSign = require("../helpers/jwtSign");
const genLucky = require("../helpers/luckyNumGen");
module.exports = {
  verifyAadhar: (req, res) => {
    const { uid, bday } = req.body;
    console.log(uid, bday);
    const lucky = genLucky(req.body);
    const tkn = jwtSign({
      uid,
      bday,
      num: Math.random().toFixed(2),
    });

    console.log(
      req.body,
      `http://www.uidai.gov.in/authentication/uid-auth-request/2.0/public/${uid[0]}/${uid[1]}/MMxNu7a6589B5x5RahDW-zNP7rhGbZb5HsTRwbi-VVNxkoFmkHGmYKM`
    );

    res.status(200).send({
      lucky,
      token: tkn,
      ts: Date.now(),
    });
    // axios
    //   .post(
    //     `http://www.uidai.gov.in/authentication/uid-auth-request/2.0/public/${uid[0]}/${uid[1]}/MMxNu7a6589B5x5RahDW-zNP7rhGbZb5HsTRwbi-VVNxkoFmkHGmYKM`,
    //     xml,
    //     {
    //       headers: {
    //         "Content-Type": "text/xml",
    //       },
    //     }
    //   )
    //   .then((res_) => {
    //     res.send(res_.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    res.status(200).send("done");
  },
};
