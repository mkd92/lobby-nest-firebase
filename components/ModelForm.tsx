import { setDoc } from "firebase/firestore/lite";
import React, { FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addProperty } from "../app/propertySlice/propertySlice";
import styles from "../styles/Dashboard.module.scss";
import { selectUser } from "../app/authSlice/authSlice";
import { addPropertyUtil } from "../utils/properties";
type ModelInput = {
  enabled: boolean;
  handleClose: Function;
};
export const ModelForm = ({ enabled, handleClose }: ModelInput) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const [propFormData, setPropFormData] = useState({
    propName: "",
    propAddress_1: "",
    propAddress_2: "",
    propCity: "",
    propState: "",
    propPin: ""
  });
  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (user) {
      const propAdded = await addPropertyUtil({
        uid: user.uid,
        data: propFormData
      });
      if (propAdded) {
        const data = propAdded.data();
        dispatch(addProperty(data));
      }
    }
  };
  const onChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    const name = (e.target as HTMLInputElement).name;
    const value = (e.target as HTMLInputElement).value;
    const newState = propFormData;
    newState[name as keyof typeof propFormData] = value;
    setPropFormData(newState);
  };
  return (
    <div className={`${styles.model} ${enabled ? "" : styles.disabledModel}`}>
      <div className={styles.modelBox}>
        <button
          className={styles.closeBtn}
          onClick={() => {
            handleClose();
          }}
        >
          X
        </button>
        <form onSubmit={onSubmitHandler} className={styles.propForm}>
          <div>Model Form</div>
          <input
            name="propName"
            className={styles.propFormInputs}
            placeholder="Property Name"
            onChange={onChangeHandler}
          />
          <input
            onChange={onChangeHandler}
            name="propAddress_1"
            placeholder="Property Address Line 1"
            className={styles.propFormInputs}
          />
          <input
            name="propAddress_2"
            onChange={onChangeHandler}
            placeholder="Property Address Line 2"
            className={styles.propFormInputs}
          />
          <input
            onChange={onChangeHandler}
            name="propCity"
            className={styles.propFormInputs}
            placeholder="Property City"
          />
          <select
            name="propState"
            defaultValue="Select State"
            className={styles.propFormInputs}
          >
            <option value={"none"}>Select State</option>
            <option value="tamilNadu">TamilNadu</option>
            <option value="andraPradesh">Andra Pradesh</option>
            <option value="kerala">Kerala</option>
          </select>
          <input
            onChange={onChangeHandler}
            name="propPin"
            type="number"
            className={styles.propFormInputs}
            placeholder="Pincode"
          />
          <button className={styles.propFormInputs}>Add Property</button>
        </form>
      </div>
    </div>
  );
};
