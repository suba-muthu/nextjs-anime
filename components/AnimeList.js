import React from 'react'
import AnimeCard from './animeCard'

export default function AnimeList({anime}) {
  return (
    <div>
        {
            anime.map((item) => 
            <AnimeCard />
            )
        }
    </div>
  )
}
