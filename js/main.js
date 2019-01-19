var money = 0;

function getCash() {
  money += 1;
  document.getElementById("dosh").innerHTML = "$" + money;
}
