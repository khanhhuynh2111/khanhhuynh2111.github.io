let startMinutes = 1;
let time = startMinutes * 60;
let countdown = document.getElementById('countdown');
setInterval(update, 1000);
function update() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  countdown.innerHTML = `${minutes}:${seconds}`;
  time--;
}
let res2 = res.back;
document.writeln(res2[1]);
