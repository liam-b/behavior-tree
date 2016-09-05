module.exports = {
  constant: function (number) {
    return number
  },
  random: function (min, max) {
    return Math.floor((Math.random() * (max + 1)) + min)
  }
}
