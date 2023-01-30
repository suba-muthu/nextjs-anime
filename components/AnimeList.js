import React from 'react'
import AnimeCard from './animeCard'

export default function AnimeList({animes}) {
  return (
    <div>
        {
            animes.map((item) => 
            <AnimeCard key={item.mal_id} item={item}/>
            )
        }
    </div>
  )
}
