import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Videos from './components/Video';
import 'bootstrap/dist/js/bootstrap.min.js';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproducts from './components/Addproducts';
import Getproducts from './components/Getproducts';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Mpesapayment from './components/Mpesapayment';
import Footer from './components/Footer';
const App = () =>{
  return(
    <BrowserRouter>
      {/* navigation goes here */}
     <Navbar />
      {/* Routes goes here */}
      <Routes>
        <Route path='/'  element={<Getproducts/>} />
        <Route path='/signin'  element={<Signup/>} />
        <Route path='/signup'  element={<Signin/>} />
        <Route path='/addproducts'  element={<Addproducts/>} />
        <Route path='/mpesapayment'  element={<Mpesapayment/>} />
        <Route path='/videos' element={<Videos />} />

      </Routes>

    {/* footer goes here  */}
    <Footer  />
    </BrowserRouter>
  )
}
export default App 