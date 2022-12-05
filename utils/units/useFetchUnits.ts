import { Unsubscribe } from "@mui/icons-material"
import { collection, onSnapshot, query, QueryDocumentSnapshot, QuerySnapshot, where } from "firebase/firestore"
import { useEffect } from "react"
import { selectUser } from "../../app/authSlice/authSlice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { selectSelectedPropId } from "../../app/propertySlice/propertySlice"
import { selectUnits, unitsReducer, updateUnits } from "../../app/unitSlice/unitSlice"
import { db } from "../firebase/firebase"

export const useFetchUnits = ()=>{
    const uid = useAppSelector(selectUser)?.uid
    const propId = useAppSelector(selectSelectedPropId)
    const dispatch = useAppDispatch();

    useEffect(()=>{
        if(uid){
            const q = query(collection(db,"units"),where("propId","==",propId)
            )
            const unSubscribe = onSnapshot(q,snapshot=>{
                const snap:QueryDocumentSnapshot[] = []
                snapshot.docs.forEach(doc=>snap.push(doc));
                dispatch(updateUnits(snap))
            });
            return ()=>{
                unSubscribe()
            }
        }
    },[propId])
    return ;
}