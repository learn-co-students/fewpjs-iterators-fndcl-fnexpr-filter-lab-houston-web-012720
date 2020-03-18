function findMatching(driversArr, string){
  // 1) returns all drivers that match the passed in name
  // 2) returns matching drivers if case does not match but letters do
  // 3) returns an empty array if there is no match
  return driversArr.filter( driver => driver.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(driversArr, string){
  // 4) returns a driver if beginning provided letters match
  // 5) does not return drivers if only middle or ending letters match
  // 6) does not return drivers if only middle or ending letters match
  return driversArr.filter( driver => driver[0].toLowerCase() === string[0].toLowerCase())
}

function matchName(driversArr, string){
  // 7) accesses the data structure to check if name matches
  return driversArr.filter(driver => driver.name === string)
}

