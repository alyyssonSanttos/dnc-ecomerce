import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import HeaderMenu from '../../../componentes/HeaderMenu/HeaderMenu';
import Search from '../../../componentes/Search/Search';
import ProductsCard from "../../../componentes/ProductsCard/ProductsCard";

const Home = ({data}) => {
  console.log(data);
  
  return (
    <div className="home">
      <HeaderMenu />
      <Search />
    <div className="home__products">
        {data.map((product) => (
          <ProductsCard key={product.id} data={product} />
        ))}
    </div>
    </div>
  )
}

export default Home