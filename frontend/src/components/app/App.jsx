import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CountryList from '../country-list/country-list';
import CountryInfo from '../country-info/country-info';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="/countries/:code" element={<CountryInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
