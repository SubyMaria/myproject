import "./App.css";
import Navigation from "./components/navigation.js"
import CarouselBar from "./components/SlideBar.js"
import Movie from "./components/movie.js"

import React, { Component } from "react";
import { Container} from "react-bootstrap";
export default class App extends Component {
  render() {
    return (
     <Container className="mainBox1" fluid>
        <Navigation></Navigation>
        <CarouselBar></CarouselBar>
        <h5 className="continueTitle">Continue Watching</h5>
        <Movie></Movie> 
     </Container>
    );
  }
}
