import React from "react";
import "./reviews.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


// ✅ Only define reviews once
const reviewsData = [
  {
    name: "W. Van Branteghem",
    text: `Aanvankelijk was ik sceptisch over het idee van een mobiele
    wasservice, maar Hampy heeft de verwachtingen overtroffen. Ze waren
    punctueel, efficiënt en de kleding kwam helemaal proper terug.
    Happy, hampy customer!`,
  },
  {
    name: "W. Van Branteghem",
    text: `Aanvankelijk was ik sceptisch over het idee van een mobiele
    wasservice, maar Hampy heeft de verwachtingen overtroffen. Ze waren
    punctueel, efficiënt en de kleding kwam helemaal proper terug.
    Happy, hampy customer!`,
  },
];

const Reviews = () => {
  // ✅ Define slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
    <div className="reviews" style={{ fontFamily: "MyFont" }}>
      <h1>Reviews</h1>
      <div className="reviews-carts">
        <div className="reviews-slider">
          <Slider {...settings}>
            {reviewsData.map((review, index) => (
              <div className="reviews-cart" key={index}>
                <h2>{review.name}</h2>
                <p>{review.text}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Reviews;
