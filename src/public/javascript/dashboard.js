

const socket = io('http://104.248.116.77');
moment.locale('es');


let titulo = document.getElementById('titulo');
const btnActualizar = document.getElementById('btnActualizar');
let municipio = document.getElementById('municipio');
let nivelActa = document.getElementById('nivelActa');
let colegiosFaltantes = document.getElementById('colegiosFaltantes');
let totalInscritos = document.getElementById('totalInscritos');
let totalColegios = document.getElementById('totalColegios');
let porcentajeVotosValidos = document.getElementById('porcentajeVotosValidos');
let colegiosComputados = document.getElementById('colegiosComputados');
let porcentajeColegiosComputados = document.getElementById(
  'porcentajeColegiosComputados'
);
let votosNulos = document.getElementById('votosNulos');
let porcentajeVotosNulos = document.getElementById('porcentajeVotosNulos');
let porcentajeColegiosFaltantes = document.getElementById('porcentajeColegiosFaltantes');
let votosObservados = document.getElementById('votosObservados');
let porcentajeVotosObservados = document.getElementById('porcentajeVotosObservados');
let votosEmitidos = document.getElementById('votosEmitidos');
let votosValidos = document.getElementById('votosValidos');
let porcentajeVotosEmitidos = document.getElementById('porcentajeVotosEmitidos');
let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');
let hour = document.getElementById('hour');
let minutes = document.getElementById('minutes');
let fechaDiv = document.getElementById('fecha');
let btnColegios = document.getElementById('colegios-tab');

let municipioUrl = municipio.value.toLowerCase().replace(/\s+/g, '');
let nivelActaUrl = nivelActa.value.toLowerCase();

let chartContainer = document.getElementById('chartContainer');
let chartImgContainer = document.getElementById('chartImgContainer');
let colegiosContainer = document.getElementById('colegiosContainer');
let colegiosCol = document.getElementById('colegiosCol');
let tableVotosContainer = document.getElementById('tableVotosContainer');

const btnGraficosAlianzas = document.getElementById('graficos-rar-tab');
const btnGraficosSinAlianzas = document.getElementById('graficos-sa-tab');
let votosPartidosContainer = document.getElementById('votosPartidos');
let viewer = document.getElementById('viewpdf');

let btnEscanos = document.getElementById('escanos-tab');
let btnDiputados = document.getElementById('diputados-tab');

let resultadosTabs = document.getElementById('resultados-tabs');


const imgs = {
  img1: document.createElement('img'),
  img2: document.createElement('img'),
  img3: document.createElement('img'),
  img4: document.createElement('img'),
  img5: document.createElement('img'),
  img6: document.createElement('img'),
  img7: document.createElement('img'),
  img8: document.createElement('img'),
  img9: document.createElement('img'),
  img10: document.createElement('img'),
  img11: document.createElement('img'),
  img12: document.createElement('img'),
  img13: document.createElement('img'),
  img14: document.createElement('img'),
  img15: document.createElement('img'),
  img16: document.createElement('img'),
  img17: document.createElement('img'),
  img18: document.createElement('img'),
  img19: document.createElement('img'),
  img20: document.createElement('img'),
  img21: document.createElement('img'),
  img22: document.createElement('img'),
  img23: document.createElement('img'),
  img24: document.createElement('img'),
  img25: document.createElement('img'),
  img26: document.createElement('img'),
  img27: document.createElement('img'),
  imgNelson: document.createElement('img'),
  imgBruno: document.createElement('img'),
  imgMartinez: document.createElement('img'),
  imgCarolina: document.createElement('img'),
  imgMayra: document.createElement('img')
};

const imgsTable = {
  img1: document.createElement('img'),
  img2: document.createElement('img'),
  img3: document.createElement('img'),
  img4: document.createElement('img'),
  img5: document.createElement('img'),
  img6: document.createElement('img'),
  img7: document.createElement('img'),
  img8: document.createElement('img'),
  img9: document.createElement('img'),
  img10: document.createElement('img'),
  img11: document.createElement('img'),
  img12: document.createElement('img'),
  img13: document.createElement('img'),
  img14: document.createElement('img'),
  img15: document.createElement('img'),
  img16: document.createElement('img'),
  img17: document.createElement('img'),
  img18: document.createElement('img'),
  img19: document.createElement('img'),
  img20: document.createElement('img'),
  img21: document.createElement('img'),
  img22: document.createElement('img'),
  img23: document.createElement('img'),
  img24: document.createElement('img'),
  img25: document.createElement('img'),
  img26: document.createElement('img'),
  img27: document.createElement('img'),
};

imgs.img1.setAttribute('src', '/images/partidos/pld.png');
imgs.img2.setAttribute('src', '/images/partidos/prm.png');
imgs.img3.setAttribute('src', '/images/partidos/prd.png');
imgs.img4.setAttribute('src', '/images/partidos/prsc.png');
imgs.img5.setAttribute('src', '/images/partidos/alpais.png');
imgs.img6.setAttribute('src', '/images/partidos/phd.png');
imgs.img7.setAttribute('src', '/images/partidos/moda.png');
imgs.img8.setAttribute('src', '/images/partidos/bis.png');
imgs.img9.setAttribute('src', '/images/partidos/pcr.png');
imgs.img10.setAttribute('src', '/images/partidos/dxc.png');
imgs.img11.setAttribute('src', '/images/partidos/famplio.png');
imgs.img12.setAttribute('src', '/images/partidos/udc.png');
imgs.img13.setAttribute('src', '/images/partidos/pqdc.png');
imgs.img14.setAttribute('src', '/images/partidos/plr.png');
imgs.img15.setAttribute('src', '/images/partidos/fp.png');
imgs.img16.setAttribute('src', '/images/partidos/fnp.png');
imgs.img17.setAttribute('src', '/images/partidos/apd.png');
imgs.img18.setAttribute('src', '/images/partidos/verde.png');
imgs.img19.setAttribute('src', '/images/partidos/ppc.png');
imgs.img20.setAttribute('src', '/images/partidos/pal.png');
imgs.img21.setAttribute('src', '/images/partidos/prsd.png');
imgs.img22.setAttribute('src', '/images/partidos/pdp.png');
imgs.img23.setAttribute('src', '/images/partidos/pdi.png');
imgs.img24.setAttribute('src', '/images/partidos/pri.png');
imgs.img25.setAttribute('src', '/images/partidos/pun.png');
imgs.img26.setAttribute('src', '/images/partidos/pnvc.png');
imgs.img27.setAttribute('src', '/images/partidos/pp.png');
imgs.imgNelson.setAttribute('src', '/images/diputados/nelson.png');
imgs.imgBruno.setAttribute('src', '/images/diputados/bruno.png');
imgs.imgMartinez.setAttribute('src', '/images/diputados/martinez.png');
imgs.imgCarolina.setAttribute('src', '/images/diputados/carolina.png');
imgs.imgMayra.setAttribute('src', '/images/diputados/mayra.png');

