const data = require('../data/zoo_data');

// lógica inspirada: https://github.com/tryber/sd-015-b-project-zoo-functions/pull/1/files#diff-5dcbb838d9c588f0256440b8e5125b4f2f3f525681b36a7c2a2c7d01805dc57e

function getOldestFromFirstSpecies(id) {
  const fEmployee = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const fAnimal = data.species.find((specie) => specie.id === fEmployee).residents;
  return Object.values(fAnimal.reduce((acc, curr) => {
    if (acc.age < curr.age) {
      return curr;
    }
    return acc;
  }));
}

module.exports = getOldestFromFirstSpecies;
