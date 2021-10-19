const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...param) {
  return species.filter((specie) => param.some((elem) => elem === specie.id));
}

module.exports = getSpeciesByIds;
