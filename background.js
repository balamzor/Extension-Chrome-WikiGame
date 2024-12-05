chrome.runtime.onMessage.addListener((data) => {
  switch (data.event) {
    case 'store':
      console.log(data.content);
      chrome.storage.local.set({ destination: data.content });
      break;
    case 'reset':
      chrome.storage.local.set({ destination: '' });
      break;
    case 'get':
      break;
    default:
      break;
  }
});
