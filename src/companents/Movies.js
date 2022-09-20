import React from 'react';
import Movie from './movie';

export default function Movies({movies}) {

    return (
        <div className='cards container'>
            {
                movies !== undefined 
                ?
                movies.map(movie => (
                    <Movie key = {movie.imdbID} movie ={movie}/>
                ))
                :
                <h5>Siz kiritgan kino topilmadi</h5>
            }
        </div>
    );
}