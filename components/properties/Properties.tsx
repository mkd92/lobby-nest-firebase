import React, { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectProperties } from "../../app/propertySlice/propertySlice";
import { ModelForm } from "./ModelForm";
import PropertyListItem from "./PropertyListItem";
import styles from "../../styles/Properties.module.scss"
const Properties = () => {
    const [modelEnabled,setModelEnabled] = useState(false)
    const properties = useAppSelector(selectProperties)
    
    const modelClosingHandler = ()=>{
        setModelEnabled(false)

    }
    const modelOpenHandler = ():void=>{
        setModelEnabled(true)
    }
  return (
    <>
    <ModelForm enabled={modelEnabled} handleClose={modelClosingHandler}/>
    <ul className={styles.propertiesList}>
      <li className={styles.propertyListTitle}>Properties</li>
      {properties.map((property,index)=><PropertyListItem key={index} property={property}/>)}
      <li>
        <button onClick={modelOpenHandler}>Add Properties</button>
      </li>
    </ul>
    </>
  );
};

export default Properties;
