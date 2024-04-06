import './App.css';
import Allcart from './component/Allcart';
import Cart from './component/Cart';
import Home from './component/Home';
import ProductFav from "./component/ProductFav"
import AllProduct from './component/Allproduct';
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
function App() {
  
  return (
    <div className="App">
     {/* <Home></Home> */}
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/AllProduct' element={<AllProduct></AllProduct>}></Route>
      <Route path='/FavProduct' element={<ProductFav></ProductFav>}></Route>

     </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
