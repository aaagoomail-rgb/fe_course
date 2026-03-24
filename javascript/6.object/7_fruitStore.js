import * as store from '../commons/object.js'

let fstore = store.getObjects();

let apple = new store.Fruit('apple', '🍎');
let lemon = new store.Fruit('lemon', '🍋');

store.setObject('apple', apple);
store.setObject('lemon', lemon);

store.deleteObject('apple');
store.deleteObject('lemon');

console.log(fstore);