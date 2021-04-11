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

  return pid.end();
};

const buildReqXML = (uid) => {
  // var xml = builder.create("Auth");
  var sKey = crypto.randomBytes(32);

  // xml.attribute({
  //   uid: uid,
  //   rc: "Y",
  //   tid: publicData.tid,
  //   ac: publicData.ac,
  //   sa: publicData.sa,
  //   ver: version,
  //   txn: "", //Check
  //   lk: publicData.lk,
  // });

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
  // xml.ele("Uses").attribute({
  //   pi: "y",
  //   pa: "n",
  //   pfa: "n",
  //   bio: "n",
  //   bt: "n",
  //   pin: "n",
  //   otp: "n",
  // });
  // xml.ele("Meta");
  // xml.ele("Skey").attribute({
  //   ci: publicData.certExpCI,
  // }), encryptedPid.encryptedSKey);
  // xml.ele(
  //   "Data",
  //   {
  //     type: "X",
  //   },
  //   encryptedPid.encryptedXML
  // );
  // xml.ele("Hmac", null, encryptedPid.hmacXML).end({ pretty: true });

  // console.log(a.end({ pretty: true }));
};

buildReqXML();
