import React, { useState } from 'react';

const Bakery1 = () => {
    const [data,setData] = useState(0);
    const [dataIce,setDataIce] = useState(0);
    const [dataDonut,setDataDonut] = useState(0);
    const [tdata,setTdata] = useState(false);
    const [viewSubmit, setViewSubmit] = useState(false);

  

   const IncrementCake=()=>{
    setData(data+1);
    // console.log(data)
   }

   const DecrementCake=()=>{
    setData(data-1)
    // console.log(data)
   } 

   const IncrementIcecream=()=>{
    setDataIce(dataIce+1);
    // console.log(dataIce)
   }

   const DecrementIcecream=()=>{
    setDataIce(dataIce-1);
    // console.log(dataIce)
   }

   const IncrementDonut=()=>{
    setDataDonut(dataDonut+1);
    // console.log(dataDonut)
   }

   const DecrementDonut=()=>{
    setDataDonut(dataDonut-1);
    // console.log(dataDonut)
   }  

   const toggleButton = () => {
    setViewSubmit(true)
   }


  return (
      <>
      <h1 className='row justify-content-center'><img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1200px-Swiggy_logo.svg.png" width='350px'/> </h1>
      <div className='row'>
     <div className='items col-6' >
       <div className='ml-5 mt-5'>
       <img src="https://i.pinimg.com/originals/28/9c/d4/289cd4a1689e5ee3eab62b15f9ffdd84.jpg" width='200px' height='200px'/>
        <div className='row ml-5 mt-2'>
        <button className='btn btn-danger mr-3' onClick={DecrementCake}>-</button> <h2>{data}</h2> <button className='btn btn-success ml-3' onClick={IncrementCake}>+</button>
        </div>
       </div> 

       <div className='ml-5 mt-5'>
       <img src="https://www.milkmaid.in/sites/default/files/2020-07/Chocolate-Ice-Cream_0.jpg" width='200px' height='200px'/>
        <div className='row ml-5 mt-2'>
        <button className='btn btn-danger mr-3' onClick={DecrementIcecream}>-</button><h2>{dataIce}</h2><button className='btn btn-success ml-3' onClick={IncrementIcecream}>+</button>
        </div>
       </div>

       <div className='itemDonut ml-5 mt-5'>
       <img src="https://www.shugarysweets.com/wp-content/uploads/2020/01/baked-chocolate-donuts-recipe.jpg" width='200px' height='200px'/>
        <div className='row ml-5 mt-2'>
        <button className='btn btn-danger mr-3' onClick={DecrementDonut}>-</button><h2>{dataDonut}</h2><button className='btn btn-success ml-3' onClick={IncrementDonut}>+</button>
        </div>
       </div> 

                  
    </div>

    {viewSubmit == true ? <><div className='price col-6'>
    <div className='mt-5 mr-3'>
        <div className="card">
            <div className="card-body">
                <div className="ctitle card-title"><h1 className='row justify-content-center'>Cake</h1></div>
                <hr />
                <div>
                    <h2>Single Cake Price=300 X {data}</h2>
                    {/* <h2>Count:1*{data*300}</h2> */}
                    <h2>Cake Price to Pay = ₹{data*300} </h2> 
                </div>
            </div>
        </div>
    </div>

    <div className='mt-5 mr-3'>
        <div className="card">
            <div className="card-body">
                <div className="ctitle card-title"><h1 className='row justify-content-center'>Ice-Cream</h1></div>
                <hr />
                <div>
                    <h2>Single Ice-Cream Price=149 X {dataIce}</h2>
                    {/* <h2>Count:1*{data*300}</h2> */}
                    <h2>Ice-Cream Price to Pay = ₹{dataIce*149} </h2> 
                </div>
            </div>
        </div>
    </div>

    <div className='mt-5 mr-3'>
        <div className="card">
            <div className="card-body">
                <div className="ctitle card-title"><h1 className='row justify-content-center'>Donut</h1></div>
                <hr />
                <div>
                    <h2>Single Donut Price=99 X {dataDonut}</h2>
                    {/* <h2>Count:1*{data*300}</h2> */}
                    <h2>Donut Price to Pay = ₹{dataDonut*99} </h2> 
                </div>
            </div>
        </div>
    </div> 
        </div></> :<></>}

    </div>

    <div>
    <div className='countcolor'>
        <div className='tbtn'>{ viewSubmit == false ? 
            <><button className='btn btn-success' onClick={toggleButton} >View Cart</button> </> 
            : <><button className='btn btn-success'>Submit</button>
           <h2 className='ml-5'>Total Items={data+dataIce+dataDonut}</h2>
           <h2 className='ml-5'>Total Price=₹{data*300+dataIce*149+dataDonut*99}</h2> </> }
           <br/>
           <br/>
           <br/>
           <br/>
           </div>
        </div>
        
    </div>
    </>
  )
}

export default Bakery1