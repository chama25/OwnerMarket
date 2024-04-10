import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../assets/Images/logo.png";

const Navbar = ({ authenticated, setAuthenticated, setUser }) => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    // Clear user authentication state and local storage
    setAuthenticated(false);
    setUser(null);
    localStorage.removeItem("token");

    // Show success notification
    toast.success("Logged out successfully", {
      position: toast.POSITION.TOP_CENTER,
    });

    // Navigate to the homepage after logout
    navigate("/");
  };

  return (
    <>
      <nav className="navbar">
        <ToastContainer />
        <Link to="/" className="logo">
          <img src={logo} className="logo-image" alt="Logo" />
        </Link>
        <div className="nav-links">
          {/* Add links for Home, Hotels, Lands, and Houses */}
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/hotels" className="nav-link">
            Hotels
          </Link>
          <Link to="/lands" className="nav-link">
            Lands
          </Link>
          <Link to="/houses" className="nav-link">
            Houses
          </Link>
           <Link to="/cars" className="nav-link">
            Cars
          </Link>
          <Link to="/contact" className="nav-link">
            About Us
          </Link>
           <Link to="/contact" className="nav-link">
            Contact
          </Link>

          {authenticated ? (
            // If the user is authenticated, show the "Log Out" button
            <>
              <button
                className="nav-button signout-button"
                onClick={logoutHandler}
              >
                Sign Out
              </button>
            </>
          ) : (
            // If the user is not authenticated, show "Sign Up" and "Login" links
            <>
              <Link to="/register" className="nav-button signup-button">
                Sign Up
              </Link>
              <Link to="/login" className="nav-button login-button">
                Login
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
