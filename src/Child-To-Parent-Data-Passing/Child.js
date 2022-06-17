import React from 'react'

const Child = (props) => {
  return ( 
    <div>
        {/* Passing Data from child to Parent */}
        <h1>Child Data</h1>
        <button onClick={()=>props.changeWord('Akhil')}>Click to Get Data from Child </button>
    </div>
  )
}

export default Child