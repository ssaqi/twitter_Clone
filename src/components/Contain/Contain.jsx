import React from 'react'
import'./Contain.css'
import User from '../users/User'
import User1 from '../users/User1'
import Img from '../images/saqib1.jpg'
import { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '../Container'


function Contain() {
   //set Values
   const[item, setitem]=useState("");
   //set values on array.map for listing items
   const[newitem, setNewItem]=useState([]);
   //set Items Function
   const itemEvent = (event) =>{
       setitem(event.target.value)
     
  };
  //button function
  const ListOfItem = () =>{
   
      setNewItem((prevalue)=>{
       return [...prevalue, item]


      });


     setitem(" ");
     
  }


  return (
 
    <>
<center>
<div className="card mb-3 m2 " style={{ maxWidth: 540, }}>
<span style={{fontSize: "12px",fontWeight: "bold", float: "left",
position: "relative",
right:"-130px",
marginTop: "40px",color:"blue"}}>HOME</span>
<br/>  
<div className='img'>
    <img src={Img} className='img'/>
</div>
<br/>
<h3 className='text'>@Muhammad Saqib <span className='folow'>Follow</span></h3>
<br/>
<div className='container'>
<p className='text-start p' >
  <br/>
  <TextField  input type="text" 
     value={item}
    placeholder="Enter Your Post" 
    id="standard-basic"
    variant="standard"
    name={item.name}
    onChange={itemEvent}
   />
 
 <Button className='btn' onClick={ListOfItem}> 
   <SendIcon/>
   </Button>
  <br/>
  
</p>
</div>


  <br/><br/>
  <br/><br/>  <br/><br/>  <br/><br/> 
        {
        newitem.map((val, index)=>{
        return < Container  key={index}
                text={val} 
                />
        })
        }
      <User1/> 
     <User/> 

</div>
</center>
   <div>
   
    </div> 

    <div>
    
    </div> 
 
    </>
 



  )
}

export default Contain