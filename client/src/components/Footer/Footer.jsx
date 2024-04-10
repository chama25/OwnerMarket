import React from "react";
import "./Footer.css";

const Footer = () => {
  const footerLinks = [
    { title: "Home", url: "/" },
    { title: "Hotels", url: "/hotels" },
    { title: "Lands", url: "/lands" },
    { title: "Houses", url: "/houses" },
    { title: "Cars", url: "/cars" },
    { title: "Contact", url: "/contact" },
  ];

  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className="btn5">Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src="../images/logo-light.png" alt="" />
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straight to your inbox every month</p>

              <div className="input flex">
                <input type="text" placeholder="Email Address" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          <div className="footer-links">
            {footerLinks.map((link, index) => (
              <div className="box" key={index}>
                <h3>{link.title}</h3>
                <ul>
                  <li>
                    <a href={link.url}>{link.title}</a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
      <div className="legal">
        <span>© 2024 RentUP. Designed By GorkCoder.</span>
      </div>
    </>
  );
};

export default Footer;
