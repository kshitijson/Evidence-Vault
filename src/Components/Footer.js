import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
        <footer className="footer">
        <div className="container foter">
            <div className="row">
                <div className="col-md dev">
                    <h4>Developer</h4>
                    <ul>
                        <li style={{fontSize: '22px'}}>Kshitij Sonawane</li>
                        <li>
                            <Link to="mailto:kshitijson4@gmail.com" className="ico-dev" target='_blank' rel='noopener noreferrer'><i className="fa-solid fa-envelope"></i></Link>
                            <Link to="https://github.com/kshitijson" className="ico-dev" target='_blank'><i className="fa-brands fa-github"></i></Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md">
                    <h4>Socials</h4>
                    <ul>
                        <li>
                            <Link to="https://www.linkedin.com/in/kshitij-sonawane-469788215?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BtxiqVL%2F7SvS6QWaNxdR%2FMA%3D%3D" target="_blank" className="ico"><i className='fab fa-linkedin-in'></i></Link>
                        </li>
                        <li>
                            <Link to="mailto:kshitijson4@gmail.com" className="ico"><i className="fab fa-instagram"></i></Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md">
                    <h4>Links & Credits</h4>
                    <ul>
                        <li><Link to='https://www.pngwing.com/en/free-png-nbyly' target="_blank">PNGWING</Link></li>
                        <li><Link to='https://www.freepik.com/free-psd/3d-nft-icon-chain_25469859.htm#query=blockchain&position=0&from_view=keyword&track=sph' target="_blank">Image by Graphue on Freepik</Link></li>
                        <li><Link to='https://pngtree.com/' target="_blank">PngTree</Link></li>
                        <li><Link to="https://iconscout.com/icons/box" target="_blank">Cube Icon - <Link to="https://iconscout.com/contributors/unicons" target="_blank">by Unicons Font</Link></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
        </>
    )
}
