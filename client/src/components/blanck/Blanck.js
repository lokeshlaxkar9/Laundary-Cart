import React from 'react'
import NavLogin from '../NavLogin/NavLogin'
import SideNav from '../SideNav/SideNav'
import { useNavigate } from "react-router-dom";
import searchlogo from "../images/search.svg";
import "./Blanck.css"
import Footer2 from '../footer/Footer2';
const Blanck = () => {
    const navigate=useNavigate()
  return (
    <> 
    <NavLogin />
    <div className="blanck">
        
        <SideNav />
        
        <div className="socbar">
          <div className='socline'>  Order | 0 </div>
          
          <div className='socbox'><img src={searchlogo} alt="fblogo" className="soimglogo"  style={{color: "#1D377E"}}/></div>
      </div>
    <div className="newcreatebotton">
    <p className='newpara1'>No Orders avaialble</p>
    <button className='scnbotton' onClick={()=>navigate("/create")}>Create</button> 
    </div>
      </div> 
    <Footer2 />
    
    </>
  )
}

export default Blanck
