import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const shortlySlice=createSlice({
    name:"short",
    initialState:{
        responsedata:[],
        username:"",  //username value
        apidata:[], //get api data on click
        input:{  //for input field
            inputColor:"", //change borders of input field
            errorMessage:"",  //display error message 
        },
        copy:{  // for copy 
            txt:"Copy",    //default text copy
            buttoncolor:"default"  // default color of button when unclicked
        },
        menu:"default" // for menu activate in mobile/tablet
        
    },
    reducers:{
       
        checkValue(state,action){
            const {name,value}=action.payload
            return{
                ...state,
                [name]:value
            }
        },
        addData(state,action){
            // check if username value = empty 
            // if empty then change inputColor & errorMessage
            // else push data to apidata and set input color and error message to empty
            if(state.username==""){
                state.input.inputColor="error-border";
                state.input.errorMessage="Please add a link"; 
            }else{
                state.apidata.push(action.payload);
                 state.input.inputColor="";
                 state.input.errorMessage="";
                
            }
                           
            
        },
        copytoclipboard(state,action){
           navigator.clipboard.writeText(action.payload);
           state.copy.txt="Copied!";
           state.copy.buttoncolor="activeBtnColor";

        },
        opencloseMenu(state){
            if(state.menu==="default"){
                state.menu="activatemenu"
            }else{
                state.menu="default"
            }
        }
    
    },
    extraReducers: (builder)=>{
        builder
        
        .addCase(fetchApi.fulfilled,(state,action)=>{
            state.responsedata=action.payload;
            
           
        })
        
    }
})


export const {formValue,checkValue,addData,copytoclipboard,opencloseMenu}=shortlySlice.actions

export default shortlySlice.reducer


//async thunk
export const fetchApi=createAsyncThunk('fetchApi/fetch',async (value)=>{
    const res=await axios.get(`https://api.shrtco.de/v2/shorten?url=${value}`)
    const responsedata=res.data
    return responsedata
})
