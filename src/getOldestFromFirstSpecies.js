const data = require('../data/zoo_data');

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
