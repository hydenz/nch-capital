var optionsChart4 = {
  series: [
    {
      name: 'IBX100',
      data: [[25, 150]],
    },
    {
      name: 'NCH Maracanã FIA',
      data: [[14, 139]],
    },
    {
      name: 'Ibovespa',
      data: [[26, 127]],
    },
  ],
  chart: {
    height: 350,
    type: 'scatter',
    zoom: {
      enabled: true,
      type: 'xy',
    },
  },
  tooltip: {
    x: {
      formatter: (value) => `Risco: ${value}%`,
    },
    y: {
      formatter: (value) => `Retorno: ${value}%`,
    },
  },
  title: {
    text: 'Risco X Retorno',
    align: 'center',
  },
  xaxis: {
    title: {
      text: 'Risco/Vol Ano',
    },
    tickAmount: 2,
    type: 'numeric',
    min: 10,
    max: 30,
    labels: {
      formatter: (value) => `${value}%`,
    },
  },
  yaxis: {
    title: {
      text: 'Retorno desde o início',
    },
    tickAmount: 3,
    min: 120,
    max: 150,
    labels: {
      formatter: (value) => `${value}%`,
    },
  },
};

const chart4 = new ApexCharts(document.querySelector('#chart4'), optionsChart4);
chart4.render();
