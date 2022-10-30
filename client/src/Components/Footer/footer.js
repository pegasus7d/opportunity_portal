import React from "react";
import './footer.css';
import {AiFillDropboxCircle} from 'react-icons/ai';
import {AiFillFacebook} from 'react-icons/ai';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
const foot = ()=>{
    return ( 
        <React.Fragment>
            <div className="foot">
                <div className="foot_main">
            <div className='foot_small'>
                <AiFillDropboxCircle className='foot_logo'/>
                    <p>Oppurtunity Portal</p>
                </div>
               <div className="foot_cont">
                <div className="foot_conte">
                       <h3>Contact</h3>
                       <div className="foot_add">
                       <p>500 Terry Francois Street San Francisco, CA 94158</p>
                       <p> Sales:info@mysite.com</p>
                       </div> 
                       <div className="foot_add">
                       <p>500 Terry Francois Street San Francisco, CA 94158</p>
                       <p> Sales:info@mysite.com</p>
                       </div> 
                </div>
                 <div className="foot_conte">
                   <h3>Quick Links</h3>
                   <div className="foot_trm">
                   <p>Terms & Conditions</p>
                   <p>Privacy Policy</p>
                   </div>
                 </div>
                 <div className="foot_conte">
                     <h3>Follow</h3>
                     <div className="foot_icons">
                        <AiFillFacebook className="foot_icon"/>
                        <BsInstagram className="foot_icon"/>
                        <BsTwitter className="foot_icon"/>
                     </div>
                 </div>
               </div>
               </div>
            </div>
            <div className="foot_last">
                <p>© 2022 by Student's Alumni Cell,IIT Kharaghpur</p>
            </div>
        </React.Fragment>
    );
}

export default foot;