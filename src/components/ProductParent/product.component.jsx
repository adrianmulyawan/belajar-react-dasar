import { Fragment, useState } from 'react';
import troleyImage from '../../assets/shopping_cart.png'
import CardProductComponent from '../CardProductChild/card-product.component';
import './product.component.css';

const ProductComponent = () => {
  const [order, setOrder] = useState({
    count: 1,
    productName: 'Ayam Boiler 1 KG',
    productPrice: 56000
  });

  const handleCounterChange = (newValue) => {
    setOrder(data => {
      return {
        ...data, 
        count: newValue
      }
    });
    // console.info('count diproduct', order.count);
    // console.info('data diproduct', order);
  };
  
  // const handleMinus = () => {
  //   if (order.count <= 0) {
  //     alert('Tidak bisa dikurangi lagi :(');
  //     return false;
  //   }
  //   setOrder(data => {
  //     return {
  //       ...data,
  //       count: data.count - 1
  //     }
  //   });
  // };

  // const handlePlus = () => {
  //   setOrder(data => {
  //     return {
  //       ...data,
  //       count: data.count + 1
  //     }
  //   })
  // };

  return (
    <Fragment>
      <div className="header">
        <div className="logo">
          <img src="https://etanee.id/static/media/XFoodBlue.6ec62d26.png" alt="img-logo" style={{ width: 100 }} />
        </div>
        <div className="troley">
          <img src={ troleyImage } alt="img-troley" />
          <div className="count">{ order.count }</div>
        </div>
      </div>
      <CardProductComponent onCounterChange={(value) => handleCounterChange(value)} />
    </Fragment>
  )
};

export default ProductComponent;