import React from 'react'
import Img from '../components/images/saqib1.jpg'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatIcon from '@mui/icons-material/Chat';
import IosShareIcon from '@mui/icons-material/IosShare';
function Container(props) {
  return (
<>
<div container>
<div className='col-1 mb-3 m2 card3 m2'>
<div className='img'>
    <img src={Img} className='img'/>
</div>
<br/>
<h3 className='text'>@Muhammad Saqib <span className='folow'>Follow</span></h3>
<br/>
<div className='container'>
<p className='text-start p'>
{props.text}
    
</p>

</div>

<ThumbUpOffAltIcon style={{float:"left",margin:"5px",position:"relative",right:"-20px"}}/>
<ChatIcon style={{float:"left",margin:"5px",position:"relative",right:"-190px"}}/>
<IosShareIcon style={{float:"left",margin:"5px",position:"relative",right:"-410px"}}/>
  </div>
  </div> 
  </>  
  )
}

export default Container