import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex0">
      <div className="color-wrap">
        <div className="bcg-orange"></div>
        <div className="footer__wrap">
          <div className="footer grid">
            <Linkto="">
              <img
                src="assets/outline_logo.svg"
                alt="Link to homepage"
                className="footer__logo"
              />
            </Link>
            <ul className="footer__menu">
              <li>
                <h4>Menu</h4>
              </li>
              <Link to="pizza">
                <li>Food</li>
              </Link>
              <Link to="beer">
                <li>Drink</li>
              </Link>
            </ul>
            <ul className="footer__login">
              <li>
                <h4>Login</h4>
              </li>
              <Linkto="orders">
                <li>Your orders</li>
              </Link>
              <li>Track order</li>
            </ul>
            <ul className="footer__about">
              <li>
                <h4>About us</h4>
              </li>
              <li>Delivery</li>
              <li>Contact us</li>
            </ul>
            <div className="footer__contacts">
              <div className="footer__contacts-para">
                <p className="footer__phone">1 202 918 2132</p>
                <p> 8 a.m. — 10 p.m.</p>
              </div>
              <div className="footer__social-net">
                <a href="#">
                  <img src="assets/inst.svg" alt="our instagram" />
                </a>
                <a href="#">
                  <img src="assets/fb.svg" alt="our facebook" />
                </a>
                <a href="#">
                  <img src="assets/telegram.svg" alt="our telegram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
