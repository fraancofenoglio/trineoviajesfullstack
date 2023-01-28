import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/NavBar';
import MainRoutes from './routes/MainRoutes';
import { useState } from 'react';
import HamburguerMenu from './components/HamburguerMenu';

function App() {
  
  const [hamb, setHamb] = useState(false);

    return (
      
    <>
      <BrowserRouter>

        <Navbar hamb={hamb} setHamb={setHamb}></Navbar>
        <HamburguerMenu hamb={hamb}></HamburguerMenu>
        <MainRoutes></MainRoutes>

      </BrowserRouter>

    </>

  );
}

export default App;
