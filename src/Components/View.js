import React, { useEffect, useState } from 'react'
import { Spin, Table } from "antd"
import { LinkOutlined } from '@ant-design/icons'

export default function View() {

  useEffect(() => {
    document.title = "EPB | View";
  }, []);

  const [cases, setCases] = useState("No Matches Found");

  const clickkHandler = () => {
    setCases(<Spin className='custom-spinner' />);
    
    const columns = [
      {
        title: "Uploader's ID",
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Evidence Name',
        dataIndex: 'fileName',
        key: 'fileName',
      },
      {
        title: 'Evidence Format',
        dataIndex: 'fileType',
        key: 'fileType',
      },
      {
        title: 'View',
        dataIndex: 'fileLink',
        key: 'fileLink',
        render: (text, record) => {
          return(
            <a 
            href={record.fileLink}
            id='fileLink' 
            target="_blank" 
            rel="noopener noreferrer"
            title=''
            onClick={(event) => {
              event.preventDefault();
              window.open(record.fileLink, '_blank', 'location=no,height=600,width=800,scrollbars=yes,status=yes');
            }}
            onMouseEnter={(event) => {event.preventDefault()}}
            ><LinkOutlined className='link-symbol'/></a>
          )
        }
      }
    ];


    const _caseNo_ = document.getElementById("view-search").value;
    const formData = new FormData();
    formData.append('caseNo', _caseNo_);
    
    fetch('http://localhost:5000/api/view', {
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
          if (!data){
            setCases("No Matches Found");
          }else{
            const dataSource = data;
            setCases(<Table className='custom-table' dataSource={dataSource} columns={columns} pagination={false}/>);
          }
        })
        .catch(error => {
          console.error('There was an error:', error);
        });
  }



  return (
    <>
    <div className="container view">
        <div className="input-group rounded">
            <input type="search" id='view-search' className="form-control rounded" placeholder="Search Case number" aria-label="Search" aria-describedby="search-addon" />
            <span className="input-group-text border-0" id="search-addon">
                <i className="fas fa-search" onClick={clickkHandler}></i>
            </span>
        </div>
    </div>

    <div className="container cases">
        <h5 className="cases-h5">{cases}</h5>
    </div>
    </>
  )
}
