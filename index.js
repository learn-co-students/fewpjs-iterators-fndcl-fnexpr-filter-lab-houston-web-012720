
const findMatching = (drivers, string) => {
  return drivers.filter( driver => driver.toUpperCase() === string.toUpperCase() )
}

const fuzzyMatch = (drivers, string) => {
  return drivers.filter( driver => driver.charAt() === string.charAt() )
}

const matchName = (drivers, string) => {
  return drivers.filter( driver => driver["name"] === string )
}