imgsTable.img1.setAttribute('src', '/images/partidos/pld.png');
imgsTable.img2.setAttribute('src', '/images/partidos/prm.png');
imgsTable.img3.setAttribute('src', '/images/partidos/prd.png');
imgsTable.img4.setAttribute('src', '/images/partidos/prsc.png');
imgsTable.img5.setAttribute('src', '/images/partidos/alpais.png');
imgsTable.img6.setAttribute('src', '/images/partidos/phd.png');
imgsTable.img7.setAttribute('src', '/images/partidos/moda.png');
imgsTable.img8.setAttribute('src', '/images/partidos/bis.png');
imgsTable.img9.setAttribute('src', '/images/partidos/pcr.png');
imgsTable.img10.setAttribute('src', '/images/partidos/dxc.png');
imgsTable.img11.setAttribute('src', '/images/partidos/famplio.png');
imgsTable.img12.setAttribute('src', '/images/partidos/udc.png');
imgsTable.img13.setAttribute('src', '/images/partidos/pqdc.png');
imgsTable.img14.setAttribute('src', '/images/partidos/plr.png');
imgsTable.img15.setAttribute('src', '/images/partidos/fp.png');
imgsTable.img16.setAttribute('src', '/images/partidos/fnp.png');
imgsTable.img17.setAttribute('src', '/images/partidos/apd.png');
imgsTable.img18.setAttribute('src', '/images/partidos/verde.png');
imgsTable.img19.setAttribute('src', '/images/partidos/ppc.png');
imgsTable.img20.setAttribute('src', '/images/partidos/pal.png');
imgsTable.img21.setAttribute('src', '/images/partidos/prsd.png');
imgsTable.img22.setAttribute('src', '/images/partidos/pdp.png');
imgsTable.img23.setAttribute('src', '/images/partidos/pdi.png');
imgsTable.img24.setAttribute('src', '/images/partidos/pri.png');
imgsTable.img25.setAttribute('src', '/images/partidos/pun.png');
imgsTable.img26.setAttribute('src', '/images/partidos/pnvc.png');
imgsTable.img27.setAttribute('src', '/images/partidos/pp.png');

let pld = 0;
let prm = 0;
let prd = 0;
let prsc = 0;
let alpais = 0;
let phd = 0;
let moda = 0;
let bis = 0;
let pcr = 0;
let dxc = 0;
let famplio = 0;
let udc = 0;
let pqdc = 0;
let plr = 0;
let fp = 0;
let fnp = 0;
let apd = 0;
let verde = 0;
let ppc = 0;
let pal = 0;
let prsd = 0;
let pdp = 0;
let pdi = 0;
let pri = 0;
let pun = 0;
let pnvc = 0;
let pp = 0;
let apld = 0;
let aprm = 0;
let afp = 0;
let aalpais = 0;
let averde = 0;
let apdi = 0;
let apnvc = 0;
let afamplio = 0;
let abis = 0;

let diputadosPrm = {};

const escanos = {
  prm: 0,
  pld: 0,
  fp: 0,
  prd: 0,
  alpais: 0,
  moda: 0,
  verde: 0,
  pal: 0,
  famplio: 0,
  pnvc: 0,
  pp: 0
}

let ctx = document.getElementById('myChart');

let myChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: ['PLD Y AL.', 'PRM Y AL.', 'FP Y AL.', 'ALPAIS', 'P. VERDE', 'PDI', 'PNVC'],
    datasets: [
      {
        data: [0, 0, 0, 0, 0, 0, 0],
        backgroundColor: [
          // {{!-- 'rgba(102, 0, 102, 0.3)',
          // 'rgba(54, 162, 235, 0.3)',
          // 'rgba(0, 153, 51, 0.3)',
          // 'rgba(0, 255, 153, 0.3)',
          // 'rgba(204, 255, 102, 0.3)',
          // 'rgba(255, 159, 64, 0.3)',
          // 'rgba(255, 0, 0, 0.3)' --}}
          'rgba(189, 195, 199,0.7)',
          'rgba(189, 195, 199,0.7)',
          'rgba(189, 195, 199,0.7)',
          'rgba(189, 195, 199,0.7)',
          'rgba(189, 195, 199,0.7)',
          'rgba(189, 195, 199,0.7)',
          'rgba(189, 195, 199,0.7)',
        ],
        borderColor: [
          // {{!-- 'rgba(102, 0, 102, 1)',
          // 'rgba(54, 162, 235, 1)',
          // 'rgba(0, 153, 51, 1)',
          // 'rgba(0, 255, 153, 1)',
          // 'rgba(204, 255, 102, 1)',
          // 'rgba(255, 159, 64, 1)',
          // 'rgba(255, 0, 0, 0.1)' --}}
          'rgba(189, 195, 199,1)',
          'rgba(189, 195, 199,1)',
          'rgba(189, 195, 199,1)',
          'rgba(189, 195, 199,1)',
          'rgba(189, 195, 199,1)',
          'rgba(189, 195, 199,1)',
          'rgba(189, 195, 199,1)',
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
          gridLines: {
            color: 'rgba(0, 0, 0, 0)',
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
          gridLines: {
            color: 'rgba(0, 0, 0, 0)',
          },
        },
      ],
    },
    title: {
      text: 'Votos Por Alianzas',
      display: true,
      fontSize: 25,
      padding: 4,
    },
    legend: {
      display: false,
      fontSize: 40,
    },
    plugins: {
      datalabels: {
        align: 'end',
        anchor: 'end',
        backgroundColor: function (context) {
          return context.dataset.backgroundColor;
        },
        borderRadius: 4,
        color: 'black',
        formatter: function (value) {
          return value;
        },
      },
    },
  },
});

$(window).on('load', () => {
  $.ajax({
    url: '/dashboard/todos/presidencial',
    success: function (acta) {
      console.log('onLoad');
      colegiosFaltantes.innerText = acta.colegio.faltantes;
      totalInscritos.innerText = acta.inscritos;
      totalColegios.innerText = acta.colegio.total;
      colegiosComputados.innerText = acta.colegio.computados;
      porcentajeColegiosComputados.innerText = acta.colegio.porcientoComputado + '%';
      porcentajeColegiosFaltantes.innerText = acta.colegio.porcientoFaltante + '%';

      votosEmitidos.innerText = acta.votos.emitidos;
      votosValidos.innerText = acta.votos.validos;
      votosNulos.innerText = acta.votos.nulos;
      votosObservados.innerText = acta.votos.observados;
      porcentajeVotosEmitidos.innerText = acta.votos.porcientoEmitidos + '%';
      porcentajeVotosValidos.innerText = acta.votos.porcientoValidos + '%';
      porcentajeVotosNulos.innerText = acta.votos.porcientoNulos + '%';
      porcentajeVotosObservados.innerText = acta.votos.porcientoObservados + '%';

      pld = acta.votosPartidos.pld;
      prm = acta.votosPartidos.prm;
      prd = acta.votosPartidos.prd;
      prsc = acta.votosPartidos.prsc;
      alpais = acta.votosPartidos.alpais;
      phd = acta.votosPartidos.phd;
      moda = acta.votosPartidos.moda;
      bis = acta.votosPartidos.bis;
      pcr = acta.votosPartidos.pcr;
      dxc = acta.votosPartidos.dxc;
      famplio = acta.votosPartidos.famplio;
      udc = acta.votosPartidos.udc;
      pqdc = acta.votosPartidos.pqdc;
      plr = acta.votosPartidos.plr;
      fp = acta.votosPartidos.fp;
      fnp = acta.votosPartidos.fnp;
      apd = acta.votosPartidos.apd;
      verde = acta.votosPartidos.verde;
      ppc = acta.votosPartidos.ppc;
      pal = acta.votosPartidos.pal;
      prsd = acta.votosPartidos.prsd;
      pdp = acta.votosPartidos.pdp;
      pdi = acta.votosPartidos.pdi;
      pri = acta.votosPartidos.pri;
      pun = acta.votosPartidos.pun;
      pnvc = acta.votosPartidos.pnvc;
      pp = acta.votosPartidos.pp;
      apld = acta.votosAlianzas.pld;
      aprm = acta.votosAlianzas.prm;
      afp = acta.votosAlianzas.fp;
      aalpais = acta.votosAlianzas.alpais;
      averde = acta.votosAlianzas.verde;
      apdi = acta.votosAlianzas.pdi;
      apnvc = acta.votosAlianzas.pnvc;

      diputadosPrm = acta.diputadosPrm;

      myChart.data.datasets[0].data = [apld, aprm, afp, aalpais, averde, apdi, apnvc];
      myChart.update();
      // if(municipio.value === 'todos'){
      //   btnColegios.style.display = 'none';
      // }
    },
  });
});

