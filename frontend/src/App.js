import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import sutia_banner from './Components/Assets/banner_mens.png';
import lingerie_banner from './Components/Assets/banner_women.png';
import calcinha_banner from './Components/Assets/banner_kids.png';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/sutia' element={<ShopCategory banner={sutia_banner} category="sutia" />} />
          <Route path='/lingerie' element={<ShopCategory banner={lingerie_banner} category="lingerie" />} />
          <Route path='/calcinha' element={<ShopCategory banner={calcinha_banner} category="calcinha" />} />
          <Route path='/product'>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
