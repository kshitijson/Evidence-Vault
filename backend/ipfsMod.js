const fs = require("fs");
const ipfsClient = require("ipfs-http-client");
require('dotenv').config({path: '../.env'});


const ipfsUpload = async (file) => {
    try {
        const ipfs = ipfsClient.create(process.env.IPFS_CONNECT);
        const data = fs.readFileSync(file);
        const result = await ipfs.add(data);
        console.log('ipfs done');
        return result;
  } catch (error) {
    console.log(error);
  }
}

async function verifyContent(cid) {
  try {
    const ipfs = ipfsClient.create(process.env.IPFS_CONNECT);
    const result = await ipfs.object.get(cid);
    if (result) {
      console.log(`Content with CID ${cid} exists on the IPFS network`);
    }else{
      console.error(`Content with CID ${cid} not found on the IPFS network`);
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = {ipfsUpload, verifyContent};