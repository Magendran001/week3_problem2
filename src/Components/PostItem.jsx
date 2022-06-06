import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Requestdata, Successdata} from "../Redux/app/action";
import { Postfetchapi } from "../Redux/app/action";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Postitem()
{

    let [page,setpage] = useState(0);
    console.log(page)
        
    let Postdata = useSelector((state)=>{ return state.applicationreducer.data});
    let Isloading = useSelector((state)=>{ return state.applicationreducer.isLoading});


    let Isauth = useSelector((state)=>{ return state.authreducer.status});
    console.log(Isauth,"selectore")
    let dispatch = useDispatch();
    let nav = useNavigate()


    useEffect(()=>{

          if(!Isauth)
          {
           nav("/")
          }

    },[])
    useEffect(()=>{
        dispatch(Postfetchapi(page))

    },[page])

    return (<div>
        <div>{Isloading?"....Loading":Postdata.map((e)=>{ return <div>{e.id}:{e.title}</div>})}</div>
           <button disabled={page==0} onClick={()=>{setpage(page-1)}}>prev</button>
           <button onClick={()=>{setpage(page+1)}}>Next</button>
    </div>)
}
export default Postitem