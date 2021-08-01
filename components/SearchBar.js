import React, { useState, useEffect } from "react";
import styles from '../styles/SearchBar.module.css'
import WeatherCard from "./WeatherCard";
const SearchBar = () => {
    const [city, setCity] = useState("");
    const [searchedCity, setSearchedCity] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  

  const getCity = async () => {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`
    );
    setSearchedCity(await res.json());
   
    setIsLoading(false)
  };


    

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchedCity({})
    getCity();
    setIsLoading(true)
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <input
          placeholder="City"
          value={city}
          onChange={(e) => handleChange(e)}
          type="text"
          name="city"
        />
        <button data-testid="button" type="submit">Search</button>
      </form>
      
      <div className={isLoading ? styles.ldsRing : null}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {searchedCity.main && <WeatherCard {...searchedCity} />}
    </div>
  );
};

export default SearchBar;
