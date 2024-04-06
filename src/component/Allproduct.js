import React, { useState } from "react";
import Product from "./CardProduct";
import Cart from "./Cart";
import Favorites from "./ProductFav";
import Nav from "./Nav";
import Data from "./Data";
import "../css/ProductInfo.css";
import { Link } from "react-router-dom";
// import Swal from 'sweetalert2';
import Swal from "sweetalert2";

function AllProduct() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [favorites, setFavorites] = useState([]);

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const isAlreadyInCart = cart.some((item) => item.id === product.id);

    // If the product is not already in the cart, add it
    if (!isAlreadyInCart) {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      Swal.fire({
        // title: "Good job!",
        text: "This item is added",
        icon: "success",
      });
    } else {
      // You can show an alert or perform any other action to notify the user
      Swal.fire("Item is already in the cart");
    }
  };

  const addToFavorites = (product) => {
    const UpdatedFav = [...favorites, product];
    setFavorites(UpdatedFav);
    localStorage.setItem("Fav", JSON.stringify(UpdatedFav));
  };

  const toggleFavorite = (product) => {
    if (favorites.find((item) => item.id === product.id)) {
      const UpdatedFavRemove = favorites.filter(
        (item) => item.id !== product.id
      );
      setFavorites(UpdatedFavRemove);
      localStorage.setItem("Fav", JSON.stringify(UpdatedFavRemove));
    } else {
      setFavorites([...favorites, product]);
    }
  };

  return (
    <>
      <Nav></Nav>
      <div className="app ">
        <h1>My Products</h1>
        <div className="product">
          <div className="container">
            <div className="row">
              {Data.map((product) => {
                return (
                  <Product
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                    addToFavorites={addToFavorites}
                    isFavorite={favorites.some(
                      (item) => item.id === product.id
                    )}
                    toggleFavorite={toggleFavorite}
                  />
                );
              })}
            </div>
          </div>
        </div>
        {/* <div className="cart-fav-container">
          <Link to="/cart">Go to Cart</Link>
          {/* <Cart cart={cart} /> 
          <Favorites favorites={favorites} />
        </div> */}
      </div>
    </>
  );
}
export default AllProduct;
