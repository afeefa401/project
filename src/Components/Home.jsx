import React from "react";

import BannerImage from "../Images/items.webp";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
    
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Cakey & Fluffy
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like filtering, battering, baking
            & garnishing, so you can enjoy them wholeheartedly.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" style={{borderRadius: "0px"}} />
        </div>
      </div>
    </div>
  );
};

export default Home;