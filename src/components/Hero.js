import React from 'react'

const Hero = () => {
  return (
    <>
        <div className="hero  d-flex justify-content-center align-items-center ">
            <div className="container-lg container-fluid  ">
            <div className="d-flex flex-wrap-reverse flex-lg-nowrap">
               <div className="hero-text mx-2 mx-md-0 text-center text-lg-start my-5 my-lg-0">
               <h1 className='display-1 fw-bolder'>More than just shorter links</h1>
               <p className='me-3'>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
               <button type='button' className='btn rounded-5 px-5 '>Get Started</button>
            </div>
            <div className="hero-img">
            <img src="images/illustration-working.svg" alt="hero-illustration" className='img-fluid' />
             </div>
               </div>
              
            </div>
                
        </div>
    </>
  )
}

export default Hero