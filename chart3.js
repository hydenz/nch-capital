import { drawdown } from './data';

const optionsChart3 = {
  series: [
    {
      name: 'DrawDown FIA',
      data: drawdown,
    },
    {
      name: 'abc',
      data: [1, 2, 3],
    },
  ],
  title: {
    text: 'Max Drawdown',
    align: 'center',
  },
  chart: {
    id: 'area-datetime',
    type: 'area',
    height: 350,
    zoom: {
      autoScaleYaxis: true,
    },
    animations: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 0,
    style: 'hollow',
  },
  xaxis: {
    type: 'datetime',
    tickAmount: 6,
  },
  yaxis: {
    labels: {
      formatter: (value) => value.toFixed(1),
    },
  },
  tooltip: {
    x: {
      format: 'dd MMM yyyy',
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 100],
    },
  },
};

const chart3 = new ApexCharts(document.querySelector('#chart3'), optionsChart3);
chart3.render();
