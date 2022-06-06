import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Successlogin,RequestLogin } from "../Redux/auth/action";
import { useSelector,useDispatch } from "react-redux";
import { PostLogin } from "../Redux/auth/action";
import { useState } from "react";
import axios from "axios";


function Login()
{

    let selector = useSelector((state)=>{ return state});
  
    let dispatch = useDispatch()
    let nav = useNavigate()
     
    let [loginobj,setloginobj] = useState({});

    const handlechange =({name,value})=>{

setloginobj({...loginobj,[name]:value})
    }


    const postdata =()=>{

        dispatch(PostLogin(loginobj,nav))
        
    }


    useEffect(()=>{

    },[])

    return (<div>
        <input type="text" name="email" placeholder="Email" id="" onChange={(e)=>{handlechange(e.target)}} />
        <input type="text" name="password" placeholder="Password" id=""  onChange={(e)=>handlechange(e.target)}/>
        <button onClick={()=>{postdata()}}>Submit</button>
    </div>)
}
export default Login