function Footer() {
  return (
    <div className="footer">
      <img
        src="/assets/outline_logo.svg"
        alt="Link to homepage"
        className="footer__logo"
      />
      <ul className="footer__about">
        <li>
          <h4>About</h4>
        </li>
        <li>Delivery</li>
        <li>Contact us</li>
      </ul>
      <ul className="footer__menu">
        <li>
          <h4>Menu</h4>
        </li>
        <li>Sales</li>
        <li>Book a table</li>
      </ul>
      <ul className="footer__login">
        <li>
          <h4>Login</h4>
        </li>
        <li>Your orders</li>
        <li>Track order</li>
      </ul>
      <div className="footer__contacts">
        <p className="footer__phone">1 202 918 2132</p>
        <p> 8 a.m. — 8 p.m. weekdays</p>
        <div className="footer__social-net">
          <a href="#">
            <img src="/assets/inst.svg" alt="our instagram" />
          </a>
          <a href="#">
            <img src="/assets/fb.svg" alt="our facebook" />
          </a>
          <a href="#">
            <img src="/assets/telegram.svg" alt="our telegram" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
