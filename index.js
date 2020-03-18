// Code your solution here

const findMatching = (arr, obj) => arr.filter(unit => unit.toUpperCase() === obj.toUpperCase())

const fuzzyMatch = (arr, obj) => arr.filter(unit => unit.startsWith(obj))

const matchName = (arr, obj) => arr.filter(unit => unit.name === obj)