import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { copytoclipboard } from '../slice/shortlySlice';

const ShortData = () => {
    const {apidata,copy}=useSelector(state=>state.short)
    const dispatch=useDispatch();
    
 const handlecopy=(val)=>{
    
    dispatch(copytoclipboard(val))
    
    
}
  return (
    <>
        <div className="short-data ">
        

        
       {
        apidata.map((cur,i)=>{
            return (

             <div className="short-data-container d-flex flex-md-row flex-column align-items-center justify-content-between rounded-2 my-3  px-3 py-2" key={i}>
              <div className="original-link  ">
                  {cur.result.original_link}
              </div>
              <div className="short-link   d-flex justify-content-between align-items-center  ">
                  <span className="short-link-txt mx-md-3">
                  {cur.result.full_short_link}
                  </span>
                
                <button className={`btn px-4 ${copy.buttoncolor}`} onClick={()=>handlecopy(cur.result.full_short_link)}>
                  {copy.txt}
                </button>
              </div>
             </div>    
            
            )
        })
       }
</div>
        
    </>
  )
}

export default ShortData