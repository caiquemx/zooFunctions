const { hours, species } = require('../data/zoo_data');

function getAnimalsByDay(day) {
  const availability = species
    .filter((e) => e.availability
      .includes(day) && e.name).map((e) => e.name);
  return availability;
}

function getAvailability(animal) {
  const availability = species.find((e) => e.name === animal);
  return availability.availability;
}

function getAll() {
  const sch = Object.entries(hours);
  const schAndAni = sch.reduce((acc, curr, i) => {
    const animals = getAnimalsByDay(curr[0]);
    acc[sch[i][0]] = {
      officeHour: `Open from ${curr[1].open}am until ${curr[1].close}pm`,
      exhibition: animals,
    };
    if (sch[i][0] === 'Monday') {
      acc[sch[i][0]] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
    return acc;
  }, {});
  return schAndAni;
}

function getSchedule(sch) {
  if (Object.keys(hours).includes(sch)) {
    const test = getAll();
    return {
      [sch]: test[sch],
    };
  }
  if (species.some((e) => e.name === sch)) {
    const availability = getAvailability(sch);
    return availability;
  }
  return getAll();
}

module.exports = getSchedule;
