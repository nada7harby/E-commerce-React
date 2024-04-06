// ProductInfo.js
import React, { useState } from "react";
import Product from "./CardProduct";
import Cart from "./Cart";
import Favorites from "./ProductFav";
import Data from "./Data";
import { Link } from "react-router-dom";

const ProductInfo = () => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const addToFavorites = (product) => {
    setFavorites([...favorites, product]);
  };

  const toggleFavorite = (product) => {
    if (favorites.find((item) => item.id === product.id)) {
      setFavorites(favorites.filter((item) => item.id !== product.id));
    } else {
      setFavorites([...favorites, product]);
    }
  };

  return (
    <div className="app">
      <h1>My Store</h1>
      <div className="product">
        <div className="container">
          <div className="row">
            {Data.map((product) => (
              <Product
                key={product.id}
                product={product}
                addToCart={addToCart}
                addToFavorites={addToFavorites}
                isFavorite={favorites.some((item) => item.id === product.id)}
                toggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="cart-fav-container">
        <Link to="/cart">Go to Cart</Link>
        <Cart cart={cart} />
        <Favorites favorites={favorites} />
      </div>
    </div>
  );
};

export default ProductInfo;