btnActualizar.addEventListener('click', () => {
  console.log(nivelActa.value);
  municipioUrl = municipio.value.toLowerCase().replace(/\s+/g, '');
  nivelActaUrl = nivelActa.value.toLowerCase();
  url = `/dashboard/${municipioUrl}/${nivelActaUrl}`;
  

  $.ajax({
    url: url,
    success: function (acta) {
      console.log(url);
      console.log(acta);
      colegiosFaltantes.innerText = acta.colegio.faltantes;
      totalInscritos.innerText = acta.inscritos;
      totalColegios.innerText = acta.colegio.total;
      colegiosComputados.innerText = acta.colegio.computados;
      porcentajeColegiosComputados.innerText = acta.colegio.porcientoComputado + '%';
      porcentajeColegiosFaltantes.innerText = acta.colegio.porcientoFaltante + '%';

      votosEmitidos.innerText = acta.votos.emitidos;
      votosValidos.innerText = acta.votos.validos;
      votosNulos.innerText = acta.votos.nulos;
      votosObservados.innerText = acta.votos.observados;
      porcentajeVotosEmitidos.innerText = acta.votos.porcientoEmitidos + '%';
      porcentajeVotosValidos.innerText = acta.votos.porcientoValidos + '%';
      porcentajeVotosNulos.innerText = acta.votos.porcientoNulos + '%';
      porcentajeVotosObservados.innerText = acta.votos.porcientoObservados + '%';

      pld = acta.votosPartidos.pld;
      prm = acta.votosPartidos.prm;
      prd = acta.votosPartidos.prd;
      prsc = acta.votosPartidos.prsc;
      alpais = acta.votosPartidos.alpais;
      phd = acta.votosPartidos.phd;
      moda = acta.votosPartidos.moda;
      bis = acta.votosPartidos.bis;
      pcr = acta.votosPartidos.pcr;
      dxc = acta.votosPartidos.dxc;
      famplio = acta.votosPartidos.famplio;
      udc = acta.votosPartidos.udc;
      pqdc = acta.votosPartidos.pqdc;
      plr = acta.votosPartidos.plr;
      fp = acta.votosPartidos.fp;
      fnp = acta.votosPartidos.fnp;
      apd = acta.votosPartidos.apd;
      verde = acta.votosPartidos.verde;
      ppc = acta.votosPartidos.ppc;
      pal = acta.votosPartidos.pal;
      prsd = acta.votosPartidos.prsd;
      pdp = acta.votosPartidos.pdp;
      pdi = acta.votosPartidos.pdi;
      pri = acta.votosPartidos.pri;
      pun = acta.votosPartidos.pun;
      pnvc = acta.votosPartidos.pnvc;
      pp = acta.votosPartidos.pp;
      apld = acta.votosAlianzas.pld;
      aprm = acta.votosAlianzas.prm;
      afp = acta.votosAlianzas.fp;
      aalpais = acta.votosAlianzas.alpais;
      averde = acta.votosAlianzas.verde;
      apdi = acta.votosAlianzas.pdi;
      apnvc = acta.votosAlianzas.pnvc;
      


      diputadosPrm = acta.diputadosPrm;

      

      if (myChart.options.title.text === 'Votos Por Alianzas') {
        console.log('dentroPartidosConSlianza');
        console.log(nivelActa.value);

        if (nivelActa.value === 'presidencial') {

          titulo.innerText = 'PRESIDENCIAL';
          btnDiputados.style.display = 'none';
          btnEscanos.style.display = 'none';
          btnColegios.style.display = 'block'
          console.log('dentroPresidencial');

          chartImgContainer.innerHTML = '';

          for (let prop in imgs) {
            imgs[prop].classList.remove('imgChartA');
            imgs[prop].classList.remove('imgChartC');
            imgs[prop].classList.remove('imgChartD');
            imgs[prop].classList.add('imgChartB');
            imgs[prop].style.height = '2.6em';
          }

          chartImgContainer.appendChild(imgs.img1);
          chartImgContainer.appendChild(imgs.img2);
          chartImgContainer.appendChild(imgs.img15);
          chartImgContainer.appendChild(imgs.img5);
          chartImgContainer.appendChild(imgs.img18);
          chartImgContainer.appendChild(imgs.img23);
          chartImgContainer.appendChild(imgs.img26);

          // {{!-- document.getElementById('myChart').style.height = '550px'; --}}
          myChart.options.title.text = 'Votos Por Alianzas';
          myChart.data.labels = [
            'PLD Y AL.',
            'PRM Y AL.',
            'FP Y AL.',
            'ALPAIS',
            'P. VERDE',
            'PDI',
            'PNVC',
          ];
          myChart.data.datasets[0].data = [apld, aprm, afp, aalpais, averde, apdi, apnvc];
          myChart.update();
        } else if (nivelActa.value === 'senatorial') {

          titulo.innerText = 'SENATORIAL';
          abis = acta.votosAlianzas.bis;

          btnDiputados.style.display = 'none';
          btnEscanos.style.display = 'none';
          btnColegios.style.display = 'block'

          console.log('dentroSenatorial');
          chartImgContainer.innerHTML = '';

          for (let prop in imgs) {
            imgs[prop].classList.remove('imgChartA');
            imgs[prop].classList.remove('imgChartC');
            imgs[prop].classList.remove('imgChartD');
            imgs[prop].classList.add('imgChartB');
            imgs[prop].style.height = '2.6em';
          }

          chartImgContainer.appendChild(imgs.img1);
          chartImgContainer.appendChild(imgs.img2);
          chartImgContainer.appendChild(imgs.img3);
          chartImgContainer.appendChild(imgs.img7);
          chartImgContainer.appendChild(imgs.img8);
          chartImgContainer.appendChild(imgs.img18);
          chartImgContainer.appendChild(imgs.img26);

          // {{!-- document.getElementById('myChart').style.height = '550px'; --}}
          myChart.options.title.text = 'Votos Por Alianzas';
          myChart.data.labels = [
            'PLD Y AL.',
            'PRM Y AL.',
            'PRD',
            'MODA',
            'BIS Y AL.',
            'P. VERDE',
            'PNVC',
          ];
          myChart.data.datasets[0].data = [apld, aprm, prd, moda, abis, verde, pnvc];
          myChart.update();
        } else if (nivelActa.value === 'diputadosd2') {
          titulo.innerText = 'DIPUTADOS D1';
          afamplio = acta.votosAlianzas.famplio;
         
          
          console.log(resultadosTabs);
          console.log('dentroDiputados');
          chartImgContainer.innerHTML = '';
  
          for (let prop in imgs) {
            imgs[prop].classList.remove('imgChartA');
            imgs[prop].classList.remove('imgChartC');
            imgs[prop].classList.remove('imgChartB');
            imgs[prop].classList.add('imgChartD');
            imgs[prop].style.height = '1.3em';
          }
  
          chartImgContainer.appendChild(imgs.img1);
          chartImgContainer.appendChild(imgs.img2);
          chartImgContainer.appendChild(imgs.img3);
          chartImgContainer.appendChild(imgs.img15);
          chartImgContainer.appendChild(imgs.img5);
          chartImgContainer.appendChild(imgs.img7);
          chartImgContainer.appendChild(imgs.img11);
          chartImgContainer.appendChild(imgs.img18);
          chartImgContainer.appendChild(imgs.img20);
          chartImgContainer.appendChild(imgs.img26);
          chartImgContainer.appendChild(imgs.img27);
  
          btnDiputados.style.display = 'block';
          btnEscanos.style.display = 'none';
          btnColegios.style.display = 'none'
          // {{!-- document.getElementById('myChart').style.height = '550px'; --}}
          myChart.options.title.text = 'Votos Por Alianzas';
          myChart.data.labels = [
            'PLD Y AL.',
            'PRM Y AL.',
            'PRD',
            'FP Y AL.',
            'ALPAIS',
            'MODA',
            'FAMPLIO',
            'P. VERDE',
            'PAL',
            'PNVC',
            'PP'
          ];
          myChart.data.datasets[0].data = [apld, aprm, prd, afp,  alpais, moda, afamplio, verde, pal, pnvc, pp];
          myChart.update();
      } else if (nivelActa.value === 'diputadosd1') {
        titulo.innerText = 'DIPUTADOS';
        afamplio = acta.votosAlianzas.famplio;

        acta.escanos.forEach(element => {
          switch(element.partido) {
            case 'PRM': escanos.prm = element.escanos;
                        break;
            case 'PLD': escanos.pld = element.escanos;
                        break;
            case 'PRD': escanos.prd = element.escanos;
                        break;
            case 'FP': escanos.fp = element.escanos;
                        break;
            case 'ALPAIS': escanos.alpais = element.escanos;
                        break;
            case 'MODA': escanos.moda = element.escanos;
                        break;
            case 'VERDE': escanos.verde = element.escanos;
                        break;
            case 'PAL': escanos.pal = element.escanos;
                        break;
            case 'PNVC': escanos.pnvc = element.escanos;
                        break;
            case 'PP': escanos.pp = element.escanos;
                        break;
          }
        })
        
        console.log(resultadosTabs);
        console.log('dentroDiputadosD1');
        chartImgContainer.innerHTML = '';

        for (let prop in imgs) {
          imgs[prop].classList.remove('imgChartA');
          imgs[prop].classList.remove('imgChartC');
          imgs[prop].classList.remove('imgChartB');
          imgs[prop].classList.add('imgChartD');
            imgs[prop].style.height = '1.3em';
        }

        chartImgContainer.appendChild(imgs.img1);
          chartImgContainer.appendChild(imgs.img2);
          chartImgContainer.appendChild(imgs.img3);
          chartImgContainer.appendChild(imgs.img15);
          chartImgContainer.appendChild(imgs.img5);
          chartImgContainer.appendChild(imgs.img7);
          chartImgContainer.appendChild(imgs.img11);
          chartImgContainer.appendChild(imgs.img18);
          chartImgContainer.appendChild(imgs.img20);
          chartImgContainer.appendChild(imgs.img26);
          chartImgContainer.appendChild(imgs.img27);

        btnDiputados.style.display = 'none';
        btnEscanos.style.display = 'block';
        btnColegios.style.display = 'block'
        // {{!-- document.getElementById('myChart').style.height = '550px'; --}}
        myChart.options.title.text = 'Votos Por Alianzas';
        myChart.data.labels = [
          'PLD Y AL.',
            'PRM Y AL.',
            'PRD',
            'FP Y AL.',
            'ALPAIS',
            'MODA',
            'FAMPLIO',
            'P. VERDE',
            'PAL',
            'PNVC',
            'PP'
        ];
        myChart.data.datasets[0].data = [apld, aprm, prd, afp,  alpais, moda, afamplio, verde, pal, pnvc, pp];
        myChart.update();
    }
      }    else {
        
        if (nivelActa.value === 'diputadosd1') {
          titulo.innerText = 'DIPUTADOS';
          btnDiputados.style.display = 'none';
          btnEscanos.style.display = 'block';
        } else if (nivelActa.value === 'diputadosd2') {
          titulo.innerText = 'DIPUTADOS D1';
          btnDiputados.style.display = 'block';
          btnEscanos.style.display = 'none';
        }else if (nivelActa.value === 'presidencial') {
          titulo.innerText = 'PRESIDENCIAL';
        }else if (nivelActa.value === 'senatorial') {
          titulo.innerText = 'SENATORIAL';
        }
        myChart.data.datasets[0].data = [
          pld,
          prm,
          prd,
          prsc,
          alpais,
          phd,
          moda,
          bis,
          pcr,
          dxc,
          famplio,
          udc,
          pqdc,
          plr,
          fp,
          fnp,
          apd,
          verde,
          ppc,
          pal,
          prsd,
          pdp,
          pdi,
          pri,
          pun,
          pnvc,
          pp,
        ];
      }
      if(municipio.value === 'todos'){
        btnColegios.style.display = 'none';
      }
      myChart.update();
    },
  });
});

