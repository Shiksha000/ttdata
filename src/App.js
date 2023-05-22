import React,{useState} from 'react'
import {Knob} from 'primereact/knob';
import {InputText} from 'primereact/inputtext';
import {useEffect} from 'react';
import {useMemo} from 'react';


const App = () => {
  const [alphabet, setalphabet] = useState("");
  const [count, setcount] = useState(alphabet) 
  const [timer, settimer] = useState(0)   
    useEffect(()=>{
      setcount(alphabet.split(" "));
    },[count])

    useMemo(()=>{
      let settime = 60;
      setInterval(() =>{
        settime-=1;
        if(settime===0){
          clearInterval()
        }
        settimer(settime)
      },1000)
    },[])

  return (
    <div align="center">
      <div className="">
        <label htmlFor="" style={{color:"darkblue"}} className='font-bold text-2x1'>test your typing skills</label>
        <Knob valueColor={"SlateGrey"} rangeColor={"green"} className='mt-4' value={timer} size={100} min={0} max={59} readOnly />
        <h3 className='text-primary m-0 p-0'>Word count: <span style={{color:"darkblue"}}>{count.length}</span></h3>
        <InputText className='mt-4' value={alphabet} onChange={(e)=>setalphabet(e.target.value)}/>     
         </div>
    </div>
  )
}

export default App;
