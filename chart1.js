import { ibrx, fundo } from './data';

const optionsChart1 = {
  series: [
    {
      name: 'IBX100',
      data: ibrx,
    },
    {
      name: 'NCH Maracanã FIA',
      data: fundo,
    },
  ],
  chart: {
    animations: {
      enabled: false,
    },
    type: 'area',
    stacked: false,
    height: 350,
    zoom: {
      type: 'x',
      enabled: true,
      autoScaleYaxis: true,
    },
    toolbar: {
      autoSelected: 'zoom',
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 0,
  },
  title: {
    text: 'Rentabilidade IBX vs Fundo',
    align: 'center',
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.5,
      opacityTo: 0,
      stops: [0, 90, 100],
    },
  },
  yaxis: {
    labels: {
      formatter: (value) => value.toFixed(0),
    },
  },
  xaxis: {
    type: 'datetime',
  },
  tooltip: {
    shared: true,
    y: {
      formatter: (value) => value.toFixed(2).replace('.', ','),
    },
  },
};

const chart = new ApexCharts(document.querySelector('#chart1'), optionsChart1);
chart.render();
