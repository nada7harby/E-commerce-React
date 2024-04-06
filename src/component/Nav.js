import { Link } from "react-router-dom";
import logo from "../img/ellamart.avif";
import logo_user from "../img/Sample_User_Icon.png";

import "../css/Nav.css";

function BasicExample() {
  const total = localStorage.getItem("total_price");
  console.log(total);

  return (
    <nav className="navbar navbar-expand-lg  ">
      <div className="container">
        <Link className="navbar-brand" to="/">
          {" "}
          <img src={logo} alt="img" className="logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav  mb-2 mb-lg-0  m-auto justify-content-center">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/AllProduct">
                {" "}
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                {" "}
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/FavProduct">
                {" "}
               Favorites
              </Link>
            </li>
          </ul>
          <Link to="/cart" className="cart-link">
            {" "}
            <div className="Cart-price">
              <i className="fa-solid fa-cart-shopping"></i>
              <span>{total}</span>
            </div>
          </Link>
          <Link to="/FavProduct" className="cart-link">
            <i className="fa-solid fa-heart"></i>
          </Link>
          {/* <div
            className=" Login_tab nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon"></span>
            <img src={logo_user} alt="img" className="logo_user" />
           
          </div>

          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/Register">
                تسجيل الدخول
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="/Login">
                انشاء حساب جديد
              </Link>
            </li>
          </ul> */}
        </div>
      </div>
    </nav>
  );
}

export default BasicExample;
