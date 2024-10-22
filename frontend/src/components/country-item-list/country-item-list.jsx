import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const CountryItemList = ({ countries }) => {
  return (
    <ul className={styles['country-list']}>
      {countries.length > 0 ? (
        countries.map(country => (
          <li key={country.countryCode} className={styles['country-item']}>
            <Link
              to={`/countries/${country.countryCode}`}
              className={styles['country-link']}
            >
              {country.name || country.commonName}
            </Link>
          </li>
        ))
      ) : (
        <p>No countries available.</p>
      )}
    </ul>
  );
};

CountryItemList.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      countryCode: PropTypes.string.isRequired,
      commonName: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};

export default CountryItemList;
