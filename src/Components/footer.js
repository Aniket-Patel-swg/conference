import React from "react"
import "../assets/css/footer.css"
import { BiCopyright } from 'react-icons/bi'
import { FaTwitter } from 'react-icons/fa'
import { ImLinkedin2 } from 'react-icons/im'
import { ImFacebook } from "react-icons/im"
export default function Footer() {
    return (
        <div>
            <div className="footer-p1">
                <div className="conf">
                    <div className="foot-topic">
                        <BiCopyright />  2022 Green Hydrogen Conference
                    </div>
                    <div className="medias">
                    <ul className="connect">
                        <li>Connect with us</li>
                        <li className="lnks"><a href="/"><FaTwitter /></a></li>
                        <li className="lnks"><a href="/"><ImLinkedin2 /></a></li>
                        <li className="lnks"><a href="/"><ImFacebook /></a></li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="footer-p2">
                <div className="parts">
                    <ul>
                        <li>THE 46TH INTERNATIONAL CONFERENCE & EXHIBITION ON 
                         COMPUTER GRAPHICS & INTERACTIVE TECHNIQUES</li>
                    </ul>
                
               
                </div>
                <div className="parts_l">
                 <ul>
                    <li>Green Hydrogen A-Z</li>
                    <li>Green Hydrogen Committee</li>
                 </ul>
                </div>

                <div className="parts_l">
                    <ul>
                   <li>Blog</li>
                   <li>Sponsor</li>
                   </ul>
                </div>
                <div className="parts_l">
                <ul>
                    <li>Anti Harrassement Policy</li>
                    <li>Privacy Policy</li>
                </ul>
                </div>
               
            </div>
        </div>

    )
}