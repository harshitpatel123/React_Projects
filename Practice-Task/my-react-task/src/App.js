import logo from './logo.svg';
import './App.css';
import Darkmode from './component/DarkMode';
import ToDoList from './component/ToDoList';
import SearchBar from './component/SearchBar';
import Timer from './component/Timer';


function App() {
  return (
    <div className='centerdiv'>
      {/* <Timer/> */}
      <hr/>
      {/* <Darkmode/> */}
      <hr/>
      {/* <SearchBar /> */}
      <hr/>
      <ToDoList/>
    </div>
  );
}

export default App;
