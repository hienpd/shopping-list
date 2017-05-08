'use strict';

let addForm = document.getElementById('add-form');

function addItem() {
  let list = document.getElementById('list');
  let newItem = document.createElement('li');
  let newText = document.createTextNode('test');

  newItem.className = 'collection-item';
  newItem.appendChild(newText);

  list.appendChild(newItem);
}

addForm.addEventListener('submit', addItem, false);
