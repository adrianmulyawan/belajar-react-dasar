import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home/home.container';
import ProductPage from './pages/Product/product.container';
import ContentPagex from './pages/Content/content.container';

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/product' element={ <ProductPage /> } />
        <Route path='/content' element={ <ContentPagex /> } />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
