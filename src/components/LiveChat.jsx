import React from 'react';
import {Avatar,IconButton} from "@mui/material"
//teen dot wale
import  MoreVertIcon from '@mui/icons-material/MoreVert';
//gol circle
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
//siptipin jaisa wala
import AttachFileIcon from '@mui/icons-material/AttachFile';
//insert emoji ke liye
import TagFacesIcon from '@mui/icons-material/TagFaces';
//mic
import MicIcon from '@mui/icons-material/Mic';
import '../styles/LiveChat.css'
function LiveChat(){
console.log(process.env.REACT_APP_API_KEY)
    const[seed,setSeed]=React.useState('');
    const[input,setInput]=React.useState('');
//it run some code when component is loaded
React.useEffect(()=>{
const x=Math.floor((Math.random() * 5000));
setSeed(x);
},[]);
function sendMessage(e){
    e.preventDefault();
    console.log("Meesage send" ,input);
    setInput('');
}

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
{/* //yaha true ke jgah user.login hai yaha nhi wo dekha jyega */}
<div className="Chat_body"><p className={`chat_message ${true && "chat_receiver"}`}>
<span className="chat_name">Ak</span>
    Hey guys
    <span className="time_stamp">9:30pm</span>
</p>
</div>
<div className="Chat_footer">
    <TagFacesIcon/>
    <form>
        <input placeholder='Type a message'  value={input} type="text" onChange={
            (e)=>setInput(e.target.value)
        }/>
        <button type="submit" onClick={sendMessage}>Send a message</button>
    </form>
  
    <MicIcon/>
</div>
        </div>
    </>);
}
export default LiveChat;