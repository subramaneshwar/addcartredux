import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './comp/navs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './comp/Home';
import Products from './comp/Products';
import Cart from './comp/Cart';
import Prodsdet from './comp/Prodsdet';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Products/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/prods" element={<Prodsdet/>} />
      </Routes>

      
    </div>
  );
}

export default App;
