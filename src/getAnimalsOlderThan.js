const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const filtrado = species.filter((animais) => animais.name === animal);
  const residents = filtrado.map((resi) => resi.residents);
  return residents[0].every((idade) => idade.age >= age);
}
module.exports = getAnimalsOlderThan;
