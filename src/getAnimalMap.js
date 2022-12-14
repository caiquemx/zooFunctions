// lógica inspirada: https://github.com/tryber/sd-015-b-project-zoo-functions/blob/3d970a74e783b56fbab548bfadb20757789e9dfd/src/getAnimalMap.js

const { species } = require('../data/zoo_data');

function searchDefault() {
  const regions = {};
  species.forEach((specie) => {
    const { location, name } = specie;
    if (!regions[location]) {
      regions[location] = [];
    }

    regions[location].push(name);
  });
  return regions;
}

function getAnimalNames(paramSorted, paramSex) {
  const regions = {};
  species.forEach((specie) => {
    const { location, name } = specie;
    if (!regions[location]) {
      regions[location] = [];
    }
    let residents = [...specie.residents];
    if (paramSex) {
      residents = residents.filter(({ sex }) => sex === paramSex);
    }
    residents = residents.map((resident) => resident.name);
    if (paramSorted) {
      residents.sort();
    }
    regions[location].push({ [name]: residents });
  });
  return regions;
}

function getAnimalMap(options = {}) {
  const { includeNames, sorted, sex } = options;
  if (includeNames) {
    return getAnimalNames(sorted, sex);
  }
  return searchDefault();
}

module.exports = getAnimalMap;
