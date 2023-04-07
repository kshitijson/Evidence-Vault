>> Install Ganaches GUI

>> Install IPFS GUI

>> Create a new Database in MongoDB and add two new collections 
 1) People -- it contains data of people like below
    {
      ID: xxxxx
      Name: "xxxxx"
      Department: "Police or Forensic or any other"
    }
    
  2)Case -- It contains the record of the cases and evidences (data will be auto added during the execution in this collection)
  
>> Configure the .env file in the root folder -- it must contain following
  
  CONTRACT_ADDRESS = you will get this after migrating inside the blockchain folder, run this command -- "truffle migrate"
  
  FROM_ADDR = You can use any address from the list of address available in the Ganache GUI
  
  RPC_URL = The ganache rpc url
  
  IPFS_CONNECT = It is the IPFS Api 
  
  DB_URL = your mongo db connection string
  
  
If any issues feel free to contact me 
Thank you ;)
