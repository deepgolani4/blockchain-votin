const reqBuild = require("../aadhar/xmls");
const axios = require("axios").default;
module.exports = {
  verifyAadhar: (req, res) => {
    const { uid, bday } = req.body;
    const xml = reqBuild(uid, bday);
    console.log(
      req.body,
      `http://www.uidai.gov.in/authentication/uid-auth-request/2.0/public/${uid[0]}/${uid[1]}/MMxNu7a6589B5x5RahDW-zNP7rhGbZb5HsTRwbi-VVNxkoFmkHGmYKM`
    );
    axios
      .post(
        `http://www.uidai.gov.in/authentication/uid-auth-request/2.0/public/${uid[0]}/${uid[1]}/MMxNu7a6589B5x5RahDW-zNP7rhGbZb5HsTRwbi-VVNxkoFmkHGmYKM`,
        xml,
        {
          headers: {
            "Content-Type": "text/xml",
          },
        }
      )
      .then((res_) => {
        res.send(res_.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // fetch(
    //   `http://auth.uidai.gov.in/2.0/public/${uid[0]}/${uid[1]}/MMxNu7a6589B5x5RahDW-zNP7rhGbZb5HsTRwbi-VVNxkoFmkHGmYKM`,
    //   {
    //     method: "POST",
    //     body: xml,
    //     headers: {
    //       "Content-Type": "application/xml",
    //     },
    //   }
    // )
    //   .then((res) => res.text())
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));

    // xhr.setRequestHeader("Content-Type", "application/xml");

    // xhr.send(xml);

    // xhr.onreadystatechange = () => {
    //   console.log(xhr.responseText);
    // };
  },
};
