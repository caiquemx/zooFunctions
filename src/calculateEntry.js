const data = require('../data/zoo_data');

function objConstructor(entrants) {
  const retorno = { child: 0, adult: 0, senior: 0 };
  Object.values(entrants).forEach((person) => {
    if (person.age < 18) {
      retorno.child += 1;
    }
    if (person.age >= 18 && person.age < 50) {
      retorno.adult += 1;
    }
    if (person.age >= 50) {
      retorno.senior += 1;
    }
  });
  return retorno;
}

function countEntrants(entrants) {
  if (!entrants) {
    return 0;
  }
  return objConstructor(entrants);
}
function calculateEntry(entrants) {
  const objBase = countEntrants(entrants);
  if (!objBase) {
    return 0;
  }
  return Object.entries(objBase).reduce((acc, curr) => acc + (curr[1] * data.prices[curr[0]]), 0);
}

module.exports = { calculateEntry, countEntrants };
