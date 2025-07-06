import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import Prijzen from "./Prijzen";
import FAQ from "./FAQ";
import How_Doese_it_Works from './How_Doese_it_Works'
import AboutUs from "./AboutUs";
import Conatct from "./Conatct";
import Locatons from "./Locatons";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="Footer-img-p">
          <div className="Footer-img">
            <img
              src="https://www.hampy.be/Portals/0/dtxArt/blok-galerij/afbeelding/bestand/WIT20240130153124editcropmedpre_medium_c8fe6e39-93d9-4c31-8f4a-9638d99d9392.jpg"
              alt=""
            />
          </div>

          <div className="Footer-p">
            <div>
              <p>Discover Hampy on CleanCloud</p>
              <h2>Ready for your first laundry day with Hampy?</h2>

              <div className="footer-downlod-btn">
                <button className="apple">
                  <AiFillApple className="apple-logo" />
                  Downlode from <span> App Store</span>
                </button>
                <button className="google_play">
                  <FaGooglePlay className="google_play-logo" />
                  Get it <span>Googleplay</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="logo-ready">
            <div className="Logo">
              <h1 className="main-text">hampy</h1>
              <h2 className="curved-text">
                happy <span>laundry</span>
              </h2>
            </div>
            <div className="Ready">
              <h2>Ready or make you hampy</h2>
            </div>
          </div>

          <div className="footer-list">
            <div className="footer-nav_list">
              <ul className="footer-nav_list-ul-1">
                <li>
                  <Link to="/How_Doese_it_Works">How_Doese_it_Works</Link>
                </li>
                <li>
                  <Link to="/prijzen">Prisia</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
              </ul>
              <ul className="footer-nav_list-ul-2">
                <li>
                  <Link to="/locatons">Location</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="footer--list-downlod-btn">
              <button className="apple">
                <AiFillApple className="apple-logo" />
                Downlode from <span> App Store</span>
              </button>
              <button className="google_play">
                <FaGooglePlay className="google_play-logo" />
                Get it <span>Googleplay</span>
              </button>
            </div>
          </div>
        </div>
        <div className="social-midia-payment">
          <div className="social-midia">
            <FaFacebook />
            <FaInstagram />
          </div>
          <div className="paymet">
            <MdOutlinePayment />
          </div>
        </div>

        <div className="Footer-link">
          <h1>hampy happy laundry</h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
