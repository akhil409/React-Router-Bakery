import React, { useState } from "react";

export const DummyContext = React.createContext({});

const DummyContextProvider = (props) => {
    const [data, setData] = useState( {category:'React Developer',category1:'Angular Developer'} );
    const [loading, setLoading] = useState(false);

    return (
        <DummyContext.Provider value={{
            data, setData, loading, setLoading
        }} >
            {props.children}
           
        </DummyContext.Provider>
    )
} 
 
export default DummyContextProvider;