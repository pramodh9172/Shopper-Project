import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from './context/ContextProvider';

function Login() {
    const navigate = useNavigate()
    const { setUserId } = useContext(AuthContext)
    const { setsuperuser } = useContext(AuthContext)
    const [users, setusers] = useState([])
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [errormsg, seterrormsg] = useState("")


    const submithandler = (e) => {
        
        e.preventDefault()
        console.log("email: ",email,"pass: ",password)
        if(email==="" ||password===""){
            seterrormsg("Please fill all the details !!")
        }
        else{
            axios.post('http://127.0.0.1:8000/signup/',{
                email:email,
                password:password})
                .then(response=>{
                console.log("response:",response)
                if(response.data=="Not found"){
                    seterrormsg("User not found")
                }
                else{
                    console.log("responseuser:",response.data.userid)
                    setUserId(response.data.userid)
                    setsuperuser(response.data.superuser)
                    localStorage.setItem("userId", response.data.userid)
                    localStorage.setItem("superuser", response.data.superuser)
                    navigate("/store")
                }
                
                })
                .catch(err=>{
                    seterrormsg("Email or password is wrong !!!");
                    console.log(err)
                })
        }

    }





    return (
        <div>
            <div className='row'>
                <div className='col-3'></div>
                <div className='col-6 border-0'>
                    <form className='p-1' style={{ border: '0px solid ' }} method='post' onSubmit={(e) => submithandler(e)}>
                        {errormsg && <div class="alert alert-danger" role="alert"><b>{errormsg}</b></div>}
                        <div class="alert alert-primary" role="alert"><b>Login</b></div>
                        <table className='w-100'>
                            <div className=' mb-0 bg-grey text-black'>
                                <tr className='row'>
                                    <th className='col-3 p-1'><label >Email </label></th>
                                    <td className='col-7 p-1'><input type="email" className="form-control" placeholder="Email" onChange={(e) => { setemail(e.target.value) }} /></td>
                                </tr>
                            </div>
                            <div className=' mb-3 bg-grey text-black'>
                                <tr className='row'>
                                    <th className='col-3 p-1'><label >Password</label></th>
                                    <td className='col-7 p-1'><input type="password" className="form-control" placeholder="Password"  onChange={(e)=>{setpassword(e.target.value)}} /></td>
                                </tr>
                            </div>
                        </table>


                        <button type="submit" className="btn btn-dark">Login</button>
                    </form>
                </div>
                <div className='col-3'></div>
            </div>
        </div>
    )
}

export default Login