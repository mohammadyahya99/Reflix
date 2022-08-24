import React from "react";
import Movie from "./Movie";
import "../style/catalog.css";

class Catalog extends React.Component {
  toggleRent = (movieID) => {
    this.props.toggleRent(movieID);
  };

  updateSearchedWord = (event) => {
    this.props.updateSearchedWord(event.target.value);
  };
  render() {
    let budget = this.props.getBudget();
    return (
      <div>
        <div className="budget">
          <h1>{budget}</h1>
        </div>
        <div className="inputbar">
          <div className="serchDiv">Search</div>
          <input
            className="search"
            type="text"
            value={this.searchedWord}
            onChange={this.updateSearchedWord}
          ></input>
        </div>
        <div className="moviesContainer">
          <h1>Rented</h1>
          <div className="rentedMovies">
            {this.props.movies.map((movie) =>
              movie.isRented ? (
                <Movie toggleRent={this.toggleRent} movie={movie} />
              ) : null
            )}
          </div>
        </div>
        <div className="moviesContainer">
          <h1>Catalog</h1>
          <div className="rentedMovies">
            {this.props.movies.map((movie) =>
              !movie.isRented ? (
                <Movie toggleRent={this.toggleRent} movie={movie} />
              ) : null
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Catalog;
