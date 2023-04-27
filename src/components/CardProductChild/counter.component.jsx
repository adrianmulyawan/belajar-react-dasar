import React, { useState } from "react";

const CounterComponent = (props) => {
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
      <div className="counter">
        <button className="minus" onClick={ () => handleMinus() }>-</button>
        <input type="text" name="quantity" id="quantity" value={ order.count } disabled />
        <button className="plus" onClick={ () => handlePlus() }>+</button>
      </div>
    </>
  )
};

export default CounterComponent;