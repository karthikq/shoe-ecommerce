/** @format */

import React from "react";
import "./contact.css";
import * as FaIcons from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-form">
        <h2>Submit your Quries</h2>
        <form
          className="form"
          action="mailto:kk96834796@gmail.com"
          method="POST"
          encType="text/plain">
          <input type="text" name="text" />
          <button>Submit</button>
        </form>
      </div>
      <div className="contact-details">
        <p>Follow us on</p>
        <div className="social-icons">
          <FaIcons.FaFacebookF className="iconsF" />
          <FaIcons.FaTwitter className="iconsT" />
          <FaIcons.FaInstagram className="iconsI" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
