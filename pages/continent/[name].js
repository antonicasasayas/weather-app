import WeatherCard from '../../components/WeatherCard'
import styles from "../../styles/Continent.module.css"
const Continent = ({ data }) => {
  console.log(data)
  return (
    <div className={styles.cardsContainer}>
      {data.map((city, index) => {
        return <WeatherCard key={index} {...city} />;
      })}
    </div>
  );
};

export default Continent;

export async function getStaticProps({params}) {
  const res = await fetch(`http://weather-app.vercel.app/api/${params.name}`);
  const data = await res.json();
  return {
    props: { data },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { name: 'europe' } }, 
      { params: { name: 'usa' } }, 
      { params: { name: 'asia' } }, 
    ],
    fallback:  false 
  };
}
