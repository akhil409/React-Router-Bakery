import React from 'react'
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div className='container'>
       <div className='jumbotron'> 
      <form className='form'>
          <div className='mb-2'>
            <h2 className='text-center'>Contact Us</h2>
          </div>
         <hr />
          <div className='row justify-content-center'>
               {/* <h5 className='mt-3'>UserName</h5> */}
              <input type="text"  className='form-control' placeholder='Email address or Phone Number'/>
              {/* <h5 className='mt-3'>Password</h5> */}
              <h2>Query Box</h2>
          </div>
          <textarea name="" id="" cols="50" rows="2" placeholder='Comment here....'></textarea>
          <div className='row justify-content-center'>
            <Link to='/login'>
            <button className='btn btn-primary mt-3 form-control' onClick={()=>{alert('Query Submitted, we will rectify your query.Thank you!')}}>Submit</button>
            </Link>
             
             </div>     
     </form>
    </div>
    </div>
  )
}

export default ContactUs;