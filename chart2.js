const optionsChart2 = {
  chart: {
    height: 450,
    type: 'radialBar',
  },
  series: [84.2],
  colors: ['#20E647'],
  responsive: [
    {
      breakpoint: 1600,
      options: {
        // chart: {
        //   // height: 350,
        // },
        legend: {
          floating: false,
          offsetX: 0,
        },
      },
    },
  ],
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      track: {
        background: '#333',
        startAngle: -90,
        endAngle: 90,
      },
      dataLabels: {
        name: {
          show: true,
        },
        value: {
          fontSize: '30px',
          show: true,
          formatter: (value) => `${value.toFixed(2)}%`,
        },
      },
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      gradientToColors: ['#87D4F9'],
      stops: [0, 100],
    },
  },
  stroke: {
    lineCap: 'butt',
  },
  labels: ['%PL da Carteira'],
  legend: {
    show: true,
    offsetX: 100,
    floating: true,
    customLegendItems: [
      'Materiais: 22,86%',
      'Utilities: 10,62%',
      'Bens de capital: 9,04%',
      'Alimentos, Bebidas e Fumo: 6.86%',
      'Serviço do Consumidor: 5,92%',
      'Mercado Imobiliário: 5,24%',
      'Seguros: 5,17%',
      'Transporte: 5,16%',
      'Varejo não Discricionário: 4,97%',
      'Serviços e Software: 4,69%',
      'Finanças: 3,02%',
      'Outros: 0,65%',
    ],
    markers: {
      width: 0,
    },
  },
};

const chart2 = new ApexCharts(document.querySelector('#chart2'), optionsChart2);
chart2.render();
