import React from 'react'

const Stat = () => {
  const width="350px";
  return (
    <>
        <div className="stat py-5">
            <div className="container-lg container-fluid text-center  d-flex flex-column justify-content-center align-items-center">
                <h6 className='display-4 fw-semibold'>Advanced Statistics</h6>
                <p className='stat-line '>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            <div className="container-lg container-fluid py-4 card-container d-flex flex-lg-row flex-column justify-content-lg-between justify-content-between align-items-center ">
              <div className="card shadow-lg border-0 rounded-0" >
               <div className="card-img-cont d-flex justify-content-center align-items-center rounded-circle ">
                <img src="images/icon-brand-recognition.svg" alt="Brand Recognition" className='img-fluid' />
               </div>
               <div className="card-body text-center text-lg-start  py-5 ">
               <div className="card-title fw-bold mb-3 fs-5">
               Brand Recognition
               </div>
                <div className="card-text">
                Boost your brand recognition with each click. Generic links don’t 
   mean a thing. Branded links help instil confidence in your content.
                </div>
               </div>
              </div>
              <div className="card  shadow-lg second border-0 rounded-0" >
               <div className="card-img-cont d-flex justify-content-center align-items-center rounded-circle">
                <img src="images/icon-detailed-records.svg" alt="Detailed Records" className='img-fluid' />
               </div>
               <div className="card-body text-center text-lg-start py-5 ">
               <div className="card-title fw-bold mb-3 fs-5">
               Detailed Records
               </div>
                <div className="card-text">
                Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.
                </div>
               </div>
              </div>
              <div className="card third  shadow-lg border-0 rounded-0" >
               <div className="card-img-cont d-flex justify-content-center align-items-center rounded-circle">
                <img src="images/icon-fully-customizable.svg" alt="Fully Customizable" className='img-fluid' />
               </div>
               <div className="card-body text-center text-lg-start py-5 ">
               <div className="card-title fw-bold mb-3 fs-5">
               Fully Customizable
               </div>
                <div className="card-text">
                Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement.
                </div>
               </div>
              </div>

            </div>
        </div>
    </>
  )
}

export default Stat