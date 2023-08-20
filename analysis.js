/* globals Chart:false */

(() => {
    'use strict'
  
    // Graphs
    const ctx = document.getElementById('myChart')
    // eslint-disable-next-line no-unused-vars
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          'Question 1',
          'Question 2',
          'Question 3',
          'Question 4',
          'Question 5',
          'Question 6',
          'Question 7'
        ],
        datasets: [{
          data: [
            11,
            12,
            13,
            14,
            25,
            24,
            26
          ],
          lineTension: 0,
          backgroundColor: 'transparent',
          borderColor: '#007bff',
          borderWidth: 4,
          pointBackgroundColor: '#007bff'
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            boxPadding: 3
          }
        }
      }
    })
  })()
  