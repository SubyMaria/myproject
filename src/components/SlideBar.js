import "../App.css";
import {Carousel} from "react-bootstrap";
import React, { Component } from "react";
export default class Navigation extends Component {
  render() {
    return (
        <Carousel>
        <Carousel.Item interval={500}>
          <img
            className="d-block  imageHeight"
            src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_InsideEdgeS3Launch/2608b794-a9a0-431b-b903-ecafd391c7f8._UR3000,600_SX3000_FMwebp_.jpeg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block imageHeight"
            src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_WheelOfTimeReview1/b4836bea-c691-4012-8367-5e66bff29fe4._UR3000,600_SX3000_FMwebp_.jpeg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  imageHeight"
            src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_BaliTheVictimMarathiLaunch/1bbd2d8f-557b-4b96-ba07-9b7d8041bdd8._UR3000,600_SX3000_FMwebp_.jpeg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}
