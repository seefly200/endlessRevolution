function gameLoop(that) {
  let diff = (Date.now() - that.player.lastUpdate)/1000
  that.player.money += that.player.reception[0].amount * that.player.reception[0].multiplier * diff

  that.player.lastUpdate = Date.now()
}
