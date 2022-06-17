import React from 'react'

const Practise = ({values,setValues}) => {
  return (
    <div>
        <ul>
           {values.map((value)=>{
            return  <li key={value.id}>

                <label >Name: {value.name}</label> <br />
                <label >UserName: {value.username}</label> <br />
                <label >E-Mail: {value.email}</label> <br />
                <label >Phone: {value.phone}</label> <br />
                <label >Website: {value.website}</label> <br />
                {/* Conditional Rendering */}
                <label>Address:{value.address.length!==0 ? <h3>{value.address.city}</h3> : <h3>{'Address is not Found'}</h3> } <br /> <hr />
                
                 </label>
                
                   </li>
           }
           )}
           
         </ul>
    </div>
  )
}

export default Practise