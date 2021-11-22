
import React from 'react'
import { Pie } from 'react-chartjs-2'

const data = {
  
    datasets: [
      {
        label: '# of Votes',
        data: [100],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
};
const config = {
  type: 'pie',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        display: false
      },
      title: {
        display: false,
        text: 'Chart.js Pie Chart'
      }
    }
  },
};
  
const PieChart = () =>{
    return(
        <div style={{width:120, height:110}}>
        <Pie data={data} config={config }/>
       </div>
    )
}


export default PieChart