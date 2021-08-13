import React from 'react';
import {useState} from 'react';

const MovieCard = ({movie}) => {
    const [description, setDescription] = useState(false)

    let path = movie.poster_path;

    
    //Functions for opening and closing description modal boxes:

    const openDescription = () => {
        setDescription(true);
      }
    
      const closeDescription = () => {
        setDescription(false);
      }


    

    return(

        <>
           <div className="card" onClick={openDescription}>
                <img src={`https://image.tmdb.org/t/p/w300/${path}`} alt="Avatar" style={{width: "80%",marginTop: "5px"}}/>
                <div className="container">
                   <h4><b>{movie.title}</b></h4>
                </div>
          </div>
          {description?
                     (
                     <div className="modal">
                       <div className="modal-content">
                         <span onClick={closeDescription} className="close">&times;</span>
                         <h2><div className="description">Description:</div> {movie.overview}</h2>
                         <h2><div className="description">Average rating:</div> {movie.vote_average}</h2>
                         <h2><div className="description">Release date:</div> {movie.release_date}</h2>
                       </div>
                       </div>
                       ) : false
                    }

        </>
            
    )
}


export default MovieCard;