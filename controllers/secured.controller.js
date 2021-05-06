const luckyGen = require("../helpers/luckyNumGen");
const pow = require("../helpers/modularExp");
const Vote = require("../blockchain/blockchain").Vote;
const client = require("../helpers/postgres");
const generatePass = require("pr-pass");
const crypto = require("crypto-js");

module.exports = {
  vote: (req, res) => {
    const { uid, bday } = req.authorizedUser;

    /**
     * Diffie Hellman, ( g = 17 ,p = 541)
     * get public from client
     * Generate private server again
     * calculate shared private
     */
    console.log(req.authorizedUser, req.headers);

    const clientPublic = parseInt(req.headers.publickey);

    const serverPrivate = luckyGen({
      uid,
      bday,
    });
    const sharedKey = pow(clientPublic, serverPrivate, 541);
    console.log(sharedKey);
    /**
     * Generate Symmetric Key with PR Pass
     * You have lucky number as sharedKey from Diffie Hellman
     */

    const secretAES = generatePass(req.headers.authorization, sharedKey);

    /**
     * Decrypt with the symmetric key generated from PR Pass.
     */

    const cipher = crypto.AES.decrypt(
      crypto.enc.Base64.parse(req.body.payload).toString(),
      secretAES,
      {
        mode: crypto.mode.CTR,
      }
    ).toString();

    req.body = JSON.parse(cipher);

    const { data, timestamp } = req.body;
    console.log(req.body);

    votes.push(new Vote(data));

    console.log(votes);
    return res.status(200).send("success");
  },
};
