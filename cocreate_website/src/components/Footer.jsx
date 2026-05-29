import React from "react";

function Footer() {
  return (
    <footer id="footer" style={{ bottom: "0" }}>
      <nav id="footerNav">
        <div id="socialLinks">
          {/*Social Media Links*/}
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
        <div id="formLinks">Form Links</div>
        <div id="otherLinks">Other Links</div>
      </nav>
      <div id="cocreateRights">CoCreate &copy; 2026. All Rights Reserved.</div>
    </footer>
  );
}

export default Footer;
