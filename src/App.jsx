import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import MobileBottomNav from './components/MobileBottomNav.jsx';
import HomePage from './pages/HomePage.jsx';
import CategoryPage from './pages/CategoryPage.jsx';
import ProductsByCategory from './pages/ProductsByCategory.jsx';
import ProductPage from './pages/ProductPage.jsx';
import FavoritesPage from './pages/FavoritesPage.jsx';
import ShopPage from "./pages/ShopPage.jsx";
// import CartPage from './pages/CartPage.jsx';
// import CheckoutPage from './pages/CheckoutPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className='p-4'> 
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path="/catalog" element={<CategoryPage />} />
          <Route path="/catalog/products" element={<ProductsByCategory />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
          <Route path="/shop" element={<ShopPage />} />
          {/* <Route path='/cart' element={<CartPage/>} /> */}
          {/* <Route path='/checkout' element={<CheckoutPage/>} />  */}
        </Routes>
      </main>
      <Footer />
      <MobileBottomNav />
    </BrowserRouter>
  );
}

export default App;