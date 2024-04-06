import React from "react";
import "../css/ProductInfo.css";
const Product = ({
  product,
  addToCart,
  addToFavorites,
  isFavorite,
  toggleFavorite,
}) => {
  // const handleFavoriteAction = (product) => {
  //   addToFavorites(product);
  //   toggleFavorite(product);
  // };
  return (
    <div className="col-lg-4">
      <div className="card">
        <div className="img_prod">
          <img src={product.image} className="card-img-top" alt="..." />
          <span>
            <i
              className="fa-solid fa-heart"
              onClick={() => {
                addToFavorites(product);
                toggleFavorite(product);
              }}
              // onClick={() =>}
              style={{
                color: isFavorite ? "red" : "white",
              }}
            ></i>
          </span>
        </div>

        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description.slice(0, 100)}...</p>
          <button
            onClick={() => addToCart(product)}
            className="btn btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
