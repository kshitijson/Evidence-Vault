import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className='navg'>
        <div className="logo">
          <Link to="/">Evidence Vault</Link>
          <div className="under">Evidence protection</div>
          <div className="under">using blockchain</div>
        </div>
        <ul id='links'>
          <li className='link'><Link to="/">Home</Link></li>
          <li className='link'><Link to="/Upload">Upload</Link></li>
          <li className='link'><Link to="/View">View</Link></li>
          <li className='link'><Link to="/Contact">Contact</Link></li>
        </ul>
      </nav>
  )
}
