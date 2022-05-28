import React, { useEffect,useState } from 'react'

const Timer = () => {
    const[timer,setTimer]=useState(0);
    useEffect(()=>{
        let id=setInterval(()=>{
            if(timer>100){
                clearInterval(id);
            }else{
                setTimer(timer+1);
            }
        },1000);
  
    return ()=>{
        clearInterval(id)
    }
},[timer]);
  return (
    <div>Count Up:{timer}</div>
  )
}

export default Timer