
const socket = io();

let titulo = document.getElementById('titulo');
const btnActualizar = document.getElementById('btnActualizar');
let municipio = document.getElementById('municipio');
let nivelActa = document.getElementById('nivelActa');
let colegiosFaltantes = document.getElementById('colegiosFaltantes'); 
let totalInscritos = document.getElementById('totalInscritos');
let totalColegios = document.getElementById('totalColegios'); 
let porcentajeVotosValidos = document.getElementById('porcentajeVotosValidos');
let colegiosComputados = document.getElementById('colegiosComputados');
let porcentajeColegiosComputados = document.getElementById('porcentajeColegiosComputados');
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
const btnColegios = document.getElementById('colegios-tab');

let municipioUrl = municipio.value.toLowerCase().replace(/\s+/g, '');
let nivelActaUrl = nivelActa.value.toLowerCase();

let chartContainer = document.getElementById('chartContainer');
    let chartImgContainer = document.getElementById('chartImgContainer');
    const btnGraficosAlianzas =  document.getElementById('graficos-rar-tab');
    const btnGraficosSinAlianzas =  document.getElementById('graficos-sa-tab');

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



 let ctx = document.getElementById('myChart');

    let myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['PLD Y AL.', 'PRM Y AL.', 'FP Y AL.', 'ALPAIS', 'P. VERDE', 'PDI', "PNVC"],
        datasets: [{
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
                'rgba(189, 195, 199,0.7)'

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
                'rgba(189, 195, 199,1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
       
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    
                },gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }
            }],
            xAxes: [{
                ticks: {
                    beginAtZero: true
                },gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }
            }] 
        },
        title: {
            text: 'Votos Por Alianzas',
            display:true,
            fontSize: 25,
            padding: 4
        },
        legend: {
            display: false,
            fontSize: 40
        },
        plugins: {
      datalabels: {
        
        align: 'end',
        anchor: 'end',
        backgroundColor: function(context) {
          return context.dataset.backgroundColor;
        },
        borderRadius: 4,
        color: 'black',
        formatter: function(value){
           return value;
        }
      },
    }
    }
});




$(window).on( 'load', () => {
    $.ajax({
        url: '/dashboard/sanpedro/presidencial',
        success: function (acta) {
            console.log('onLoad');
            colegiosFaltantes.innerText = acta.colegio.faltantes;
            totalInscritos.innerText = acta.inscritos.sanPedro;
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

    myChart.data.datasets[0].data = [apld, aprm, afp, aalpais, averde, apdi, apnvc];
    myChart.update();
   


        }
    });
});





btnActualizar.addEventListener('click', () => {
    console.log(nivelActa.value);
    municipioUrl = municipio.value.toLowerCase().replace(/\s+/g, '');
        nivelActaUrl = nivelActa.value.toLowerCase();
        url = `/dashboard/${municipioUrl}/${nivelActaUrl}`
        
        $.ajax({
        url: url,
        success: function (acta) {
            console.log(url);
            console.log(acta);
            colegiosFaltantes.innerText = acta.colegio.faltantes;
            totalInscritos.innerText = acta.inscritos.sanPedro;
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
    if(myChart.options.title.text === "Votos Por Alianzas"){
                
        console.log('dentroPartidosConSlianza');

        if(nivelActa.value === 'presidencial'){

            console.log('dentroPresidencial');

        chartImgContainer.innerHTML = '';
        
        for(let prop in imgs ) {
        imgs[prop].classList.add('imgChartB');
        imgs[prop].style.height= '2.6em';
        
        }
        
        chartImgContainer.appendChild(imgs.img1);
        chartImgContainer.appendChild(imgs.img2);
        chartImgContainer.appendChild(imgs.img15);
        chartImgContainer.appendChild(imgs.img5);
        chartImgContainer.appendChild(imgs.img18);
        chartImgContainer.appendChild(imgs.img23);
        chartImgContainer.appendChild(imgs.img26);

        // {{!-- document.getElementById('myChart').style.height = '550px'; --}}
        myChart.options.title.text = "Votos Por Alianzas";
        myChart.data.labels = ['PLD Y AL.', 'PRM Y AL.', 'FP Y AL.', 'ALPAIS', 'P. VERDE', 'PDI', "PNVC"];
        myChart.data.datasets[0].data = [apld, aprm, afp, aalpais, averde, apdi, apnvc];
        myChart.update();
       } else if (nivelActa.value === 'senatorial'){
        
        console.log('dentroSenatorial');
        chartImgContainer.innerHTML = '';
        
        for(let prop in imgs ) {
        imgs[prop].classList.add('imgChartB');
        imgs[prop].style.height= '2.6em';
        
        }
        
        chartImgContainer.appendChild(imgs.img1);
        chartImgContainer.appendChild(imgs.img2);
        chartImgContainer.appendChild(imgs.img3);
        chartImgContainer.appendChild(imgs.img7);
        chartImgContainer.appendChild(imgs.img8);
        chartImgContainer.appendChild(imgs.img18);
        chartImgContainer.appendChild(imgs.img26);

        // {{!-- document.getElementById('myChart').style.height = '550px'; --}}
        myChart.options.title.text = "Votos Por Alianzas";
        myChart.data.labels = ['PLD Y AL.', 'PRM Y AL.', 'PRD', 'MODA', 'BIS Y AL.', 'P. VERDE', "PNVC"];
        myChart.data.datasets[0].data = [apld, aprm, prd, moda, afp, verde, apnvc];
        myChart.update();
       }
        


            }else {
                myChart.data.datasets[0].data = [pld, prm, prd, prsc, alpais, phd, moda, bis, pcr, dxc, famplio, udc, pqdc, plr, fp, fnp, apd, verde, ppc, pal, prsd, pdp, pdi, pri, pun, pnvc, pp];
            }
            
            myChart.update();


        }
    });
})

