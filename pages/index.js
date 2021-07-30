import Head from 'next/head'
import Image from 'next/image'
import SearchBar from '../components/SearchBar'
import styles from '../styles/Home.module.css'

export default function Home({data}) {


  

  return (
    <div className={styles.container}>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Know the weather in your city" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>What's the weather like in your city?</h1>
        <SearchBar />
      </div>

      <Image
        src="/images/3324647.jpg"
        width="500"
        height="500"
        alt="woman-checking-weather"
      />
    </div>
  );
}

export async function getServerSideProps() {

  const res = await fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=London&appid=d3d651c47003ab45403aed1bf195bef0"
  );
  const data = await res.json()
  return {
    props: {data}, 
  };
}
