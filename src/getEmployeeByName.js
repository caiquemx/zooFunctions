const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees.find((funcionario) => {
    if (funcionario.firstName === employeeName || funcionario.lastName === employeeName) {
      return funcionario;
    }
    return undefined;
  });
}
module.exports = getEmployeeByName;
