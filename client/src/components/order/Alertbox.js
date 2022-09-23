import React from 'react'
import "./alertbox.css"
import dangerlogo from "../images/alert3.png";
import { BsXLg } from "react-icons/bs";
const Alertbox = () => {
  return (
    <>
        <div className="alertcontainer">
            <div className="dialogbox">
                 <div className="alertheader1">
                 <div  style={{marginTop:15, marginLeft:10,color:"#FFFFFF"}}>Alert</div>
                 <div style={{marginTop:15, marginRight:"10px"}}> <BsXLg color="#FFFFFF"  /></div>
                 </div>
                 <div className="alertbody">
                  <div className="dangericon">
                  <img src={dangerlogo} alt="dangerlogo" className="redlogo"style={{width:60,marginTop:40, height:"70px"}} />
                  </div>
                  <div className="messagebox" >
                      <p className="messageline">Are you sure want to cancel the oreder No: OR1213</p>
                     
                  </div>
                  
                 </div>
                 <button className='vbutton'>Proceed</button>
            </div>
        </div>
    </>
  )
}

export default Alertbox