function findMatching(drivers, test) {
    return drivers.filter(driver => driver.toUpperCase() === test.toUpperCase())
}

function fuzzyMatch(drivers, test) {
    return drivers.filter(driver => driver.slice(0, (test.length)).toUpperCase() === test.toUpperCase())
}

function matchName(drivers, test) {
    return drivers.filter(driver => driver["name"] === test)
}