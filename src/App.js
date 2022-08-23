import './App.css';
import Header from './components/Header';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Cart from './components/Cart';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
     <Header/>
     <div>
      <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/Cart" element={<Cart/>}></Route>
      </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;
