module.exports = function (creature, world, settings) {
  for (var step = 0; step < settings.steps; step += 1) {
    creature.behave(world)
  }

  creature.fitness = Math.abs(10 - creature.position.x) + Math.abs(10 - creature.position.y)
}
