// Code your solution here
let findMatching = (drivers, string) => {
  return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
}

let fuzzyMatch = (drivers, string) => {
  return drivers.filter(driver => matchDriverToString(driver, string))
}

let matchDriverToString = (driver, string) => {
  for (const i in string) {
    if (driver[i] !== string[i]) return false
  }
  return true
}

let matchName = (drivers, string) => {
  return drivers.filter(driver => matchDriverToString(driver.name, string))
}