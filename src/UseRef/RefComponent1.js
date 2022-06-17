import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const RefComponent1 = () => {
    const data = useRef(null)

    const submitHandler = (e) => {
          e.preventDefault()
          console.log(data.current.value)
    }

    useEffect(()=>{
          data.current.focus()
    },[])

  return (
    <div>
        <center>
            <form onSubmit={submitHandler}>
                <label htmlFor="">Username</label>
                <input ref={data} type="text" placeholder='Enter Username'/>
                <input type="submit" />
            </form>
        </center>
    </div>
  )
}

export default RefComponent1