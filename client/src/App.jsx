import {BrowserRouter ,Routes ,Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Header';

import Home from './Pages/Home';
import Category from './Pages/Category';
import Product from './Pages/Product';
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