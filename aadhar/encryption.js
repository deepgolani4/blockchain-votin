const NodeRSA = require("node-rsa");
const crypto = require("crypto");

const { keys } = require("./const");


module.exports = {
	encryptXML = (inXML, sKey) => {
		var IV = crypto.randomBytes(16);
		
		var cipher = crypto.createCipheriv('aes-256-ctr', sKey, IV);
		cipher.update(inXML, 'utf-8', 'base64');

		var encryptedXML = cipher.final('base64');

		var hmac = crypto.createHmac('sha256', sKey);
		hmac.update(inXML);
		var hmacXML = hmac.digest('base64')

		var rsa = new NodeRSA(keys.uidaiAuthStagePub);
		var encryptedSKey = rsa.encrypt(sKey, 'base64');

		return {
			encryptedXML,
			hmacXML,
			encryptedSKey
		}
	}
}