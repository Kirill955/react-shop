import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderCategories.sass'
import CardCategories from '../CardCategories/CardCategories'


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
      <img src="/assets/arrow-next.svg" alt="" className="categories-btnNext" onClick={onClick} />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
      <img src="/assets/arrow-prev.svg" alt="" className="categories-btnPrev" onClick={onClick} />
  );
}


export default class SliderCategories extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [{
        breakpoint: 1155,
        settings: {
          slidesToShow: 2
        }
      }]
    };
    return (
      <div className="slider-categories">
        <Slider {...settings}>
          <div>
              <CardCategories 
                img="/assets/categories/categories1.png"
                title="BRANDED SHOES" 
                btn="SHOP"
              />
          </div>
          <div>
            <CardCategories 
                img="/assets/categories/categories2.png"
                title="BRANDED TSHIRTS" 
                btn="SHOP"
              />
          </div>
          <div>
            <CardCategories 
                img="/assets/categories/categories3.png"
                title="BRANDED SHOES" 
                btn="SHOP"
              />
          </div>
          <div>
            <CardCategories 
                img="/assets/categories/categories1.png"
                title="BRANDED SHOES" 
                btn="SHOP"
              />
          </div>
          <div>
            <CardCategories 
                img="/assets/categories/categories2.png"
                title="BRANDED TSHIRTS" 
                btn="SHOP"
              />
          </div>
          <div>
            <CardCategories 
                img="/assets/categories/categories3.png"
                title="BRANDED SHOES" 
                btn="SHOP"
              />
          </div>
        </Slider>
      </div>
    );
  }
}