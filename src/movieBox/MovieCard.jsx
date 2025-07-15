import React from "react";
import star from '../assets/star.svg'
import tag from '../assets/tag.svg'
import { getImageUrl } from './../utils/utility'; 
function MovieCard({movie}) {
  return (
    <figure class="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
      <img class="w-full object-cover" src={getImageUrl(movie.cover)}  alt={movie.title} />
      <figcaption class="pt-4">
        <h3 class="text-xl mb-1"> {movie.title} </h3>
        <p class="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
        <div class="flex items-center space-x-1 mb-5">
          <img src={star} width="14" height="14" alt="star" />
          <img src={star} width="14" height="14" alt="star" />
          <img src={star} width="14" height="14" alt="star" />
          <img src={star} width="14" height="14" alt="star" />
        </div>
        <a
          class="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          href="#"
        >
          <img src={tag} alt="tag" />
          <span>${movie.price} | Add to Cart</span>
        </a>
      </figcaption>
    </figure>
  );
}

export default MovieCard;
