const sm2 = require('sm-crypto').sm2
l = sm2.doSignature(i, new Buffer.from(PRIVATEKEY, "base64").toString("hex"), {
        hash: true,
});
// https://www.npmjs.com/package/sm-crypto
