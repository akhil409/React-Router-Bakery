import React from 'react';
import { Link } from 'react-router-dom';

const NewForm = () => {
  return (
    <div className="container">
        <div className="jumbotron">
        <form className="form" id="formwid">
            <div className='row justify-content-center'><h1>Sign Up</h1></div>
     {/* <hr id="hrf"/> */}
            <label htmlFor=""><h5>First Name</h5></label><br />
            <input type="text" className='form-control' placeholder='Type Here...'/>
            <br />
            
            <label htmlFor=""><h5>Last Name</h5></label><br />
            <input type="text" className='form-control' placeholder='Type Here...'/>
            <br />

            <label htmlFor=""><h5>Middle Name</h5></label><br />
            <input type="text" className='form-control' placeholder='Type Here...'/>
            <br />
            
            <label htmlFor=""><h5>E-Mail</h5></label><br />
            <input type="email" className='form-control' placeholder='Type Here...'/>
            <br />

            <label htmlFor=""><h5>DOB</h5></label><br />
            <input type="date" className='form-control' />
            <br />

            <label htmlFor=""><h5>Age</h5></label><br />
            <input type="number" className='form-control' placeholder='Type Here...'/>
            <br />

            <label for="radio"><h5>Gender</h5></label><br />
            <input type="radio" value='radio'/> Male <br />
            <input type="radio" value='radio'/> Female <br />
            <input type="radio" value='radio'/> Others <br />
            <br />

            <label htmlFor=""><h5>Country</h5></label><br />
            <select name="" id="selec" className='form-control'>
                <option value=""></option>
                <option value="india">India</option>
                <option value="america">America</option>
                <option value="australia">Australia</option>
            </select> 
            <br />
 
            <label htmlFor=""><h5>Password</h5></label><br />
            <input type="password" name="" id="" className='form-control' placeholder='Type Here...'/>
            <br />
            <p>By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.</p>
            <Link to='/' className='mr-5' > <button className='form-control btn btn-success' onClick={()=>{ alert('You have successfully SignUp') }} ><h5>Sign Up</h5></button> </Link>          
        </form>
        </div>
        
    </div>
  )
}

export default NewForm