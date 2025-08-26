import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
// import Footer from './components/Footer.jsx';
// import HomePage from './pages/HomePage.jsx';
// import ShopPage from './pages/ShopPage.jsx';
// import ProductPage from './pages/ProductPage.jsx';
// import CartPage from './pages/CartPage.jsx';
// import CheckoutPage from './pages/CheckoutPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <main className='p-4'> 
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/shop' element={<ShopPage/>} />
          <Route path='/product/:id' element={<ProductPage/>} />
          <Route path='/cart' element={<CartPage/>} />
          <Route path='/checkout' element={<CheckoutPage/>} />
        </Routes>
      </main>
      <Footer /> */}
    </BrowserRouter>
  );
}

export default App;