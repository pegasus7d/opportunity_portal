import React from 'react';
import './navbar.css';
import {AiFillDropboxCircle} from 'react-icons/ai';
const Nav = ()=>{
     return (
        <React.Fragment>
            <div className='nav_divider'></div>
            <nav>
                <div className='nav_content'>
                <AiFillDropboxCircle className='nav_logo'/>
                    <p>Oppurtunity Portal</p> 
                </div>
                <ul>
                    <li>Home</li>
                    <li>Jobs</li>
                    <li>Register</li>
                    <li>Profile</li>
                    <li>My applications</li>
                    <div class="nav_log">
                    <li><img class="nav_icon" alt="" src="https://www.pngfind.com/pngs/m/63-631239_login-png-login-icon-png-transparent-png.png" width="30px" height="30px"/></li>
                    <li><p>Log In</p></li>
                     </div>
                    <li ><button type="button">
                          <span class="nav_btn_txt">Register</span>
                        </button></li>
                </ul>
            </nav>
        </React.Fragment>
     );
}

export default Nav;