function update(){
    municipioUrl = municipio.value.toLowerCase().replace(/\s+/g, '');
        nivelActaUrl = nivelActa.value.toLowerCase();
        url = `/dashboard/${municipioUrl}/${nivelActaUrl}`
        
        $.ajax({
        url: url,
        success: function (acta) {
            console.log(url);
            console.log(acta);
            colegiosFaltantes.innerText = acta.colegio.faltantes;
            totalInscritos.innerText = acta.inscritos.sanPedro;
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
    if(myChart.options.title.text === "Votos Por Alianzas"){
                
        console.log('dentroPartidosConSlianza');

        if(nivelActa.value === 'presidencial'){

            console.log('dentroPresidencial');

        chartImgContainer.innerHTML = '';
        
        for(let prop in imgs ) {
        imgs[prop].classList.add('imgChartB');
        imgs[prop].style.height= '2.6em';
        
        }
        
        chartImgContainer.appendChild(imgs.img1);
        chartImgContainer.appendChild(imgs.img2);
        chartImgContainer.appendChild(imgs.img15);
        chartImgContainer.appendChild(imgs.img5);
        chartImgContainer.appendChild(imgs.img18);
        chartImgContainer.appendChild(imgs.img23);
        chartImgContainer.appendChild(imgs.img26);

        // {{!-- document.getElementById('myChart').style.height = '550px'; --}}
        myChart.options.title.text = "Votos Por Alianzas";
        myChart.data.labels = ['PLD Y AL.', 'PRM Y AL.', 'FP Y AL.', 'ALPAIS', 'P. VERDE', 'PDI', "PNVC"];
        myChart.data.datasets[0].data = [apld, aprm, afp, aalpais, averde, apdi, apnvc];
        myChart.update();
       } else if (nivelActa.value === 'senatorial'){
        
        console.log('dentroSenatorial');
        chartImgContainer.innerHTML = '';
        
        for(let prop in imgs ) {
        imgs[prop].classList.add('imgChartB');
        imgs[prop].style.height= '2.6em';
        
        }
        
        chartImgContainer.appendChild(imgs.img1);
        chartImgContainer.appendChild(imgs.img2);
        chartImgContainer.appendChild(imgs.img3);
        chartImgContainer.appendChild(imgs.img7);
        chartImgContainer.appendChild(imgs.img8);
        chartImgContainer.appendChild(imgs.img18);
        chartImgContainer.appendChild(imgs.img26);

        // {{!-- document.getElementById('myChart').style.height = '550px'; --}}
        myChart.options.title.text = "Votos Por Alianzas";
        myChart.data.labels = ['PLD Y AL.', 'PRM Y AL.', 'PRD', 'MODA', 'BIS Y AL.', 'P. VERDE', "PNVC"];
        myChart.data.datasets[0].data = [apld, aprm, prd, moda, afp, verde, apnvc];
        myChart.update();
       }
        


            }else {
                myChart.data.datasets[0].data = [pld, prm, prd, prsc, alpais, phd, moda, bis, pcr, dxc, famplio, udc, pqdc, plr, fp, fnp, apd, verde, ppc, pal, prsd, pdp, pdi, pri, pun, pnvc, pp];
            }
            
            myChart.update();


        }
    });
}

