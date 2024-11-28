import React from "react";
import { FaHome, FaShoppingBag, FaUser, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = ({ user ,setUser }) => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    setUser(null);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar">
      <div className="container-fluid">
        {/* Logo */}
        <s className="navbar-brand" href="/">
          Shopping Store
        </s>

        {/* Toggle Button for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Home */}
            <li className="nav-item">
              <span
                className="nav-link"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                onClick={()=> navigate("/")}
              >
                <FaHome className="me-1" />
                Home
              </span>
            </li>

            {/* Cart */}
            <li className="nav-item">
              <span
                className="nav-link"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                onClick={()=> navigate("/cart")}
              >
                <FaShoppingBag className="me-1" />
                Cart
              </span>
            </li>

            {/* User */}
            {user && (
              <li className="nav-item">
                <span
                  className="nav-link"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                >
                  <FaUser className="me-1" />
                  User
                </span>
              </li>
            )}
            {/* Logout (Only if user exists) */}
            {user && (
              <li className="nav-item">
                <span
                  className="nav-link"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  onClick={()=>logoutHandler()}
                >
                  <FaSignOutAlt className="me-1" />
                  Logout
                </span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;