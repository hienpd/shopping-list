'use strict';

let addForm = document.getElementById('add-form');

function addItem(e) {
  let list = document.getElementById('list');
  let newItem = document.createElement('li');
  let newText = document.createTextNode('test');
  let newInput = document.createElement('input');
  let newLabel = document.createElement('label');

  newItem.className = 'collection-item';
  newInput.setAttribute('type', 'checkbox');
  newLabel.setAttribute('for', 'test');

  newLabel.appendChild(newText);
  newItem.appendChild(newInput);
  newItem.appendChild(newLabel);

  list.appendChild(newItem);
}

addForm.addEventListener('submit', function() {
  addItem(e);
}, false);
