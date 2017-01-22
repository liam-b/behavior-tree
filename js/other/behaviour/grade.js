module.exports = function (creature, world, settings) {
  for (var step = 0; step < settings.behaviourSteps; step += 1) {
    creature.behave(world)
  }

  creature.fitness = creature.position.y+ creature.position.x

  //creature.fitness = Math.round(100 - Math.sqrt((creature.position.x - 0) * (creature.position.x - 0) + (creature.position.y - 0) * (creature.position.y - 0)))
}
