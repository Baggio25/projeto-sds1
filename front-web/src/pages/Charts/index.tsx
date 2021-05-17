
import React from 'react';

import Filters from '../../components/Filters';
import './styles.css';
import { barOptions, pieOptions } from './chart-options';
import Chart from 'react-apexcharts';

const chartData = [
  {
    x: 'Rodrigo',
    y: 10
  },
  {
    x: 'João',
    y: 20
  },
  {
    x: 'Maria',
    y: 30
  }
]

const Charts = () => {
  return (
    <div className="page-container">
      <Filters link="/records" linkText="VER TABELA"/>
      <div className="chart-container">
        <div className="top-related">
          <h1 className="top-related-title">
            Jogos mais votados
          </h1>
          <div className="games-container">
            <Chart 
              options={barOptions}
              type="bar"
              width="700"
              height="150" 
              series={[{ data: chartData }]}
            />
          </div>
        </div>
        <div className="charts">
          <div className="platform-chart">
            <h2 className="chart-title">Plataformas</h2>
            
          </div>
          <div className="gender-chart">
            <h2 className="chart-title">Gêneros</h2>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Charts;