function gameLoop(that) {
  let diff = (Date.now() - that.player.lastUpdate)/1000
  that.player.money += that.player.reception[0].amount * that.player.reception[0].multiplier * diff
  that.player.reception[0].amount += that.player.buttonPusher[0].amount * that.player.buttonPusher[0].multiplier * diff
  that.player.buttonPusher[0].amount += that.player.supervisor[0].amount * that.player.supervisor[0].multiplier * diff
  if (that.player.reception[0].bought / 10 === that.player.reception[0].multiplier) {
    that.player.reception[0].multiplier += 1
  }
  if (that.player.buttonPusher[0].bought / 10 === that.player.buttonPusher[0].multiplier) {
    that.player.buttonPusher[0].multiplier += 1
  }
  if (that.player.supervisor[0].bought / 10 === that.player.supervisor[0].multiplier) {
    that.player.supervisor[0].multiplier += 1
  }
  that.player.lastUpdate = Date.now()
}
