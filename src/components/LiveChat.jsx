import React from 'react';
import {Avatar,IconButton} from "@mui/material"
//teen dot wale
import  MoreVertIcon from '@mui/icons-material/MoreVert';
//gol circle
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
//siptipin jaisa wala
import AttachFileIcon from '@mui/icons-material/AttachFile';
import '../styles/LiveChat.css'
function LiveChat(){

    const[seed,setSeed]=React.useState('')
//it run some code when component is loaded
React.useEffect(()=>{
const x=Math.floor((Math.random() * 5000));
setSeed(x);
},[]);
    return(<>



        <div className="Chat">
<div className="Chat_header">
<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
<div className="Chat_header_info">
    <h3>Chat Name</h3>
    <p>Last Seen ...</p>
</div>
<div className="Chat_headerRight">
<IconButton>
    <DonutLargeIcon/>
    </IconButton>

<IconButton>
<AttachFileIcon/>
</IconButton>

<IconButton>
<MoreVertIcon/>
</IconButton>

</div>
</div>
<div className="Chat_body"></div>
<div className="Chat_footer"></div>
        </div>
    </>);
}
export default LiveChat;