const builder = require("xmlbuilder");
const { version, publicData } = require("./const");

const buildReqXML = (uid) => {
  var xml = builder.create("Auth");

  xml.attribute({
    uid: uid,
    rc: "Y",
    tid: publicData.tid,
    ac: publicData.ac,
    sa: publicData.sa,
    ver: version,
    txn: "", //Check
    lk: publicData.lk,
  });

  const pid = "tryfughjbnmlmnyfg"; //Encrypted PID Block

  xml
    .ele(
      "Uses",
      {
        pi: "y",
        pa: "n",
        pfa: "n",
        bio: "n",
        bt: "n",
        pin: "n",
        otp: "n",
      },
      null
    )
    .ele("Meta", {}, null)
    .ele(
      "Skey",
      {
        ci: publicData.certExpCI,
      },
      "Encrypted Session Key"
    )
    .ele(
      "Data",
      {
        type: "X",
      },
      "Encrypted PID Block"
    )
    .ele("Hmac", null, "HMAC of encrypted PID Block")
    .ele("Signature", null, "Digigtal Sign of PID")
    .end();

  console.log(xml.txt());
};

buildReqXML();
