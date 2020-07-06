const router = require('express').Router();

const Centro = require('../models/centros');
const ActaPresidencial = require('../models/actasPresidencial');
const ActaSenatorial = require('../models/actasSenatorial');
const ActaDiputadosD1 = require('../models/actasDiputadosD1');
const ActaDiputadosD2 = require('../models/actasDiputadosD2');



router.get('/dashboard/todos/presidencial', async (req, res) => {
  let municipio = 'San Pedro De Macoris';

  

  const colegio = {
    total: 0,
    faltantes: 0,
    computados: 0,
    porcientoComputado: 0,
    porcientoFaltante: 0,
  };

  const votos = {
    emitidos: 0,
    validos: 0,
    nulos: 0,
    observados: 0,
    porcientoEmitidos: 0,
    porcientoValidos: 0,
    porcientoNulos: 0,
    porcientoObservados: 0,
  };

  const inscritos = 228899;

  const votosPartidos = {
    pld: 0,
    prm: 0,
    prd: 0,
    prsc: 0,
    alpais: 0,
    phd: 0,
    moda: 0,
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
    pp: 0,
  };

  const votosAlianzas = {
    pld: 0,
    prm: 0,
    fp: 0,
    alpais: 0,
    verde: 0,
    pdi: 0,
    pnvc: 0,
  };

  const votosActasSPM = await ActaPresidencial.find(
    { municipio: municipio },
    { _id: 0, votos: 1 }
  );

  const votosActasConsuelo = await ActaPresidencial.find(
    { municipio: 'Consuelo' },
    { _id: 0, votos: 1 }
  );

  const votosActasGuayacanes = await ActaPresidencial.find(
    { municipio: 'Guayacanes' },
    { _id: 0, votos: 1 }
  );

  const votosActasLosLlanos = await ActaPresidencial.find(
    { municipio: 'Los Llanos' },
    { _id: 0, votos: 1 }
  );

  const votosActasQuisqueya = await ActaPresidencial.find(
    { municipio: 'Quisqueya' },
    { _id: 0, votos: 1 }
  );

  const votosActasRamonSantana = await ActaPresidencial.find(
    { municipio: 'Ramon Santana' },
    { _id: 0, votos: 1 }
  );

  const colegios = await Centro.find({}, { _id: 0, colegios: 1 });
  colegio.computados = await ActaPresidencial.countDocuments();

  colegios.forEach((obj) => {
    colegio.total += obj.colegios.length;
  });

  // votos por partidos
  votosActasSPM.forEach((obj) => {
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

  votosActasConsuelo.forEach((obj) => {
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

  votosActasGuayacanes.forEach((obj) => {
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

  votosActasLosLlanos.forEach((obj) => {
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

  votosActasQuisqueya.forEach((obj) => {
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

  votosActasRamonSantana.forEach((obj) => {
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
  const votosDocumentos = await ActaPresidencial.find(
    { },
    { votosValidos: 1, votosNulos: 1, votosEmitidos: 1, boletasObservadas: 1, _id: 0 }
  );

  if (votosDocumentos) {
    votosDocumentos.forEach((data) => {
      votos.validos += data.votosValidos;
      votos.nulos += data.votosNulos;
      votos.emitidos += data.votosEmitidos;
      votos.observados += data.boletasObservadas;
    });
  }

  
  votos.porcientoEmitidos = ((votos.emitidos / inscritos) * 100).toFixed(2);
  if (votos.emitidos !== 0) {
    votos.porcientoValidos = ((votos.validos / votos.emitidos) * 100).toFixed(2);
    votos.porcientoNulos = ((votos.nulos / votos.emitidos) * 100).toFixed(2);
    votos.porcientoObservados = ((votos.observados / votos.emitidos) * 100).toFixed(2);
  } else {
    votos.porcientoValidos = 0;
    votos.porcientoNulos = 0;
    votos.porcientoObservados = 0;
  }

  votosAlianzas.pld =
    votosPartidos.pld +
    votosPartidos.prd +
    votosPartidos.moda +
    votosPartidos.pcr +
    votosPartidos.udc +
    // votosPartidos.plr +
    votosPartidos.ppc +
    votosPartidos.pal +
    votosPartidos.pdp +
    votosPartidos.pri;

  votosAlianzas.prm =
    votosPartidos.prm +
    votosPartidos.phd +
    votosPartidos.dxc +
    votosPartidos.famplio +
    votosPartidos.apd +
    votosPartidos.prsd +
    votosPartidos.pp;

  votosAlianzas.fp =
    votosPartidos.prsc +
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
    votosAlianzas: votosAlianzas,
  };

  // res.render('dashboard/resultados', {colegio, inscritos, votos, votosPartidos, votosAlianzas});
  // res.json([colegio, inscritos, votos, votosPartidos, votosAlianzas]);
  res.json(acta);
});


router.get('/dashboard/todos/senatorial', async (req, res) => {
  let municipio = 'San Pedro De Macoris';

  

  const colegio = {
    total: 0,
    faltantes: 0,
    computados: 0,
    porcientoComputado: 0,
    porcientoFaltante: 0,
  };

  const votos = {
    emitidos: 0,
    validos: 0,
    nulos: 0,
    observados: 0,
    porcientoEmitidos: 0,
    porcientoValidos: 0,
    porcientoNulos: 0,
    porcientoObservados: 0,
  };

  const inscritos = 228899;

  const votosPartidos = {
    pld: 0,
    prm: 0,
    prd: 0,
    prsc: 0,
    alpais: 0,
    phd: 0,
    moda: 0,
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
    pp: 0,
  };

  const votosAlianzas = {
    pld: 0,
    prm: 0,
    bis: 0,
  };

  const votosActasSPM = await ActaSenatorial.find(
    { municipio: municipio },
    { _id: 0, votos: 1 }
  );

  const votosActasConsuelo = await ActaSenatorial.find(
    { municipio: 'Consuelo' },
    { _id: 0, votos: 1 }
  );

  const votosActasGuayacanes = await ActaSenatorial.find(
    { municipio: 'Guayacanes' },
    { _id: 0, votos: 1 }
  );

  const votosActasLosLlanos = await ActaSenatorial.find(
    { municipio: 'Los Llanos' },
    { _id: 0, votos: 1 }
  );

  const votosActasQuisqueya = await ActaSenatorial.find(
    { municipio: 'Quisqueya' },
    { _id: 0, votos: 1 }
  );

  const votosActasRamonSantana = await ActaSenatorial.find(
    { municipio: 'Ramon Santana' },
    { _id: 0, votos: 1 }
  );

  const colegios = await Centro.find({}, { _id: 0, colegios: 1 });
  colegio.computados = await ActaSenatorial.countDocuments();

  colegios.forEach((obj) => {
    colegio.total += obj.colegios.length;
  });

  // votos por partidos
  votosActasSPM.forEach((obj) => {
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
    votosPartidos.fp += 0;
    votosPartidos.fnp += obj.votos.fnp;
    votosPartidos.apd += obj.votos.apd;
    votosPartidos.verde += obj.votos.verde;
    votosPartidos.ppc += obj.votos.ppc;
    votosPartidos.pal += obj.votos.pal;
    votosPartidos.prsd += obj.votos.prsd;
    votosPartidos.pdp += obj.votos.pdp;
    votosPartidos.pdi += 0;
    votosPartidos.pri += obj.votos.pri;
    votosPartidos.pun += obj.votos.pun;
    votosPartidos.pnvc += obj.votos.pnvc;
    votosPartidos.pp += obj.votos.pp;
  });

  votosActasConsuelo.forEach((obj) => {
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
    votosPartidos.fp += 0;
    votosPartidos.fnp += obj.votos.fnp;
    votosPartidos.apd += obj.votos.apd;
    votosPartidos.verde += obj.votos.verde;
    votosPartidos.ppc += obj.votos.ppc;
    votosPartidos.pal += obj.votos.pal;
    votosPartidos.prsd += obj.votos.prsd;
    votosPartidos.pdp += obj.votos.pdp;
    votosPartidos.pdi += 0;
    votosPartidos.pri += obj.votos.pri;
    votosPartidos.pun += obj.votos.pun;
    votosPartidos.pnvc += obj.votos.pnvc;
    votosPartidos.pp += obj.votos.pp;
  });

  votosActasGuayacanes.forEach((obj) => {
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
    votosPartidos.fp += 0;
    votosPartidos.fnp += obj.votos.fnp;
    votosPartidos.apd += obj.votos.apd;
    votosPartidos.verde += obj.votos.verde;
    votosPartidos.ppc += obj.votos.ppc;
    votosPartidos.pal += obj.votos.pal;
    votosPartidos.prsd += obj.votos.prsd;
    votosPartidos.pdp += obj.votos.pdp;
    votosPartidos.pdi += 0;
    votosPartidos.pri += obj.votos.pri;
    votosPartidos.pun += obj.votos.pun;
    votosPartidos.pnvc += obj.votos.pnvc;
    votosPartidos.pp += obj.votos.pp;
  });

  votosActasLosLlanos.forEach((obj) => {
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
    votosPartidos.fp += 0;
    votosPartidos.fnp += obj.votos.fnp;
    votosPartidos.apd += obj.votos.apd;
    votosPartidos.verde += obj.votos.verde;
    votosPartidos.ppc += obj.votos.ppc;
    votosPartidos.pal += obj.votos.pal;
    votosPartidos.prsd += obj.votos.prsd;
    votosPartidos.pdp += obj.votos.pdp;
    votosPartidos.pdi += 0;
    votosPartidos.pri += obj.votos.pri;
    votosPartidos.pun += obj.votos.pun;
    votosPartidos.pnvc += obj.votos.pnvc;
    votosPartidos.pp += obj.votos.pp;
  });

  votosActasQuisqueya.forEach((obj) => {
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
    votosPartidos.fp += 0;
    votosPartidos.fnp += obj.votos.fnp;
    votosPartidos.apd += obj.votos.apd;
    votosPartidos.verde += obj.votos.verde;
    votosPartidos.ppc += obj.votos.ppc;
    votosPartidos.pal += obj.votos.pal;
    votosPartidos.prsd += obj.votos.prsd;
    votosPartidos.pdp += obj.votos.pdp;
    votosPartidos.pdi += 0;
    votosPartidos.pri += obj.votos.pri;
    votosPartidos.pun += obj.votos.pun;
    votosPartidos.pnvc += obj.votos.pnvc;
    votosPartidos.pp += obj.votos.pp;
  });

  votosActasRamonSantana.forEach((obj) => {
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
    votosPartidos.fp += 0;
    votosPartidos.fnp += obj.votos.fnp;
    votosPartidos.apd += obj.votos.apd;
    votosPartidos.verde += obj.votos.verde;
    votosPartidos.ppc += obj.votos.ppc;
    votosPartidos.pal += obj.votos.pal;
    votosPartidos.prsd += obj.votos.prsd;
    votosPartidos.pdp += obj.votos.pdp;
    votosPartidos.pdi += 0;
    votosPartidos.pri += obj.votos.pri;
    votosPartidos.pun += obj.votos.pun;
    votosPartidos.pnvc += obj.votos.pnvc;
    votosPartidos.pp += obj.votos.pp;
  });
  // votos validos, nulos, emitidos y observados
  const votosDocumentos = await ActaSenatorial.find(
    { },
    { votosValidos: 1, votosNulos: 1, votosEmitidos: 1, boletasObservadas: 1, _id: 0 }
  );

  if (votosDocumentos) {
    votosDocumentos.forEach((data) => {
      votos.validos += data.votosValidos;
      votos.nulos += data.votosNulos;
      votos.emitidos += data.votosEmitidos;
      votos.observados += data.boletasObservadas;
    });
  }

  
  votos.porcientoEmitidos = ((votos.emitidos / inscritos) * 100).toFixed(2);
  if (votos.emitidos !== 0) {
    votos.porcientoValidos = ((votos.validos / votos.emitidos) * 100).toFixed(2);
    votos.porcientoNulos = ((votos.nulos / votos.emitidos) * 100).toFixed(2);
    votos.porcientoObservados = ((votos.observados / votos.emitidos) * 100).toFixed(2);
  } else {
    votos.porcientoValidos = 0;
    votos.porcientoNulos = 0;
    votos.porcientoObservados = 0;
  }

  votosAlianzas.pld =
    votosPartidos.pld +
    votosPartidos.pcr +
    votosPartidos.udc +
    votosPartidos.plr +
    votosPartidos.ppc +
    votosPartidos.pal +
    votosPartidos.pdp +
    votosPartidos.pri;

  votosAlianzas.prm = 
    votosPartidos.prm + 
    votosPartidos.prsc + 
    votosPartidos.alpais+
    votosPartidos.phd +
    votosPartidos.dxc +
    votosPartidos.famplio +
    votosPartidos.apd +
    votosPartidos.prsd +
    votosPartidos.pp;

  votosAlianzas.bis =
    votosPartidos.bis + 
    votosPartidos.pqdc + 
    votosPartidos.fnp + 
    votosPartidos.pun;


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
    votosAlianzas: votosAlianzas,
  };

  // res.render('dashboard/resultados', {colegio, inscritos, votos, votosPartidos, votosAlianzas});
  // res.json([colegio, inscritos, votos, votosPartidos, votosAlianzas]);
  res.json(acta);
});


router.get('/dashboard/todos/diputadosd1', async (req, res) => {
  let municipio = 'San Pedro De Macoris';

  

  const colegio = {
    total: 0,
    faltantes: 0,
    computados: 0,
    porcientoComputado: 0,
    porcientoFaltante: 0,
  };

  const votos = {
    emitidos: 0,
    validos: 0,
    nulos: 0,
    observados: 0,
    porcientoEmitidos: 0,
    porcientoValidos: 0,
    porcientoNulos: 0,
    porcientoObservados: 0,
  };

  const inscritos = 228899;

  const votosPartidos = {
    pld: 0,
    prm: 0,
    prd: 0,
    prsc: 0,
    alpais: 0,
    phd: 0,
    moda: 0,
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
    pp: 0,
  };

  const votosAlianzas = {
    pld: 0,
    prm: 0,
    fp: 0,
    famplio: 0,
  };

  const votosActasSPM = await ActaDiputadosD1.find(
    { municipio: municipio },
    { _id: 0, votos: 1 }
  );

  const votosActasConsuelo = await ActaDiputadosD1.find(
    { municipio: 'Consuelo' },
    { _id: 0, votos: 1 }
  );

  const votosActasGuayacanes = await ActaDiputadosD1.find(
    { municipio: 'Guayacanes' },
    { _id: 0, votos: 1 }
  );

  const votosActasLosLlanos = await ActaDiputadosD1.find(
    { municipio: 'Los Llanos' },
    { _id: 0, votos: 1 }
  );

  const votosActasQuisqueya = await ActaDiputadosD1.find(
    { municipio: 'Quisqueya' },
    { _id: 0, votos: 1 }
  );

  const votosActasRamonSantana = await ActaDiputadosD1.find(
    { municipio: 'Ramon Santana' },
    { _id: 0, votos: 1 }
  );

  const colegios = await Centro.find({}, { _id: 0, colegios: 1 });
  colegio.computados = await ActaDiputadosD1.countDocuments();

  colegios.forEach((obj) => {
    colegio.total += obj.colegios.length;
  });

  // votos por partidos
  votosActasSPM.forEach((obj) => {
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
    votosPartidos.plr += 0;
    votosPartidos.fp += obj.votos.fp;
    votosPartidos.fnp += obj.votos.fnp;
    votosPartidos.apd += obj.votos.apd;
    votosPartidos.verde += obj.votos.verde;
    votosPartidos.ppc += obj.votos.ppc;
    votosPartidos.pal += obj.votos.pal;
    votosPartidos.prsd += obj.votos.prsd;
    votosPartidos.pdp += obj.votos.pdp;
    votosPartidos.pdi += 0;
    votosPartidos.pri += obj.votos.pri;
    votosPartidos.pun += obj.votos.pun;
    votosPartidos.pnvc += obj.votos.pnvc;
    votosPartidos.pp += obj.votos.pp;
  });

  votosActasConsuelo.forEach((obj) => {
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
    votosPartidos.plr += 0;
    votosPartidos.fp += obj.votos.fp;
    votosPartidos.fnp += obj.votos.fnp;
    votosPartidos.apd += obj.votos.apd;
    votosPartidos.verde += obj.votos.verde;
    votosPartidos.ppc += obj.votos.ppc;
    votosPartidos.pal += obj.votos.pal;
    votosPartidos.prsd += obj.votos.prsd;
    votosPartidos.pdp += obj.votos.pdp;
    votosPartidos.pdi += 0;
    votosPartidos.pri += obj.votos.pri;
    votosPartidos.pun += obj.votos.pun;
    votosPartidos.pnvc += obj.votos.pnvc;
    votosPartidos.pp += obj.votos.pp;
  });

  votosActasGuayacanes.forEach((obj) => {
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
    votosPartidos.plr += 0;
    votosPartidos.fp += obj.votos.fp;
    votosPartidos.fnp += obj.votos.fnp;
    votosPartidos.apd += obj.votos.apd;
    votosPartidos.verde += obj.votos.verde;
    votosPartidos.ppc += obj.votos.ppc;
    votosPartidos.pal += obj.votos.pal;
    votosPartidos.prsd += obj.votos.prsd;
    votosPartidos.pdp += obj.votos.pdp;
    votosPartidos.pdi += 0;
    votosPartidos.pri += obj.votos.pri;
    votosPartidos.pun += obj.votos.pun;
    votosPartidos.pnvc += obj.votos.pnvc;
    votosPartidos.pp += obj.votos.pp;
  });

  votosActasLosLlanos.forEach((obj) => {
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
    votosPartidos.plr += 0;
    votosPartidos.fp += obj.votos.fp;
    votosPartidos.fnp += obj.votos.fnp;
    votosPartidos.apd += obj.votos.apd;
    votosPartidos.verde += obj.votos.verde;
    votosPartidos.ppc += obj.votos.ppc;
    votosPartidos.pal += obj.votos.pal;
    votosPartidos.prsd += obj.votos.prsd;
    votosPartidos.pdp += obj.votos.pdp;
    votosPartidos.pdi += 0;
    votosPartidos.pri += obj.votos.pri;
    votosPartidos.pun += obj.votos.pun;
    votosPartidos.pnvc += obj.votos.pnvc;
    votosPartidos.pp += obj.votos.pp;
  });

  votosActasQuisqueya.forEach((obj) => {
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
    votosPartidos.plr += 0;
    votosPartidos.fp += obj.votos.fp;
    votosPartidos.fnp += obj.votos.fnp;
    votosPartidos.apd += obj.votos.apd;
    votosPartidos.verde += obj.votos.verde;
    votosPartidos.ppc += obj.votos.ppc;
    votosPartidos.pal += obj.votos.pal;
    votosPartidos.prsd += obj.votos.prsd;
    votosPartidos.pdp += obj.votos.pdp;
    votosPartidos.pdi += 0;
    votosPartidos.pri += obj.votos.pri;
    votosPartidos.pun += obj.votos.pun;
    votosPartidos.pnvc += obj.votos.pnvc;
    votosPartidos.pp += obj.votos.pp;
  });

  votosActasRamonSantana.forEach((obj) => {
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
    votosPartidos.plr += 0;
    votosPartidos.fp += obj.votos.fp;
    votosPartidos.fnp += obj.votos.fnp;
    votosPartidos.apd += obj.votos.apd;
    votosPartidos.verde += obj.votos.verde;
    votosPartidos.ppc += obj.votos.ppc;
    votosPartidos.pal += obj.votos.pal;
    votosPartidos.prsd += obj.votos.prsd;
    votosPartidos.pdp += obj.votos.pdp;
    votosPartidos.pdi += 0;
    votosPartidos.pri += obj.votos.pri;
    votosPartidos.pun += obj.votos.pun;
    votosPartidos.pnvc += obj.votos.pnvc;
    votosPartidos.pp += obj.votos.pp;
  });
  // votos validos, nulos, emitidos y observados
  const votosDocumentos = await ActaDiputadosD1.find(
    { },
    { votosValidos: 1, votosNulos: 1, votosEmitidos: 1, boletasObservadas: 1, _id: 0 }
  );

  if (votosDocumentos) {
    votosDocumentos.forEach((data) => {
      votos.validos += data.votosValidos;
      votos.nulos += data.votosNulos;
      votos.emitidos += data.votosEmitidos;
      votos.observados += data.boletasObservadas;
    });
  }

  
  votos.porcientoEmitidos = ((votos.emitidos / inscritos) * 100).toFixed(2);
  if (votos.emitidos !== 0) {
    votos.porcientoValidos = ((votos.validos / votos.emitidos) * 100).toFixed(2);
    votos.porcientoNulos = ((votos.nulos / votos.emitidos) * 100).toFixed(2);
    votos.porcientoObservados = ((votos.observados / votos.emitidos) * 100).toFixed(2);
  } else {
    votos.porcientoValidos = 0;
    votos.porcientoNulos = 0;
    votos.porcientoObservados = 0;
  }

  votosAlianzas.pld =
    votosPartidos.pld +
    votosPartidos.pcr +
    votosPartidos.udc +
    votosPartidos.ppc +
    votosPartidos.pdp +
    votosPartidos.pri;

  votosAlianzas.prm = 
    votosPartidos.prm +
    votosPartidos.phd +
    votosPartidos.dxc +
    votosPartidos.prsd;
    

  votosAlianzas.fp =
    votosPartidos.prsc +
    votosPartidos.bis + 
    votosPartidos.pqdc + 
    votosPartidos.fp + 
    votosPartidos.fnp +
    votosPartidos.pun;

  votosAlianzas.famplio = 
    votosPartidos.famplio +
    votosPartidos.apd;

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
    votosAlianzas: votosAlianzas,
    escanos: []
  };


   //******************** Metodo de Hondt  *******************/
 // D'Hondt Method of Propotional Seats

var dhondt = function (seats, votes) {
  var list = Object.getOwnPropertyNames(votes).map(function (party) {
      return {party: party, votes: votes[party], seats: 0};
  });
  for (var i = 0; i < seats; i++) {
      list.sort(function (p1, p2) {
          var v1 = p1.votes / (p1.seats + 1);
          var v2 = p2.votes / (p2.seats + 1);
          return v2 - v1;
      });
      list[0].seats += 1;
  }
  list.sort(function (p1, p2) {return p2.votes - p1.votes;});
  return list;
};

// Output seats and analysis of parties
var analyze = function (result) {
  var totalVotes = 0;
  var totalSeats = 0;
  result.forEach(function (party) {
      totalVotes += party.votes;
      totalSeats += party.seats;
  });
  console.log({totalVotes: totalVotes, totalSeats: totalSeats});
  result.forEach(function (party) {
      var voteRate = Math.round(party.votes / totalVotes * 10000) / 100;
      var seatRate = Math.round(party.seats / totalSeats * 10000) / 100;
      console.log("[" + party.party + "] " +
                  "votes: " + party.votes + "(" + voteRate + "%) " +
                  "seats: " + party.seats + "(" + seatRate + "%)");
      acta.escanos.push({partido: party.party, escanos: party.seats});
  });
  console.log();
};

// D'Hondt method example from Wikipedia
var result = dhondt(5, {
  PLD: votosAlianzas.pld,
  PRM: votosAlianzas.prm,
  FP: votosAlianzas.fp,
  PRD: votosPartidos.prd,
  ALPAIS: votosPartidos.alpais,
  MODA: votosPartidos.moda,
  VERDE: votosPartidos.verde,
  PAL: votosPartidos.pal,
  PNVC: votosPartidos.pnvc,
  PP: votosPartidos.pp
});
analyze(result);

  res.json(acta);
});



router.get('/dashboard/todos/diputadosd2', async (req, res) => {
  let municipio = 'San Pedro De Macoris';

  

  const colegio = {
    total: 0,
    faltantes: 0,
    computados: 0,
    porcientoComputado: 0,
    porcientoFaltante: 0,
  };

  const votos = {
    emitidos: 0,
    validos: 0,
    nulos: 0,
    observados: 0,
    porcientoEmitidos: 0,
    porcientoValidos: 0,
    porcientoNulos: 0,
    porcientoObservados: 0,
  };

  const inscritos = 228899;

  const votosPartidos = {
    pld: 0,
    prm: 0,
    prd: 0,
    prsc: 0,
    alpais: 0,
    phd: 0,
    moda: 0,
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
    pp: 0,
  };

  const votosAlianzas = {
    pld: 0,
    prm: 0,
    fp: 0,
    famplio: 0,
  };

  console.log('ONE****');
  const votosActasSPM = await ActaDiputadosD2.find(
    { municipio: municipio },
    { _id: 0, votos: 1 }
  );

  const votosActasConsuelo = await ActaDiputadosD2.find(
    { municipio: 'Consuelo' },
    { _id: 0, votos: 1 }
  );

  const votosActasGuayacanes = await ActaDiputadosD2.find(
    { municipio: 'Guayacanes' },
    { _id: 0, votos: 1 }
  );

  const votosActasLosLlanos = await ActaDiputadosD2.find(
    { municipio: 'Los Llanos' },
    { _id: 0, votos: 1 }
  );

  const votosActasQuisqueya = await ActaDiputadosD2.find(
    { municipio: 'Quisqueya' },
    { _id: 0, votos: 1 }
  );

  const votosActasRamonSantana = await ActaDiputadosD2.find(
    { municipio: 'Ramon Santana' },
    { _id: 0, votos: 1 }
  );







  // const votosActas = await ActaDiputadosD2.find(
  //   { municipio: municipio },
  //   { _id: 0, votos: 1 }
  // );
  // const colegios = await Centro.find({ municipio: municipio }, { _id: 0, colegios: 1 });
  // colegio.computados = await ActaDiputadosD2.count({ municipio: municipio });

  // colegios.forEach((obj) => {
  //   colegio.total += obj.colegios.length;
  // });
  const diputadosPrm = {
    prm1: 0,
    prm2: 0,
    prm3: 0,
    prm4: 0,
    prm5: 0
  }

  // console.log('**********************************************');
  

  // // votos por partidos
  // console.log('**********************************************');
  // // console.log(votosActasD2[0]);
  // if(votosActas.length > 0){
  //   console.log('No Soy Undifined');
    
  //   votosActas.forEach((obj) => {
    
  // //     // console.log(obj.votos[0].prm.reduce((a, b) => a + b));
  //       console.log(obj.votos[0].pld);
  //       votosPartidos.pld += obj.votos[0].pld.reduce((a, b) => a + b, 0);
  //       votosPartidos.prm += obj.votos[0].prm.reduce((a, b) => a + b);
  //       votosPartidos.prd += obj.votos[0].prd.reduce((a, b) => a + b);
  //       votosPartidos.prsc += obj.votos[0].prsc.reduce((a, b) => a + b);
  //       votosPartidos.alpais += obj.votos[0].alpais.reduce((a, b) => a + b);
  //       votosPartidos.phd += obj.votos[0].phd.reduce((a, b) => a + b);
  //       votosPartidos.moda += obj.votos[0].moda.reduce((a, b) => a + b);
  //       votosPartidos.bis += obj.votos[0].bis.reduce((a, b) => a + b);
  //       votosPartidos.pcr += obj.votos[0].pcr.reduce((a, b) => a + b);
  //       votosPartidos.dxc += obj.votos[0].dxc.reduce((a, b) => a + b);
  //       votosPartidos.famplio += obj.votos[0].famplio.reduce((a, b) => a + b);
  //       votosPartidos.udc += obj.votos[0].udc.reduce((a, b) => a + b);
  //       votosPartidos.pqdc += obj.votos[0].pqdc.reduce((a, b) => a + b);
  //       votosPartidos.plr += 0;
  //       votosPartidos.fp += obj.votos[0].fp.reduce((a, b) => a + b);;
  //       votosPartidos.fnp += obj.votos[0].fnp.reduce((a, b) => a + b);
  //       votosPartidos.apd += obj.votos[0].apd.reduce((a, b) => a + b);
  //       votosPartidos.verde += obj.votos[0].verde.reduce((a, b) => a + b);
  //       votosPartidos.ppc += obj.votos[0].ppc.reduce((a, b) => a + b);
  //       votosPartidos.pal += obj.votos[0].pal.reduce((a, b) => a + b);
  //       votosPartidos.prsd += obj.votos[0].prsd.reduce((a, b) => a + b);
  //       votosPartidos.pdp += obj.votos[0].pdp.reduce((a, b) => a + b);
  //       votosPartidos.pdi += 0;
  //       votosPartidos.pri += obj.votos[0].pri.reduce((a, b) => a + b);
  //       votosPartidos.pun += obj.votos[0].pun.reduce((a, b) => a + b);
  //       votosPartidos.pnvc += obj.votos[0].pnvc.reduce((a, b) => a + b);
  //       votosPartidos.pp += obj.votos[0].pp.reduce((a, b) => a + b);
    
  //       diputadosPrm.prm1 += obj.votos[0].prm[0] + obj.votos[0].phd[0] + obj.votos[0].dxc[0] + obj.votos[0].prsd[0];
  //       diputadosPrm.prm2 += obj.votos[0].prm[1] + obj.votos[0].phd[1] + obj.votos[0].dxc[1] + obj.votos[0].prsd[1];
  //       diputadosPrm.prm3 += obj.votos[0].prm[2] + obj.votos[0].phd[2] + obj.votos[0].dxc[2] + obj.votos[0].prsd[2];
  //       diputadosPrm.prm4 += obj.votos[0].prm[3] + obj.votos[0].phd[3] + obj.votos[0].dxc[3] + obj.votos[0].prsd[3];
  //       diputadosPrm.prm5 += obj.votos[0].prm[4] + obj.votos[0].phd[4] + obj.votos[0].dxc[4] + obj.votos[0].prsd[4];
  //     });
  // }













  const colegios = await Centro.find({}, { _id: 0, colegios: 1 });
  colegio.computados = await ActaDiputadosD2.countDocuments();

  colegios.forEach((obj) => {
    colegio.total += obj.colegios.length;
  });

  console.log('TWO****');
  // votos por partidos
  if(votosActasSPM.length > 0){
    votosActasSPM.forEach((obj) => {
      
        votosPartidos.pld += obj.votos[0].pld.reduce((a, b) => a + b, 0);
        votosPartidos.prm += obj.votos[0].prm.reduce((a, b) => a + b);
        votosPartidos.prd += obj.votos[0].prd.reduce((a, b) => a + b);
        votosPartidos.prsc += obj.votos[0].prsc.reduce((a, b) => a + b);
        votosPartidos.alpais += obj.votos[0].alpais.reduce((a, b) => a + b);
        votosPartidos.phd += obj.votos[0].phd.reduce((a, b) => a + b);
        votosPartidos.moda += obj.votos[0].moda.reduce((a, b) => a + b);
        votosPartidos.bis += obj.votos[0].bis.reduce((a, b) => a + b);
        votosPartidos.pcr += obj.votos[0].pcr.reduce((a, b) => a + b);
        votosPartidos.dxc += obj.votos[0].dxc.reduce((a, b) => a + b);
        votosPartidos.famplio += obj.votos[0].famplio.reduce((a, b) => a + b);
        votosPartidos.udc += obj.votos[0].udc.reduce((a, b) => a + b);
        votosPartidos.pqdc += obj.votos[0].pqdc.reduce((a, b) => a + b);
        votosPartidos.plr += 0;
        votosPartidos.fp += obj.votos[0].fp.reduce((a, b) => a + b);;
        votosPartidos.fnp += obj.votos[0].fnp.reduce((a, b) => a + b);
        votosPartidos.apd += obj.votos[0].apd.reduce((a, b) => a + b);
        votosPartidos.verde += obj.votos[0].verde.reduce((a, b) => a + b);
        votosPartidos.ppc += obj.votos[0].ppc.reduce((a, b) => a + b);
        votosPartidos.pal += obj.votos[0].pal.reduce((a, b) => a + b);
        votosPartidos.prsd += obj.votos[0].prsd.reduce((a, b) => a + b);
        votosPartidos.pdp += obj.votos[0].pdp.reduce((a, b) => a + b);
        votosPartidos.pdi += 0;
        votosPartidos.pri += obj.votos[0].pri.reduce((a, b) => a + b);
        votosPartidos.pun += obj.votos[0].pun.reduce((a, b) => a + b);
        votosPartidos.pnvc += obj.votos[0].pnvc.reduce((a, b) => a + b);
        votosPartidos.pp += obj.votos[0].pp.reduce((a, b) => a + b);
    
        diputadosPrm.prm1 += obj.votos[0].prm[0] + obj.votos[0].phd[0] + obj.votos[0].dxc[0] + obj.votos[0].prsd[0];
        diputadosPrm.prm2 += obj.votos[0].prm[1] + obj.votos[0].phd[1] + obj.votos[0].dxc[1] + obj.votos[0].prsd[1];
        diputadosPrm.prm3 += obj.votos[0].prm[2] + obj.votos[0].phd[2] + obj.votos[0].dxc[2] + obj.votos[0].prsd[2];
        diputadosPrm.prm4 += obj.votos[0].prm[3] + obj.votos[0].phd[3] + obj.votos[0].dxc[3] + obj.votos[0].prsd[3];
        diputadosPrm.prm5 += obj.votos[0].prm[4] + obj.votos[0].phd[4] + obj.votos[0].dxc[4] + obj.votos[0].prsd[4];
    });
  }
  // votosActasSPM.forEach((obj) => {
  //   votosPartidos.pld += obj.votos.pld;
  //   votosPartidos.prm += obj.votos.prm;
  //   votosPartidos.prd += obj.votos.prd;
  //   votosPartidos.prsc += obj.votos.prsc;
  //   votosPartidos.alpais += obj.votos.alpais;
  //   votosPartidos.phd += obj.votos.phd;
  //   votosPartidos.moda += obj.votos.moda;
  //   votosPartidos.bis += obj.votos.bis;
  //   votosPartidos.pcr += obj.votos.pcr;
  //   votosPartidos.dxc += obj.votos.dxc;
  //   votosPartidos.famplio += obj.votos.famplio;
  //   votosPartidos.udc += obj.votos.udc;
  //   votosPartidos.pqdc += obj.votos.pqdc;
  //   votosPartidos.plr += 0;
  //   votosPartidos.fp += obj.votos.fp;
  //   votosPartidos.fnp += obj.votos.fnp;
  //   votosPartidos.apd += obj.votos.apd;
  //   votosPartidos.verde += obj.votos.verde;
  //   votosPartidos.ppc += obj.votos.ppc;
  //   votosPartidos.pal += obj.votos.pal;
  //   votosPartidos.prsd += obj.votos.prsd;
  //   votosPartidos.pdp += obj.votos.pdp;
  //   votosPartidos.pdi += 0;
  //   votosPartidos.pri += obj.votos.pri;
  //   votosPartidos.pun += obj.votos.pun;
  //   votosPartidos.pnvc += obj.votos.pnvc;
  //   votosPartidos.pp += obj.votos.pp;
  // });

  if(votosActasConsuelo.length > 0){
    votosActasConsuelo.forEach((obj) => {
      votosPartidos.pld += obj.votos[0].pld.reduce((a, b) => a + b, 0);
        votosPartidos.prm += obj.votos[0].prm.reduce((a, b) => a + b);
        votosPartidos.prd += obj.votos[0].prd.reduce((a, b) => a + b);
        votosPartidos.prsc += obj.votos[0].prsc.reduce((a, b) => a + b);
        votosPartidos.alpais += obj.votos[0].alpais.reduce((a, b) => a + b);
        votosPartidos.phd += obj.votos[0].phd.reduce((a, b) => a + b);
        votosPartidos.moda += obj.votos[0].moda.reduce((a, b) => a + b);
        votosPartidos.bis += obj.votos[0].bis.reduce((a, b) => a + b);
        votosPartidos.pcr += obj.votos[0].pcr.reduce((a, b) => a + b);
        votosPartidos.dxc += obj.votos[0].dxc.reduce((a, b) => a + b);
        votosPartidos.famplio += obj.votos[0].famplio.reduce((a, b) => a + b);
        votosPartidos.udc += obj.votos[0].udc.reduce((a, b) => a + b);
        votosPartidos.pqdc += obj.votos[0].pqdc.reduce((a, b) => a + b);
        votosPartidos.plr += 0;
        votosPartidos.fp += obj.votos[0].fp.reduce((a, b) => a + b);;
        votosPartidos.fnp += obj.votos[0].fnp.reduce((a, b) => a + b);
        votosPartidos.apd += obj.votos[0].apd.reduce((a, b) => a + b);
        votosPartidos.verde += obj.votos[0].verde.reduce((a, b) => a + b);
        votosPartidos.ppc += obj.votos[0].ppc.reduce((a, b) => a + b);
        votosPartidos.pal += obj.votos[0].pal.reduce((a, b) => a + b);
        votosPartidos.prsd += obj.votos[0].prsd.reduce((a, b) => a + b);
        votosPartidos.pdp += obj.votos[0].pdp.reduce((a, b) => a + b);
        votosPartidos.pdi += 0;
        votosPartidos.pri += obj.votos[0].pri.reduce((a, b) => a + b);
        votosPartidos.pun += obj.votos[0].pun.reduce((a, b) => a + b);
        votosPartidos.pnvc += obj.votos[0].pnvc.reduce((a, b) => a + b);
        votosPartidos.pp += obj.votos[0].pp.reduce((a, b) => a + b);
    
        diputadosPrm.prm1 += obj.votos[0].prm[0] + obj.votos[0].phd[0] + obj.votos[0].dxc[0] + obj.votos[0].prsd[0];
        diputadosPrm.prm2 += obj.votos[0].prm[1] + obj.votos[0].phd[1] + obj.votos[0].dxc[1] + obj.votos[0].prsd[1];
        diputadosPrm.prm3 += obj.votos[0].prm[2] + obj.votos[0].phd[2] + obj.votos[0].dxc[2] + obj.votos[0].prsd[2];
        diputadosPrm.prm4 += obj.votos[0].prm[3] + obj.votos[0].phd[3] + obj.votos[0].dxc[3] + obj.votos[0].prsd[3];
        diputadosPrm.prm5 += obj.votos[0].prm[4] + obj.votos[0].phd[4] + obj.votos[0].dxc[4] + obj.votos[0].prsd[4];
    });
  }
  // votosActasConsuelo.forEach((obj) => {
  //   votosPartidos.pld += obj.votos.pld;
  //   votosPartidos.prm += obj.votos.prm;
  //   votosPartidos.prd += obj.votos.prd;
  //   votosPartidos.prsc += obj.votos.prsc;
  //   votosPartidos.alpais += obj.votos.alpais;
  //   votosPartidos.phd += obj.votos.phd;
  //   votosPartidos.moda += obj.votos.moda;
  //   votosPartidos.bis += obj.votos.bis;
  //   votosPartidos.pcr += obj.votos.pcr;
  //   votosPartidos.dxc += obj.votos.dxc;
  //   votosPartidos.famplio += obj.votos.famplio;
  //   votosPartidos.udc += obj.votos.udc;
  //   votosPartidos.pqdc += obj.votos.pqdc;
  //   votosPartidos.plr += 0;
  //   votosPartidos.fp += obj.votos.fp;
  //   votosPartidos.fnp += obj.votos.fnp;
  //   votosPartidos.apd += obj.votos.apd;
  //   votosPartidos.verde += obj.votos.verde;
  //   votosPartidos.ppc += obj.votos.ppc;
  //   votosPartidos.pal += obj.votos.pal;
  //   votosPartidos.prsd += obj.votos.prsd;
  //   votosPartidos.pdp += obj.votos.pdp;
  //   votosPartidos.pdi += 0;
  //   votosPartidos.pri += obj.votos.pri;
  //   votosPartidos.pun += obj.votos.pun;
  //   votosPartidos.pnvc += obj.votos.pnvc;
  //   votosPartidos.pp += obj.votos.pp;
  // });

  if(votosActasGuayacanes.length > 0){
    votosActasGuayacanes.forEach((obj) => {
      votosPartidos.pld += obj.votos[0].pld.reduce((a, b) => a + b, 0);
        votosPartidos.prm += obj.votos[0].prm.reduce((a, b) => a + b);
        votosPartidos.prd += obj.votos[0].prd.reduce((a, b) => a + b);
        votosPartidos.prsc += obj.votos[0].prsc.reduce((a, b) => a + b);
        votosPartidos.alpais += obj.votos[0].alpais.reduce((a, b) => a + b);
        votosPartidos.phd += obj.votos[0].phd.reduce((a, b) => a + b);
        votosPartidos.moda += obj.votos[0].moda.reduce((a, b) => a + b);
        votosPartidos.bis += obj.votos[0].bis.reduce((a, b) => a + b);
        votosPartidos.pcr += obj.votos[0].pcr.reduce((a, b) => a + b);
        votosPartidos.dxc += obj.votos[0].dxc.reduce((a, b) => a + b);
        votosPartidos.famplio += obj.votos[0].famplio.reduce((a, b) => a + b);
        votosPartidos.udc += obj.votos[0].udc.reduce((a, b) => a + b);
        votosPartidos.pqdc += obj.votos[0].pqdc.reduce((a, b) => a + b);
        votosPartidos.plr += 0;
        votosPartidos.fp += obj.votos[0].fp.reduce((a, b) => a + b);;
        votosPartidos.fnp += obj.votos[0].fnp.reduce((a, b) => a + b);
        votosPartidos.apd += obj.votos[0].apd.reduce((a, b) => a + b);
        votosPartidos.verde += obj.votos[0].verde.reduce((a, b) => a + b);
        votosPartidos.ppc += obj.votos[0].ppc.reduce((a, b) => a + b);
        votosPartidos.pal += obj.votos[0].pal.reduce((a, b) => a + b);
        votosPartidos.prsd += obj.votos[0].prsd.reduce((a, b) => a + b);
        votosPartidos.pdp += obj.votos[0].pdp.reduce((a, b) => a + b);
        votosPartidos.pdi += 0;
        votosPartidos.pri += obj.votos[0].pri.reduce((a, b) => a + b);
        votosPartidos.pun += obj.votos[0].pun.reduce((a, b) => a + b);
        votosPartidos.pnvc += obj.votos[0].pnvc.reduce((a, b) => a + b);
        votosPartidos.pp += obj.votos[0].pp.reduce((a, b) => a + b);
    
        diputadosPrm.prm1 += obj.votos[0].prm[0] + obj.votos[0].phd[0] + obj.votos[0].dxc[0] + obj.votos[0].prsd[0];
        diputadosPrm.prm2 += obj.votos[0].prm[1] + obj.votos[0].phd[1] + obj.votos[0].dxc[1] + obj.votos[0].prsd[1];
        diputadosPrm.prm3 += obj.votos[0].prm[2] + obj.votos[0].phd[2] + obj.votos[0].dxc[2] + obj.votos[0].prsd[2];
        diputadosPrm.prm4 += obj.votos[0].prm[3] + obj.votos[0].phd[3] + obj.votos[0].dxc[3] + obj.votos[0].prsd[3];
        diputadosPrm.prm5 += obj.votos[0].prm[4] + obj.votos[0].phd[4] + obj.votos[0].dxc[4] + obj.votos[0].prsd[4];
    });
  }
  // votosActasGuayacanes.forEach((obj) => {
  //   votosPartidos.pld += obj.votos.pld;
  //   votosPartidos.prm += obj.votos.prm;
  //   votosPartidos.prd += obj.votos.prd;
  //   votosPartidos.prsc += obj.votos.prsc;
  //   votosPartidos.alpais += obj.votos.alpais;
  //   votosPartidos.phd += obj.votos.phd;
  //   votosPartidos.moda += obj.votos.moda;
  //   votosPartidos.bis += obj.votos.bis;
  //   votosPartidos.pcr += obj.votos.pcr;
  //   votosPartidos.dxc += obj.votos.dxc;
  //   votosPartidos.famplio += obj.votos.famplio;
  //   votosPartidos.udc += obj.votos.udc;
  //   votosPartidos.pqdc += obj.votos.pqdc;
  //   votosPartidos.plr += 0;
  //   votosPartidos.fp += obj.votos.fp;
  //   votosPartidos.fnp += obj.votos.fnp;
  //   votosPartidos.apd += obj.votos.apd;
  //   votosPartidos.verde += obj.votos.verde;
  //   votosPartidos.ppc += obj.votos.ppc;
  //   votosPartidos.pal += obj.votos.pal;
  //   votosPartidos.prsd += obj.votos.prsd;
  //   votosPartidos.pdp += obj.votos.pdp;
  //   votosPartidos.pdi += 0;
  //   votosPartidos.pri += obj.votos.pri;
  //   votosPartidos.pun += obj.votos.pun;
  //   votosPartidos.pnvc += obj.votos.pnvc;
  //   votosPartidos.pp += obj.votos.pp;
  // });

  if(votosActasLosLlanos.length > 0 ){
    votosActasLosLlanos.forEach((obj) => {
      votosPartidos.pld += obj.votos[0].pld.reduce((a, b) => a + b, 0);
        votosPartidos.prm += obj.votos[0].prm.reduce((a, b) => a + b);
        votosPartidos.prd += obj.votos[0].prd.reduce((a, b) => a + b);
        votosPartidos.prsc += obj.votos[0].prsc.reduce((a, b) => a + b);
        votosPartidos.alpais += obj.votos[0].alpais.reduce((a, b) => a + b);
        votosPartidos.phd += obj.votos[0].phd.reduce((a, b) => a + b);
        votosPartidos.moda += obj.votos[0].moda.reduce((a, b) => a + b);
        votosPartidos.bis += obj.votos[0].bis.reduce((a, b) => a + b);
        votosPartidos.pcr += obj.votos[0].pcr.reduce((a, b) => a + b);
        votosPartidos.dxc += obj.votos[0].dxc.reduce((a, b) => a + b);
        votosPartidos.famplio += obj.votos[0].famplio.reduce((a, b) => a + b);
        votosPartidos.udc += obj.votos[0].udc.reduce((a, b) => a + b);
        votosPartidos.pqdc += obj.votos[0].pqdc.reduce((a, b) => a + b);
        votosPartidos.plr += 0;
        votosPartidos.fp += obj.votos[0].fp.reduce((a, b) => a + b);;
        votosPartidos.fnp += obj.votos[0].fnp.reduce((a, b) => a + b);
        votosPartidos.apd += obj.votos[0].apd.reduce((a, b) => a + b);
        votosPartidos.verde += obj.votos[0].verde.reduce((a, b) => a + b);
        votosPartidos.ppc += obj.votos[0].ppc.reduce((a, b) => a + b);
        votosPartidos.pal += obj.votos[0].pal.reduce((a, b) => a + b);
        votosPartidos.prsd += obj.votos[0].prsd.reduce((a, b) => a + b);
        votosPartidos.pdp += obj.votos[0].pdp.reduce((a, b) => a + b);
        votosPartidos.pdi += 0;
        votosPartidos.pri += obj.votos[0].pri.reduce((a, b) => a + b);
        votosPartidos.pun += obj.votos[0].pun.reduce((a, b) => a + b);
        votosPartidos.pnvc += obj.votos[0].pnvc.reduce((a, b) => a + b);
        votosPartidos.pp += obj.votos[0].pp.reduce((a, b) => a + b);
    
        diputadosPrm.prm1 += obj.votos[0].prm[0] + obj.votos[0].phd[0] + obj.votos[0].dxc[0] + obj.votos[0].prsd[0];
        diputadosPrm.prm2 += obj.votos[0].prm[1] + obj.votos[0].phd[1] + obj.votos[0].dxc[1] + obj.votos[0].prsd[1];
        diputadosPrm.prm3 += obj.votos[0].prm[2] + obj.votos[0].phd[2] + obj.votos[0].dxc[2] + obj.votos[0].prsd[2];
        diputadosPrm.prm4 += obj.votos[0].prm[3] + obj.votos[0].phd[3] + obj.votos[0].dxc[3] + obj.votos[0].prsd[3];
        diputadosPrm.prm5 += obj.votos[0].prm[4] + obj.votos[0].phd[4] + obj.votos[0].dxc[4] + obj.votos[0].prsd[4];
    });
  }
  // votosActasLosLlanos.forEach((obj) => {
  //   votosPartidos.pld += obj.votos.pld;
  //   votosPartidos.prm += obj.votos.prm;
  //   votosPartidos.prd += obj.votos.prd;
  //   votosPartidos.prsc += obj.votos.prsc;
  //   votosPartidos.alpais += obj.votos.alpais;
  //   votosPartidos.phd += obj.votos.phd;
  //   votosPartidos.moda += obj.votos.moda;
  //   votosPartidos.bis += obj.votos.bis;
  //   votosPartidos.pcr += obj.votos.pcr;
  //   votosPartidos.dxc += obj.votos.dxc;
  //   votosPartidos.famplio += obj.votos.famplio;
  //   votosPartidos.udc += obj.votos.udc;
  //   votosPartidos.pqdc += obj.votos.pqdc;
  //   votosPartidos.plr += 0;
  //   votosPartidos.fp += obj.votos.fp;
  //   votosPartidos.fnp += obj.votos.fnp;
  //   votosPartidos.apd += obj.votos.apd;
  //   votosPartidos.verde += obj.votos.verde;
  //   votosPartidos.ppc += obj.votos.ppc;
  //   votosPartidos.pal += obj.votos.pal;
  //   votosPartidos.prsd += obj.votos.prsd;
  //   votosPartidos.pdp += obj.votos.pdp;
  //   votosPartidos.pdi += 0;
  //   votosPartidos.pri += obj.votos.pri;
  //   votosPartidos.pun += obj.votos.pun;
  //   votosPartidos.pnvc += obj.votos.pnvc;
  //   votosPartidos.pp += obj.votos.pp;
  // });

  if(votosActasQuisqueya.length > 0){
    votosActasQuisqueya.forEach((obj) => {
      votosPartidos.pld += obj.votos[0].pld.reduce((a, b) => a + b, 0);
        votosPartidos.prm += obj.votos[0].prm.reduce((a, b) => a + b);
        votosPartidos.prd += obj.votos[0].prd.reduce((a, b) => a + b);
        votosPartidos.prsc += obj.votos[0].prsc.reduce((a, b) => a + b);
        votosPartidos.alpais += obj.votos[0].alpais.reduce((a, b) => a + b);
        votosPartidos.phd += obj.votos[0].phd.reduce((a, b) => a + b);
        votosPartidos.moda += obj.votos[0].moda.reduce((a, b) => a + b);
        votosPartidos.bis += obj.votos[0].bis.reduce((a, b) => a + b);
        votosPartidos.pcr += obj.votos[0].pcr.reduce((a, b) => a + b);
        votosPartidos.dxc += obj.votos[0].dxc.reduce((a, b) => a + b);
        votosPartidos.famplio += obj.votos[0].famplio.reduce((a, b) => a + b);
        votosPartidos.udc += obj.votos[0].udc.reduce((a, b) => a + b);
        votosPartidos.pqdc += obj.votos[0].pqdc.reduce((a, b) => a + b);
        votosPartidos.plr += 0;
        votosPartidos.fp += obj.votos[0].fp.reduce((a, b) => a + b);;
        votosPartidos.fnp += obj.votos[0].fnp.reduce((a, b) => a + b);
        votosPartidos.apd += obj.votos[0].apd.reduce((a, b) => a + b);
        votosPartidos.verde += obj.votos[0].verde.reduce((a, b) => a + b);
        votosPartidos.ppc += obj.votos[0].ppc.reduce((a, b) => a + b);
        votosPartidos.pal += obj.votos[0].pal.reduce((a, b) => a + b);
        votosPartidos.prsd += obj.votos[0].prsd.reduce((a, b) => a + b);
        votosPartidos.pdp += obj.votos[0].pdp.reduce((a, b) => a + b);
        votosPartidos.pdi += 0;
        votosPartidos.pri += obj.votos[0].pri.reduce((a, b) => a + b);
        votosPartidos.pun += obj.votos[0].pun.reduce((a, b) => a + b);
        votosPartidos.pnvc += obj.votos[0].pnvc.reduce((a, b) => a + b);
        votosPartidos.pp += obj.votos[0].pp.reduce((a, b) => a + b);
    
        diputadosPrm.prm1 += obj.votos[0].prm[0] + obj.votos[0].phd[0] + obj.votos[0].dxc[0] + obj.votos[0].prsd[0];
        diputadosPrm.prm2 += obj.votos[0].prm[1] + obj.votos[0].phd[1] + obj.votos[0].dxc[1] + obj.votos[0].prsd[1];
        diputadosPrm.prm3 += obj.votos[0].prm[2] + obj.votos[0].phd[2] + obj.votos[0].dxc[2] + obj.votos[0].prsd[2];
        diputadosPrm.prm4 += obj.votos[0].prm[3] + obj.votos[0].phd[3] + obj.votos[0].dxc[3] + obj.votos[0].prsd[3];
        diputadosPrm.prm5 += obj.votos[0].prm[4] + obj.votos[0].phd[4] + obj.votos[0].dxc[4] + obj.votos[0].prsd[4];
    });
  }
  // votosActasQuisqueya.forEach((obj) => {
  //   votosPartidos.pld += obj.votos.pld;
  //   votosPartidos.prm += obj.votos.prm;
  //   votosPartidos.prd += obj.votos.prd;
  //   votosPartidos.prsc += obj.votos.prsc;
  //   votosPartidos.alpais += obj.votos.alpais;
  //   votosPartidos.phd += obj.votos.phd;
  //   votosPartidos.moda += obj.votos.moda;
  //   votosPartidos.bis += obj.votos.bis;
  //   votosPartidos.pcr += obj.votos.pcr;
  //   votosPartidos.dxc += obj.votos.dxc;
  //   votosPartidos.famplio += obj.votos.famplio;
  //   votosPartidos.udc += obj.votos.udc;
  //   votosPartidos.pqdc += obj.votos.pqdc;
  //   votosPartidos.plr += 0;
  //   votosPartidos.fp += obj.votos.fp;
  //   votosPartidos.fnp += obj.votos.fnp;
  //   votosPartidos.apd += obj.votos.apd;
  //   votosPartidos.verde += obj.votos.verde;
  //   votosPartidos.ppc += obj.votos.ppc;
  //   votosPartidos.pal += obj.votos.pal;
  //   votosPartidos.prsd += obj.votos.prsd;
  //   votosPartidos.pdp += obj.votos.pdp;
  //   votosPartidos.pdi += 0;
  //   votosPartidos.pri += obj.votos.pri;
  //   votosPartidos.pun += obj.votos.pun;
  //   votosPartidos.pnvc += obj.votos.pnvc;
  //   votosPartidos.pp += obj.votos.pp;
  // });

  if(votosActasRamonSantana.length > 0){
    votosActasRamonSantana.forEach((obj) => {
      votosPartidos.pld += obj.votos[0].pld.reduce((a, b) => a + b, 0);
        votosPartidos.prm += obj.votos[0].prm.reduce((a, b) => a + b);
        votosPartidos.prd += obj.votos[0].prd.reduce((a, b) => a + b);
        votosPartidos.prsc += obj.votos[0].prsc.reduce((a, b) => a + b);
        votosPartidos.alpais += obj.votos[0].alpais.reduce((a, b) => a + b);
        votosPartidos.phd += obj.votos[0].phd.reduce((a, b) => a + b);
        votosPartidos.moda += obj.votos[0].moda.reduce((a, b) => a + b);
        votosPartidos.bis += obj.votos[0].bis.reduce((a, b) => a + b);
        votosPartidos.pcr += obj.votos[0].pcr.reduce((a, b) => a + b);
        votosPartidos.dxc += obj.votos[0].dxc.reduce((a, b) => a + b);
        votosPartidos.famplio += obj.votos[0].famplio.reduce((a, b) => a + b);
        votosPartidos.udc += obj.votos[0].udc.reduce((a, b) => a + b);
        votosPartidos.pqdc += obj.votos[0].pqdc.reduce((a, b) => a + b);
        votosPartidos.plr += 0;
        votosPartidos.fp += obj.votos[0].fp.reduce((a, b) => a + b);;
        votosPartidos.fnp += obj.votos[0].fnp.reduce((a, b) => a + b);
        votosPartidos.apd += obj.votos[0].apd.reduce((a, b) => a + b);
        votosPartidos.verde += obj.votos[0].verde.reduce((a, b) => a + b);
        votosPartidos.ppc += obj.votos[0].ppc.reduce((a, b) => a + b);
        votosPartidos.pal += obj.votos[0].pal.reduce((a, b) => a + b);
        votosPartidos.prsd += obj.votos[0].prsd.reduce((a, b) => a + b);
        votosPartidos.pdp += obj.votos[0].pdp.reduce((a, b) => a + b);
        votosPartidos.pdi += 0;
        votosPartidos.pri += obj.votos[0].pri.reduce((a, b) => a + b);
        votosPartidos.pun += obj.votos[0].pun.reduce((a, b) => a + b);
        votosPartidos.pnvc += obj.votos[0].pnvc.reduce((a, b) => a + b);
        votosPartidos.pp += obj.votos[0].pp.reduce((a, b) => a + b);
    
        diputadosPrm.prm1 += obj.votos[0].prm[0] + obj.votos[0].phd[0] + obj.votos[0].dxc[0] + obj.votos[0].prsd[0];
        diputadosPrm.prm2 += obj.votos[0].prm[1] + obj.votos[0].phd[1] + obj.votos[0].dxc[1] + obj.votos[0].prsd[1];
        diputadosPrm.prm3 += obj.votos[0].prm[2] + obj.votos[0].phd[2] + obj.votos[0].dxc[2] + obj.votos[0].prsd[2];
        diputadosPrm.prm4 += obj.votos[0].prm[3] + obj.votos[0].phd[3] + obj.votos[0].dxc[3] + obj.votos[0].prsd[3];
        diputadosPrm.prm5 += obj.votos[0].prm[4] + obj.votos[0].phd[4] + obj.votos[0].dxc[4] + obj.votos[0].prsd[4];
    });
  }
  // votosActasRamonSantana.forEach((obj) => {
  //   votosPartidos.pld += obj.votos.pld;
  //   votosPartidos.prm += obj.votos.prm;
  //   votosPartidos.prd += obj.votos.prd;
  //   votosPartidos.prsc += obj.votos.prsc;
  //   votosPartidos.alpais += obj.votos.alpais;
  //   votosPartidos.phd += obj.votos.phd;
  //   votosPartidos.moda += obj.votos.moda;
  //   votosPartidos.bis += obj.votos.bis;
  //   votosPartidos.pcr += obj.votos.pcr;
  //   votosPartidos.dxc += obj.votos.dxc;
  //   votosPartidos.famplio += obj.votos.famplio;
  //   votosPartidos.udc += obj.votos.udc;
  //   votosPartidos.pqdc += obj.votos.pqdc;
  //   votosPartidos.plr += 0;
  //   votosPartidos.fp += obj.votos.fp;
  //   votosPartidos.fnp += obj.votos.fnp;
  //   votosPartidos.apd += obj.votos.apd;
  //   votosPartidos.verde += obj.votos.verde;
  //   votosPartidos.ppc += obj.votos.ppc;
  //   votosPartidos.pal += obj.votos.pal;
  //   votosPartidos.prsd += obj.votos.prsd;
  //   votosPartidos.pdp += obj.votos.pdp;
  //   votosPartidos.pdi += 0;
  //   votosPartidos.pri += obj.votos.pri;
  //   votosPartidos.pun += obj.votos.pun;
  //   votosPartidos.pnvc += obj.votos.pnvc;
  //   votosPartidos.pp += obj.votos.pp;
  // });
  // votos validos, nulos, emitidos y observados

  console.log('THRREE****');
  const votosDocumentos = await ActaDiputadosD2.find(
    { },
    { votosValidos: 1, votosNulos: 1, votosEmitidos: 1, boletasObservadas: 1, _id: 0 }
  );

  if (votosDocumentos) {
    votosDocumentos.forEach((data) => {
      votos.validos += data.votosValidos;
      votos.nulos += data.votosNulos;
      votos.emitidos += data.votosEmitidos;
      votos.observados += data.boletasObservadas;
    });
  }

  
  votos.porcientoEmitidos = ((votos.emitidos / inscritos) * 100).toFixed(2);
  if (votos.emitidos !== 0) {
    votos.porcientoValidos = ((votos.validos / votos.emitidos) * 100).toFixed(2);
    votos.porcientoNulos = ((votos.nulos / votos.emitidos) * 100).toFixed(2);
    votos.porcientoObservados = ((votos.observados / votos.emitidos) * 100).toFixed(2);
  } else {
    votos.porcientoValidos = 0;
    votos.porcientoNulos = 0;
    votos.porcientoObservados = 0;
  }

  votosAlianzas.pld =
    votosPartidos.pld +
    votosPartidos.pcr +
    votosPartidos.udc +
    votosPartidos.ppc +
    votosPartidos.pdp +
    votosPartidos.pri;

  votosAlianzas.prm = 
    votosPartidos.prm +
    votosPartidos.phd +
    votosPartidos.dxc +
    votosPartidos.prsd;
    

  votosAlianzas.fp =
    votosPartidos.prsc +
    votosPartidos.bis + 
    votosPartidos.pqdc + 
    votosPartidos.fp + 
    votosPartidos.fnp +
    votosPartidos.pun;

  votosAlianzas.famplio = 
    votosPartidos.famplio +
    votosPartidos.apd;

  // console.log(votos)
  // let totalVotos = 0;
  // votos.forEach(acta => {
  //     for (const prop in acta.votos) {
  //         totalVotos += acta.votos[prop];
  //       }
  // })
  // console.log(totalVotos);

  console.log('FOUR****');
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
    votosAlianzas: votosAlianzas,
    diputadosPrm: diputadosPrm
  };


   //******************** Metodo de Hondt  *******************/
 // D'Hondt Method of Propotional Seats

// var dhondt = function (seats, votes) {
//   var list = Object.getOwnPropertyNames(votes).map(function (party) {
//       return {party: party, votes: votes[party], seats: 0};
//   });
//   for (var i = 0; i < seats; i++) {
//       list.sort(function (p1, p2) {
//           var v1 = p1.votes / (p1.seats + 1);
//           var v2 = p2.votes / (p2.seats + 1);
//           return v2 - v1;
//       });
//       list[0].seats += 1;
//   }
//   list.sort(function (p1, p2) {return p2.votes - p1.votes;});
//   return list;
// };

// // Output seats and analysis of parties
// var analyze = function (result) {
//   var totalVotes = 0;
//   var totalSeats = 0;
//   result.forEach(function (party) {
//       totalVotes += party.votes;
//       totalSeats += party.seats;
//   });
//   console.log({totalVotes: totalVotes, totalSeats: totalSeats});
//   result.forEach(function (party) {
//       var voteRate = Math.round(party.votes / totalVotes * 10000) / 100;
//       var seatRate = Math.round(party.seats / totalSeats * 10000) / 100;
//       console.log("[" + party.party + "] " +
//                   "votes: " + party.votes + "(" + voteRate + "%) " +
//                   "seats: " + party.seats + "(" + seatRate + "%)");
//       acta.escanos.push({partido: party.party, escanos: party.seats});
//   });
//   console.log();
// };

// D'Hondt method example from Wikipedia
// var result = dhondt(5, {
//   PLD: votosAlianzas.pld,
//   PRM: votosAlianzas.prm,
//   FP: votosAlianzas.fp,
//   PRD: votosPartidos.prd,
//   ALPAIS: votosPartidos.alpais,
//   MODA: votosPartidos.moda,
//   VERDE: votosPartidos.verde,
//   PAL: votosPartidos.pal,
//   PNVC: votosPartidos.pnvc,
//   PP: votosPartidos.pp
// });
// analyze(result);
console.log('Se Van');
  res.json(acta);
});


router.get('/dashboard/:municipio/presidencial', async (req, res) => {
  let municipio = req.params.municipio;
  let inscritos = 0;

  switch (municipio) {
    case 'sanpedro':
      municipio = 'San Pedro De Macoris';
      inscritos = 159251;
      break;
    case 'consuelo':
      municipio = 'Consuelo';
      inscritos = 23585;
      break;
    case 'guayacanes':
      municipio = 'Guayacanes';
      inscritos = 7639;
      break;  
    case 'losllanos':
      municipio = 'Los Llanos';
      inscritos = 16914;
      break;  
    case 'quisqueya':
      municipio = 'Quisqueya';
      inscritos = 14309;
      break; 
     case 'ramonsantana':
      municipio = 'Ramon Santana';
      inscritos = 7201;
      break; 
    case 'todos':
      res.redirect('/dashboard/todos/presidencial');
      break;
    
  }

  const colegio = {
    total: 0,
    faltantes: 0,
    computados: 0,
    porcientoComputado: 0,
    porcientoFaltante: 0,
  };

  const votos = {
    emitidos: 0,
    validos: 0,
    nulos: 0,
    observados: 0,
    porcientoEmitidos: 0,
    porcientoValidos: 0,
    porcientoNulos: 0,
    porcientoObservados: 0,
  };

  

  

  const votosPartidos = {
    pld: 0,
    prm: 0,
    prd: 0,
    prsc: 0,
    alpais: 0,
    phd: 0,
    moda: 0,
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
    pp: 0,
  };

  const votosAlianzas = {
    pld: 0,
    prm: 0,
    fp: 0,
    alpais: 0,
    verde: 0,
    pdi: 0,
    pnvc: 0,
  };

  const votosActas = await ActaPresidencial.find(
    { municipio: municipio },
    { _id: 0, votos: 1 }
  );
  const colegios = await Centro.find({ municipio: municipio }, { _id: 0, colegios: 1 });
  colegio.computados = await ActaPresidencial.count({ municipio: municipio });

  colegios.forEach((obj) => {
    colegio.total += obj.colegios.length;
  });

  // votos por partidos
  votosActas.forEach((obj) => {
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
  const votosDocumentos = await ActaPresidencial.find(
    { municipio: municipio },
    { votosValidos: 1, votosNulos: 1, votosEmitidos: 1, boletasObservadas: 1, _id: 0 }
  );

  if (votosDocumentos) {
    votosDocumentos.forEach((data) => {
      votos.validos += data.votosValidos;
      votos.nulos += data.votosNulos;
      votos.emitidos += data.votosEmitidos;
      votos.observados += data.boletasObservadas;
    });
  }

  votos.porcientoEmitidos = ((votos.emitidos / inscritos) * 100).toFixed(2);
  if (votos.emitidos !== 0) {
    votos.porcientoValidos = ((votos.validos / votos.emitidos) * 100).toFixed(2);
    votos.porcientoNulos = ((votos.nulos / votos.emitidos) * 100).toFixed(2);
    votos.porcientoObservados = ((votos.observados / votos.emitidos) * 100).toFixed(2);
  } else {
    votos.porcientoValidos = 0;
    votos.porcientoNulos = 0;
    votos.porcientoObservados = 0;
  }

  votosAlianzas.pld =
    votosPartidos.pld +
    votosPartidos.prd +
    votosPartidos.moda +
    votosPartidos.pcr +
    votosPartidos.udc +
    // votosPartidos.plr +
    votosPartidos.ppc +
    votosPartidos.pal +
    votosPartidos.pdp +
    votosPartidos.pri;

  votosAlianzas.prm =
    votosPartidos.prm +
    votosPartidos.phd +
    votosPartidos.dxc +
    votosPartidos.famplio +
    votosPartidos.apd +
    votosPartidos.prsd +
    votosPartidos.pp;

  votosAlianzas.fp =
    votosPartidos.prsc +
    votosPartidos.bis +
    votosPartidos.pqdc +
    votosPartidos.fp +
    votosPartidos.fnp +
    votosPartidos.pun;

  votosAlianzas.alpais = votosPartidos.alpais;
  votosAlianzas.verde = votosPartidos.verde;
  votosAlianzas.pdi = votosPartidos.pdi;
  votosAlianzas.pnvc = votosPartidos.pnvc;

  

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
    votosAlianzas: votosAlianzas,
  };

  // res.render('dashboard/resultados', {colegio, inscritos, votos, votosPartidos, votosAlianzas});
  // res.json([colegio, inscritos, votos, votosPartidos, votosAlianzas]);
  
  res.json(acta);
});

router.get('/dashboard/:municipio/senatorial', async (req, res) => {
  let municipio = req.params.municipio;

  let inscritos = 0;

  switch (municipio) {
    case 'sanpedro':
      municipio = 'San Pedro De Macoris';
      inscritos = 159251;
      break;
    case 'consuelo':
      municipio = 'Consuelo';
      inscritos = 23585;
      break;
    case 'guayacanes':
      municipio = 'Guayacanes';
      inscritos = 7639;
      break;  
    case 'losllanos':
      municipio = 'Los Llanos';
      inscritos = 16914;
      break;  
    case 'quisqueya':
      municipio = 'Quisqueya';
      inscritos = 14309;
      break; 
     case 'ramonsantana':
      municipio = 'Ramon Santana';
      inscritos = 7201;
      break; 
    case 'todos':
      res.redirect('/dashboard/todos/senatorial');
      break;
    
  }

  const colegio = {
    total: 0,
    faltantes: 0,
    computados: 0,
    porcientoComputado: 0,
    porcientoFaltante: 0,
  };

  const votos = {
    emitidos: 0,
    validos: 0,
    nulos: 0,
    observados: 0,
    porcientoEmitidos: 0,
    porcientoValidos: 0,
    porcientoNulos: 0,
    porcientoObservados: 0,
  };

  

  const votosPartidos = {
    pld: 0,
    prm: 0,
    prd: 0,
    prsc: 0,
    alpais: 0,
    phd: 0,
    moda: 0,
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
    pp: 0,
  };

  const votosAlianzas = {
    pld: 0,
    prm: 0,
    bis: 0
  };

  const votosActas = await ActaSenatorial.find(
    { municipio: municipio },
    { _id: 0, votos: 1 }
  );
  const colegios = await Centro.find({ municipio: municipio }, { _id: 0, colegios: 1 });
  colegio.computados = await ActaSenatorial.count({ municipio: municipio });

  colegios.forEach((obj) => {
    colegio.total += obj.colegios.length;
  });

  // votos por partidos
  votosActas.forEach((obj) => {
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
    votosPartidos.fp += 0;
    votosPartidos.fnp += obj.votos.fnp;
    votosPartidos.apd += obj.votos.apd;
    votosPartidos.verde += obj.votos.verde;
    votosPartidos.ppc += obj.votos.ppc;
    votosPartidos.pal += obj.votos.pal;
    votosPartidos.prsd += obj.votos.prsd;
    votosPartidos.pdp += obj.votos.pdp;
    votosPartidos.pdi += 0;
    votosPartidos.pri += obj.votos.pri;
    votosPartidos.pun += obj.votos.pun;
    votosPartidos.pnvc += obj.votos.pnvc;
    votosPartidos.pp += obj.votos.pp;
  });

  // votos validos, nulos, emitidos y observados
  const votosDocumentos = await ActaSenatorial.find(
    { municipio: municipio },
    { votosValidos: 1, votosNulos: 1, votosEmitidos: 1, boletasObservadas: 1, _id: 0 }
  );

  if (votosDocumentos) {
    votosDocumentos.forEach((data) => {
      votos.validos += data.votosValidos;
      votos.nulos += data.votosNulos;
      votos.emitidos += data.votosEmitidos;
      votos.observados += data.boletasObservadas;
    });
  }

  votos.porcientoEmitidos = ((votos.emitidos / inscritos) * 100).toFixed(2);
  if (votos.emitidos !== 0) {
    votos.porcientoValidos = ((votos.validos / votos.emitidos) * 100).toFixed(2);
    votos.porcientoNulos = ((votos.nulos / votos.emitidos) * 100).toFixed(2);
    votos.porcientoObservados = ((votos.observados / votos.emitidos) * 100).toFixed(2);
  } else {
    votos.porcientoValidos = 0;
    votos.porcientoNulos = 0;
    votos.porcientoObservados = 0;
  }

  votosAlianzas.pld =
    votosPartidos.pld +
    votosPartidos.pcr +
    votosPartidos.udc +
    votosPartidos.ppc +
    votosPartidos.pal +
    votosPartidos.pdp +
    votosPartidos.pri;

  votosAlianzas.prm = 
    votosPartidos.prm + 
    votosPartidos.prsc + 
    votosPartidos.alpais+
    votosPartidos.phd +
    votosPartidos.dxc +
    votosPartidos.famplio +
    votosPartidos.apd +
    votosPartidos.prsd +
    votosPartidos.pp;

  votosAlianzas.bis =
    votosPartidos.bis + 
    votosPartidos.pqdc + 
    votosPartidos.fnp + 
    votosPartidos.pun;


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
    votosAlianzas: votosAlianzas,
  };

  // res.render('dashboard/resultados', {colegio, inscritos, votos, votosPartidos, votosAlianzas});
  // res.json([colegio, inscritos, votos, votosPartidos, votosAlianzas]);
  res.json(acta);
});

router.get('/dashboard/:municipio/diputadosd1', async (req, res) => {
  let municipio = req.params.municipio;

  let inscritos = 0;

  switch (municipio) {
    case 'sanpedro':
      municipio = 'San Pedro De Macoris';
      inscritos = 159251;
      break;
    case 'consuelo':
      municipio = 'Consuelo';
      inscritos = 23585;
      break;
    case 'guayacanes':
      municipio = 'Guayacanes';
      inscritos = 7639;
      break;  
    case 'losllanos':
      municipio = 'Los Llanos';
      inscritos = 16914;
      break;  
    case 'quisqueya':
      municipio = 'Quisqueya';
      inscritos = 14309;
      break; 
     case 'ramonsantana':
      municipio = 'Ramon Santana';
      inscritos = 7201;
      break; 
    case 'todos':
      res.redirect('/dashboard/todos/diputadosd1');
      break;
    
  }

  const colegio = {
    total: 0,
    faltantes: 0,
    computados: 0,
    porcientoComputado: 0,
    porcientoFaltante: 0,
  };

  const votos = {
    emitidos: 0,
    validos: 0,
    nulos: 0,
    observados: 0,
    porcientoEmitidos: 0,
    porcientoValidos: 0,
    porcientoNulos: 0,
    porcientoObservados: 0,
  };

  

  const votosPartidos = {
    pld: 0,
    prm: 0,
    prd: 0,
    prsc: 0,
    alpais: 0,
    phd: 0,
    moda: 0,
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
    pp: 0,
  };

  const votosAlianzas = {
    pld: 0,
    prm: 0,
    fp: 0,
    famplio: 0
  };

  const votosActas = await ActaDiputadosD1.find(
    { municipio: municipio },
    { _id: 0, votos: 1 }
  );
  const colegios = await Centro.find({ municipio: municipio }, { _id: 0, colegios: 1 });
  colegio.computados = await ActaDiputadosD1.count({ municipio: municipio });

  colegios.forEach((obj) => {
    colegio.total += obj.colegios.length;
  });

  // votos por partidos
  votosActas.forEach((obj) => {
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
    votosPartidos.plr += 0;
    votosPartidos.fp += obj.votos.fp;
    votosPartidos.fnp += obj.votos.fnp;
    votosPartidos.apd += obj.votos.apd;
    votosPartidos.verde += obj.votos.verde;
    votosPartidos.ppc += obj.votos.ppc;
    votosPartidos.pal += obj.votos.pal;
    votosPartidos.prsd += obj.votos.prsd;
    votosPartidos.pdp += obj.votos.pdp;
    votosPartidos.pdi += 0;
    votosPartidos.pri += obj.votos.pri;
    votosPartidos.pun += obj.votos.pun;
    votosPartidos.pnvc += obj.votos.pnvc;
    votosPartidos.pp += obj.votos.pp;
  });

  // votos validos, nulos, emitidos y observados
  const votosDocumentos = await ActaDiputadosD1.find(
    { municipio: municipio },
    { votosValidos: 1, votosNulos: 1, votosEmitidos: 1, boletasObservadas: 1, _id: 0 }
  );

  if (votosDocumentos) {
    votosDocumentos.forEach((data) => {
      votos.validos += data.votosValidos;
      votos.nulos += data.votosNulos;
      votos.emitidos += data.votosEmitidos;
      votos.observados += data.boletasObservadas;
    });
  }

  votos.porcientoEmitidos = ((votos.emitidos / inscritos) * 100).toFixed(2);
  if (votos.emitidos !== 0) {
    votos.porcientoValidos = ((votos.validos / votos.emitidos) * 100).toFixed(2);
    votos.porcientoNulos = ((votos.nulos / votos.emitidos) * 100).toFixed(2);
    votos.porcientoObservados = ((votos.observados / votos.emitidos) * 100).toFixed(2);
  } else {
    votos.porcientoValidos = 0;
    votos.porcientoNulos = 0;
    votos.porcientoObservados = 0;
  }

  votosAlianzas.pld =
    votosPartidos.pld +
    votosPartidos.pcr +
    votosPartidos.udc +
    votosPartidos.ppc +
    votosPartidos.pdp +
    votosPartidos.pri;

  votosAlianzas.prm = 
    votosPartidos.prm +
    votosPartidos.phd +
    votosPartidos.dxc +
    votosPartidos.prsd;
    

  votosAlianzas.fp =
    votosPartidos.prsc +
    votosPartidos.bis + 
    votosPartidos.pqdc + 
    votosPartidos.fp + 
    votosPartidos.fnp +
    votosPartidos.pun;

  votosAlianzas.famplio = 
    votosPartidos.famplio +
    votosPartidos.apd;

 

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
    votosAlianzas: votosAlianzas,
    escanos: []
  };


   //******************** Metodo de Hondt  *******************/
 // D'Hondt Method of Propotional Seats

var dhondt = function (seats, votes) {
  var list = Object.getOwnPropertyNames(votes).map(function (party) {
      return {party: party, votes: votes[party], seats: 0};
  });
  for (var i = 0; i < seats; i++) {
      list.sort(function (p1, p2) {
          var v1 = p1.votes / (p1.seats + 1);
          var v2 = p2.votes / (p2.seats + 1);
          return v2 - v1;
      });
      list[0].seats += 1;
  }
  list.sort(function (p1, p2) {return p2.votes - p1.votes;});
  return list;
};

// Output seats and analysis of parties
var analyze = function (result) {
  var totalVotes = 0;
  var totalSeats = 0;
  result.forEach(function (party) {
      totalVotes += party.votes;
      totalSeats += party.seats;
  });
  console.log({totalVotes: totalVotes, totalSeats: totalSeats});
  result.forEach(function (party) {
      var voteRate = Math.round(party.votes / totalVotes * 10000) / 100;
      var seatRate = Math.round(party.seats / totalSeats * 10000) / 100;
      console.log("[" + party.party + "] " +
                  "votes: " + party.votes + "(" + voteRate + "%) " +
                  "seats: " + party.seats + "(" + seatRate + "%)");
      acta.escanos.push({partido: party.party, escanos: party.seats});
  });
  console.log();
};

// D'Hondt method example from Wikipedia
var result = dhondt(5, {
  PLD: votosAlianzas.pld,
  PRM: votosAlianzas.prm,
  FP: votosAlianzas.fp,
  PRD: votosPartidos.prd,
  ALPAIS: votosPartidos.alpais,
  MODA: votosPartidos.moda,
  VERDE: votosPartidos.verde,
  PAL: votosPartidos.pal,
  PNVC: votosPartidos.pnvc,
  PP: votosPartidos.pp
});
analyze(result);
  
  res.json(acta);
});

router.get('/dashboard/:municipio/diputadosd2', async (req, res) => {
  let municipio = req.params.municipio;

  let inscritos = 0;

  switch (municipio) {
    case 'sanpedro':
      municipio = 'San Pedro De Macoris';
      inscritos = 159251;
      break;
    case 'consuelo':
      municipio = 'Consuelo';
      inscritos = 23585;
      break;
    case 'guayacanes':
      municipio = 'Guayacanes';
      inscritos = 7639;
      break;  
    case 'losllanos':
      municipio = 'Los Llanos';
      inscritos = 16914;
      break;  
    case 'quisqueya':
      municipio = 'Quisqueya';
      inscritos = 14309;
      break; 
     case 'ramonsantana':
      municipio = 'Ramon Santana';
      inscritos = 7201;
      break; 
    case 'todos':
      res.redirect('/dashboard/todos/diputadosd2');
      break;
    
  }

  const colegio = {
    total: 0,
    faltantes: 0,
    computados: 0,
    porcientoComputado: 0,
    porcientoFaltante: 0,
  };

  const votos = {
    emitidos: 0,
    validos: 0,
    nulos: 0,
    observados: 0,
    porcientoEmitidos: 0,
    porcientoValidos: 0,
    porcientoNulos: 0,
    porcientoObservados: 0,
  };

  

  const votosPartidos = {
    pld: 0,
    prm: 0,
    prd: 0,
    prsc: 0,
    alpais: 0,
    phd: 0,
    moda: 0,
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
    pp: 0,
  };

  

  const votosAlianzas = {
    pld: 0,
    prm: 0,
    fp: 0,
    famplio: 0
  };

  // const votosActas = await ActaDiputadosD1.find(
  //   { municipio: municipio },
  //   { _id: 0, votos: 1 }
  // );

  const votosActas = await ActaDiputadosD2.find(
    { municipio: municipio },
    { _id: 0, votos: 1 }
  );
  const colegios = await Centro.find({ municipio: municipio }, { _id: 0, colegios: 1 });
  colegio.computados = await ActaDiputadosD2.count({ municipio: municipio });

  colegios.forEach((obj) => {
    colegio.total += obj.colegios.length;
  });
  const diputadosPrm = {
    prm1: 0,
    prm2: 0,
    prm3: 0,
    prm4: 0,
    prm5: 0
  }

  console.log('**********************************************');
  

  // votos por partidos
  console.log('**********************************************');
  // console.log(votosActasD2[0]);
  if(votosActas.length > 0){
    console.log('No Soy Undifined');
    
    votosActas.forEach((obj) => {
    
  //     // console.log(obj.votos[0].prm.reduce((a, b) => a + b));
        console.log(obj.votos[0].pld);
        votosPartidos.pld += obj.votos[0].pld.reduce((a, b) => a + b, 0);
        votosPartidos.prm += obj.votos[0].prm.reduce((a, b) => a + b);
        votosPartidos.prd += obj.votos[0].prd.reduce((a, b) => a + b);
        votosPartidos.prsc += obj.votos[0].prsc.reduce((a, b) => a + b);
        votosPartidos.alpais += obj.votos[0].alpais.reduce((a, b) => a + b);
        votosPartidos.phd += obj.votos[0].phd.reduce((a, b) => a + b);
        votosPartidos.moda += obj.votos[0].moda.reduce((a, b) => a + b);
        votosPartidos.bis += obj.votos[0].bis.reduce((a, b) => a + b);
        votosPartidos.pcr += obj.votos[0].pcr.reduce((a, b) => a + b);
        votosPartidos.dxc += obj.votos[0].dxc.reduce((a, b) => a + b);
        votosPartidos.famplio += obj.votos[0].famplio.reduce((a, b) => a + b);
        votosPartidos.udc += obj.votos[0].udc.reduce((a, b) => a + b);
        votosPartidos.pqdc += obj.votos[0].pqdc.reduce((a, b) => a + b);
        votosPartidos.plr += 0;
        votosPartidos.fp += obj.votos[0].fp.reduce((a, b) => a + b);;
        votosPartidos.fnp += obj.votos[0].fnp.reduce((a, b) => a + b);
        votosPartidos.apd += obj.votos[0].apd.reduce((a, b) => a + b);
        votosPartidos.verde += obj.votos[0].verde.reduce((a, b) => a + b);
        votosPartidos.ppc += obj.votos[0].ppc.reduce((a, b) => a + b);
        votosPartidos.pal += obj.votos[0].pal.reduce((a, b) => a + b);
        votosPartidos.prsd += obj.votos[0].prsd.reduce((a, b) => a + b);
        votosPartidos.pdp += obj.votos[0].pdp.reduce((a, b) => a + b);
        votosPartidos.pdi += 0;
        votosPartidos.pri += obj.votos[0].pri.reduce((a, b) => a + b);
        votosPartidos.pun += obj.votos[0].pun.reduce((a, b) => a + b);
        votosPartidos.pnvc += obj.votos[0].pnvc.reduce((a, b) => a + b);
        votosPartidos.pp += obj.votos[0].pp.reduce((a, b) => a + b);
    
        diputadosPrm.prm1 += obj.votos[0].prm[0] + obj.votos[0].phd[0] + obj.votos[0].dxc[0] + obj.votos[0].prsd[0];
        diputadosPrm.prm2 += obj.votos[0].prm[1] + obj.votos[0].phd[1] + obj.votos[0].dxc[1] + obj.votos[0].prsd[1];
        diputadosPrm.prm3 += obj.votos[0].prm[2] + obj.votos[0].phd[2] + obj.votos[0].dxc[2] + obj.votos[0].prsd[2];
        diputadosPrm.prm4 += obj.votos[0].prm[3] + obj.votos[0].phd[3] + obj.votos[0].dxc[3] + obj.votos[0].prsd[3];
        diputadosPrm.prm5 += obj.votos[0].prm[4] + obj.votos[0].phd[4] + obj.votos[0].dxc[4] + obj.votos[0].prsd[4];
      });
  }
  
  console.log(diputadosPrm);
  // votos validos, nulos, emitidos y observados
  const votosDocumentos = await ActaDiputadosD2.find(
    { municipio: municipio },
    { votosValidos: 1, votosNulos: 1, votosEmitidos: 1, boletasObservadas: 1, _id: 0 }
  );

  if (votosDocumentos) {
    votosDocumentos.forEach((data) => {
      votos.validos += data.votosValidos;
      votos.nulos += data.votosNulos;
      votos.emitidos += data.votosEmitidos;
      votos.observados += data.boletasObservadas;
    });
  }

  votos.porcientoEmitidos = ((votos.emitidos / inscritos.sanPedro) * 100).toFixed(2);
  if (votos.emitidos !== 0) {
    votos.porcientoValidos = ((votos.validos / votos.emitidos) * 100).toFixed(2);
    votos.porcientoNulos = ((votos.nulos / votos.emitidos) * 100).toFixed(2);
    votos.porcientoObservados = ((votos.observados / votos.emitidos) * 100).toFixed(2);
  } else {
    votos.porcientoValidos = 0;
    votos.porcientoNulos = 0;
    votos.porcientoObservados = 0;
  }

  votosAlianzas.pld =
    votosPartidos.pld +
    votosPartidos.pcr +
    votosPartidos.udc +
    votosPartidos.ppc +
    votosPartidos.pdp +
    votosPartidos.pri;

  votosAlianzas.prm = 
    votosPartidos.prm +
    votosPartidos.phd +
    votosPartidos.dxc +
    votosPartidos.prsd;
    

  votosAlianzas.fp =
    votosPartidos.prsc +
    votosPartidos.bis + 
    votosPartidos.pqdc + 
    votosPartidos.fp + 
    votosPartidos.fnp +
    votosPartidos.pun;

  votosAlianzas.famplio = 
    votosPartidos.famplio +
    votosPartidos.apd;
    
  

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
    votosAlianzas: votosAlianzas,
    diputadosPrm: diputadosPrm,
  };



  res.json(acta);
});


router.get('/dashboard', (req, res) => {
  // res.render('dashboard/resultados');
  res.render('dashboard/test');
});

router.get('/dashboard/colegios/:municipio/:nivel', async (req, res) => {
    let municipio = req.params.municipio;
    let nivel = req.params.nivel;

    console.log(nivel);
    console.log(municipio);
    switch (municipio) {
      case 'San Pedro':
        municipio = 'San Pedro De Macoris';
        break;
      case 'consuelo':
        municipio = 'Consuelo';
        break;
      case 'guayacanes':
        municipio = 'Guayacanes';
        break;  
      case 'losllanos':
        municipio = 'Los Llanos';
        break;  
      case 'quisqueya':
        municipio = 'Quisqueya';
        break; 
       case 'ramonsantana':
        municipio = 'Ramon Santana';
        break; 
    }
    
    let totalColegios = {};
    
    if(municipio === 'todos'){
      totalColegios = await Centro.find({}, {_id: 0, nombre: 1, colegios: 1}).sort({colegios: 1});
    } else {
      totalColegios = await Centro.find({municipio: municipio,}, {_id: 0, nombre: 1, colegios: 1}).sort({colegios: 1});
    }
   

  //  let colegiosComputados = [];
      let colegiosComputadosP = [];
      let colegiosComputadosS = [];
      let colegiosComputadosD1 = [];
      let colegiosComputadosD2 = [];
    // console.log(colegiosComputados)


    if(nivel === 'presidencial'){
      colegiosComputadosP = await ActaPresidencial.find({municipio: municipio}, {_id:0, colegio: 1}); 
   } else if (nivel === 'senatorial'){
      colegiosComputadosS = await ActaSenatorial.find({municipio: municipio}, {_id:0, colegio: 1});
   }else if (nivel === 'diputadosd1'){
      colegiosComputadosD1 = await ActaDiputadosD1.find({municipio: municipio}, {_id:0, colegio: 1});
   } else if (nivel === 'diputadosd2'){
      colegiosComputadosD2 = await ActaDiputadosD2.find({municipio: municipio}, {_id:0, colegio: 1});
   }
  
//    console.log(col);
    let col2 = [];
    totalColegios.forEach(obj => {
        let k = obj.colegios;
        for (prop in k){
            col2.push(k[prop]);
        }
    })

    const colegios = {
        total: totalColegios,
        computadosP: colegiosComputadosP,
        computadosS: colegiosComputadosS,
        computadosD1: colegiosComputadosD1,
        computadosD2: colegiosComputadosD2,
      };
    
    // res.render('dashboard/resultados', {colegio, inscritos, votos, votosPartidos, votosAlianzas});
    // res.json([colegio, inscritos, votos, votosPartidos, votosAlianzas]);

    console.log('Colegios Totalessss*******************');
    console.log(colegios);
    res.json(colegios);
  });


  router.get('/dashboard/colegios/:municipio/:nivel/:nombre', async (req, res) => {
    let municipio = req.params.municipio;
    let nivel = req.params.nivel;
    let nombre = req.params.nombre;

    console.log(nivel);
    console.log('Dentrooo de la Jodida Vaina');
    console.log(nombre);
    switch (municipio) {
      case 'San Pedro':
        municipio = 'San Pedro De Macoris';
        break;
      case 'consuelo':
        municipio = 'Consuelo';
        break;
      case 'guayacanes':
        municipio = 'Guayacanes';
        break;  
      case 'losllanos':
        municipio = 'Los Llanos';
        break;  
      case 'quisqueya':
        municipio = 'Quisqueya';
        break; 
       case 'ramonsantana':
        municipio = 'Ramon Santana';
        break; 
    }

    let votos = [];
      console.log(municipio);
      console.log(`este es el nive;: ${nivel}`);
    if(nivel === 'presidencial'){
      console.log('dentro presidencial');
      votos = await ActaPresidencial.find({colegio: nombre, municipio: municipio}, {_id: 0, nombre: 1, votos: 1, votosEmitidos: 1, votosValidos: 1, votosNulos: 1, boletasObservadas: 1}); 
    } else if (nivel === 'senatorial'){
      votos = await ActaSenatorial.find({colegio: nombre, municipio: municipio}, {_id: 0, nombre: 1, votos: 1, votosEmitidos: 1, votosValidos: 1, votosNulos: 1, boletasObservadas: 1}); 
    }else if (nivel === 'diputadosd1'){
      votos = await ActaDiputadosD1.find({colegio: nombre, municipio: municipio}, {_id: 0, nombre: 1, votos: 1, votosEmitidos: 1, votosValidos: 1, votosNulos: 1, boletasObservadas: 1}); 
    }else if (nivel === 'diputadosd2'){
      votos = await ActaDiputadosD2.find({colegio: nombre, municipio: municipio}, {_id: 0, nombre: 1, votos: 1, votosEmitidos: 1, votosValidos: 1, votosNulos: 1, boletasObservadas: 1}); 
    }
    console.log(`estos son los votos ${votos}`);
    
   
    res.json(votos);
    
  });

  module.exports = router;