var app = new Vue({
  // el = element; where the program is contained
  el: "#app",
  //data = whatever indexes will need to be called
  data: {
    player: player
  },
  // functions for vue
  methods: {
    buyReceptionistGenerator(i) {
      let g = this.player.reception[i]
      if (g.cost > this.player.money) return
      this.player.money -= g.cost
      this.player.reception[i].cost *= 1 + (i+1)*0.25
      this.player.reception[i].amount += 1
      this.player.reception[i].bought += 1
    },
    buyButtonPusherGenerator(i) {
      let g = this.player.buttonPusher[i]
      if (g.cost > this.player.money) return
      this.player.money -= g.cost
      this.player.buttonPusher[i].cost *= 1 + (i+1)*0.25
      this.player.buttonPusher[i].amount += 1
      this.player.buttonPusher[i].bought += 1
    },
    buySupervisorGenerator(i) {
      let g = this.player.supervisor[i]
      if (g.cost > this.player.money) return
      this.player.money -= g.cost
      this.player.supervisor[i].cost *= 1 + (i+1)*0.25
      this.player.supervisor[i].amount += 1
      this.player.supervisor[i].bought += 1
    },
    format(amount) {
      return format(amount)
    },
    formatAmount(amount) {
      return formatAmount(amount)
    },
    gameLoop() {
      gameLoop(this)
    }
  },
  mounted() {
    setInterval(this.gameLoop, 50)
  }
})
