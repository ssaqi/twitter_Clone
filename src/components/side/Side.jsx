import React from 'react'
import './side.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import Button from '@mui/material/Button';
import CameraIndoorIcon from '@mui/icons-material/CameraIndoor';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import DatasetLinkedOutlinedIcon from '@mui/icons-material/DatasetLinkedOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';

function Side() {
  return (
    <>
<div className="list">
<ul className="list_items">
<br/>

<li>
    <TwitterIcon style={{color: "skyblue"}}/>
</li>

<li>
  
<Button color="secondary" style={{color: "#000", fontWeight: "bold"}} startIcon={<CameraIndoorIcon/>}>Home</Button>
  </li>
<br/>
<li>
 <Button color="secondary" style={{color: "#000", fontWeight: "bold"}} startIcon={<Grid3x3Icon/>}>Feature</Button>
</li>
<br/>
<li>
<Button color="secondary" style={{color: "#000", fontWeight: "bold"}} startIcon={<NotificationsActiveOutlinedIcon/>}>Notification</Button>
  </li>
<br/>
<li>
<Button color="secondary" style={{color: "#000", fontWeight: "bold"}} startIcon={<EmailOutlinedIcon/>}>Masssages</Button>
  </li>
<br/>
<li>
<Button color="secondary" style={{color: "#000", fontWeight: "bold"}} startIcon={<BookmarkBorderOutlinedIcon/>}>Bookmark</Button></li>
<li>
  <br/>
<Button color="secondary" style={{color: "#000", fontWeight: "bold"}} startIcon={<DatasetLinkedOutlinedIcon/>}>Links</Button>
  </li>
<br/>
<li>
<Button color="secondary" style={{color: "#000", fontWeight: "bold"}} startIcon={<AccountCircleRoundedIcon/>}>Profile</Button>
</li>
<br/>
<li>
<Button color="secondary" style={{color: "#000", fontWeight: "bold"}} startIcon={<ExpandCircleDownOutlinedIcon/>}>More</Button>
</li>
<br/>
<li>
<Button variant="contained" style={{borderRadius: "20px", width: "130px"}}>
        Twitter
      </Button>
  </li>

    
</ul>



</div>
    
    
    </>
  )
}

export default Side