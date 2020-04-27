import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Banner.sass'
import BannerCard from '../BannerCard/BannerCard'

export default class Banner extends Component {
  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="banner-container">
          <div className="banner-wrapper">
            <Slider {...settings}>
            <div>
                <BannerCard 
                    img="/assets/banner/card-1.png"
                    title="Cowhide Standard Crew" 
                    description="White coloured, short-sleeved, printed T-shirt for men by Levi's. This crew-neck T-shirt is made of organic cotton and comes in a regular fit."
                    btn="Shop now"
                />
            </div>
            <div>
                <BannerCard 
                        img="/assets/banner/card-1.png"
                        title="Cowhide Standard Crew"
                        description="White coloured, short-sleeved, printed T-shirt for men by Levi's. This crew-neck T-shirt is made of organic cotton and comes in a regular fit."
                        btn="Shop now"
                    />
            </div>
            <div>
                <BannerCard 
                        img="/assets/banner/card-1.png"
                        title="Cowhide Standard Crew"
                        description="White coloured, short-sleeved, printed T-shirt for men by Levi's. This crew-neck T-shirt is made of organic cotton and comes in a regular fit."
                        btn="Shop now"
                    />
            </div>
            <div>
                <BannerCard 
                        img="/assets/banner/card-1.png"
                        title="Cowhide Standard Crew"
                        description="White coloured, short-sleeved, printed T-shirt for men by Levi's. This crew-neck T-shirt is made of organic cotton and comes in a regular fit."
                        btn="Shop now"
                    />
            </div>
            <div>
                <BannerCard 
                        img="/assets/banner/card-1.png"
                        title="Cowhide Standard Crew"
                        description="White coloured, short-sleeved, printed T-shirt for men by Levi's. This crew-neck T-shirt is made of organic cotton and comes in a regular fit."
                        btn="Shop now"
                    />
            </div>
            </Slider>
          </div>
      </div>
    );
  }
}