import React from 'react'

export default function MovieList(props) {

    let output = null;
    let list = props.movies; 

    if(list.length > 0){
        output = list.map(movie => {
            return <div key={movie.imdbID}>
                <h2>{movie.Title}</h2>
                <img src={movie.Poster} alt={movie.Title} />
            </div>
        })
    }

    return (
        <div>
            {output}
        </div>
    )
}
