import Index from './components/Index';
import { Footer } from './components/Footer';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import AddProduct from './components/AddProduct';
import Profile from './components/Profile';
import Store from './components/Store';
import Cart from './components/Cart';
import Order from './components/Order';
import { Carosel } from './components/carosel';

function App() {
  return (
    <div className="App">
      <Index />
      <Routes>
        <Route path='/' element={<Carosel/>}></Route>
        <Route path='/store' element={<Store />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/AddProduct' element={<AddProduct />}></Route>
        <Route path='/Profile' element={<Profile />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/order' element={<Order />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
