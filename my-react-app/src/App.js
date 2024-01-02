
import './App.css';
import Navbar from './components/Navbar';
import { Gl1 } from './components/gallery';
import Packing from './components/paking';
import Listitems from './components/itemlist';

function App() {
  return (
    <>
      <Navbar
          title = "Harshit"
          aboutText= "newabout"
        size = {100} />
      <Gl1 name2="Harshit" age="20" />
      <Packing/>
      <br /><br />
      <p>This is list rendering </p>
      <Listitems/>
    </>
  );
}

export default App;
