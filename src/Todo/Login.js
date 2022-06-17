import React from 'react'
import { Link,useNavigate } from 'react-router-dom';

const Login = () => {
   
  return (
    <div className='container' id='bikelogin'>
       <div className='jumbotron'> 
      <form className='form'>
          <div className='mb-2'>
            <h2 className='text-center'>Login Form</h2>
          </div>
         <hr />
          <div className='row justify-content-center'>
               {/* <h5 className='mt-3'>UserName</h5> */}
              <input type="text"  className='form-control' placeholder='Email address or Phone Number'/>
              {/* <h5 className='mt-3'>Password</h5> */}
              <input type="password"  className='form-control mt-2' placeholder='Password'/>
          </div>

            {/* <div>
                 <Link to='/main' className='mt-3'> <button className='btn btn-primary mt-3 form-control' onClick={()=>{ alert('You have successfully Logged-In') }}>Log In </button> </Link>
            </div> */}

            <div>
            <Link to='/username' className='mt-3'><button className='btn btn-primary mt-3 form-control' >Log In </button></Link> 
            </div>
          
          <div className='row justify-content-center'>
             <Link to='/password' className='mt-3'>Forgotten password?</Link>
          </div>

              <hr/>
            <div className='text-center '>
              
                <Link to='/newform'><button className='btn btn-success' >Create New Account</button></Link>
              
            </div>
          
      
     </form>
    </div>
    </div>
  )
}

export default Login;