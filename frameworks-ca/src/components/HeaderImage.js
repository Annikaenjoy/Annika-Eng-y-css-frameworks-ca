import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Carousel1 from "../img/CarouselImages/carousel-1.jpg";
import Carousel2 from "../img/CarouselImages/carousel-2.jpg";
import Carousel3 from "../img/CarouselImages/carousel-3.jpg";

const CarouselImages = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={Carousel1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Carousel2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Carousel3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselImages;
