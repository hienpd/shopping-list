'use strict';

let addForm = document.getElementById('add-form');
let listForm = document.getElementById('list-form');
let labelIdCount = 5;

function updateNavCounter() {
  let listItems = document.querySelectorAll('li.collection-item');
  let navCounter = document.getElementById('counter');
  let checkedItems = document.querySelectorAll('input:checked');

  navCounter.textContent = listItems.length - checkedItems.length;
}

function addItem(e) {
  e.preventDefault();

  let userInput = document.getElementById('add-item').value;

  if(userInput.trim() === '') {
    return;
  }

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
}

addForm.addEventListener('submit', function(e) {
  addItem(e);
}, false);

listForm.addEventListener('click', updateNavCounter, false);

updateNavCounter();
