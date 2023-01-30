import Head from 'next/head'
import Image from 'next/image'
import AnimeCard from '../components/animeCard'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <AnimeCard /> 
    </div>
  )
}
