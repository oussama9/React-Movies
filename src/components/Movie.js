import React from 'react'
import './Movie.css'

const IMAGE_URL ="https://image.tmdb.org/t/p/w1280";
const DEFAULT_IMAGE="https://www.scifi-movies.com/images/site/en/affiche_nondisponible.jpg";
const setVoteClass = (vote) => {
  if (vote >= 8) {
      return 'green'
  } else if (vote >= 6){
      return 'orange'
  } else {
      return 'red'
  }
}

function Movie({title,overview,poster_path,vote_average}) {
    
  return (
    <div className='movie'>
        <img src={poster_path ? (IMAGE_URL+poster_path) : DEFAULT_IMAGE} alt={title}/>
        <div className="movie-info">
            <h3>{title}</h3>
            <span className={
              `tag ${setVoteClass(vote_average)}`
            }>{vote_average}</span>
        </div>
        <div className="movie-over">
            <h2>Overview</h2>
            <p>{overview}</p>
        </div>
        
    </div>
  )
}

export default Movie