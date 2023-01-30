import Head from 'next/head'
import Image from 'next/image'
import AnimeCard from '../components/animeCard'
import styles from '../styles/Home.module.css'
import AnimeList from '../components/AnimeList'

export default function Home() {
  const anime = [
    {
      id:1,
      title:"hi",
      rating:"5",
      genre:"comedy"
    },
    {
      id:1,
      title:"hiyyyyyyy",
      rating:"4",
      genre:"comedy"
    }
  ];

  return (
    <div className={styles.container}>
      <AnimeList anime={anime}/> 
    </div>
  )
}
