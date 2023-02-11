import React from 'react'
import { AiFillFacebook,AiOutlineTwitter,AiOutlineInstagram } from "react-icons/ai";
import { GrPinterest } from "react-icons/gr";
const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="container-lg container-fluid d-flex flex-lg-row flex-column align-items-center align-items-lg-start justify-content-center justify-content-lg-between py-5 px-2 px-sm-2">
                <div className="logo col-lg-3 ">
                    <h1>Shortly</h1>
                </div>
                <div className="menu d-flex flex-lg-row flex-column flex-sm-row justify-content-lg-around justify-content-around col-sm-12 col-lg-7 text-center text-sm-start ">
                    <div className="features  ">
                       
                <ul class="nav flex-column justify-content-center ">
                <li class="nav-item ">
                <a class="nav-link disabled" href="#">Features</a>
                </li>   
      <li class="nav-item ">
      <a class="nav-link " href="#">Link Shortening</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#">Branded Links</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#">Analytics
      </a>
      </li>
  
      </ul>
      
                    </div>
                    <div className="resources">
                       
                <ul class="nav flex-column">
                <li class="nav-item ">
                <a class="nav-link disabled" href="#">Resources</a>
                </li>
      <li class="nav-item">
      <a class="nav-link " href="#">Blog</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#">Developers</a>
      </li>
      <li class="nav-item">
      <a class="nav-link " href="#">Support
      </a>
      </li>
  
      </ul>
      
                    </div>
                    <div className="company">
                       
                <ul class="nav flex-column">
                <li class="nav-item ">
                <a class="nav-link disabled" href="#">Company</a>
                </li>
      <li class="nav-item">
      <a class="nav-link " href="#">About</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#">Our Team
</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#">Careers
      </a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#">Contact
      </a>
      </li>
      </ul>
      
                    </div>
                </div>
                <div className="icon d-flex justify-content-md-center  justify-content-lg-around align-items-start  col-md-12 col-lg-2 ">
                <div className="icon-container  mx-3 mx-lg-0">
                <a href="" className='nav-link'>
                <AiFillFacebook/>
                    {/* <img src="images/icon-facebook.svg" alt="" className='text-danger' /> */}
                </a>
                {/* <img src="https://cdn-icons-png.flaticon.com/512/1250/1250218.png?w=740&t=st=1675337593~exp=1675338193~hmac=7c22540a4ee386fa5006eebebad5c63ea3ee16988471251a753e33d94c9721df" alt="s"  className='img-fluid' width="25px"/> */}
                </div>
                <div className="icon-container mx-3 mx-lg-0">
                <a href="" className='nav-link '>
                <AiOutlineTwitter/>
                    {/* <img src="images/icon-twitter.svg" alt="" className='text-danger' /> */}
                </a>
                {/* <img src="https://cdn-icons-png.flaticon.com/512/1250/1250218.png?w=740&t=st=1675337593~exp=1675338193~hmac=7c22540a4ee386fa5006eebebad5c63ea3ee16988471251a753e33d94c9721df" alt="s"  className='img-fluid' width="25px"/> */}
                </div>
                <div className="icon-container mx-3 mx-lg-0">
                <a href="" className='nav-link '>
                 <GrPinterest/>
                    {/* <img src="images/icon-pinterest.svg" alt="" className='text-danger' /> */}
                </a>
                {/* <img src="https://cdn-icons-png.flaticon.com/512/1250/1250218.png?w=740&t=st=1675337593~exp=1675338193~hmac=7c22540a4ee386fa5006eebebad5c63ea3ee16988471251a753e33d94c9721df" alt="s"  className='img-fluid' width="25px"/> */}
                </div>
                <div className="icon-container mx-3 mx-lg-0">
                <a href="" className='nav-link '>
                     <AiOutlineInstagram/>
                    {/* <img src="images/icon-instagram.svg" alt="" className='text-danger' /> */}
                </a>
                {/* <img src="https://cdn-icons-png.flaticon.com/512/1250/1250218.png?w=740&t=st=1675337593~exp=1675338193~hmac=7c22540a4ee386fa5006eebebad5c63ea3ee16988471251a753e33d94c9721df" alt="s"  className='img-fluid' width="25px"/> */}
                </div>  
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer