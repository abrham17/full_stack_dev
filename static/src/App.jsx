import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBodyAll from './components/front_page/body/top_body.jsx';
import Navbar from './components/front_page/Navbar/navbar.jsx';
import ProductDetails from './components/prdouctdetaik/ProductDetail.jsx';
import './App.css';
import Cart from './components/cart/cart.jsx';
import Wishlist from './components/cart/whislist.jsx';
import Compare from './components/cart/compare.jsx';
//import Account from './components/cart/account.jsx';
import AccountSetup from './components/account/account_setup.jsx';
import Register from './components/account/register.jsx';
import Account from './components/account/account.jsx';
import Login from './components/account/login.jsx';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<TopBodyAll />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/account" element={<Account/>}/>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
