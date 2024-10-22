import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Loader from '../loader/loader';
import CountryItemList from '../country-item-list/country-item-list';

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/countries/`
        );
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Country List</h1>
      <CountryItemList countries={countries}></CountryItemList>
    </div>
  );
};

export default CountryList;
