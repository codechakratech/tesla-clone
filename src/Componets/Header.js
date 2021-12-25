import React, { useState } from 'react'

function Header() {

const[navBar,setNavBar] = useState(false);

    return (
        <nav>
            <img src="/images/logo.svg" alt="tesla" />

            <div className="mainMenu">
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">Solar Roof</a>
                <a href="#">Solar Panels </a>
            </div>

            <div className="rightMenu">
                <div className="rightTwo">
                    <a href="#">Shop</a>
                    <a href="#">Account</a>
                </div>
                <a onClick={()=>{setNavBar(true)}} >Menu</a>
            </div>


   {navBar &&   <div data-aos="fade-left" className="mobile">
                <div onClick={()=>{setNavBar(false)}} className="closeButton">X</div>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">Solar Roof</a>
                <a href="#">Solar Panels </a>
                <a href="#">Used Inventory</a>
                <a href="#">Existing Inventory </a>
                <a href="#">Tradin</a>
                <a href="#">Test Drive</a>
            </div>
             }        
        </nav>
    )
}

export default Header