function update() {
  municipioUrl = municipio.value.toLowerCase().replace(/\s+/g, '');
  nivelActaUrl = nivelActa.value.toLowerCase();
  url = `/dashboard/${municipioUrl}/${nivelActaUrl}`;

  $.ajax({
    url: url,
    success: function (acta) {
      console.log(url);
      console.log(acta);
      colegiosFaltantes.innerText = acta.colegio.faltantes;
      totalInscritos.innerText = acta.inscritos;
      totalColegios.innerText = acta.colegio.total;
      colegiosComputados.innerText = acta.colegio.computados;
      porcentajeColegiosComputados.innerText = acta.colegio.porcientoComputado + '%';
      porcentajeColegiosFaltantes.innerText = acta.colegio.porcientoFaltante + '%';

      votosEmitidos.innerText = acta.votos.emitidos;
      votosValidos.innerText = acta.votos.validos;
      votosNulos.innerText = acta.votos.nulos;
      votosObservados.innerText = acta.votos.observados;
      porcentajeVotosEmitidos.innerText = acta.votos.porcientoEmitidos + '%';
      porcentajeVotosValidos.innerText = acta.votos.porcientoValidos + '%';
      porcentajeVotosNulos.innerText = acta.votos.porcientoNulos + '%';
      porcentajeVotosObservados.innerText = acta.votos.porcientoObservados + '%';

      pld = acta.votosPartidos.pld;
      prm = acta.votosPartidos.prm;
      prd = acta.votosPartidos.prd;
      prsc = acta.votosPartidos.prsc;
      alpais = acta.votosPartidos.alpais;
      phd = acta.votosPartidos.phd;
      moda = acta.votosPartidos.moda;
      bis = acta.votosPartidos.bis;
      pcr = acta.votosPartidos.pcr;
      dxc = acta.votosPartidos.dxc;
      famplio = acta.votosPartidos.famplio;
      udc = acta.votosPartidos.udc;
      pqdc = acta.votosPartidos.pqdc;
      plr = acta.votosPartidos.plr;
      fp = acta.votosPartidos.fp;
      fnp = acta.votosPartidos.fnp;
      apd = acta.votosPartidos.apd;
      verde = acta.votosPartidos.verde;
      ppc = acta.votosPartidos.ppc;
      pal = acta.votosPartidos.pal;
      prsd = acta.votosPartidos.prsd;
      pdp = acta.votosPartidos.pdp;
      pdi = acta.votosPartidos.pdi;
      pri = acta.votosPartidos.pri;
      pun = acta.votosPartidos.pun;
      pnvc = acta.votosPartidos.pnvc;
      pp = acta.votosPartidos.pp;
      apld = acta.votosAlianzas.pld;
      aprm = acta.votosAlianzas.prm;
      afp = acta.votosAlianzas.fp;
      aalpais = acta.votosAlianzas.alpais;
      averde = acta.votosAlianzas.verde;
      apdi = acta.votosAlianzas.pdi;
      apnvc = acta.votosAlianzas.pnvc;

      diputadosPrm = acta.diputadosPrm;



      if (myChart.options.title.text === 'Votos Por Alianzas') {
        console.log('dentroPartidosConSlianza');

        if (nivelActa.value === 'presidencial') {
          titulo.innerText = 'PRESIDENCIAL';
          console.log('dentroPresidencial');

          chartImgContainer.innerHTML = '';

          for (let prop in imgs) {
            imgs[prop].classList.remove('imgChartA');
            imgs[prop].classList.remove('imgChartC');
            imgs[prop].classList.remove('imgChartD');
            imgs[prop].classList.add('imgChartB');
            imgs[prop].style.height = '2.6em';
          }

          chartImgContainer.appendChild(imgs.img1);
          chartImgContainer.appendChild(imgs.img2);
          chartImgContainer.appendChild(imgs.img15);
          chartImgContainer.appendChild(imgs.img5);
          chartImgContainer.appendChild(imgs.img18);
          chartImgContainer.appendChild(imgs.img23);
          chartImgContainer.appendChild(imgs.img26);

          // {{!-- document.getElementById('myChart').style.height = '550px'; --}}
          myChart.options.title.text = 'Votos Por Alianzas';
          myChart.data.labels = [
            'PLD Y AL.',
            'PRM Y AL.',
            'FP Y AL.',
            'ALPAIS',
            'P. VERDE',
            'PDI',
            'PNVC',
          ];
          myChart.data.datasets[0].data = [apld, aprm, afp, aalpais, averde, apdi, apnvc];
          myChart.update();
        } else if (nivelActa.value === 'senatorial') {
          titulo.innerText = 'SENATORIAL';

          abis = acta.votosAlianzas.bis;

          console.log('dentroSenatorial');
          chartImgContainer.innerHTML = '';

          for (let prop in imgs) {
            imgs[prop].classList.remove('imgChartA');
            imgs[prop].classList.remove('imgChartC');
            imgs[prop].classList.remove('imgChartD');
            imgs[prop].classList.add('imgChartB');
            imgs[prop].style.height = '2.6em';
          }

          chartImgContainer.appendChild(imgs.img1);
          chartImgContainer.appendChild(imgs.img2);
          chartImgContainer.appendChild(imgs.img3);
          chartImgContainer.appendChild(imgs.img7);
          chartImgContainer.appendChild(imgs.img8);
          chartImgContainer.appendChild(imgs.img18);
          chartImgContainer.appendChild(imgs.img26);

          // {{!-- document.getElementById('myChart').style.height = '550px'; --}}
          myChart.options.title.text = 'Votos Por Alianzas';
          myChart.data.labels = [
            'PLD Y AL.',
            'PRM Y AL.',
            'PRD',
            'MODA',
            'BIS Y AL.',
            'P. VERDE',
            'PNVC',
          ];
          myChart.data.datasets[0].data = [apld, aprm, prd, moda, afp, verde, apnvc];
          myChart.update();
        } else if (nivelActa.value === 'diputadosd2') {
          titulo.innerText = 'DIPUTADOS D1';

          afamplio = acta.votosAlianzas.famplio;

          console.log('dentroDiputados');
          chartImgContainer.innerHTML = '';
  
          for (let prop in imgs) {
            imgs[prop].classList.remove('imgChartA');
            imgs[prop].classList.remove('imgChartC');
            imgs[prop].classList.remove('imgChartB');
            imgs[prop].classList.add('imgChartD');
            imgs[prop].style.height = '1.3em';
          }
  
          chartImgContainer.appendChild(imgs.img1);
          chartImgContainer.appendChild(imgs.img2);
          chartImgContainer.appendChild(imgs.img3);
          chartImgContainer.appendChild(imgs.img7);
          chartImgContainer.appendChild(imgs.img8);
          chartImgContainer.appendChild(imgs.img18);
          chartImgContainer.appendChild(imgs.img26);
  
          // {{!-- document.getElementById('myChart').style.height = '550px'; --}}
          myChart.options.title.text = 'Votos Por Alianzas';
          myChart.data.labels = [
            'PLD Y AL.',
              'PRM Y AL.',
              'PRD',
              'FP Y AL.',
              'ALPAIS',
              'MODA',
              'FAMPLIO',
              'P. VERDE',
              'PAL',
              'PNVC',
              'PP'
          ];
          myChart.data.datasets[0].data = [apld, aprm, prd, afp,  alpais, moda, afamplio, verde, pal, pnvc, pp];
          myChart.update();
        }else if (nivelActa.value === 'diputadosd1') {
          titulo.innerText = 'DIPUTADOS';
          afamplio = acta.votosAlianzas.famplio;

          console.log('dentroDiputados');
          chartImgContainer.innerHTML = '';
  
          for (let prop in imgs) {
            imgs[prop].classList.remove('imgChartA');
            imgs[prop].classList.remove('imgChartC');
            imgs[prop].classList.remove('imgChartB');
            imgs[prop].classList.add('imgChartD');
            imgs[prop].style.height = '1.3em';
          }
  
          chartImgContainer.appendChild(imgs.img1);
          chartImgContainer.appendChild(imgs.img2);
          chartImgContainer.appendChild(imgs.img3);
          chartImgContainer.appendChild(imgs.img15);
          chartImgContainer.appendChild(imgs.img5);
          chartImgContainer.appendChild(imgs.img7);
          chartImgContainer.appendChild(imgs.img11);
          chartImgContainer.appendChild(imgs.img18);
          chartImgContainer.appendChild(imgs.img20);
          chartImgContainer.appendChild(imgs.img26);
          chartImgContainer.appendChild(imgs.img27);
  
          // {{!-- document.getElementById('myChart').style.height = '550px'; --}}
          myChart.options.title.text = 'Votos Por Alianzas';
          myChart.data.labels = [
            'PLD Y AL.',
              'PRM Y AL.',
              'PRD',
              'FP Y AL.',
              'ALPAIS',
              'MODA',
              'FAMPLIO',
              'P. VERDE',
              'PAL',
              'PNVC',
              'PP'
          ];
          myChart.data.datasets[0].data = [apld, aprm, prd, afp,  alpais, moda, afamplio, verde, pal, pnvc, pp];
          myChart.update();
        }
      }  else {
        myChart.data.datasets[0].data = [
          pld,
          prm,
          prd,
          prsc,
          alpais,
          phd,
          moda,
          bis,
          pcr,
          dxc,
          famplio,
          udc,
          pqdc,
          plr,
          fp,
          fnp,
          apd,
          verde,
          ppc,
          pal,
          prsd,
          pdp,
          pdi,
          pri,
          pun,
          pnvc,
          pp,
        ];
      }

      myChart.update();
    },
  });
}
let fecha = moment();
socket.on('chart:update', (data) => {
  console.log('************************');
  console.log(data);
  if (data.updateChart) {
    fechaDiv.innerText = fecha.format('Do MMMM YYYY LT');
    // day.innerText = data.date.day;
    // month.innerText = data.date.month;
    // year.innerText = data.date.year;
    // hour.innerText = data.date.hour;
    // minutes.innerText = data.date.minutes;
    update();
  }
});

