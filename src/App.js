import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { Homepage } from './compenet/home';
import { Start } from './compenet/homepage';
import { Footer } from './compenet/footer';
import { Caelo } from './compenet/carlores';
import {About } from './compenet/About';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
   <BrowserRouter>
    <Routes>
      <Route path='/' element={[<Homepage/>,<Caelo/>,<About/>,<Start/>,<Footer/>]}></Route>
    </Routes>
    </BrowserRouter>
      {/* <Homepage/><Caelo/><About/><Start/><Footer/> */}
    </div>
  );
}

export default App;
