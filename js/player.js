var player = {
  money: 10,
  reception: [],
  buttonPusher: [],
  supervisor: [],
  lastUpdate: Date.now()
}

var firstReception = {
  cost: 10,
  multiplier: 1,
  amount: 0,
  bought: 0,
  name: "Receptionists"
}

player.reception.push(firstReception);