console.log(imgs);

btnGraficosSinAlianzas.addEventListener('click', () => {
  ctx.style.display = 'block';
  chartImgContainer.style.display = 'block';
  colegiosContainer.style.display = 'none';
  chartImgContainer.innerHTML = '';

  // {{!-- document.getElementById('myChart').style.height = '700px'; --}}
  myChart.options.title.text = 'Votos Por Partidos';
  myChart.data.labels = [
    '1-PLD',
    '2-PRM',
    '3-PRD',
    '4-PRSC',
    '5-ALPAIS',
    '6-PHD',
    '7-MODA',
    '8-BIS',
    '9-PCR',
    '10-DXC',
    '11-F.AMPLIO',
    '12-UDC',
    '13-PQDC',
    '14-PLR',
    '15-FP',
    '16-FNP',
    '17-APD',
    '18-P. VERDE',
    '19-PPC',
    '20-PAL',
    '21-PRSD',
    '22-PDP',
    '23-PDI',
    '24-PRI',
    '25-PUN',
    '26-PNVC',
    '27-PP',
  ];
  myChart.data.datasets[0].data = [
    pld,
    prm,
    prd,
    prsc,
    alpais,
    phd,
    moda,
    bis,
    pcr,
    dxc,
    famplio,
    udc,
    pqdc,
    plr,
    fp,
    fnp,
    apd,
    verde,
    ppc,
    pal,
    prsd,
    pdp,
    pdi,
    pri,
    pun,
    pnvc,
    pp,
  ];
  myChart.data.datasets[0].backgroundColor = [
    'rgba(189, 195, 199,0.7)',
    'rgba(189, 195, 199,0.7)',
    'rgba(189, 195, 199,0.7)',
    'rgba(189, 195, 199,0.7)',
    'rgba(189, 195, 199,0.7)',
    'rgba(189, 195, 199,0.7)',
    'rgba(189, 195, 199,0.7)',
    'rgba(189, 195, 199,0.7)',
    'rgba(189, 195, 199,0.7)',
    'rgba(189, 195, 199,0.7)',
    'rgba(189, 195, 199,0.7)',
    'rgba(189, 195, 199,0.7)',
    'rgba(189, 195, 199,0.7)',
    'rgba(189, 195, 199,0.7)',
    'rgba(189, 195, 199,0.7)',
    'rgba(189, 195, 199,0.7)',
    'rgba(189, 195, 199,0.7)',
    'rgba(189, 195, 199,0.7)',
    'rgba(189, 195, 199,0.7)',
    'rgba(189, 195, 199,0.7)',
    'rgba(189, 195, 199,0.7)',
    'rgba(189, 195, 199,0.7)',
    'rgba(189, 195, 199,0.7)',
    'rgba(189, 195, 199,0.7)',
    'rgba(189, 195, 199,0.7)',
    'rgba(189, 195, 199,0.7)',
    'rgba(189, 195, 199,0.7)',
  ];
  myChart.data.datasets[0].borderColor = [
    'rgba(189, 195, 199,1.0)',
    'rgba(189, 195, 199,1.0)',
    'rgba(189, 195, 199,1.0)',
    'rgba(189, 195, 199,1.0)',
    'rgba(189, 195, 199,1.0)',
    'rgba(189, 195, 199,1.0)',
    'rgba(189, 195, 199,1.0)',
    'rgba(189, 195, 199,1.0)',
    'rgba(189, 195, 199,1.0)',
    'rgba(189, 195, 199,1.0)',
    'rgba(189, 195, 199,1.0)',
    'rgba(189, 195, 199,1.0)',
    'rgba(189, 195, 199,1.0)',
    'rgba(189, 195, 199,1.0)',
    'rgba(189, 195, 199,1.0)',
    'rgba(189, 195, 199,1.0)',
    'rgba(189, 195, 199,1.0)',
    'rgba(189, 195, 199,1.0)',
    'rgba(189, 195, 199,1.0)',
    'rgba(189, 195, 199,1.0)',
    'rgba(189, 195, 199,1.0)',
    'rgba(189, 195, 199,1.0)',
    'rgba(189, 195, 199,1.0)',
    'rgba(189, 195, 199,1.0)',
    'rgba(189, 195, 199,1.0)',
    'rgba(189, 195, 199,1.0)',
    'rgba(189, 195, 199,1.0)',
  ];

  myChart.update();
});

