const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function filtro(ids) {
  const idx = [];
  if (Array.isArray(ids) === false) {
    idx.push(ids);
  }
  idx.push(...ids);
  const arrBase = employees.filter((ele, index) => idx[index] === ele.id)
    .map((car) => car.responsibleFor[0]);
  const resBase = [];
  arrBase.forEach((ele) => {
    resBase.push(species.find((ani) => ani.id === ele).residents);
  });
  return resBase;
}
function ordenar(ids) {
  const ordenado = [];
  filtro(ids).forEach((ele) => {
    ele.sort((a, b) => {
      if (a.age > b.age) {
        return -1;
      }
      if (a.age < b.age) {
        return 1;
      }
      return 0;
    });
    ordenado.push(ele[0]);
  });
  return ordenado;
}

function getOldestFromFirstSpecies(ids) {
  const final = [];
  ordenar(ids).reduce((acc, curr) => {
    acc.push(`${curr.name}`, `${curr.sex}`, curr.age);
    final.push(acc);
    return [];
  }, []);
  return final;
}
module.exports = getOldestFromFirstSpecies;
