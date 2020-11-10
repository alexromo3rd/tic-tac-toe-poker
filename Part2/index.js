let idInput = document.getElementById('idInput');
let colorInput = document.getElementById('colorInput');

function setCard () {
  let card = document.getElementById(idInput.value);
  card.style.color = colorInput.value;
}

function reset () {
  let diamonds = document.getElementById('diamonds');
  let clubs = document.getElementById('clubs');
  let hearts = document.getElementById('hearts');
  let spades = document.getElementById('spades');

  let cards = [diamonds, clubs, hearts, spades];

  cards.forEach(card => card.removeAttribute('style'));
}

