const router = require('express').Router();

const Centro = require('../models/centros');
const ActaPresidencial = require('../models/actasPresidencial');
const ActaSenatorial = require('../models/actasSenatorial');
const ActaDiputados = require('../models/actasDiputados');


function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' '); 
 }



router.get('/', (req, res) => {
    res.render("index");
})

router.get('/dashboard/sanpedro/presidencial', async (req, res) => {
    const colegio = {
        total: 0,
        faltantes: 0,
        computados: 0,
        porcientoComputado: 0,
        porcientoFaltante: 0
    }

    const votos = {
        emitidos: 0,
        validos: 0,
        nulos: 0,
        observados: 0,
        porcientoEmitidos: 0,
        porcientoValidos: 0,
        porcientoNulos: 0,
        porcientoObservados: 0
    }

    const inscritos = {
        sanPedro: 159251	
    }	
    
    const votosPartidos = {
        pld: 0,
        prm: 0,
        prd: 0,
        prsc: 0,
        alpais: 0,
        phd: 0,
        moda:0 ,
        bis: 0,
        pcr: 0,
        dxc: 0,
        famplio: 0,
        udc: 0,
        pqdc: 0,
        plr: 0,
        fp: 0,
        fnp: 0,
        apd: 0,
        verde: 0,
        ppc: 0,
        pal: 0,
        prsd: 0,
        pdp: 0,
        pdi: 0,
        pri: 0,
        pun: 0,
        pnvc: 0,
        pp: 0
    };

    const votosAlianzas = {
        pld: 0,
        prm: 0,
        fp: 0,
        alpais: 0,
        verde: 0,
        pdi: 0,
        pnvc:0
    }

    const votosActas = await ActaPresidencial.find({municipio: 'San Pedro De Macoris'}, {'_id': 0, 'votos': 1});
    const colegios = await Centro.find({municipio: 'San Pedro De Macoris'},{'_id':0, 'colegios': 1});
    colegio.computados = await ActaPresidencial.count({municipio: 'San Pedro De Macoris'});


    colegios.forEach(obj => {
        colegio.total += obj.colegios.length;
    });

    // votos por partidos
    votosActas.forEach(obj => {
        votosPartidos.pld += obj.votos.pld;
        votosPartidos.prm += obj.votos.prm;
        votosPartidos.prd += obj.votos.prd;
        votosPartidos.prsc += obj.votos.prsc;
        votosPartidos.alpais += obj.votos.alpais;
        votosPartidos.phd += obj.votos.phd;
        votosPartidos.moda += obj.votos.moda;
        votosPartidos.bis += obj.votos.bis;
        votosPartidos.pcr += obj.votos.pcr;
        votosPartidos.dxc += obj.votos.dxc;
        votosPartidos.famplio += obj.votos.famplio;
        votosPartidos.udc += obj.votos.udc;
        votosPartidos.pqdc += obj.votos.pqdc;
        votosPartidos.plr += obj.votos.plr;
        votosPartidos.fp += obj.votos.fp;
        votosPartidos.fnp += obj.votos.fnp;
        votosPartidos.apd += obj.votos.apd;
        votosPartidos.verde += obj.votos.verde;
        votosPartidos.ppc += obj.votos.ppc;
        votosPartidos.pal += obj.votos.pal;
        votosPartidos.prsd += obj.votos.prsd;
        votosPartidos.pdp += obj.votos.pdp;
        votosPartidos.pdi += obj.votos.pdi;
        votosPartidos.pri += obj.votos.pri;
        votosPartidos.pun += obj.votos.pun;
        votosPartidos.pnvc += obj.votos.pnvc;
        votosPartidos.pp += obj.votos.pp;
    });



// votos validos, nulos, emitidos y observados
    const votosDocumentos = await ActaPresidencial.find({municipio: 'San Pedro De Macoris'}, {'votosValidos': 1, 'votosNulos': 1, 'votosEmitidos': 1, 'boletasObservadas': 1, '_id':0});
    
    if(votosDocumentos) {
        votosDocumentos.forEach(data => {
            votos.validos += data.votosValidos;
            votos.nulos += data.votosNulos;
            votos.emitidos += data.votosEmitidos;
            votos.observados += data.boletasObservadas;
        });
    }

    votos.porcientoEmitidos = ((votos.emitidos / inscritos.sanPedro) * 100).toFixed(2);
    if(votos.emitidos !== 0){
        votos.porcientoValidos = ((votos.validos / votos.emitidos) * 100).toFixed(2);
        votos.porcientoNulos = ((votos.nulos / votos.emitidos) * 100).toFixed(2);
        votos.porcientoObservados = ((votos.observados / votos.emitidos) * 100).toFixed(2);
    } else {
        votos.porcientoValidos = 0;
        votos.porcientoNulos = 0;
        votos.porcientoObservados = 0;
    }
    

    votosAlianzas.pld = votosPartidos.pld +
                        votosPartidos.prd +
                        votosPartidos.moda +
                        votosPartidos.pcr +
                        votosPartidos.udc +
                        votosPartidos.plr +
                        votosPartidos.ppc +
                        votosPartidos.pal +
                        votosPartidos.pdp +
                        votosPartidos.pri;
    
    votosAlianzas.prm = votosPartidos.prm +
                        votosPartidos.phd +
                        votosPartidos.dxc +
                        votosPartidos.famplio +
                        votosPartidos.apd +
                        votosPartidos.prsd +
                        votosPartidos.pp;

    votosAlianzas.fp = votosPartidos.prsc +
                       votosPartidos.bis +
                       votosPartidos.pqdc +
                       votosPartidos.fp +
                       votosPartidos.fnp +
                       votosPartidos.pun;
    
    
    votosAlianzas.alpais = votosPartidos.alpais;
    votosAlianzas.verde = votosPartidos.verde;
    votosAlianzas.pdi = votosPartidos.pdi;
    votosAlianzas.pnvc = votosPartidos.pnvc;

    // console.log(votos)
    // let totalVotos = 0;
    // votos.forEach(acta => {
    //     for (const prop in acta.votos) {
    //         totalVotos += acta.votos[prop];
    //       }    
    // })
    // console.log(totalVotos);

    colegio.faltantes = colegio.total - colegio.computados;
    
    colegio.porcientoComputado = ((colegio.computados / colegio.total) * 100).toFixed(2);
    colegio.porcientoFaltante = ((colegio.faltantes / colegio.total) * 100).toFixed(2);

    console.log(votosPartidos);
    console.log(`Total Colegios: ${colegio.total}`);
    console.log(`Colegio Computados: ${colegio.computados}`);
    console.log(`Porciento Computados: ${colegio.porcientoComputado}`);
    console.log(`Colegios Faltantes: ${colegio.faltantes}`);
    console.log(`Porciento Faltantes: ${colegio.porcientoFaltante}`);
    console.log(votos);

    const acta = {
        colegio: colegio,
        inscritos: inscritos,
        votos: votos,
        votosPartidos: votosPartidos,
        votosAlianzas: votosAlianzas
    }
   
    // res.render('dashboard/resultados', {colegio, inscritos, votos, votosPartidos, votosAlianzas});
    // res.json([colegio, inscritos, votos, votosPartidos, votosAlianzas]);
    res.json(acta);
});



