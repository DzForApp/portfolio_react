import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import Category from './pages/Category';
import { Route,Routes } from 'react-router-dom'; 
import ProductDetail from './pages/ProductDetail';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Routes>
     
      
      <Route path='/' exact element={<Home/>}>
        <Route path='home' exact element={<Home/>}/>
        <Route path='about' exact element={<About/>}/>
        <Route path='category' exact element={<Category/>}/>
        <Route path='productdetail' exact element={<ProductDetail/>}/>
        <Route path='gallery' exact element={<Gallery/>}/>
      </Route>
      
    </Routes>
      
   
  );
}

export default App;
