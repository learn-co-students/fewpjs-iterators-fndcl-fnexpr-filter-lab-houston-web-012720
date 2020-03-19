// Code your solution here
function findMatching(array, name) {
    return array.filter( nameMatch =>
      nameMatch.toLowerCase() === name.toLowerCase()
    )
  }
  
  function fuzzyMatch(array, name){
  return array.filter(driverName => 
    driverName.toLowerCase().indexOf(name.toLowerCase()) === 0
  )
}

    function matchName (array, name) {
        return array.filter(function (driver) {
          return driver.name.toLowerCase() === name.toLowerCase();
        });
      }