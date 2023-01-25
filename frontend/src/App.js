import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/NavBar';
import MainRoutes from './routes/MainRoutes';
import { useState, useEffect } from 'react';
import HamburguerMenu from './components/HamburguerMenu';
import {setUser} from "./actions/user-actions";
import {auth} from "./firebase/firebaseConfig";
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const currentUser = useSelector(state => state.user.currentUser);
  
  const [hamb, setHamb] = useState(false);
  
  const dispatch = useDispatch();

    useEffect(() =>{
      
      const unsuscribe = onAuthStateChanged(auth, user => {
        
        dispatch(setUser(user))
        
      })
      return unsuscribe();
    }, [dispatch, currentUser]);
    
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
