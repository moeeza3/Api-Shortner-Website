import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchApi,checkValue,addData } from '../slice/shortlySlice';
import '../App.css'

const Form = () => {
  const {username,input,responsedata}=useSelector(state=>state.short)
  const dispatch=useDispatch();

 const handleChange=(e)=>{
        const {name,value}=e.target
    
     dispatch(fetchApi(value))
     dispatch(checkValue({name,value}))
    
 }
  const handleClick=()=>{

     dispatch(addData(responsedata))
  
  }
 
  return (
    <>
        <form  className='form' onSubmit={(e)=>e.preventDefault()} >
        <div className="mb-3 d-flex flex-lg-row flex-column rounded-2 container-lg form-container py-3 px-3 py-md-5 px-md-5 container-fluid" >
        <div className={`col-lg-10 col-12 ${input.inputColor} `}>
        <input type="text" className={` username form-control py-3 px-4`} id="username" name='username'  value={username} onChange={handleChange}  placeholder="Shorten a link here..."   />
        <span className='error-message'>{input.errorMessage}</span>
       </div>
       <div className="col-lg-2 col-12 ms-lg-2 mt-4 mt-lg-0">
       <input type='button'  onClick={handleClick}  className='btn form-btn px-4 py-3' value="Shorten It!"/>
       </div>
       
  
      </div>
     
      </form>
      
    </>
  )
}

export default Form