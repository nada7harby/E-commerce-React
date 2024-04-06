import React from "react";
import Nav from "./Nav";
import "../css/Cart.css";
const Cart = () => {
  // Retrieve cart items from localStorage on component mount
  const storedCartItems = localStorage.getItem("cart");
  const [cartItems, setCartItems] = React.useState(
    storedCartItems ? JSON.parse(storedCartItems) : []
  );

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
 localStorage.setItem("total_price",JSON.stringify(totalPrice))
  return (
    <>
      <Nav></Nav>
      <div className="cart-page">
        <div className="container">
          <h2>Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div className="row">
              <div className="col-11 ">
                {cartItems.map((item) => {
                 
                  return (
                    <div className="row item p-3 " key={item.id}>
                      <div className="col-4">
                        <img src={item.image} alt="img"></img>
                      </div>
                      <div className="col-6 content">
                        <h4>Name:{item.title}</h4>
                        <p> Description:{item.description.slice(0, 90)}...</p>
                        <h6>
                          {" "}
                          Price : <span>{item.price}$</span>
                        </h6>
                      </div>
                      <div className="col-2 content">
                        <button onClick={() => removeFromCart(item.id)}>
                          Remove
                        </button>
                      </div>
                    </div>
                  );
                 
                })}
              </div>
            </div>
          )}
          <p className="price">
            Total Price: <span className="total-price">${totalPrice}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Cart;
