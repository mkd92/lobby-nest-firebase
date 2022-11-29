import React, { useState } from "react";
import { ModelForm } from "./ModelForm";

const Properties = () => {
    const [modelEnabled,setModelEnabled] = useState(false)
    
    const modelClosingHandler = ()=>{
        setModelEnabled(false)

    }
    const modelOpenHandler = ():void=>{
        setModelEnabled(true)
    }
  return (
    <>
    <ModelForm enabled={modelEnabled} handleClose={modelClosingHandler}/>
    <ul>
      <li>Prop 1</li>
      <li>
        <button onClick={modelOpenHandler}>Add Properties</button>
      </li>
    </ul>
    </>
  );
};

export default Properties;
