import {BrowserRouter ,Routes ,Route} from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import Home from './Pages/Home.jsx';
import Category from './Pages/Category.jsx';
import Product from './Pages/Product.jsx';
import clothingbanner from './assets/clothingbanner.png'
import electronicsbanner from './assets/electronicsbanner.png'
import cosmeticsbanner from './assets/cosmeticsbanner.png'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/clothing" element={<Category category={"clothing"} banner={clothingbanner}/>}/>
      <Route path="/cosmetics" element={<Category category={"cosmetics"} banner={cosmeticsbanner}/>}/>
      <Route path="/electronics" element={<Category category={"electronics"} banner={electronicsbanner}/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path=":productId" element={<Product/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}