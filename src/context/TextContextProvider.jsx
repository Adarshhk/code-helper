import React, { useState } from 'react'
import TextContext from './TextContext'


const TextContextProvider = ({children}) => {
    const [text, setText] = useState("");
    const [api , setApi] = useState("");
    const [output , setOutput] = useState("");
    const [loader , setLoader] = useState(false);
  return (
    <TextContext.Provider value={{text , setText , api , setApi , output , setOutput , loader , setLoader}}>
        {children}
    </TextContext.Provider>
  )
}

export default TextContextProvider