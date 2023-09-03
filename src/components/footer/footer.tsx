const Footer = () => {
  return (
    <footer className="footer bg-dark text-light ">
      <address className="address" id="contact">
        <h5>Contact Us:</h5>
        <p>
          <i className="bi bi-envelope"></i>
          ✉️ &nbsp;
          <a href="mailto:contact@example.com">contact@example.com</a>
        </p>
        <p>
          📞&nbsp; <a href="tel:+11234567890">+91 234-456-7890</a>
        </p>
      </address>

      <p className="credit">
        {" "}
        Copyright ©️ {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};

export { Footer };
