const printERRO = (msg, err) => {
  console.error(`
  ====== ERRO ${msg} ======

  ${err}

  `);
};

module.exports = { printERRO };
