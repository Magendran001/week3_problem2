import Login from "./login";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
 import "./home.css";

function Home()
{

    let Status = useSelector((state)=>{ return state.authreducer.status});
    let userdata = useSelector((state)=>{ return state.authreducer});
    console.log(userdata,"selector")
    return (<div className="Home">
        <div><Link to="/posts/">Post</Link></div>
        <div>{Status?<div>Email:{userdata.email} ,  token:{userdata.token} </div>:<Link to="/">Login</Link>}</div>
    </div>)
}
export default Home