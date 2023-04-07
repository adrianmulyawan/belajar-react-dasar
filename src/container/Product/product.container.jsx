import ProductComponent from "../../components/ProductParent/product.component";
import NavbarComponent from "../../components/navbar.component";

const ProductContainer = () => {
  return (
    <>
      <NavbarComponent />
      <ProductComponent />
    </>
  )
};

export default ProductContainer;