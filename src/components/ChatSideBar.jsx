import React from 'react';
import '../styles/SideBar.css'
//dp wala
import {Avatar,IconButton} from "@mui/material"
//teen dot wale
import  MoreVertIcon from '@mui/icons-material/MoreVert';
//gol circle
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
//msg box wala
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';
import SideBarWaliChats from './SideBarWaliChats';
function ChatUI(){
    return(<>
    <div className='sideBar'>
        <div className='sideBar_header'>
       <Avatar>AJ</Avatar>
       <div className='sideBar_headerRight'>

    {/* abhi tk is icon ko clk pe no effect,uske liye 
    in icons ko (each and every) <IconButton> ke andar likho */}

    <IconButton>
    <DonutLargeIcon/>
    </IconButton>

<IconButton>
<ChatIcon/>
</IconButton>

<IconButton>
<MoreVertIcon/>
</IconButton>

    </div>
        </div>
   
            <div className='sideBar_search'>
            <div className='sideBar_searchContainer'>
<SearchIcon/>
<input placeholder="Search...." type="text"></input>
</div>
            </div>
            <div className='sideBar_chat'>
            {/* jinse chat ki ho wo logo ke name wla  */}
<SideBarWaliChats addNewChat/>
<SideBarWaliChats/>
<SideBarWaliChats/>
<SideBarWaliChats/>

            </div>
      
    </div>
    </>);
};
export default ChatUI