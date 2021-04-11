const builder = require("xmlbuilder");
const crypto = require("crypto");

const { encryptXML } = require("./crypto");
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

  return pid.end().toString();
};

const buildReqXML = (uid) => {
  var sKey = crypto.randomBytes(32).toString();

  const pid = buildPIDBlock(); //Encrypted PID Block

  const encryptedPid = encryptXML(pid, sKey);

  const xmlObj = {
    Auth: {
      "@uid": uid,
      "@rc": "Y",
      "@tid": publicData.tid,
      "@ac": publicData.ac,
      "@sa": publicData.sa,
      "@ver": version,
      "@txn": "", //Check
      "@lk": publicData.lk,
      Uses: {
        "@pi": "y",
        "@pa": "n",
        "@pfa": "n",
        "@bio": "n",
        "@bt": "n",
        "@pin": "n",
        "@otp": "n",
      },
      Meta: {},
      Skey: {
        "@ci": publicData.certExpCI,
        "#text": encryptedPid.encryptedSKey,
      },
      Data: {
        "@type": "X",
        "#text": encryptedPid.encryptedXML,
      },
      Hmac: {
        "#text": encryptedPid.hmacXML,
      },
    },
  };

  var xml = builder.create(xmlObj).end({ pretty: true });
  console.log(xml);
  return xml;
};

buildReqXML();
