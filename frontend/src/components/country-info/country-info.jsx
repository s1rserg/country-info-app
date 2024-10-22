import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PopulationChart from './components/population-chart/population-chart';
import styles from './styles.module.css';
import Loader from '../loader/loader';
import CountryItemList from '../country-item-list/country-item-list';

const CountryInfo = () => {
  const { code } = useParams();
  const [country, setCountry] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCountryInfo = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/countries/${code}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch country with code ${code}`);
        }
        const data = await response.json();
        setCountry(data);
        setBorderCountries(data.borders);
      } catch (error) {
        console.error('Error fetching country details:', error);
        setError(true);
      }
    };
    fetchCountryInfo();
  }, [code]);

  if (error) {
    return (
      <div>
        <p>Error: No data available for country with the code {code}.</p>
        <Link to="/">Return to the main page</Link>
      </div>
    );
  }

  if (!country) return <Loader></Loader>;

  const populationData = country.populationData;

  return (
    <div className={styles.container}>
      <div className={styles['name-flag-container']}>
        <h1 className={styles.heading}>{country.name}</h1>
        <img
          src={country.flagUrl}
          alt={`${country.name} flag`}
          className={styles.flag}
        />
      </div>

      <h2>Bordering Countries:</h2>
      <CountryItemList countries={borderCountries}></CountryItemList>

      {populationData && (
        <div className={styles['population-chart']}>
          <PopulationChart populationData={populationData} />
        </div>
      )}

      <Link to="/" className={styles['back-link']}>
        ← Back to Country List
      </Link>
    </div>
  );
};

export default CountryInfo;
