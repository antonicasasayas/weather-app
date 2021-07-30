import React, { useState, useEffect } from "react";
import styles from '../styles/SearchBar.module.css'
const SearchBar = () => {
    const [city, setCity] = useState("");
    const [searchedCity, setSearchedCity] = useState({});
    

  const getCity = async () => {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d3d651c47003ab45403aed1bf195bef0&units=metric`
    );
    setSearchedCity(await res.json());
    console.log(searchedCity)
  };


    

  const handleSubmit = (e) => {
    e.preventDefault();
    
    getCity();
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <input
          placeholder="City"
          value={city}
          onChange={(e) => handleChange(e)}
          type="text"
          name="city"
        />
        <button type="submit">Search</button>
      </form>
      {searchedCity.main && Math.round(searchedCity.main.temp )}ºC
    </div>
  );
};

export default SearchBar;
