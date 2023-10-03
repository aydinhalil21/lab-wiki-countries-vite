import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        console.log(response);
        setCountryData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
      });
  }, []);

  return (
    <>
      <div className="container" style={{ maxHeight: "90vh", overflow: "scroll" }}>
        <h1 style={{ fontSize: "24px" }}>WikiCountries: Your Guide to the World</h1>
        <ul className="list-group">
          {countryData.map((country) => (
            <li key={country._id}>
              <Link className="navbar-brand" to={`/country-details/${country.alpha3Code}`}>
                <p className="list-group-item list-group-item-action">{country.name.common}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default HomePage;
