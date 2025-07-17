import React, { useContext, useState } from "react";

import tag from "../assets/tag.svg";
import { getImageUrl } from "./../utils/utility";
import Favorite from "./Favorite";
import MovieDeatails from "./MovieDeatails";
import { MovieContext } from "../Context";

function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const {cartData, setCartData} = useContext(MovieContext)
  
  const handleMovieSeclection = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };
  const handleModalClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  const handleAddToCart = (event, movie) => {
   event.stopPropagation();
   
   const found = cartData.find((item) => {
     return item.id === movie.id ;
   })

   if(!found){
    setCartData([...cartData, movie])
   }
   else{
    console.error(` The movie ${movie.title} has been added already `)
   }
   
  }

  return (
    <>
      {showModal && (
        <MovieDeatails movie={selectedMovie} onCloseModal={handleModalClose} />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a onClick={() => handleMovieSeclection(movie)} href="#">
          <img
            className="w-full object-cover"
            src={getImageUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1"> {movie.title} </h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="  flex  items-center space-x-1 mb-5">
              <Favorite value={movie.rating} />
            </div>
            <button 
            onClick={(event) => handleAddToCart(event,movie) }
            className="bg-primary w-full rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm">
              <img src={tag} alt="tag" />
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
}

export default MovieCard;
