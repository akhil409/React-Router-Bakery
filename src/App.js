import React, { useContext, useEffect, useState } from 'react';
import './App.css';
// import  'bootstrap/dist/css/bootstrap'
import { BrowserRouter, Route, Routes, Link, useHistory } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Password from './Password';
import NewForm from './NewForm';
import ErrorPage from './ErrorPage'
import Main from './Todo/Main';
import Login from './Todo/Login';
import UserData from './Todo/UserData';
import { DummyContextProvider } from './UseContext/UseContext4';
import UseContext4 from './UseContext/UseContext4';
import DummyContext from './UseContext/UseContext4';
import UseContext3 from './UseContext/UseContext3';
import Bakery1 from './BakeryApp/Bakery1';
import PropsComponent1 from './PropsDataComponents/PropsComponent1';
import PropsComponent2 from './PropsDataComponents/PropsComponent2';
import PropsComponent3 from './PropsDataComponents/PropsComponent3';
import PropsComponent4 from './PropsDataComponents/PropsComponent4';
import PropsComponent5 from './PropsDataComponents/PropsComponent5';
import axios from 'axios';
import Practise from './Practise/Practise';
import Practise1 from './Practise/Practise1';
import Practise2 from './Practise/Practise2';
import Child from './Child-To-Parent-Data-Passing/Child';
import { render } from '@testing-library/react';
import FormValidations from './Form-Validations/FormValidations';


// //Reference: https://www.geeksforgeeks.org/reactjs-router/
// //Also used useContext toooo in about use component
// //Routing and Navigation
// function App() {

//   return (
//   <div>

// <UseContext3>
//     <BrowserRouter>
//            <Navbar/>
//           <Routes>
//                  <Route exact path="/" element={ <Home /> }> </Route>
//                  <Route exact path="/main" element={ <Main /> }> </Route>
//                  <Route exact path="/login" element={ <Login /> }> </Route>
//                  <Route exact path="/password" element={ <Password /> }> </Route>
//                  <Route exact path="/newform" element={ <NewForm /> }> </Route>
//                  <Route exact path="/aboutus" element={ <About /> }> </Route>
//                  <Route exact path="/contactus" element={ <Contact /> }> </Route>
//                  <Route exact path="/username" element={ <UserData /> }> </Route>
//                  <Route exact path="/username/:id/:fname" element={ <UserData /> }> </Route>
//                  <Route exact path="*" element={ <ErrorPage /> }> </Route>
//           </Routes>
//     </BrowserRouter>
// </UseContext3>
//   </div>
//   );
// }

// export default App;


// //Bakery View
// function App(){
//   return (
//     <div >
//       <Bakery1 />
//     </div>
//   )
// }

// export default App;


// // //Passing Data Using Props from Parent to Child components
// function App(){
//   const data={name:'akhil',name1:"kumar",name2:'alladi'}
//   const data1=[{SNo:1,name:"akhil",designation:'React Developer'},
//                {SNo:2,name:"kumar",designation:'FrontEnd Developer'},
//                {SNo:3,name:"alladi",designation:'Full Stack Developer'}]

//   const [state,setState] = useState("hi every one")


//   return (
//     <div >
//       <PropsComponent1 value={ data1 } />
//       <hr />
//       <PropsComponent2 state={state} setState={setState} />
//       <hr />
//       <PropsComponent3 />
//       <hr />
//       <PropsComponent4 value={ data }/>
//       <hr />
//       <PropsComponent5 />
//     </div>
//   )
// }

// export default App;

// // Passing Data from Child to Parent 
// // Reference: https://www.youtube.com/watch?v=UrpNtB61qyo
// function App(){
//   const [childData,setChildData] = useState('Parent')

//   return(
//         <div className='mt-5 justify-content:center'>
//              <h1>{childData}</h1>
//         <Child changeWord={(childData)=> setChildData(childData) }/>
//         </div>
//   )
// }

// export default App;

////// Form Validations  //////
function App() {
  return(  
        <div >
           
            {/* <FormValidations /> */}
            <RefComponent1 />
           
        </div>
  )
}

export default App;

// // //Components Using Props
// function App(){

// const [message,setMessage] = useState("Hi, how you doing there?")
// const [values,setValues] = useState([])
// const [isLogged,setIsLogged] = useState(false)


// //Checking the lifecycle methods in useEffect
// useEffect(() => {
//   console.log("ComponentDidMount");

//   setTimeout(()=>{
//     setMessage("Hey,im good here...!")
//     console.log("ComponentDidUpdate")
//   },5000)
//   return()=>{
//     console.log("ComponentWillUnmount")
//   }

// }, [message])


// // // //Fetching Json Data using useEffect by AXIOS
// useEffect(()=>{
//   axios.get('https://jsonplaceholder.typicode.com/users')
//    .then((res)=>{
//       console.log("Fetching data using AXIOS",res)
//       setValues(res.data)
//    }).catch((error)=>{
//      console.log("Error in Fetching Data",error)
//    })
// },[]) 

// // //Fetching Json Data using useEffect by FETCH
// useEffect(()=>{
//   fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(json => 
    
//     setValues(json)
//     )
//   .catch((error)=>{
//     console.log("Error while fetching Data from Server",error)
//   })
// },[])

//   return (
//     <div>
//          {/* <ul>
//            {values.map((value)=>{
//             return  <li key={value.id}>{value.name}</li>
//            }
//            )}
//          </ul> */}
//          {/* <Practise values={values} setValues={setValues}/> */}

//          {/* <Practise1 list={values}/> */}
         
//        {/* Using Condition Rendering-Will get the data when we we press the Button   */}
//          <center>
//                  <button onClick={()=>setIsLogged(!isLogged)} className="mt-5">Get the Data</button>
//                  {isLogged && <Practise2 />}
//          </center>       
         
//     </div>
//   )
// }

// export default App;

