import React from "react";
import { useState } from "react";
import Nav from "./Nav";

import "../css/Cart.css"
const Favorites = ({ favorites }) => {
  const FavProduct=localStorage.getItem("Fav");
  const [favItems,Setfavitem]=useState(
    FavProduct?JSON.parse(FavProduct):[]
  )
  
  console.log(favorites)
  return (<>
  <Nav></Nav>
    <div className="favorites cart-page container">
      <h2>Favorites</h2>
      {/* <ul>
        {favItems.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul> */}
      {favItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div className="row m-0">
              <div className="col-11 ">
                {favItems.map((item) => {
                  return (
                    <div className="row m-0 item p-3 m-5 " key={item.id}>
                      <div className="col-5">
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
                    
                    </div>
                  );
                 
                })}
              </div>
            </div>
          )}
         
    </div>
    </>
  );
};

export default Favorites;
