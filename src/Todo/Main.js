import React,{ useContext, useEffect, useState } from 'react';
import Data from './Data';
import FilteringTable from './FilteringTable';
import Todo from './Todo';
import { useNavigate } from 'react-router-dom';
import { DummyContext } from '../UseContext/UseContext4';

const Main = () => {

    const [todos,setTodos] = useState([]);
    const [filter, setFilter] = useState('All')

    // const {data} = useContext(DummyContext);

    // useEffect(() => {
    //   console.log(data.name)
    // }, [])
    

   return(
     <div className="container">
         <div className="row justify-content-center mt-4">
           <div className="col-lg-6 col-md-6 col-sm-12">
                 <Todo todos={todos} setTodos={setTodos}/>
           </div>
         </div>
 
         <div className="row justify-content-center mt-4">
           <div className="col-lg-6 col-md-6 col-sm-12">
                 <FilteringTable setFilter={setFilter} />              
           </div>
         </div>
         
         <div className="row justify-content-center mt-4">
           <div className="col-lg-6 col-md-6 col-sm-12">
               <Data filter={filter} todos={todos} setTodos={setTodos}/>
               
           </div>
         </div>
 
     </div>
  )
}

export default Main;