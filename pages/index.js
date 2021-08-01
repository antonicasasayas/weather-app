import Head from 'next/head'
import Image from 'next/image'
import SearchBar from '../components/SearchBar'
import styles from '../styles/Home.module.css'

export default function Home() {


  

  return (
    <div className={styles.container}>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Know the weather in your city" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
        <h1>What&apos;s the weather like in your city?</h1>
        <SearchBar />
    

      <Image
        src="/images/3324647.jpg"
        width="500"
        height="500"
        alt="woman-checking-weather"
      />
    </div>
  );
}


