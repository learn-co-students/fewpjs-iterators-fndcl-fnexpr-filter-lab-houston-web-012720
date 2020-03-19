// Code your solution here

const findMatching = (drivers, string) => drivers.filter(driver => driver.toLowerCase() == string.toLowerCase())
const fuzzyMatch = (drivers, string) => drivers.filter(driver => driver.charAt(0) == string.charAt(0))
const matchName = (drivers, string) => drivers.filter(driver => driver.name == string)