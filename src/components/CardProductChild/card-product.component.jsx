import '../ProductParent/product.component.css';
import CounterComponent from './counter.component';

const CardProductComponent = (props) => {
  return (
    <>
      <div className="card-product"> 
        <div className="img-thumb-prod">
          <img src="https://images.tokopedia.net/img/cache/500-square/product-1/2020/8/22/101342057/101342057_68f4d174-988b-41b7-98e8-3e03a5cfb45e_700_700" alt="img-product" />
        </div>
        <p className="product title">
          Ayam Boiler 1 Kg
        </p>
        <p className="product-price">
          Rp 35.000,00
        </p>
        <CounterComponent onCounterChange={(value) => props.onCounterChange(value)} />
      </div>
    </>
  )
};

export default CardProductComponent;