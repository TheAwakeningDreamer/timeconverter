const timezone1 = document.querySelector('.clock1 h3');
const timezone2 = document.querySelector('.clock2 h3');
const time1 = document.querySelector('#time1');
const time2 = document.querySelector('#time2');
const select1 = document.querySelector('#select1');
const select2 = document.querySelector('#select2');
const show = document.querySelector('.show');
const show2 = document.querySelector('.show2');
const swap = document.getElementById('swap');

let spinner;

setInterval(showTime, 1000);

function showTime() {
  spinner = setTimeout(showGifHideTime, 1000);

  const today = new Date();
  let hour = today.getHours();
  let hour2 = today.getHours() - 1;
  let min = today.getMinutes();
  let sec = today.getSeconds();
  let am_pm;

  if (hour > 12) {
    hour -= 12;
    am_pm = 'PM';
  } else {
    am_pm = 'AM';
  }

  if (hour2 > 12) {
    hour2 -= 12;
    am_pm = 'PM';
  } else {
    am_pm = 'AM';
  }

  hour = hour < 10 ? '0' + hour : hour;
  hour2 = hour2 < 10 ? '0' + hour2 : hour2;
  min = min < 10 ? '0' + min : min;
  sec = sec < 10 ? '0' + sec : sec;

  let currentTime1 = hour + ':' + min + ':' + sec + ' ' + am_pm;

  time1.textContent = currentTime1;

  let currentTime2 = hour2 + ':' + min + ':' + sec + ' ' + am_pm;

  time2.textContent = currentTime2;
}

function pivotAndSwap(e) {
  if (e.target.id === 'swap') {
    swap.classList.toggle('pivot');
  }
}

function showGifHideTime() {
  show.style.display = 'none';
  show2.style.display = 'none';
  time1.style.display = 'block';
  time2.style.display = 'block';
}

// Event Listeners
swap.addEventListener('click', pivotAndSwap);
