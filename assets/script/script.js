let secondHalf = document.getElementById("second-six");
secondHalf.classList.add("hidden");
function toggleList() {
  secondHalf.classList.toggle("hidden");
}
document.getElementById("toggle-button").onclick = toggleList;
let duration = 0;
function myFunction() {
  let box1 = document.forms[0];
  if (box1[0].checked) {
      order1.innerHTML = "<img src='assets/img/brushteeth.png'>" + "brush teeth";
      duration += 3;
  }
  if (!box1[0].checked) {
      order1.innerHTML = "";

  }
  if (box1[1].checked) {
      order2.innerHTML = "<img src='assets/img/shower.png'>" + "shower";
      duration += 10;
  }
  if (!box1[1].checked) {
      order2.innerHTML = "";

  }
  if (box1[2].checked) {
      order3.innerHTML = "<img src='assets/img/meditate.png'>" + "meditate";
      duration += 10;
  }
  if (!box1[2].checked) {
      order3.innerHTML = "";

  }
  if (box1[3].checked) {
      order4.innerHTML = "<img src='assets/img/exercise.png'>"+ "exercise";
      duration += 15;

  }
  if (!box1[3].checked) {
      order4.innerHTML = "";

  }
  if (box1[4].checked) {
      order5.innerHTML = "<img src='assets/img/journal.png'>"+"journal";
      duration += 5;

  }
  if (!box1[4].checked) {
      order5.innerHTML = "";

  }
  if (box1[5].checked) {
      order6.innerHTML = "<img src='assets/img/yoga.png'>"+ "yoga";
      duration += 15;
  }
  if (!box1[5].checked) {
      order6.innerHTML = "";

  }
  if (box1[6].checked) {
      order7.innerHTML = "<img src='assets/img/study.png'>"+"study";
      duration += 30;
  }
  if (!box1[6].checked) {
      order7.innerHTML = "";

  }
  if (box1[7].checked) {
      order8.innerHTML = "<img src='assets/img/water.png'>"+"drink water";
      duration += 1;
  }
  if (!box1[7].checked) {
      order8.innerHTML = "";

  }
  if (box1[8].checked) {
      order9.innerHTML = "<img src='assets/img/affirmation.png'>"+ "affirmation";
      duration += 3;
  }
  if (!box1[8].checked) {
      order9.innerHTML = "";

  }
  if (box1[9].checked) {
      order10.innerHTML = "<img src='assets/img/skincare.png'>"+"skin care";
      duration += 10;
  }
  if (!box1[9].checked) {
      order10.innerHTML = "";

  }
  if (box1[10].checked) {
      order11.innerHTML = "<img src='assets/img/cleaning.png'>"+"clean";
      duration += 5;
  }
  if (!box1[10].checked) {
      order11.innerHTML = "";

  }
  if (box1[11].checked) {
      order12.innerHTML = "<img src='assets/img/planning.png'>"+"plan the day";
      duration += 5;
  }
  if (!box1[11].checked) {
      order12.innerHTML = "";

  }
}
function start() {
  let startMinutes = duration;
  let time = startMinutes * 60;

  let countdown = document.getElementById('countdown');
  setInterval(update, 1000);
  function update() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdown.innerHTML = `${minutes}:${seconds}`;
    time--;
    if (time < 0) {
      countdown.innerHTML = "YOU FINISH!";
    }
  }
}


function unhideLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.remove('hidden');
		document.getElementById(lightboxID).classList.remove('hidden');
}

function unhideLightbox1() {
				unhideLightbox('catto1');
}


function closeLightbox(lightboxID) {
  	document.getElementById('lightbox-overlay').classList.add('hidden');
  	document.getElementById(lightboxID).classList.add('hidden');
  }
  function closeAllLightboxes() {
  	var lightboxElements = document.getElementsByClassName('lightbox');
  	for (var i = 0; i < lightboxElements.length; i++) {
  		var id = lightboxElements[i].id;
  		closeLightbox(id);
  	}
  }
document.getElementById('letter').onclick = unhideLightbox1;
document.getElementById('lightbox-overlay').onclick = closeAllLightboxes;
function unhideLightbox2() {
				unhideLightbox('doggo2');
        start();
}

document.getElementById('start-button').onclick = unhideLightbox2;
