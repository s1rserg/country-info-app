import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

const PopulationChart = ({ populationData }) => {
  const years = populationData.map(data => data.year);
  const populations = populationData.map(data => data.value);

  const data = {
    labels: years,
    datasets: [
      {
        label: 'Population Over Time',
        data: populations,
        borderColor: 'rgba(100, 108, 255, 1)',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Year',
          color: '#FFF',
        },
        ticks: {
          color: '#FFF',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Population',
          color: '#FFF',
        },
        ticks: {
          color: '#FFF',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Population Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

PopulationChart.propTypes = {
  populationData: PropTypes.arrayOf(
    PropTypes.shape({
      year: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default PopulationChart;
