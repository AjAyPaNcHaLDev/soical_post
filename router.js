const express = require("express");
const router = express();
const db = require("./modules/db");
const md5 = require("js-md5");

router.post("/signup", (req, res) => {
  console.log("client=>>request:signup");
  const { Name, Email, Password, Date_Of_Birth } = req.body;
  const SecurePsw = md5(Password);
  const stmt = `INSERT INTO users (Name,Email,Password,Date_Of_Birth)VALUES('${Name}','${Email}','${SecurePsw}','${Date_Of_Birth}')`;
  try{
    db.query(stmt, (sqlError, sqlSuccess) => {
          if (sqlError) {  
                res.send({status:sqlError.code,error:true});
                 
                return;
              }
              console.log(sqlSuccess)
              res.send({status:sqlSuccess,error:false});
               
              return; 
        });
  }catch(e){
console.log(e)
  }
});

router.post("/signin", (req, res) => {
  console.log("client=>>request:signin");
  const { Email, Password } = req.body;
  const SecurePsw = md5(Password);
  const stmt = `SELECT id  FROM users WHERE Email='${Email}' AND Password='${SecurePsw}' `;
  try{
    db.query(stmt, (sqlError, sqlSuccess) => {
          if (sqlError) {  
                res.send({status:sqlError.code,error:true}); 
                return;
              }
              console.log(sqlSuccess)
              res.send({status:sqlSuccess,error:false});
              
              return; 
        });
  }catch(e){
console.log(e)
  }
});

module.exports = router;

// CREATE TABLE IF NOT EXISTS users (id int NOT NULL AUTO_INCREMENT,
//   Name varchar(255) NOT NULL,
//   Email varchar(255) NOT NULL,
//   Password varchar(255) NOT NULL,
//   Date_Of_Birth DATE,
//   PRIMARY KEY (id))
