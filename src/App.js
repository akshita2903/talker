
import './App.css';
import SideBar from './components/ChatSideBar';
import LiveChat from './components/LiveChat'
function App() {
  return (
   <>
   <div className='App'>
   
     <div className='app_body'>

     <SideBar/>
     <LiveChat/>
     </div>
   </div>

   </>
  );
}

export default App;
