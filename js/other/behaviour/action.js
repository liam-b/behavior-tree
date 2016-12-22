module.exports = {
  'move': {
    up: function (properties) {
      properties.position.y += 1
    },

    down: function (properties) {
      properties.position.y -= 1
    },

    left: function (properties) {
      properties.position.x -= 1
    },

    right: function (properties) {
      properties.position.x += 1
    }
  },
  'none': 'none'
}
