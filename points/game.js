let point = document.createElement('p');
point.innerHTML = localStorage.getItem('count');
point.style.cssText =
  'position: absolute; right: 20px; top: 0; font-size: 30px; background-color: #000; color: #fff; border-radius: 50%; width: 50px; height: 50px; border: 3px solid #fff; display: flex; justify-content: center; align-items: center; font-weight: bold; font-family: sans-serif;';
document.body.appendChild(point);

let reset = document.createElement('p');
reset.innerHTML = 'Reset';
reset.id = 'reset';
reset.style.cssText =
  'position: absolute; right: 20px; top: 60px; font-size: 15px; background-color: #000; color: #fff; border-radius: 10px; width: 50px; height: 30px; border: 3px solid #fff; display: flex; justify-content: center; align-items: center; font-weight: bold; font-family: sans-serif; cursor: pointer;';
document.body.appendChild(reset);

let links = document.getElementsByTagName('link');

document.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    let storage = localStorage.getItem('count');
    if (storage === null) {
      localStorage.setItem('count', 1);
    } else {
      localStorage.setItem('count', parseInt(storage) + 1);
    }
    point.innerHTML = localStorage.getItem('count');
  }
});

document.addEventListener('click', () => {
  if (event.target.id === 'reset') {
    if (localStorage.getItem('count') !== 0) {
      localStorage.setItem('count', 0);
      point.innerHTML = '0';
    }
  }
});
