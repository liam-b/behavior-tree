Array.prototype.remove = function (index, index2) {
  if (!index2) index2 = index
  return this.splice(index, index2 - index + 1)
}

Array.prototype.insert = function(i, ...rest) {
  return this.splice(i, 0, ...rest)
}

Array.prototype.contains = function(value) {
  return this.indexOf(value) != -1
}
