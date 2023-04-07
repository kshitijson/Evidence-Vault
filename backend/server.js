//Local module imports
const { ipfsUpload } = require('./ipfsMod.js')
/* const { verifyContent } = require('./ipfsMod.js') */
const { db_insert_case } = require('./database.js')
const { check_id } = require('./database.js')
const { find_evidences } = require('./database.js')
const { blockchainInsert } = require('./blockchainConnect.js')
const { getEvidencesLink } = require('./blockchainConnect.js')
// 

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');  // cors allows us to receive api from different port no
const path = require('path');
const fs = require("fs");


// Multer for handling files from post request
const multer = require('multer');
// Setting the default name of the processed file as the original name
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
  
const upload = multer({ storage: storage });

// using the imported modules
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// giving green signal to localhost:3000 which is the react app
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));


//for handling post request at /api/data
app.post('/api/upload', upload.single('evidence'), async (req, res) => {
    console.log(req.body); // access form fields
    let case_no = req.body.caseNo;
    let id = req.body.id;
    let case_name = req.body.caseName;
    console.log(id);

    let file_name = req.file.originalname;
    let file_type = req.file.mimetype;
    let file_path = path.join(__dirname, `./uploads/${file_name}`);
    
    let is_id_valid = "";
    await check_id(id).then((res) => {
      is_id_valid = res;
    });
    
    if (is_id_valid){

      
      let result = false;
      await db_insert_case(case_no, case_name, file_name, file_type)  // insert into database
      .then((res) => {
        result = res; 
      });
      
      // Check if DB insertion is successfull
      if (result === true) {
        //Upload to ipfs
        let cid = '';
        await ipfsUpload(file_path).then((res) => {
          cid = res;  
        })
        await blockchainInsert(id, case_no, case_name, file_name, file_type, cid.path);  // insert into blockchain
        res.send({
          messageType: "success",
          messageContent: "File inserted"
        });
      } else {
        res.send({
          messageType: "error",
          messageContent: "Case number and Case name does not match"
        });
      }
      
      
      // Delete the file received from the POST request
      setTimeout(() => {
        fs.unlink(file_path, (err) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log('File deleted successfully');
        });
      }, 1000);

    }
    else{
      res.send({
        messageType: "error",
        messageContent: "Invalid ID"
      });

      // Delete the file received from the POST request
      setTimeout(() => {
        fs.unlink(file_path, (err) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log('File deleted successfully');
        });
      }, 1000);
    }
});
//


app.post('/api/view', upload.none(), async (req, res) => {
  let caseNo = req.body.caseNo;

  let fileNames;
  let fileTypes;
  let fileLinks;
  await find_evidences(caseNo).then((res) => {
    fileNames = res[0];
    fileTypes = res[1];
  });

  if (!fileNames) {
    res.send(false)
  } else {
    await getEvidencesLink(caseNo, fileNames).then((res) => {
      fileLinks = res;
    });

    if(!fileLinks){
      res.send(false);
    } else {
      const fileList = fileNames.map((fileName, index) => ({
        key: index + 1,
        id: fileLinks[fileName].id,
        fileName: fileName,
        fileType: fileTypes[index],
        fileLink: fileLinks[fileName].file_hash_ipfs,
      }));
      res.send(fileList);
    }
  }
});



app.listen(5000, () => {
  console.log('Server started on port 5000');
});
