import React from 'react';
import { useParams,useLocation } from 'react-router-dom';


const UserData = () => {
    //Use Params
    const {id,fname}= useParams();
    //Use Location
    const location = useLocation();
    console.log(location);

    //Reference: https://www.geeksforgeeks.org/reactjs-useparams-hook/
    //Reference: https://www.youtube.com/watch?v=CvB9zGrNDj0

  return (
    <div className='card'>
        <div className="card-body">
            <div className="card-title">
               {/* Use Params */}
                 <center className="h1"> Hi {id} your first name is {fname} is'nt it?</center>
                 <center>{location.pathname}</center>
                 <center>
                     {/* //Use Location */}
                     {location.pathname!=='/username/AkhilAlladi/Alladi' ? 
                     <button className='btn btn-warning'>Get the Membership</button> : null}
                 </center>
            </div>
        </div>
    </div>
  )
}

export default UserData;