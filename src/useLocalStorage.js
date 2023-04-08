import { useState } from "react";


export function useLocalStorage (key,initalValue){
    const [storeValue, setStoreValue]=useState(()=>{
        try{
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item): initalValue;
        }catch(error){
            return initalValue;
        }
    })

    const setValue = value =>{
        try{
            setStoreValue(value)
            window.localStorage.setItem(key,JSON.stringify(value))
        }catch(error){
            console.error(error)
        }
    }
    return[storeValue, setValue]
}