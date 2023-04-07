import React, { useEffect } from 'react'
import '../App.css';

export default function Contact() {
	useEffect(() => {
		document.title = "EPB | Contact"
	}, []);
  return (
    <>
    <div className="container contact">
		<h1 className="contactUs">Contact <span style={{color: '#ff5e5e'}}>Us</span></h1>
		<form className="formContact">
			<div className="form-group contact">
				<label className="labelContact" htmlFor="name"><span style={{color: '#ff5e5e'}}>N</span>ame:</label>
				<input type="text" id="name" name="name" placeholder="Enter your name" />
			</div>
			<div className="form-group contact">
				<label className="labelContact" htmlFor="email"><span style={{color: '#ff5e5e'}}>E</span>mail:</label>
				<input type="email" id="email" name="email" placeholder="Enter your email" />
			</div>
			<div className="form-group contact">
				<label className="labelContact" htmlFor="message"><span style={{color: '#ff5e5e'}}>M</span>essage:</label>
				<textarea id="message" name="message" placeholder="Enter your message"></textarea>
			</div>
			<button type="submit" className="btn contact">Send &nbsp; &nbsp;<i className="fa-sharp fa-solid fa-paper-plane"></i></button>
		</form>
	</div>
    </>
  )
}
