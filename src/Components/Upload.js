import React, { useEffect, useState } from 'react'
import { message, Spin } from "antd";
import '../App.css';

export default function Upload() {

  useEffect(() => {
    document.title = "EPB | Upload";
  }, []);

    const [btnText, setBtnText] = useState('Upload');
    const [style, setStyle] = useState(null);

    function containsOnlyNumbers(str) {
      return /^[0-9]+$/.test(str);
    }
    
    const handleSubmit = (event) => {
      event.preventDefault();
      setStyle({
        backgroundColor: "white",
        border: "1px solid #ff5e5e",
      })
      setBtnText(<Spin className='custom-spinner' />)

      const _id_ = document.getElementById("upload-id").value;
      const _caseNo_ = document.getElementById("upload-case-no").value;
      if (!containsOnlyNumbers(_caseNo_)) {
        message.error("Invalid Case number");
        setStyle(null);
        setBtnText('Upload');
        event.target.reset();
        return false;
      }

      const _caseName_ = document.getElementById("upload-case-name").value;
      const _evidence_ = document.getElementById("upload-file").files[0];
    
      const formData = new FormData();
      formData.append('id', _id_);
      formData.append('caseNo', _caseNo_);
      formData.append('caseName', _caseName_);
      formData.append('evidence', _evidence_);
    
      fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        message[`${data.messageType}`](data.messageContent);
        setStyle(null);
        setBtnText('Upload');
        event.target.reset();
      })
      .catch(error => {
        console.error('There was an error:', error);
        message.error("Server Error");
        setStyle(null);
        setBtnText('Upload');
        event.target.reset();
      });
    }

  return (
    <>
    <div className="container upload">
        <h1 className="upload-h1">Upload</h1>
        <form onSubmit={handleSubmit}>
            <div className="input-upload">
                <label htmlFor="upload-id">ID</label>
                <input type="text" id="upload-id" placeholder="Enter ID" required />
            </div>
            <div className="input-upload">
                <label htmlFor="upload-case-no">Case number</label>
                <input type="text" id="upload-case-no" placeholder="Enter Case number"  required />
            </div>
            <div className="input-upload">
                <label htmlFor="upload-case-name">Case name</label>
                <input type="text" id="upload-case-name" placeholder="Enter Case name"  required />
            </div>
            <div className="input-upload">
                <label htmlFor="upload-file">Document</label>
                <input type="file" id="upload-file" required />
            </div>
            <div className="upload-button">
                <button type="submit" style={style}>{btnText}</button>
            </div>
        </form>
   </div>
    </>
  )
}

