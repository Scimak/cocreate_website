import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="footer" style={{ bottom: "0" }}>
      {/* <nav id="footerNav">
        <div id="socialLinks">
          
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
        <div id="formLinks">Form Links</div>
        <div id="otherLinks">Other Links</div>
      </nav>
      <div id="cocreateRights">CoCreate &copy; 2026. All Rights Reserved.</div> */}
      <div className="outerFooter">
        <div className="footerLogo">
          <img src="/assets/logo2.png" alt="CoCreate Logo" />
        </div>

        <div className="businessSection">
          <h5>Business Enquiries</h5>
          <a href="mailto:cocreate@alfaisal.edu">cocreate@alfaisal.edu</a>
          <br />
          <h5>Social Media</h5>
          <a href="https://www.linkedin.com/company/cocreate-ksa/">LINKEDIN</a>
        </div>
      </div>

      <div id="cocreateRights">CoCreate &copy; 2026. All Rights Reserved.</div>
    </footer>

    // <footer className="footer">
    //   <div id="footerLinks">
    //     <Link to="/Home" className="link">
    //       Home
    //     </Link>
    //     <Link to="/About" className="link">
    //       About
    //     </Link>
    //     <Link to="/Projects" className="link">
    //       Projects
    //     </Link>
    //     <Link to="/Admin" className="link">
    //       Admin
    //     </Link>
    //   </div>
    // </footer>
  );
}

export default Footer;
