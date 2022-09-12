const { species } = require('../data/zoo_data');

function getSpecies(animal) {
  const especieFitlrada = species.filter((spec) => spec.name === animal.specie);
  return especieFitlrada.flatMap((elem) => elem.residents);
}

function countMale(animal) {
  let countMale1 = 0;
  getSpecies(animal).forEach((caract) => {
    if (caract.sex === 'male') {
      countMale1 += 1;
    }
  });
  return countMale1;
}

function countFemale(animal) {
  let countFemale1 = 0;
  getSpecies(animal).forEach((caract) => {
    if (caract.sex === 'female') {
      countFemale1 += 1;
    }
  });
  return countFemale1;
}

function countAnimals(animal) {
  if (!animal) {
    const Obj1 = {};
    species.forEach((specie) => {
      Obj1[specie.name] = specie.residents.length;
    });
    return Obj1;
  }
  if (!animal.sex) {
    return species.find((specie) => specie.name === Object.values((animal))[0]).residents.length;
  }
  if (animal.sex === 'male') {
    return countMale(animal);
  }
  if (animal.sex === 'female') {
    return countFemale(animal);
  }
}

module.exports = countAnimals;
