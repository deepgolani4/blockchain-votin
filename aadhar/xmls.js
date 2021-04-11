const builder = require("xmlbuilder");
const crypto = require("crypto");

const { encryptXML } = require("./encryption");
const { version, publicData } = require("./const");

const buildPIDBlock = () => {
  var pid = builder.create("Pid");

  const date = new Date(Date.now());
  pid.attribute({
    ver: "2.0",
    ts: date.toISOString().slice(0, 19),
    wadh: "",
  });

  pid.element("Demo");

  pid.end();
  return pid;
};

const buildReqXML = (uid) => {
  var xml = builder.create("Auth");
  var sKey = crypto.randomBytes(32);

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

  const pid = buildPIDBlock(); //Encrypted PID Block

  const encryptedPid = encryptXML(pid, sKey);

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
      encryptedPid.encryptedSKey
    )
    .ele(
      "Data",
      {
        type: "X",
      },
      encryptedPid.encryptedXML
    )
    .ele("Hmac", null, encryptedPid.hmacXML)
    .end();

  console.log(xml.txt());
};

buildReqXML();