btnGraficosAlianzas.addEventListener('click', () => {

  ctx.style.display = 'block';
  chartImgContainer.style.display = 'block';
  colegiosContainer.style.display = 'none';
  chartImgContainer.innerHTML = '';

  if (nivelActa.value === 'presidencial') {
    chartImgContainer.innerHTML = '';

    for (let prop in imgs) {
      imgs[prop].classList.remove('imgChartA');
      imgs[prop].classList.remove('imgChartC');
      imgs[prop].classList.remove('imgChartD');
      imgs[prop].classList.add('imgChartB');
      imgs[prop].style.height = '2.6em';
    }

    chartImgContainer.appendChild(imgs.img1);
    chartImgContainer.appendChild(imgs.img2);
    chartImgContainer.appendChild(imgs.img15);
    chartImgContainer.appendChild(imgs.img5);
    chartImgContainer.appendChild(imgs.img18);
    chartImgContainer.appendChild(imgs.img23);
    chartImgContainer.appendChild(imgs.img26);

    // {{!-- document.getElementById('myChart').style.height = '550px'; --}}
    myChart.options.title.text = 'Votos Por Alianzas';
    myChart.data.labels = [
      'PLD Y AL.',
      'PRM Y AL.',
      'FP Y AL.',
      'ALPAIS',
      'P. VERDE',
      'PDI',
      'PNVC',
    ];
    myChart.data.datasets[0].data = [apld, aprm, afp, aalpais, averde, apdi, apnvc];
  } else if (nivelActa.value === 'senatorial') {
    chartImgContainer.innerHTML = '';

    for (let prop in imgs) {
      imgs[prop].classList.remove('imgChartA');
      imgs[prop].classList.remove('imgChartC');
      imgs[prop].classList.remove('imgChartD');
      imgs[prop].classList.add('imgChartB');
      imgs[prop].style.height = '2.6em';
    }

    chartImgContainer.appendChild(imgs.img1);
    chartImgContainer.appendChild(imgs.img2);
    chartImgContainer.appendChild(imgs.img3);
    chartImgContainer.appendChild(imgs.img7);
    chartImgContainer.appendChild(imgs.img8);
    chartImgContainer.appendChild(imgs.img18);
    chartImgContainer.appendChild(imgs.img26);

    // {{!-- document.getElementById('myChart').style.height = '550px'; --}}
    myChart.options.title.text = 'Votos Por Alianzas';
    myChart.data.labels = [
      'PLD Y AL.',
      'PRM Y AL.',
      'PRD',
      'MODA',
      'BIS Y AL.',
      'P. VERDE',
      'PNVC',
    ];
    myChart.data.datasets[0].data = [apld, aprm, prd, moda, afp, verde, apnvc];
    myChart.update();
  } else if (nivelActa.value === 'diputadosd2') {
    chartImgContainer.innerHTML = '';

    for (let prop in imgs) {
      imgs[prop].classList.remove('imgChartA');
      imgs[prop].classList.remove('imgChartC');
      imgs[prop].classList.remove('imgChartB');
      imgs[prop].classList.add('imgChartD');
      imgs[prop].style.height = '1.3em';
    }

    chartImgContainer.appendChild(imgs.img1);
          chartImgContainer.appendChild(imgs.img2);
          chartImgContainer.appendChild(imgs.img3);
          chartImgContainer.appendChild(imgs.img15);
          chartImgContainer.appendChild(imgs.img5);
          chartImgContainer.appendChild(imgs.img7);
          chartImgContainer.appendChild(imgs.img11);
          chartImgContainer.appendChild(imgs.img18);
          chartImgContainer.appendChild(imgs.img20);
          chartImgContainer.appendChild(imgs.img26);
          chartImgContainer.appendChild(imgs.img27);

    // {{!-- document.getElementById('myChart').style.height = '550px'; --}}
    myChart.options.title.text = 'Votos Por Alianzas';
    myChart.data.labels = [
      'PLD Y AL.',
        'PRM Y AL.',
        'PRD',
        'FP Y AL.',
        'ALPAIS',
        'MODA',
        'FAMPLIO',
        'P. VERDE',
        'PAL',
        'PNVC',
        'PP'
    ];
    myChart.data.datasets[0].data = [apld, aprm, prd, afp,  alpais, moda, afamplio, verde, pal, pnvc, pp];
  } else if (nivelActa.value === 'diputadosd1') {
    chartImgContainer.innerHTML = '';

    for (let prop in imgs) {
      imgs[prop].classList.remove('imgChartA');
      imgs[prop].classList.remove('imgChartC');
      imgs[prop].classList.remove('imgChartB');
      imgs[prop].classList.add('imgChartD');
      imgs[prop].style.height = '1.3em';
    }

    chartImgContainer.appendChild(imgs.img1);
          chartImgContainer.appendChild(imgs.img2);
          chartImgContainer.appendChild(imgs.img3);
          chartImgContainer.appendChild(imgs.img15);
          chartImgContainer.appendChild(imgs.img5);
          chartImgContainer.appendChild(imgs.img7);
          chartImgContainer.appendChild(imgs.img11);
          chartImgContainer.appendChild(imgs.img18);
          chartImgContainer.appendChild(imgs.img20);
          chartImgContainer.appendChild(imgs.img26);
          chartImgContainer.appendChild(imgs.img27);

    // {{!-- document.getElementById('myChart').style.height = '550px'; --}}
    myChart.options.title.text = 'Votos Por Alianzas';
    myChart.data.labels = [
      'PLD Y AL.',
        'PRM Y AL.',
        'PRD',
        'FP Y AL.',
        'ALPAIS',
        'MODA',
        'FAMPLIO',
        'P. VERDE',
        'PAL',
        'PNVC',
        'PP'
    ];
    myChart.data.datasets[0].data = [apld, aprm, prd, afp,  alpais, moda, afamplio, verde, pal, pnvc, pp];
    }
    myChart.update();
});







