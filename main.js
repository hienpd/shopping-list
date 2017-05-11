'use strict';

let addForm = document.getElementById('add-form');
let labelIdCount = 5;

function updateNavCounter() {
  let listItems = document.querySelectorAll('li.collection-item');
  let navCounter = document.getElementById('counter');

  navCounter.textContent = listItems.length;
}

function addItem(e) {
  let userInput = document.getElementById('add-item').value;

  if(userInput.trim() === '') {
    return;
  }

  let addForm = document.getElementById('add-form');

  labelIdCount++;

  let list = document.getElementById('list');
  let newItem = document.createElement('li');
  let newInput = document.createElement('input');
  let newLabel = document.createElement('label');
  let newText = document.createTextNode(userInput);
  let newAnchor = document.createElement('a');
  let newIcon = document.createElement('i');
  let newIconText = document.createTextNode('delete');

  newItem.className = 'collection-item';
  newAnchor.className = 'secondary-content';
  newIcon.className = 'material-icons';
  newInput.setAttribute('type', 'checkbox');
  newInput.setAttribute('id', labelIdCount);
  newLabel.setAttribute('for', labelIdCount);
  newAnchor.setAttribute('href', '#!');

  newItem.appendChild(newInput);
  newItem.appendChild(newLabel);
  newItem.appendChild(newAnchor);
  newLabel.appendChild(newText);
  newIcon.appendChild(newIconText);
  newAnchor.appendChild(newIcon);

  list.insertBefore(newItem, list.firstChild);

  addForm.reset();
  updateNavCounter();
  e.preventDefault();
}

addForm.addEventListener('submit', function(e) {
  addItem(e);
}, false);

updateNavCounter();
