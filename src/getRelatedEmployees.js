const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const manager = employees.reduce((acc, curr) => acc.concat(curr.managers), []);
  return manager.some((funcionario) => funcionario === id);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const subordinados = employees.filter((funcionar) => funcionar.managers.includes(managerId));
    return subordinados.map((sub) => `${sub.firstName} ${sub.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
module.exports = { isManager, getRelatedEmployees };
