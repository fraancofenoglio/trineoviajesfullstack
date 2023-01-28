import {Routes, Route, Navigate} from 'react-router-dom';
import Account from '../pages/Account';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ProtectedRoute from "../components/ProtectedRoute"
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import Checkout from '../pages/Checkout';
import { useSelector } from 'react-redux';
// import NotFound from '../pages/NotFound';

function MainRoutes() {

  const currentUser = useSelector(state => state.user.currentUser);
  return (
    <>
      <Routes>

        <Route path="/home" element={<Home/>}   />
        <Route path='/register' element={ currentUser === null ? <Register/> : <Navigate to={`/account/${currentUser.email}`
        }/>} />
        <Route path='/login' element={ currentUser === null ? <Login/> : <Navigate to={`/account/${currentUser.email}`
        }/>} />
        <Route path='/forgot-password' element={currentUser === null ? <ForgotPassword/> : <Navigate to={`/account/${currentUser.email}`
        }/>}/>
        <Route path='/checkout' element={ currentUser !== null ? <Checkout/> : <Navigate to="/login"/>}/>

        <Route path='/account/:email' element={

          <ProtectedRoute redirectTo={"/login"}>
            <Account/>
          </ProtectedRoute>

        }></Route> 

        <Route path='/' element={<Navigate to="/home"/>}></Route>
        {/* <Route path='*' element={<NotFound/>}></Route> */}

      </Routes>
    </>
  )
}

export default MainRoutes