router.get('/dashboard/sanpedro/senatorial', async (req, res) => {
    const colegio = {
        total: 0,
        faltantes: 0,
        computados: 0,
        porcientoComputado: 0,
        porcientoFaltante: 0
    }

    const votos = {
        emitidos: 0,
        validos: 0,
        nulos: 0,
        observados: 0,
        porcientoEmitidos: 0,
        porcientoValidos: 0,
        porcientoNulos: 0,
        porcientoObservados: 0
    }

    const inscritos = {
        sanPedro: 159251	
    }	
    
    const votosPartidos = {
        pld: 0,
        prm: 0,
        prd: 0,
        prsc: 0,
        alpais: 0,
        phd: 0,
        moda:0 ,
        bis: 0,
        pcr: 0,
        dxc: 0,
        famplio: 0,
        udc: 0,
        pqdc: 0,
        plr: 0,
        fp: 0,
        fnp: 0,
        apd: 0,
        verde: 0,
        ppc: 0,
        pal: 0,
        prsd: 0,
        pdp: 0,
        pdi: 0,
        pri: 0,
        pun: 0,
        pnvc: 0,
        pp: 0
    };

    const votosAlianzas = {
        pld: 0,
        prm: 0,
        fp: 0,
        alpais: 0,
        verde: 0,
        pdi: 0,
        pnvc:0
    }

    const votosActas = await ActaSenatorial.find({municipio: 'San Pedro De Macoris'}, {'_id': 0, 'votos': 1});
    const colegios = await Centro.find({municipio: 'San Pedro De Macoris'},{'_id':0, 'colegios': 1});
    colegio.computados = await ActaSenatorial.count({municipio: 'San Pedro De Macoris'});


    colegios.forEach(obj => {
        colegio.total += obj.colegios.length;
    });

    // votos por partidos
    votosActas.forEach(obj => {
        votosPartidos.pld += obj.votos.pld;
        votosPartidos.prm += obj.votos.prm;
        votosPartidos.prd += obj.votos.prd;
        votosPartidos.prsc += obj.votos.prsc;
        votosPartidos.alpais += obj.votos.alpais;
        votosPartidos.phd += obj.votos.phd;
        votosPartidos.moda += obj.votos.moda;
        votosPartidos.bis += obj.votos.bis;
        votosPartidos.pcr += obj.votos.pcr;
        votosPartidos.dxc += obj.votos.dxc;
        votosPartidos.famplio += obj.votos.famplio;
        votosPartidos.udc += obj.votos.udc;
        votosPartidos.pqdc += obj.votos.pqdc;
        votosPartidos.plr += obj.votos.plr;
        votosPartidos.fp += obj.votos.fp;
        votosPartidos.fnp += obj.votos.fnp;
        votosPartidos.apd += obj.votos.apd;
        votosPartidos.verde += obj.votos.verde;
        votosPartidos.ppc += obj.votos.ppc;
        votosPartidos.pal += obj.votos.pal;
        votosPartidos.prsd += obj.votos.prsd;
        votosPartidos.pdp += obj.votos.pdp;
        votosPartidos.pdi += obj.votos.pdi;
        votosPartidos.pri += obj.votos.pri;
        votosPartidos.pun += obj.votos.pun;
        votosPartidos.pnvc += obj.votos.pnvc;
        votosPartidos.pp += obj.votos.pp;
    });



// votos validos, nulos, emitidos y observados
    const votosDocumentos = await ActaSenatorial.find({municipio: 'San Pedro De Macoris'}, {'votosValidos': 1, 'votosNulos': 1, 'votosEmitidos': 1, 'boletasObservadas': 1, '_id':0});
    
    if(votosDocumentos) {
        votosDocumentos.forEach(data => {
            votos.validos += data.votosValidos;
            votos.nulos += data.votosNulos;
            votos.emitidos += data.votosEmitidos;
            votos.observados += data.boletasObservadas;
        });
    }

    votos.porcientoEmitidos = ((votos.emitidos / inscritos.sanPedro) * 100).toFixed(2);
    if(votos.emitidos !== 0){
        votos.porcientoValidos = ((votos.validos / votos.emitidos) * 100).toFixed(2);
        votos.porcientoNulos = ((votos.nulos / votos.emitidos) * 100).toFixed(2);
        votos.porcientoObservados = ((votos.observados / votos.emitidos) * 100).toFixed(2);
    } else {
        votos.porcientoValidos = 0;
        votos.porcientoNulos = 0;
        votos.porcientoObservados = 0;
    }
    

    votosAlianzas.pld = votosPartidos.pld +
                        votosPartidos.prd +
                        votosPartidos.moda +
                        votosPartidos.pcr +
                        votosPartidos.udc +
                        votosPartidos.plr +
                        votosPartidos.ppc +
                        votosPartidos.pal +
                        votosPartidos.pdp +
                        votosPartidos.pri;
    
    votosAlianzas.prm = votosPartidos.prm +
                        votosPartidos.phd +
                        votosPartidos.dxc +
                        votosPartidos.famplio +
                        votosPartidos.apd +
                        votosPartidos.prsd +
                        votosPartidos.pp;

    votosAlianzas.fp = votosPartidos.prsc +
                       votosPartidos.bis +
                       votosPartidos.pqdc +
                       votosPartidos.fp +
                       votosPartidos.fnp +
                       votosPartidos.pun;
    
    
    votosAlianzas.alpais = votosPartidos.alpais;
    votosAlianzas.verde = votosPartidos.verde;
    votosAlianzas.pdi = votosPartidos.pdi;
    votosAlianzas.pnvc = votosPartidos.pnvc;

    // console.log(votos)
    // let totalVotos = 0;
    // votos.forEach(acta => {
    //     for (const prop in acta.votos) {
    //         totalVotos += acta.votos[prop];
    //       }    
    // })
    // console.log(totalVotos);

    colegio.faltantes = colegio.total - colegio.computados;
    
    colegio.porcientoComputado = ((colegio.computados / colegio.total) * 100).toFixed(2);
    colegio.porcientoFaltante = ((colegio.faltantes / colegio.total) * 100).toFixed(2);

    console.log(votosPartidos);
    console.log(`Total Colegios: ${colegio.total}`);
    console.log(`Colegio Computados: ${colegio.computados}`);
    console.log(`Porciento Computados: ${colegio.porcientoComputado}`);
    console.log(`Colegios Faltantes: ${colegio.faltantes}`);
    console.log(`Porciento Faltantes: ${colegio.porcientoFaltante}`);
    console.log(votos);

    const acta = {
        colegio: colegio,
        inscritos: inscritos,
        votos: votos,
        votosPartidos: votosPartidos,
        votosAlianzas: votosAlianzas
    }
   
    // res.render('dashboard/resultados', {colegio, inscritos, votos, votosPartidos, votosAlianzas});
    // res.json([colegio, inscritos, votos, votosPartidos, votosAlianzas]);
    res.json(acta);
});




router.get('/dashboard', (req, res) => {
    // res.render('dashboard/resultados');
    res.render('dashboard/test');
})
module.exports = router;