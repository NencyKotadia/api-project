import React from 'react';
import Img1 from '../image/F_rick.png';
import './api_section_2.css';
import Img2 from '../image/F_the_rick.png'
function Api_section_2(){
    return(
        <div className="api_section_2">
            <div className='navbar'>
                <div className="nav_1">
                    <img src={Img2} alt="" className='img2' />
                </div>
                <div className="nav_2">
                    <div className="nav_2_1">Docs</div>
                    <div className="nav_2_2">About</div>
                    <div className="nav_2_3">
                        <button>SUPPORT US</button>
                    </div>
                </div>
            </div>
            <img src={Img1} alt="" className='img1' />
            <div className="main">The Rick and Morty API</div>
        </div>
    );
}
export default Api_section_2;