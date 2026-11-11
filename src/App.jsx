import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproducts from './components/Addproducts';
import Getproducts from './components/Getproducts';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Mpesapayment from './components/Mpesapayment';
const App = () =>{
  return(
    <BrowserRouter>
      {/* navigation goes here */}
      <nav className='bg-danger p-3 text-center'>
        <Link to ="/" className='btn btn-info m-1'>Get products</Link>
         <Link to ="/signup" className='btn btn-success m-1'>Signup</Link>
          <Link to ="/signin" className='btn btn-warning m-1'>Signin</Link>
           <Link to ="/addproducts" className='btn btn-primary m-1'>Addproducts</Link>
      </nav>
      {/* Routes goes here */}
      <Routes>
        <Route path='/'  element={<Getproducts/>} />
        <Route path='/signin'  element={<Signup/>} />
        <Route path='/signup'  element={<Signin/>} />
        <Route path='/addproducts'  element={<Addproducts/>} />
        <Route path='/mpesapayment'  element={<Mpesapayment/>} />

      </Routes>


    </BrowserRouter>
  )
}
export default App 