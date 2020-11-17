import React, { useState, useEffect } from "react";

const CovidViz = () => {
  const [countries, setCountries] = useState([]);
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    const newInput = e.target.value;
    setInput(newInput);
  };

  useEffect(() => {
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then((data) => {
        data.Countries.sort((countryA, countryB) => {
          return countryB.NewConfirmed - countryA.NewConfirmed;
        });
        setCountries(data.Countries);
      });
  }, [setCountries]);

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={handleInput}
        placeholder="search for a country..."
      />
      <div className="countriesContainer">
        {countries.map((country, idx) => {
          if (
            input.length === 0 ||
            country.Country.startsWith(
              input.charAt(0).toUpperCase() + input.slice(1)
            )
          ) {
            return (
              <div className="countryContainer" key={`country-${idx}`}>
                <div
                  className={`flag flag-icon-background flag-icon-${country.CountryCode.toLowerCase()}`}
                ></div>
                <div className="countryInfo">
                  <div>{country.Country}</div>
                  <div>New Confirmed: {country.NewConfirmed}</div>
                  <div>Total Confirmed: {country.TotalConfirmed}</div>
                  <div>New Deaths: {country.NewDeaths}</div>
                  <div>Total Deaths: {country.TotalDeaths}</div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default CovidViz;
