import React, { useState } from 'react'

export const Datacontext = React.createContext({});

const UseContext3 = (props) => {
 const [content,setContent] = useState({category:"Digital Marketing Expert",category1:"Frontend Developer"});

  return (
    <Datacontext.Provider value={{content,setContent}}>
         {props.children}
    </Datacontext.Provider>
  )
} 
 
export default UseContext3; 