socket.on('chart:update', data => {
    if(data.updateChart){
        // {{!-- day.innerText = data.date.day;
        // month.innerText = data.date.month;
        // year.innerText = data.date.year;
        // hour.innerText = data.date.hour;
        // minutes.innerText = data.date.minutes; --}}
        update();
    }
})








    
    

    

    
    console.log(imgs);
    

    btnGraficosSinAlianzas.addEventListener('click', () => {
    
        chartImgContainer.innerHTML = '';
        
           
        // {{!-- document.getElementById('myChart').style.height = '700px'; --}}
        myChart.options.title.text = "Votos Por Partidos";
        myChart.data.labels = ['1-PLD', '2-PRM', '3-PRD', '4-PRSC', '5-ALPAIS', '6-PHD', "7-MODA", '8-BIS', '9-PCR','10-DXC', '11-F.AMPLIO', '12-UDC', '13-PQDC', '14-PLR', '15-FP', '16-FNP', '17-APD',  '18-P. VERDE', '19-PPC', '20-PAL', '21-PRSD', '22-PDP', '23-PDI', '24-PRI', '25-PUN', '26-PNVC', '27-PP'];
        myChart.data.datasets[0].data = [pld, prm, prd, prsc, alpais, phd, moda, bis, pcr, dxc, famplio, udc, pqdc, plr, fp, fnp, apd, verde, ppc, pal, prsd, pdp, pdi, pri, pun, pnvc, pp];
        myChart.data.datasets[0].backgroundColor = ['rgba(189, 195, 199,0.7)','rgba(189, 195, 199,0.7)','rgba(189, 195, 199,0.7)','rgba(189, 195, 199,0.7)','rgba(189, 195, 199,0.7)','rgba(189, 195, 199,0.7)','rgba(189, 195, 199,0.7)','rgba(189, 195, 199,0.7)','rgba(189, 195, 199,0.7)','rgba(189, 195, 199,0.7)','rgba(189, 195, 199,0.7)','rgba(189, 195, 199,0.7)','rgba(189, 195, 199,0.7)','rgba(189, 195, 199,0.7)','rgba(189, 195, 199,0.7)','rgba(189, 195, 199,0.7)','rgba(189, 195, 199,0.7)','rgba(189, 195, 199,0.7)','rgba(189, 195, 199,0.7)','rgba(189, 195, 199,0.7)','rgba(189, 195, 199,0.7)','rgba(189, 195, 199,0.7)','rgba(189, 195, 199,0.7)','rgba(189, 195, 199,0.7)','rgba(189, 195, 199,0.7)','rgba(189, 195, 199,0.7)','rgba(189, 195, 199,0.7)'];
        myChart.data.datasets[0].borderColor = ['rgba(189, 195, 199,1.0)','rgba(189, 195, 199,1.0)','rgba(189, 195, 199,1.0)','rgba(189, 195, 199,1.0)','rgba(189, 195, 199,1.0)','rgba(189, 195, 199,1.0)','rgba(189, 195, 199,1.0)','rgba(189, 195, 199,1.0)','rgba(189, 195, 199,1.0)','rgba(189, 195, 199,1.0)','rgba(189, 195, 199,1.0)','rgba(189, 195, 199,1.0)','rgba(189, 195, 199,1.0)','rgba(189, 195, 199,1.0)','rgba(189, 195, 199,1.0)','rgba(189, 195, 199,1.0)','rgba(189, 195, 199,1.0)','rgba(189, 195, 199,1.0)','rgba(189, 195, 199,1.0)','rgba(189, 195, 199,1.0)','rgba(189, 195, 199,1.0)','rgba(189, 195, 199,1.0)','rgba(189, 195, 199,1.0)','rgba(189, 195, 199,1.0)','rgba(189, 195, 199,1.0)','rgba(189, 195, 199,1.0)','rgba(189, 195, 199,1.0)',]
        
        
        myChart.update();
        
  

});




    btnGraficosAlianzas.addEventListener('click', () => {
       
       if(nivelActa.value === 'presidencial'){

        chartImgContainer.innerHTML = '';
        
        for(let prop in imgs ) {
        imgs[prop].classList.add('imgChartB');
        imgs[prop].style.height= '2.6em';
        
        }
        
        chartImgContainer.appendChild(imgs.img1);
        chartImgContainer.appendChild(imgs.img2);
        chartImgContainer.appendChild(imgs.img15);
        chartImgContainer.appendChild(imgs.img5);
        chartImgContainer.appendChild(imgs.img18);
        chartImgContainer.appendChild(imgs.img23);
        chartImgContainer.appendChild(imgs.img26);

        // {{!-- document.getElementById('myChart').style.height = '550px'; --}}
        myChart.options.title.text = "Votos Por Alianzas";
        myChart.data.labels = ['PLD Y AL.', 'PRM Y AL.', 'FP Y AL.', 'ALPAIS', 'P. VERDE', 'PDI', "PNVC"];
        myChart.data.datasets[0].data = [apld, aprm, afp, aalpais, averde, apdi, apnvc];
       } else if(nivelActa.value === 'senatorial'){
        
        chartImgContainer.innerHTML = '';
        
        for(let prop in imgs ) {
        imgs[prop].classList.add('imgChartB');
        imgs[prop].style.height= '2.6em';
        
        }
        
        chartImgContainer.appendChild(imgs.img1);
        chartImgContainer.appendChild(imgs.img2);
        chartImgContainer.appendChild(imgs.img3);
        chartImgContainer.appendChild(imgs.img7);
        chartImgContainer.appendChild(imgs.img8);
        chartImgContainer.appendChild(imgs.img18);
        chartImgContainer.appendChild(imgs.img26);

        // {{!-- document.getElementById('myChart').style.height = '550px'; --}}
        myChart.options.title.text = "Votos Por Alianzas";
        myChart.data.labels = ['PLD Y AL.', 'PRM Y AL.', 'PRD', 'MODA', 'BIS Y AL.', 'P. VERDE', "PNVC"];
        myChart.data.datasets[0].data = [apld, aprm, prd, moda, afp, verde, apnvc];
       }

        
        
        
        myChart.update();

});
