'use strict';

let addForm = document.getElementById('add-form');
let idCounter = 5;

function addItem(e) {
  let userInput = document.getElementById('add-item').value;
  let list = document.getElementById('list');
  let newItem = document.createElement('li');
  let newText = document.createTextNode(userInput);
  let newInput = document.createElement('input');
  let newLabel = document.createElement('label');

  newItem.className = 'collection-item';
  newInput.setAttribute('type', 'checkbox');
  newLabel.setAttribute('for', userInput);

  newLabel.appendChild(newText);
  newItem.appendChild(newInput);
  newItem.appendChild(newLabel);

  list.insertBefore(newItem, list.firstChild);
}

addForm.addEventListener('submit', function(e) {
  addItem(e);
}, false);
