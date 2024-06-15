import {BrowserRouter ,Routes ,Route} from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import Home from './Pages/Home.jsx';
import Category from './Pages/Category.jsx';
import Product from './Pages/Product.jsx';
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/clothing" element={<Category/>}/>
      <Route path="/cosmetics" element={<Category/>}/>
      <Route path="/electronics" element={<Category/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path=":productId" element={<Product/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}