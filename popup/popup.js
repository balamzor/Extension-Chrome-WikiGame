let input = document.querySelector('.destination');
let button = document.querySelector('.play');

button.addEventListener('click', (e) => {
  if (e.target.id === 'play' && input.value !== '') {
    chrome.runtime.sendMessage({ event: 'store', content: input.value });
    localStorage.setItem('destination', input.value);
  }
});
