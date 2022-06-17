import React from 'react'

const PropsComponent2 = (props) => {
  const handle=()=>{
    props.setState("heyyyyyyyyyyyyyyy")
  }
   
  return (
    <div> 
      <h1>From PropsComponent2////</h1>
       My name is {props.state}
      <button onClick={handle}>Click to Change</button>
      </div>
  )
}

export default PropsComponent2