import React from 'react'

function MovieDisplay() {
  return (
    <div>
      <h1>{props.movie.Title}</h1>
      <h1>{props.movie.Year}</h1>
      <h1>{props.movie.Rated}</h1>
      <hr />
      <img src={props.movie.Poster} />
      <h3>Starring: {props.movie.Actors}</h3>
      <hr />
      <h3>{props.movie.Plot}</h3>
      <h2>Awarded: {props.movie.Awards}</h2>
    </div>
  )
}

export default MovieDisplay
