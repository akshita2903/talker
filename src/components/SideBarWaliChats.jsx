import React from 'react';
import {Avatar} from "@mui/material";
import '../styles/SideBarWaliChat.css';
function SideBarWaliChats({addNewChat}){
    
const[seed,setSeed]=React.useState('')
//it run some code when component is loaded
React.useEffect(()=>{
const x=Math.floor((Math.random() * 5000));
setSeed(x);
},[]);
function addChat(){
    const roomName=prompt("Please enter the room name for chat");
if(roomName)
{
  //functional part
}


}
//agar nya chat kna hai to usko uper dikhao baaki uske neech
//just like recnt uper hota hai
return (addNewChat)?(<>
  <div onClick={addChat} className='sideBarChat'>
        <h2>Add new Chat</h2>
    </div>

</>):(<>
  
    <div className="sideBarChat">

{/* //avatar me image */}

<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
<div className='sideBarChat_chats'>
    <h2>PersonName</h2>
    <p>Recent Message....</p>
</div>
</div>

</>);
}
export default SideBarWaliChats;