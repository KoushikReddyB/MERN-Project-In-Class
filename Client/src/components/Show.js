import axios from 'axios'
import { useState } from 'react'
function Show(){
   const[r,setR]=useState(null)
   if(r==null){
    axios.get('http://localhost:8081/show',{}).then((res)=>{
        console.log(res.data)
        setR(res.data)
    })
   }
    return(
        <div>
            {JSON.stringify(r)}
        </div>
    );
}
export default Show