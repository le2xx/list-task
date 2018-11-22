import '../styles/index.scss';

const list = document.getElementById('list');
const itemList = list.getElementsByClassName('item');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const popup = document.getElementsByClassName('popup')[0];
const close = document.getElementsByClassName('close')[0];

const user = {
  name: 'Федя',
  age: 24,
  status: true
};

const myFuncMess = (user) => {
  const message = user.name + ' тебе ' + user.age + ' года и тебе можно на сайт';
  alert(message);
  console.log('Пользователь ' + user.name + ' допущен');
};

if (user.age >= 18 && user.status) {
  myFuncMess(user);
} else {
  alert( user.name + ' тебе нельзя на сайт');
}

const addItem = () => {
  const newItem = document.createElement('li');
  newItem.innerHTML = 'Новая задача';
  newItem.className = 'item';
  list.appendChild(newItem);
  popup.style.display = 'none';
};

const delItem = () => {
  list.removeChild(itemList[0]);
  if(itemList.length === 0) {
    popup.style.display = 'block';
  }
};

btn1.addEventListener('click', addItem);
btn2.addEventListener('click', delItem);
close.addEventListener('click', () => popup.style.display = 'none');