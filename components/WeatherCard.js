import styles from '../styles/WeatherCard.module.css'

const WeatherCard = ({ name, main, weather }) => {
    return (
      <table className={styles.table}>
        <thead>
          <tr>
            <th colSpan="2">{name}</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.firstRow}>
            <td className={styles.greyTd}>Temperature</td>
            <td className={styles.infoTd}>{Math.round(main.temp)}ºC</td>
          </tr>
          <tr>
            <td className={styles.greyTd}>Weather</td>
            <td className={styles.infoTd}>
              {weather[0].description.slice(0, 1).toUpperCase()}
              {weather[0].description.slice(1)}
            </td>
          </tr>
          <tr>
            <td className={styles.greyTd}>Max temperature</td>
            <td className={styles.infoTd}>{Math.round(main.temp_max)}ºC</td>
          </tr>
          <tr>
            <td className={styles.greyTd}>Min temperature</td>
            <td className={styles.infoTd}>{Math.round(main.temp_min)}ºC</td>
          </tr>
        </tbody>
      </table>
    );
}

export default WeatherCard
