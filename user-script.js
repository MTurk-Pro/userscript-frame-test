console.log('UserScript Active!');

function changeColor() {
  const findElement = selector => document.querySelector(selector);
  const mainContainer = findElement('header > [class*="ProductNavigationContainer"]');
  const topBar = mainContainer.querySelector('[class*="Masthead"]');
  const nav = mainContainer.querySelector('[class*="MenuContainer-PrimaryNavBarContainer"]');
  mainContainer.style.backgroundColor = 'red';
  topBar.style.backgroundColor = 'red';
  nav.style.backgroundColor = 'red';
}

changeColor();