// ******* Boton Diputados ***********/

btnDiputados.addEventListener('click', () => {

  ctx.style.display = 'block';
  chartImgContainer.style.display = 'block';
  colegiosContainer.style.display = 'none';
  chartImgContainer.innerHTML = '';

  
  

  if (nivelActa.value === 'diputadosd2') {
    chartImgContainer.innerHTML = '';

    for (let prop in imgs) {
      imgs[prop].classList.remove('imgChartA');
      imgs[prop].classList.remove('imgChartB');
      imgs[prop].classList.remove('imgChartD');
      imgs[prop].classList.add('imgChartC');
      imgs[prop].style.height = '2.6em';
    }
  
    chartImgContainer.appendChild(imgs.imgNelson);
    chartImgContainer.appendChild(imgs.imgBruno);
    chartImgContainer.appendChild(imgs.imgMartinez);
    chartImgContainer.appendChild(imgs.imgMayra);
    chartImgContainer.appendChild(imgs.imgCarolina);

   
    // {{!-- document.getElementById('myChart').style.height = '550px'; --}}
    myChart.options.title.text = 'Votos Diputados PRM';
    myChart.data.labels = [
      'NELSON ARROYO',
      'BRUNO ORTIZ',
      'MARTINEZ PENA',
      'MAYRA JIMENEZ',
      'CAROLINA PUALA'
    ];
    myChart.data.datasets[0].data = [diputadosPrm.prm1, diputadosPrm.prm2 , diputadosPrm.prm3, diputadosPrm.prm4, diputadosPrm.prm5];
  }

  myChart.update();
});

// *********** Boton Escanos *************/

btnEscanos.addEventListener('click', () => {

  ctx.style.display = 'block';
  chartImgContainer.style.display = 'block';
  colegiosContainer.style.display = 'none';
  chartImgContainer.innerHTML = '';

  console.log(escanos);
  if (nivelActa.value === 'diputadosd1') {
    chartImgContainer.innerHTML = '';
    console.log('Adentro Escanos');
    console.log(escanos);
   
    // {{!-- document.getElementById('myChart').style.height = '550px'; --}}
    myChart.options.title.text = 'Escanos Por Partidos';
    myChart.data.labels = [
      'PLD Y ALIADOS',
      'PRM Y ALIADOS',
      'PRD',
      'FP Y ALIADOS',
      'ALPAIS',
      'MODA',
      'F.AMPLIO',
      'P.VERDE',
      'PAL',
      'PNVC',
      'PP'
    ];
    myChart.data.datasets[0].data = [escanos.pld, escanos.prm , escanos.prd, escanos.fp, escanos.alpais, escanos.moda, escanos.famplio, escanos.verde, escanos.pal, escanos.pnvc, escanos.pp];
  }

  myChart.update();
});


// *************** Boton Colegios ************/

btnColegios.addEventListener('click', () => {
  ctx.style.display = 'none';
  chartImgContainer.style.display = 'none';
  colegiosContainer.style.display = 'block';
  const partidosArray = [
    'PLD',
    'PRM',
    'PRD',
    'PRSC',
    'ALPAIS',
    'PHD',
    'MODA',
    'BIS',
    'PCR',
    'DXC',
    'F.AMPLIO',
    'UDC',
    'PQDC',
    'PLR',
    'FP',
    'FNP',
    'APD',
    'P. VERDE',
    'PPC',
    'PAL',
    'PRSD',
    'PDP',
    'PDI',
    'PRI',
    'PUN',
    'PNVC',
    'PP',
  ];
  let iterador = 0

  $.ajax({
    url: `/dashboard/colegios/${municipio.value}/${nivelActa.value}`,
    success: function (colegios) {

      console.log(colegios);
      colegiosComputadosArray = [];
      colegiosArray = [];
      colegiosCol.innerHTML = '';
      // console.log(colegios);
      if(nivelActa.value === 'presidencial'){
        colegios.computadosP.forEach(element => {
          colegiosComputadosArray.push(element.colegio);
        })
      } else if(nivelActa.value === 'senatorial'){
        colegios.computadosS.forEach(element => {
          colegiosComputadosArray.push(element.colegio);
        })
      } else if(nivelActa.value === 'diputadosD1'){
        colegios.computadosD1.forEach(element => {
          colegiosComputadosArray.push(element.colegio);
        })
      }else if(nivelActa.value === 'diputadosD2'){
        colegios.computadosD2.forEach(element => {
          colegiosComputadosArray.push(element.colegio);
        })
      }
      
      // console.log(colegiosComputadosArray);
      colegios.total.forEach(element => {
        // console.log(element);  
       
        element.colegios.sort();
        
        element.colegios.forEach(colegio => {
        const obj = {
          colegio: colegio,
          centro: element.nombre
        }
          
          colegiosArray.push(obj);
          
        })
        colegiosArray.sort(compare)
        
        // colegiosArray.sort();
        
       
      });
      
      colegiosArray.forEach(obj => {
        btnColegio = document.createElement('button');
        
        btnColegio.setAttribute('id', `${obj.colegio}`);
        btnColegio.setAttribute('onClick', `votoContainerUpdate('${obj.colegio}')`);
        console.log(obj.colegio.length);
        
        if(colegiosComputadosArray.indexOf(obj.colegio) !== -1){

          switch (obj.colegio.length) {
            case 1: 
              obj.colegio = `000${obj.colegio}`
              
              break;
            case 2: 
              obj.colegio = `00${obj.colegio}`
              
              break;
            case 3: 
              obj.colegio = `0${obj.colegio}`
              
              break;
          
            default:
              break;
          }

          btnColegio.innerHTML = `<span class='colegioText'>${obj.colegio}</span> <br> <span class='centroText'>${obj.centro}</span>`
        } else {

          switch (obj.colegio.length) {
            case 1: 
              obj.colegio = `000${obj.colegio}`
              
              break;
            case 2: 
              obj.colegio = `00${obj.colegio}`
              
              break;
            case 3: 
              obj.colegio = `0${obj.colegio}`
              
              break;
          
            default:
              break;
          }
          
          btnColegio.innerHTML = `<span class='colegioText'>${obj.colegio}      </span>   <span class='noIngresado'>No Ingresado</span> <br> <span class='centroText'>${obj.centro}</span>`
        }
        
        colegiosCol.appendChild(btnColegio);
      });

      
      
      
    },
  });
  
  tableVotosContainer.innerHTML = '';
  tableVotosContainer.innerHTML = '';
  for (let prop in imgsTable) {
    if(prop === 'imgNelson'){
      break;
    }
    imgsTable[prop].classList.add('imgVotos');
    // imgsTable[prop].style.height = '1.2em';
    let tableRow = document.createElement('tr');
    let tableCell1 = document.createElement('td');
    let tableCell2 = document.createElement('td');
    let span = document.createElement('span');
    span.innerText = partidosArray[iterador];
    
    tableCell1.appendChild(imgsTable[prop]);
    tableCell1.appendChild(span);
    tableCell1.style.marginRight = '4px';
    tableCell2.innerText = '0';
    tableCell2.setAttribute('id', `td${partidosArray[iterador]}`);
    tableRow.appendChild(tableCell1);
    tableRow.appendChild(tableCell2);
    iterador++;

    tableVotosContainer.appendChild(tableRow);
  }
  iterador = 0;
  let tableRowVE = document.createElement('tr');
  let tableCell1VE = document.createElement('td');
  let tableCell2VE = document.createElement('td');
  tableCell1VE.innerText = 'V.Emitidos';
  tableCell2VE.innerText = '0';
  tableCell2VE.setAttribute('id', 'tdVe');
  tableRowVE.appendChild(tableCell1VE);
  tableRowVE.appendChild(tableCell2VE);
  tableVotosContainer.appendChild(tableRowVE);

  let tableRowVV = document.createElement('tr');
  let tableCell1VV = document.createElement('td');
  let tableCell2VV = document.createElement('td');
  tableCell1VV.innerText = 'V.Validos';
  tableCell2VV.innerText = '0';
  tableCell2VV.setAttribute('id', 'tdVv');
  tableRowVV.appendChild(tableCell1VV);
  tableRowVV.appendChild(tableCell2VV);
  tableVotosContainer.appendChild(tableRowVV);

  let tableRowVN = document.createElement('tr');
  let tableCell1VN = document.createElement('td');
  let tableCell2VN = document.createElement('td');
  tableCell1VN.innerText = 'V.Nulos';
  tableCell2VN.innerText = '0';
  tableCell2VN.setAttribute('id', 'tdVn');
  tableRowVN.appendChild(tableCell1VN);
  tableRowVN.appendChild(tableCell2VN);
  tableVotosContainer.appendChild(tableRowVN);

  let tableRowBO = document.createElement('tr');
  let tableCell1BO = document.createElement('td');
  let tableCell2BO = document.createElement('td');
  tableCell1BO.innerText = 'B. Observadas';
  tableCell2BO.innerText = '0';
  tableCell2BO.setAttribute('id', 'tdBo');
  tableRowBO.appendChild(tableCell1BO);
  tableRowBO.appendChild(tableCell2BO);
  tableVotosContainer.appendChild(tableRowBO);
  


  PDFObject.embed('../pdf/sanpedro/1.pdf', viewer, {height: "90%"});
  
 

});


