import React from 'react'
import Form from './Form'
import ShortData from './ShortData';
import Stat from './Stat';
const Apishortner = () => {

  return (
    <>
         <div className="shortner">
         <div className="shortner-container">
    
        <div className="api-shortener d-flex justify-content-center align-items-center ">
            <div className="container-lg container-fluid mx-2">
                <Form/>
                <ShortData  />

            </div>
        </div>
        <Stat/>
           
        </div>
         </div>

    </>
  )
}

export default Apishortner