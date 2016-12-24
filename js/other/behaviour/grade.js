module.exports = function (creature, world, settings) {
  for (var step = 0; step < settings.behaviourSteps; step += 1) {
    creature.behave(world)
  }

  creature.fitness = creature.position.y

  // creature.fitness = 100 - Math.sqrt((creature.position.x - 60) * (creature.position.x - 60) + (creature.position.y - 50) * (creature.position.y - 50))
}
