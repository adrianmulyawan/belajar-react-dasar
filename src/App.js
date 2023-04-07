import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeContainer from './container/Home/home.container';
import ProductContainer from './container/Product/product.container';
import ContentContainer from './container/Content/content.container';

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <HomeContainer /> } />
        <Route path='/product' element={ <ProductContainer /> } />
        <Route path='/content' element={ <ContentContainer /> } />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
