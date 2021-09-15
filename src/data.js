moment.locale('pt-BR');

const profit = {
  ibx: [],
  fia: [],
};

const drawdowns = {
  ibov: [],
  fia: [],
};

const ibxRent = [];
const fiaRent = [];
const drawdownFia = [];
const drawdownIbov = [];

let i = 100;
let j = 100;
let k = 0;
let l = 0;
const startingDate = moment('05/08/2013');
const finalDate = moment('06/30/2021');

// while (true) {
//   if (nextDate.year() === 2021 && nextDate.month() === 7) break;
//   if (![0, 6].includes(nextDate.day())) {
//     ibrx.push({ y: i, x: nextDate.format('YYYY-MM-DD') });
//     fundo.push({ y: j, x: nextDate.format('YYYY-MM-DD') });
//     drawdownFia.push([nextDate.valueOf(), k]);
//     drawdownIbov.push([nextDate.valueOf(), l]);
//     i += Math.random() >= 0.5 ? +1.03 : -1;
//     j += Math.random() >= 0.48 ? +1.02 : -1;
//     k += Math.random() >= 0.5 ? -0.012 : +0.014;
//     l += Math.random() >= 0.5 ? -0.0125 : +0.013;
//     if (k > 0) k = 0;
//     if (l > 0) l = 0;
//   }
//   nextDate.add(1, 'days');
// }

// Generating random data for charts per day
for (let m = startingDate; m.diff(finalDate, 'days') <= 0; m.add(1, 'days')) {
  if (![0, 6].includes(m.day())) {
    profit.ibx.push({ y: i, x: m.format('YYYY-MM-DD') });
    profit.fia.push({ y: j, x: m.format('YYYY-MM-DD') });
    drawdowns.fia.push([m.valueOf(), k]);
    drawdowns.ibov.push([m.valueOf(), l]);
    i += Math.random() >= 0.5 ? +1.03 : -1;
    j += Math.random() >= 0.48 ? +1.02 : -1;
    k += Math.random() >= 0.5 ? -0.012 : +0.014;
    l += Math.random() >= 0.5 ? -0.0125 : +0.013;
    if (k > 0) k = 0;
    if (l > 0) l = 0;
  }
}

export { profit, drawdowns };
