import Head from 'next/head'
import Image from 'next/image'
import AnimeCard from '../components/animeCard'
import styles from '../styles/Home.module.css'
import AnimeList from '../components/AnimeList'
import { useState,useEffect } from "react"

export default function Home() {
  const [animes, setAnimes] = useState([])

  async function FetchData() {
    const data = await fetch("https://api.jikan.moe/v4/anime");
    const animeData = await data.json();
    setAnimes(animeData.data);
    console.log(animeData);
  }

  useEffect(() => {
    FetchData();
  },[]);

  return (
    <div className={styles.container}>
      {
      animes && animes.length ?  <AnimeList animes={animes}/> : "no data"
      }

    </div>
  )
}
