let point = document.createElement('p');
point.innerHTML = localStorage.getItem('count');
point.style.cssText =
  'position: fixed; right: 20px; top: 100px; font-size: 30px; background-color: #000; color: #fff; border-radius: 50%; width: 50px; height: 50px; border: 3px solid #fff; display: flex; justify-content: center; align-items: center; font-weight: bold; font-family: sans-serif; z-index: 100;';
document.body.appendChild(point);

let reset = document.createElement('p');
reset.innerHTML = 'Reset';
reset.id = 'reset';
reset.style.cssText =
  'position: fixed; right: 20px; top: 160px; font-size: 15px; background-color: #000; color: #fff; border-radius: 10px; width: 50px; height: 30px; border: 3px solid #fff; display: flex; justify-content: center; align-items: center; font-weight: bold; font-family: sans-serif; cursor: pointer; z-index: 100;';
document.body.appendChild(reset);

let destination = document.createElement('p');
destination.className = 'destination';
if (localStorage.getItem('destination')) {
  destination.innerHTML = localStorage.getItem('destination');
} else {
  destination.innerHTML = 'Choisir destination';
}
destination.style.cssText =
  'position: fixed; right: 100px; top: 110px; font-size: 15px; background-color: #000; color: #fff; border-radius: 10px; padding: 0 10px; width: auto; height: 50px; border: 3px solid #fff; display: flex; justify-content: center; align-items: center; font-weight: bold; font-family: sans-serif; cursor: pointer; z-index: 100;';
document.body.appendChild(destination);

document.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    let storage = localStorage.getItem('count');
    if (storage === null) {
      localStorage.setItem('count', 1);
    } else {
      localStorage.setItem('count', parseInt(storage) + 1);
    }
    point.innerHTML = localStorage.getItem('count');
  } else if (event.target.className === 'destination') {
    // demander l'arrivée avec un prompt
    destination.innerHTML = prompt('Choisissez la destination');
    localStorage.setItem(
      'destination',
      document.querySelector('.destination').innerHTML
    );
  }
});

document.addEventListener('click', (event) => {
  if (event.target.id === 'reset') {
    if (localStorage.getItem('count') !== 0) {
      localStorage.setItem('count', 0);
      point.innerHTML = '0';
    }
    localStorage.setItem('destination', '');
    destination.innerHTML = 'Choisir destination';
    document.querySelector('.victory').remove();
  }
});

// let destination = localStorage.getItem('destination');

setTimeout(() => {
  if (localStorage.getItem('destination') !== null) {
    if (
      destination.innerHTML ===
      document.querySelector('.mw-page-title-main').innerText
    ) {
      let victory = document.createElement('p');
      victory.className = 'victory';
      victory.innerHTML = 'Victoire !';
      victory.style.cssText =
        'font-size: 30px; font-weight: bold; font-family: sans-serif; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: orange; border-radius: 10px; width: 200px; height: 50px; border: 3px solid orange; display: flex; justify-content: center; align-items: center; font-weight: bold; font-family: sans-serif; background-color: #333; z-index: 100;';
      document.body.appendChild(victory);
    }
  }
}, 100);
