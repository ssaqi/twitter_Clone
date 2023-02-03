import React from 'react'
import'../Contain/Contain.css'
import data from '../data'
import Img from '../images/mbappe.jpg'
import Img2 from '../images/bappe.jpg'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatIcon from '@mui/icons-material/Chat';
import IosShareIcon from '@mui/icons-material/IosShare';
function User() {
  
  return (
 
    <>
<center>
<div className="card1 mb-3 m2" style={{ maxWidth: 540 }}>
<span style={{fontSize: "12px",fontWeight: "bold", float: "left",
position: "relative",
right:"-120px",
marginTop: "20px",color:"blue"}}>Official</span>
<div className='img'>
    <img src={Img} className='img'/>
   
</div>
<br/>
<h3 className='text'>@Mbappe <span className='folow'>Follow</span></h3>
<br/>
<div className='container'>
<p className='text-start p' style={{margin: "10px"}} >uste pour Info 🔔 
Je n'ai pas de compte Snapchat donc merci de ne pas faire attention à tous ces fakes
<img src={Img2} style={{width: 500}}/>
</p>
</div>
<ThumbUpOffAltIcon style={{float:"left",margin:"5px",position:"relative",right:"-20px"}}/>
<ChatIcon style={{float:"left",margin:"5px",position:"relative",right:"-190px"}}/>
<IosShareIcon style={{float:"left",margin:"5px",position:"relative",right:"-410px"}}/>
</div>
</center>
    </>


  )
}

export default User