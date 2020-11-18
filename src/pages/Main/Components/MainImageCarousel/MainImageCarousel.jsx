import React, { Component } from "react";
import Slider from "react-slick";
import { CAROUSEL_DATA } from "../../mainData";
import "./MainImageCarousel.scss";

class MainImageCarousel extends Component {
  constructor() {
    super();
    this.slider = React.createRef();
  }

  next = () => {
    this.slider.current.slickNext();
  };

  previous = () => {
    this.slider.current.slickPrev();
  };

  render() {
    const settings = {
      arrows: false,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    console.log(CAROUSEL_DATA);
    return (
      <section className="carouselContainer">
        <Slider ref={this.slider} {...settings}>
          {CAROUSEL_DATA.map((carouselData) => (
            <div key={carouselData.id} className="imageContainer">
              <img src={carouselData.imageUrl} alt="main carousel" />
              <div className={`textContainer ${carouselData.isDark ? "whiteText" : ""}`}>
                <div className="largeText">
                  {carouselData.title.map((title, idx) => (
                    <p key={idx}>{title}</p>
                  ))}
                </div>
                <div className="smallText">
                  {carouselData.context.map((context, idx) => (
                    <p key={idx}>{context}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <button className="controlButton prevButton" onClick={this.previous}>
          {"<"}
        </button>
        <button className="controlButton nextButton" onClick={this.next}>
          {">"}
        </button>
      </section>
    );
  }
}

export default MainImageCarousel;
