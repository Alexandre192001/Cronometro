var hh = 0;
var mm = 0;
var ss = 0;

var cron;

const play = document.getElementById("play").addEventListener("click", () => {
  cronometroTime()
  cron = setInterval(cronometroTime,10)
})

const pause = document.getElementById("pause").addEventListener("click", () => {
  clearInterval(cron);
})

const reset = document.getElementById("reset").addEventListener("click", () => {
  clearInterval(cron);
  hh = 0;
  mm = 0;
  ss = 0;
  document.getElementById("cronometro-value").innerHTML = `00:00:00`
})

function cronometroTime() {
  ss++;
  if (ss == 60) {
    ss = 0;
    mm++
  }
  if (mm == 60) {
    mm = 0;
    hh++
  }

  var formatacao = (hh < 10 ? "0" + hh : hh) + ":" + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss)
  document.getElementById("cronometro-value").innerHTML = formatacao;
}