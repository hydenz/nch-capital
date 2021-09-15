const optionsChart5 = {
  series: [
    {
      data: [
        {
          x: 'Materiais',
          y: 8,
        },
        {
          x: 'Utilities',
          y: 3,
        },
        {
          x: 'Alimentos, Bebidas e Fumo',
          y: 2,
        },
        {
          x: 'Bens de Capital',
          y: 2,
        },
        {
          x: 'Finanças',
          y: 1,
        },
        {
          x: 'Mercado Imobiliário',
          y: 1,
        },
        {
          x: 'Outros',
          y: 1,
        },
        {
          x: 'Seguros',
          y: 1,
        },
        {
          x: 'Serviço do Consumidor',
          y: 1,
        },
        {
          x: 'Serviços e Software',
          y: 1,
        },
        {
          x: 'Transporte',
          y: 1,
        },
        {
          x: 'Varejo não Discricionário',
          y: 1,
        },
      ],
    },
  ],
  legend: {
    show: false,
  },
  dataLabels: {
    formatter: (value, opts) => `${value}: ${opts.value}`,
    style: {
      colors: new Array(12).fill('#000'),
      fontWeight: 300,
    },
  },
  chart: {
    height: 350,
    width: '85%',
    type: 'treemap',
  },
  title: {
    text: 'Nº de Ações por Setor',
    align: 'center',
  },
  colors: [
    '#70b0e0',
    '#fcb714',
    '#2878bd',
    '#0eb194',
    '#108372',
    '#af916d',
    '#c4b07b',
    '#f15628',
    '#6f9edb',
    '#fee266',
    '#5da9fd',
    '#4ac5bb',
  ],
  plotOptions: {
    treemap: {
      distributed: true,
      enableShades: false,
    },
  },
};

const chart5 = new ApexCharts(document.querySelector('#chart5'), optionsChart5);
chart5.render();
