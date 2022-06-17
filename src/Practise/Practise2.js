import React, { useEffect, useState } from 'react'

const Practise2 = () => {

    const [datas,setData] = useState([]);
    const [conValue,setConValue]=useState(false);

    useEffect(()=>{
       fetch('https://restcountries.com/v3.1/name/ind')
       .then((res)=>{
         return  res.json()
       }).then((values)=>{
         console.log(values)
        return setData(values)
       })
      
   return ()=>{
      console.log("ComponentWillUnMount")
    }
    }
    
    ,[]);


  return (
    <div>
        {/* <ul>
           {datas.map((data)=>{
            return <li key={data.id}>
                <h4>{data.name.common}</h4>
            </li>
             })}
      </ul> */}
      
      <ul>
           {datas.map((data)=>{
            return <li key={data.id}>
                <h4>{data.name.common}</h4>
            </li>
             })}
      </ul> 
      
    </div>
  )
}

export default Practise2;