import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch,useSelector } from 'react-redux';
import { opencloseMenu } from '../slice/shortlySlice';
const Header = () => {
  const dispatch=useDispatch()
  const {menu}=useSelector(state=>state.short)
  const handlemenu=()=>{
       dispatch(opencloseMenu())
       console.log(menu)
  }
 
  return (
    <>
        <header className='py-3'>
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
  <div class={`container-lg container-fluid d-flex justify-content-between ${menu} px-2 px-sm-2`}>
    <a class="navbar-brand  col-lg-2" href="#">
      <img src="images/logo.svg" alt="shortly" />
    </a>
    <button className='btn mobilemenubtn ' onClick={handlemenu}>
       <RxHamburgerMenu className='fs-2'/>
    </button>
    {/* <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
    <div class="navbar-container d-flex flex-lg-row flex-column justify-content-lg-between  col-lg-10 py-3 py-lg-0">
      <ul class="nav header-nav  d-flex flex-column flex-lg-row">
        <li class="nav-item py-2 py-lg-0">
          <a class="nav-link " aria-current="page" href="#">Features</a>
        </li>
        <li class="nav-item py-2 py-lg-0">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item py-2 py-lg-0">
          <a class="nav-link" href="#">Resources</a>
        </li>
      </ul>
      <hr  className='hr mx-5'/>
      <ul class="nav d-flex flex-column flex-lg-row ">
        <li class="nav-item mx-lg-5 py-2 py-lg-0">
          <a class="nav-link btn login" aria-current="page" href="#">Login</a>
        </li>
        <li class="nav-item py-2 mx-5  mx-lg-0 py-lg-0">
          <a class="nav-link signup px-4 rounded-5 btn " href="#">Sign Up</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
        </header>
    </>
  )
}

export default Header