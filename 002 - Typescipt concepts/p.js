const crypto = require('crypto');
const ENC_KEY = crypto.randomBytes(16).toString('hex'); // set random encryption key
const IV = crypto.randomBytes(8).toString('hex'); // set random initialisation vector

console.log(ENC_KEY);
console.log(IV);
console.log(ENC_KEY.length);
console.log(IV.length);
// ENC_KEY and IV can be generated as crypto.randomBytes(32).toString('hex');

const encrypt = (val) => {
	const cipher = crypto.createCipheriv('aes-256-cbc', ENC_KEY, IV);
	let encrypted = cipher.update(val, 'utf8', 'base64');
	encrypted += cipher.final('base64');

	return encrypted;
};

const decrypt = (encrypted) => {
	const decipher = crypto.createDecipheriv('aes-256-cbc', ENC_KEY, IV);
	const decrypted = decipher.update(encrypted, 'base64', 'utf8');

	return decrypted + decipher.final('utf8');
};

const enc = encrypt('dasjbdasbajsd');

console.log(enc);
console.log(decrypt(enc));

module.exports = { encrypt, decrypt };
