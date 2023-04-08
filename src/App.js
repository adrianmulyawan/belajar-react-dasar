import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home/home.container';
import ProductPage from './pages/Product/product.container';
import ContentPagex from './pages/Content/content.container';
import LifeCyclePage from './pages/LifeCycle/life-cycle.container';
import DetailPostPage from './pages/DetailPost/detail-post.container';

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/blog/detail/:id' element={ <DetailPostPage /> }/>
        <Route path='/product' element={ <ProductPage /> } />
        <Route path='/content' element={ <ContentPagex /> } />
        <Route path='/lifecycle' element={ <LifeCyclePage /> } />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
