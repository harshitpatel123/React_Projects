
import './App.css';
import Navbar from './components/Navbar';
import { Gl1 } from './components/gallery';
import Packing from './components/paking';
import Listitems from './components/itemlist';
import Textform from './components/textform';
import Darkmode from './components/darkmode'; 
import EventButton from './components/EventButton';
import SigninForm from './components/SigninForm';
import TaskList from './components/TaskList';
import StopWatch from './components/StopWatch';
import VideoPlayer from './components/VideoPlayer';
import OnlineStatus from './components/OnlineStatus';
import ContextPrac from './components/ContextPrac';

function App() {
  return (
    <>
      <Navbar
          title = "Harshit"
          aboutText= "newabout"
        size = {100} />
      {/* <Gl1 name2="Harshit" age="20" /> */}
      {/* <Packing/> */}
      {/* <Darkmode /> */}
      <br /><br />
      {/* <p>This is list rendering </p>
      <Listitems/> */}
      {/* <Textform heading = "This is event practice"/> */}
      {/* <EventButton/> */}
      {/* <SigninForm /> */}
      {/* <TaskList/> */}
      {/* <StopWatch /> */}
      {/* <VideoPlayer /> */}
      {/* <OnlineStatus /> */}
      <ContextPrac />

    </>
  );
}

export default App;
