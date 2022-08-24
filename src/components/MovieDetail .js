import React from "react";
import "../style/movieDetail.css";
class MovieDetail extends React.Component {
  render() {
    let movieID = this.props.match.params.movieID;
    let movie;
    for (let i of this.props.movies) {
      if (i.id == movieID) {
        movie = i;
      }
    }
    return (
      <div>
        <div className="movieName">
          <h1>
            {movie.title} ({movie.year})
          </h1>
        </div>
        <img src={movie.img}></img>
        <div className="movieDescription">
          <p>{movie.descrShort}</p>
        </div>
      </div>
    );
  }
}

export default MovieDetail;