function compare( a, b ) {
  if ( a.colegio < b.colegio ){
    return -1;
  }
  if ( a.colegio > b.colegio ){
    return 1;
  }
  return 0;
}


function votoContainerUpdate(nombre) {
  console.log(nombre);
  $.ajax({
    url: `/dashboard/colegios/${municipio.value}/${nivelActa.value}/${nombre}`,
    success: function (votosColegio) {
      console.log('Funcionaaaa');
      console.log(url);
      // console.log(votosColegio[0].votos);
      console.log(votosColegio);
      
      
      if(votosColegio.length === 0) {
        document.getElementById('tdPLD').innerText = 0;
        document.getElementById('tdPRM').innerText = 0;
        document.getElementById('tdPRD').innerText = 0;
        document.getElementById('tdPRSC').innerText = 0;
        document.getElementById('tdALPAIS').innerText = 0;
        document.getElementById('tdPHD').innerText = 0;
        document.getElementById('tdMODA').innerText =0;
        document.getElementById('tdBIS').innerText =0;
        document.getElementById('tdPCR').innerText =0;
        document.getElementById('tdDXC').innerText =0;
        document.getElementById('tdF.AMPLIO').innerText =0;
        document.getElementById('tdUDC').innerText =0;
        document.getElementById('tdPQDC').innerText =0;
        document.getElementById('tdPLR').innerText =0;
        document.getElementById('tdFP').innerText =0;
        document.getElementById('tdFNP').innerText =0;
        document.getElementById('tdAPD').innerText =0;
        document.getElementById('tdP. VERDE').innerText =0;
        document.getElementById('tdPPC').innerText =0;
        document.getElementById('tdPAL').innerText =0;
        document.getElementById('tdPRSD').innerText =0;
        document.getElementById('tdPDP').innerText =0;
        document.getElementById('tdPDI').innerText =0;
        document.getElementById('tdPRI').innerText =0;
        document.getElementById('tdPUN').innerText =0;
        document.getElementById('tdPNVC').innerText =0;
        document.getElementById('tdPP').innerText =0;
        document.getElementById('tdVe').innerText =0;
        document.getElementById('tdVv').innerText =0;
        document.getElementById('tdVn').innerText =0;
        document.getElementById('tdBo').innerText =0;

        
      } else {
        document.getElementById('tdPLD').innerText = votosColegio[0].votos.pld;
        document.getElementById('tdPRM').innerText = votosColegio[0].votos.prm;
        document.getElementById('tdPRD').innerText = votosColegio[0].votos.prd;
        document.getElementById('tdPRSC').innerText = votosColegio[0].votos.prsc;
        document.getElementById('tdALPAIS').innerText = votosColegio[0].votos.alpais;
        document.getElementById('tdPHD').innerText = votosColegio[0].votos.phd;
        document.getElementById('tdMODA').innerText = votosColegio[0].votos.moda;
        document.getElementById('tdBIS').innerText = votosColegio[0].votos.bis;
        document.getElementById('tdPCR').innerText = votosColegio[0].votos.pcr;
        document.getElementById('tdDXC').innerText = votosColegio[0].votos.dxc;
        document.getElementById('tdF.AMPLIO').innerText = votosColegio[0].votos.famplio;
        document.getElementById('tdUDC').innerText = votosColegio[0].votos.udc;
        document.getElementById('tdPQDC').innerText = votosColegio[0].votos.pqdc;
        document.getElementById('tdPLR').innerText = votosColegio[0].votos.plr;
        document.getElementById('tdFP').innerText = votosColegio[0].votos.fp;
        document.getElementById('tdFNP').innerText = votosColegio[0].votos.fnp;
        document.getElementById('tdAPD').innerText = votosColegio[0].votos.apd;
        document.getElementById('tdP. VERDE').innerText = votosColegio[0].votos.verde;
        document.getElementById('tdPPC').innerText = votosColegio[0].votos.ppc;
        document.getElementById('tdPAL').innerText = votosColegio[0].votos.pal;
        document.getElementById('tdPRSD').innerText = votosColegio[0].votos.prsd;
        document.getElementById('tdPDP').innerText = votosColegio[0].votos.pdp;
        document.getElementById('tdPDI').innerText = votosColegio[0].votos.pdi;
        document.getElementById('tdPRI').innerText = votosColegio[0].votos.pri;
        document.getElementById('tdPUN').innerText = votosColegio[0].votos.pun;
        document.getElementById('tdPNVC').innerText = votosColegio[0].votos.pnvc;
        document.getElementById('tdPP').innerText = votosColegio[0].votos.pp;
        document.getElementById('tdVe').innerText = votosColegio[0].votosEmitidos;
        document.getElementById('tdVv').innerText =votosColegio[0].votosValidos;
        document.getElementById('tdVn').innerText =votosColegio[0].votosNulos;
        document.getElementById('tdBo').innerText =votosColegio[0].boletasObservadas;
      }
      
      console.log(tableVotosContainer);
      viewer.innerHTML = '';

      if(municipio.value === 'sanpedro'){
        PDFObject.embed(`../pdf//sanpedro/${nombre}.pdf`, viewer, {height: "90%"});
      }else if (municipio.value === 'consuelo'){
        PDFObject.embed(`../pdf//consuelo/${nombre}.pdf`, viewer, {height: "90%"});
      }

    }
  });
}
