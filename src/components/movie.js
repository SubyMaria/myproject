import React, { Component } from "react";
import "../App.css";
import { Container, Stack } from "react-bootstrap";

export default class movie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  componentDidMount = () => {
    this.getMovieDetails();
  };
  getMovieDetails = async () => {
    let rawMovieData = await fetch(
      "https://services.brninfotech.com/tws/MovieDetails.php?mediaType=movies"
    );
    let convertedData = await rawMovieData.json();
    this.setState({ movies: convertedData });
    console.log(convertedData);
  };
  render() {
    return (
      <Container fluid>
           
          {this.state.movies.map((movie) => (
            <div  className="mainBox">
              <img className="imageBox" src={"https://services.brninfotech.com/tws/" + movie.posters[0]}></img>
              <div>
             <video
              className="videoTab"
              src={"https://services.brninfotech.com/tws/" + movie.trailers[0]}
              controls
            ></video>
            </div>
            <h6 className="movieDetails">Title:{movie.title}</h6>
            <h6 className="movieDetails">Director:{movie.director}</h6>
            
            </div>
          ))}

       
      </Container>
    );
  }
}
