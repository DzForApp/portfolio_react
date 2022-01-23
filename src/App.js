import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import Category from './pages/Category';
import { Route,Routes } from 'react-router-dom'; 
import ProductDetail from './pages/ProductDetail'; 

function App() {
  return (
    <Routes>
     
      
      <Route path='/' exact element={<Home/>}>
        <Route path='home' exact element={<Home/>}/> 
    
      </Route>
      
    </Routes>
      
   
  );
}

export default App;
