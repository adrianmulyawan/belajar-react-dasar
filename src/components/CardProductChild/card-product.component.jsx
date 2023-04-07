import { useState } from 'react';
import '../ProductParent/product.component.css';

const CardProductComponent = (props) => {
  const [order, setOrder] = useState({
    count: 1,
    productName: 'Ayam Boiler 1 KG',
    productPrice: 56000
  });

  const handleCounterChange = (newValue) => {
    props.onCounterChange(newValue);
  };

  const handleMinus = () => {
    if (order.count <= 0) {
      alert('Tidak Bisa Mengurangi Stock!');
      return false;
    }
    setOrder(data => {
      return {
        ...data,
        count: data.count - 1,
        handleCounterChange: handleCounterChange(data.count - 1)
      }
    });
    console.info('kurang di card product', order.count);
  };

  const handlePlus = () => {
    setOrder(data => {
      // console.info(order.count);
      return {
        ...data,
        count: data.count + 1,
        handleCounterChange: handleCounterChange(data.count + 1)
      }
    });
    console.info('tambah di card product', order.count);
  };

  return (
    <>
      <div className="card-product"> 
        <div className="img-thumb-prod">
          <img src="https://images.tokopedia.net/img/cache/500-square/product-1/2020/8/22/101342057/101342057_68f4d174-988b-41b7-98e8-3e03a5cfb45e_700_700" alt="img-product" />
        </div>
        <p className="product title">
          { order.productName }
        </p>
        <p className="product-price">
          Rp { order.productPrice }
        </p>
        <div className="counter">
          <button className="minus" onClick={ () => handleMinus() }>-</button>
          <input type="text" name="quantity" id="quantity" value={ order.count } disabled />
          <button className="plus" onClick={ () => handlePlus() }>+</button>
        </div>
      </div>
    </>
  )
};

export default CardProductComponent;