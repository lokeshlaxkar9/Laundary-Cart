import React, { useState } from 'react'
import axios from "axios";
import "./register.css"
const Register = () => {
    const [input, setinput] = useState({
        name: "", email: "", phone: ""
        , state: "", district: "", address: "", pincode: ""
    })
    const handlesubmit = async (e) => {
        e.preventDefault()
        console.log(input)
        // axios.post("http://localhost:8080", input, {
        // })
        //     .then((resp) => console.warn(resp))
    }
    return (
        <>
            <div className="container">
                <div className="header">
                    <div className="line1">
                        <p>Laundry Service</p>
                    </div>
                    <div className="line2">
                        <p>Doorstep Wash & Dryclean Service</p>
                    </div>
                    <div className="line3">
                        <p>Already Have Account</p>
                    </div>
                    <button>Sign In</button>
                </div>


                {/* Registration form part */}
                <div className="rform">
                    <p className='p1'>REGISTER</p>
                    <div className="forminput">
                        <form action="#" encType='multipart/form-data' onSubmit={handlesubmit}>
                            <div className="box">
                                <div className="left">
                                    <label>Name</label>
                                    <br />
                                    <input type="text" className='lv1' name='name' onChange={(e) => setinput({ ...input, name: e.target.value })} />
                                    <br />
                                    <label>Phone</label>
                                    <br />
                                    <input type="text" className='lv1' name='phone' onChange={(e) => setinput({ ...input, phone: e.target.value })} />
                                    <br />
                                    <label>District</label>
                                    <br />
                                    <select name="district" className='lv1' id="" onChange={(e) => setinput({ ...input, district: e.target.value })} >
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                    <br />
                                    <label>Pincode</label>
                                    <br />
                                    <input type="text" name='pincode' className='lv1' onChange={(e) => setinput({ ...input, pincode: e.target.value })} />
                                </div>


                                <div className="right">
                                    <label>Email</label>
                                    <br />
                                    <input type="email" name='email' className='lv1' onChange={(e) => setinput({ ...input, email: e.target.value })} />
                                    <br />
                                    <label>State</label>
                                    <br />
                                    <select name="state" id="" className='lv1' onChange={(e) => setinput({ ...input, state: e.target.value })}  >
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                    <br />
                                    <label>Address</label>
                                    <br />
                                    <input type="text" name='address' className='lv1' onChange={(e) => setinput({ ...input, address: e.target.value })} />
                                </div>


                            </div>
                            <div className="npara">
                                <input type="checkbox" name="check" />
                                <label> I agree to Terms & Condition receiving marketing and promotional materials</label>
                            </div>

                            <button type='submit'>Register</button>
                        </form>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Register