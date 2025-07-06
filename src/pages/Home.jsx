import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from './Navbar'
import Prijzen from "./Prijzen";
import B2b from "./B2b";
import FAQ from "./FAQ";
import How_Doese_it_Works from './How_Doese_it_Works'

 import Reviews from './Reviews'
import Gallery from './Gallery'
import Gallery2 from "./Gallery2";
import Footer from './footer'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import hampyVideo from "../assets/video/WIT2020325HampyatworkshootGent850x9503mb_ec68e09d-8b00-42b3-999a-6665f2538957.mp4";
import { IoIosArrowForward } from "react-icons/io";
import { PiTShirtDuotone } from "react-icons/pi";
import { LuLeafyGreen } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import { TbWashEco } from "react-icons/tb";
import { HiCheck } from "react-icons/hi2";
const youtubeUrls = ["https://youtu.be/2CA5KHG8B3w"];
const Home = () => {
  return (
    <>
      <div className="Home-page">
        {/* <Navbar/> */}
        <div className="Header">
          <div className="Logo">
            <h1 className="main-text">hampy</h1>
            <h2 className="curved-text">
              happy <span>laundry</span>
            </h2>
          </div>
          <div className="Header_Menu">
            <ul>
                <li>
                  <Link to="/How_Doese_it_Works">How Doese it Works</Link>
                </li>
                <li>
                  <Link to="/prijzen">Prisia</Link>
                </li>
                <li>
                  <Link to="/B2b">B2b</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
            </ul>
          </div>
          <div className="HamburgerMenu">
            <GiHamburgerMenu />
          </div>
        </div>
        <div>
          <h1>Hampy_laundry</h1>
          <p className="hero_inner">My happy hampy laundry day.</p>
        </div>
        <div className="downlod-btn">
          <button className="apple">
            <AiFillApple className="apple-logo" />
            Downlode from <span> App Store</span>
          </button>
          <button className="google_play">
            <FaGooglePlay className="google_play-logo" />
            Get it <span>Googleplay</span>
          </button>
        </div>
        <img
          className="img"
          src="https://www.hampy.be/Portals/0/dtxArt/blok-galerij/afbeelding/bestand/WIT20240130145523editcrop3medpre_groot_a41552e9-eb5e-4978-8272-7966f83e54be.jpg"
          alt=""
          srcset=""
        />

        <div className="hampyVidio">
          <div className="Vidio">
            <video
              className="vidio_one"
              src={hampyVideo}
              width="600"
              autoPlay
              muted
              style={{ display: "block", backgroundColor: "#000" }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="hampyVidio_p">
            <p>
              Ben je het beu telkens uren te verspillen aan de was? De mobiele
              wasservice van Hampy lost jouw problemen op. Altijd heerlijk
              frisse en propere kledij: ecologisch gewassen, elke (werk)dag van
              de week.
            </p>
            <div className="wasservice">
              <PiTShirtDuotone />
              <LuLeafyGreen />
              <TbWashEco />
            </div>
          </div>
        </div>
      </div>
        <div className="happytoyou">
        <p>How we make you happy</p>
      </div>
      <div className="Happy-c">
      <div className="list">
        <ol>
          <li>Jij zorgt voor de vuile was.</li>
          <img
            className="list_img"
            src="https://www.hampy.be/Portals/0/dtxArt/blok-galerij/afbeelding/bestand/WIT20240305142422editmed_klein_1c18f332-f0bc-4063-b266-c18f900473c2.jpg"
            alt=""
            srcset=""
          />
          <li>Gebruik de Hampy-bags en plan jouw afhaalmoment in de app.</li>{" "}
          <img
            className="list_img"
            src="https://www.hampy.be/Portals/0/dtxArt/blok-galerij/afbeelding/bestand/WIT20240305142721editcropmed_klein_ccf1a431-0617-4342-ac5f-507862445003.jpg"
            alt=""
            srcset=""
          />
          <li>Wij wassen en schrobben met ecologische producten.</li>{" "}
          <img
            className="list_img"
            src="https://www.hampy.be/Portals/0/dtxArt/blok-afbeelding/bestand/WIT20240305114823editcrop2medpre_klein_831c14f6-4991-44f8-bb56-6a0a8cf46295.jpg"
            alt=""
          />
          <li>Heerlijk frisse was wordt aan je deur geleverd.</li>
          <img
            className="list_img"
            src="https://www.hampy.be/Portals/0/dtxArt/blok-afbeelding/bestand/WIT20240305161721editcropmedpre_klein_29ab5104-9551-45d8-acc9-733407a9c928.jpg"
            alt=""
          />
          <li>Everybody hampy!</li>
          <img
            className="list_img"
            src="https://www.hampy.be/Portals/0/dtxArt/blok-afbeelding/bestand/WIT20240305110301editcropmedpre_klein_d7ad4dfb-babe-4627-97d9-70a16b538cf8.jpg"
            alt=""
            srcset=""
          />
        </ol>
      </div>
      <div className="refrral">
        <div className="referral-1">
          <h1>
            Locaties <IoIosArrowForward className="arrow" />
          </h1>
          <h3>Ontdek waar Hampy momenteel actief is.</h3>
        </div>
        <div className="referral-2">
          <h1>
            Veelgeselde vragn <IoIosArrowForward className="arrow" />
          </h1>

          <h3>Zit je met vragen? Hier vind je alle antwoorden.</h3>
        </div>
      </div>
      <div className="Praise-card">
        <div>
          <img
            className="Praise-img"
            src="https://www.hampy.be/Portals/0/dtxArt/blok-galerij/afbeelding/bestand/WIT20240305140808editmedpre_medium_6db95fbe-4779-4088-9b02-349b4fb274c8.jpg"
            alt=""
            srcset=""
          />
        </div>
        <div className="Praise-list">
          <h1 className="praise">Praise</h1>
          <div className="Washing">
            Washing <span>(perbeg)</span>
          </div>

          <div className="size-prise">
          
            <div className="Small">
              <h1><HiCheck className="HIcheck"/>Small</h1>
              <h1>₹100/launadry Bag</h1>
            </div>
            <div className="Medium">
              <h1> <HiCheck className="HIcheck"/>Medium</h1>
              <h1>₹150/launadry Bag</h1>
            </div>
            <div className="Large">
              <h1> <HiCheck className="HIcheck"/>Large</h1>
              <h1>₹200/launadry Bag</h1>
            </div>
            <div className="dry-cleaning">
            <h1>Dry Cleaning(per Piece)</h1>
            <h1>₹500</h1>
            </div>
            <div className="read-more"><FaArrowRight className="FaArrowRight"/>Read more</div>
          </div>
        </div>
      </div>
      <Reviews/>
     <Gallery/>
     {/* <Gallery2/> */}
     </div>
     <Footer/>
  
    </>
  );
};

export default Home;
