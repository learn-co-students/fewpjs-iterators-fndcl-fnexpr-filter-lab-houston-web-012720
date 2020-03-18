// Code your solution here
function findMatching(obj,value) {
    let regex = new RegExp(value,"i")
    return obj.filter(element => element.match(regex))
}

function fuzzyMatch(obj,value) {
    let regex = new RegExp("^"+value)
    return obj.filter(element => element.match(regex))
}

function matchName(obj,value) {
    return obj.filter(element => element.name === value)
    
}