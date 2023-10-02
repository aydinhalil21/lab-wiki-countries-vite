import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function CountryDetails() {

    const {countryId} = useParams()
    const [country, setCountry] = useState();
    console.log(country);
    const [isLoading, setIsLoading] = useState(true)
    const fetchCountry = async () => {
        const response = await fetch(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
        if (response.ok) {
          const parsed = await response.json()
          console.log(parsed)
          setCountry(parsed)
          setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchCountry()
    }, [countryId])

    return (<>{isLoading ? (
        <h1>Loading...</h1>
    ) : (
        <>
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
        <h1>{country.name.common}</h1>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
        <ul>Borders:
            {country.borders.map(border => {
                return (
                    <Link key={country._id} to={`/country-details/${border}`}><li>{border}</li></Link>
                )
            })}
            
        </ul>
        </>
    )}</>)

    
}

export default CountryDetails;
