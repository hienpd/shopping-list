'use strict';

let addForm = document.getElementById('add-form');
let labelIdCount = 5;

function updateNavCounter() {
  let listItems = document.querySelectorAll('li.collection-item');
  let navCounter = document.getElementById('counter');

  navCounter.textContent = listItems.length;
}

function addItem() {
  let userInput = document.getElementById('add-item').value;

  if(userInput.trim() === '') {
    return;
  }

  let list = document.getElementById('list');
  let newItem = document.createElement('li');
  let newText = document.createTextNode(userInput);
  let newInput = document.createElement('input');
  let newLabel = document.createElement('label');

  labelIdCount++;

  newItem.className = 'collection-item';
  newInput.setAttribute('type', 'checkbox');
  newInput.setAttribute('id', labelIdCount);
  newLabel.setAttribute('for', labelIdCount);

  newLabel.appendChild(newText);
  newItem.appendChild(newInput);
  newItem.appendChild(newLabel);

  list.insertBefore(newItem, list.firstChild);

  updateNavCounter();
}

addForm.addEventListener('submit', function() {
  addItem();
}, false);

updateNavCounter();
