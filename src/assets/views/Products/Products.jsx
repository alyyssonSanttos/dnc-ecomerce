import React from 'react';
import './index.scss';
import { useParams } from 'react-router-dom';
import HeaderMenu from "../../../componentes/HeaderMenu/HeaderMenu";
import Search from "../../../componentes/Search//Search";
import ProductDetail from  "../../../componentes/ProductDetail/ProductDetail";
import "./index.scss";

const Products = ({data}) => {
  const {productId} = useParams();
  const selectedProduct = data.find((product) => product.id == productId)
  console.log(selectedProduct);

  return (
    <section>
      <HeaderMenu/>
      <Search/>
      <ProductDetail data={selectedProduct} />
    </section>
  )
}

export default Products