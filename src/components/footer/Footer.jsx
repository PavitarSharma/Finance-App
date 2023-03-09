import React from "react";
import "./Footer.css";
import { AiOutlineGoogle, AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import { SiFramer } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer_container">
        <div className="left">
          <div className="logo">
            <div className="logo_image">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            </div>
            <p>Finance App</p>
          </div>
        </div>

        <div className="center">
          <ul>
            <li>Demos</li>
            <li>About</li>
            <li>Blog</li>
            <li>Pages</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="right">
          <AiOutlineGoogle className="social_icon" />
          <SiFramer className="social_icon" />
          <AiFillFacebook className="social_icon" />
          <IoLogoWhatsapp className="social_icon" />
          <AiFillYoutube className="social_icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
