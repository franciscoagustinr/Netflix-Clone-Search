import React from 'react'

// IMGS
import noImage from '../img/claqueta-cine.jpg';
import boatImg from '../img/4001993.png'; 

export const Movies = ({ movies, last }) => {

  const noImageMovie = 'https://imdb-api.com/images/original/nopicture.jpg';

  return (
    <>
      {/* SUBTÍTULO CON VALOR BUSCADO */}
      {
        movies && movies.length > 0 && (
          <h4 className='absolute 
                         ml-9 
                         text-white 
                         text-sm 
                         font-light'
          >
            Similar to <span className='font-semibold pl-1'>{last.toUpperCase()}</span>
          </h4>
        )
      }

      {/* MOVIE LIST  */}
      <div className='moviesList p-8'>
        {
          // MOVIES <= 0
          (movies.length) <= 0 && (
            <div className='pt-4 
                            text-center text-gray-100'>
              <img src={boatImg}
                   className='boat 
                              m-auto 
                              w-52' 
              />
              Search movie to get results
            </div>
          )
        }
        {
          // SI ENCONTRÓ PELÍCULA
          (movies.length) > 0 && (
            movies.map(movie => {
              
              return (
                // MOVIE CARD
                  <div key={movie.id} 
                      className='movie 
                                 relative 
                                 cursor-pointer 
                                 overflow-hidden'>
                    <img key={movie.id} 
                        srcSet={movie.image === noImageMovie ? movie.image = noImage : movie.image} alt={movie.title} 
                        className={movie.image === noImage ? 'h-full rounded object-cover opacity-50' 
                                  :'h-full rounded object-cover'}
                    />
                    {/* MOVIE DESCRIPTION */}
                    <div className='movie-description 
                                    p-4 h-2/5 
                                    rounded 
                                    absolute
                                    flex flex-col flex-nowrap content-center justify-around items-center 
                                    text-white'>
                      <h3 className='m-0 
                                     font-medium 
                                     text-center'> {movie.title} </h3>
                      <p className='font-light 
                                    text-gray-300'> {movie.description} </p>
                    </div>
                  </div>
              )
            })
          )
        }
      </div>
    </>
  )
}