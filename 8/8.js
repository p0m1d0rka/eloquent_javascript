'use strict'
// Обращаем массив вспять. Напишите две функции, reverseArray и reverseArrayInPlace. Первая получает массив как аргумент и выдаёт новый массив, с обратным порядком элементов. Вторая работает как оригинальный метод reverse – она меняет порядок элементов на обратный в том массиве, который был ей передан в качестве аргумента. Не используйте стандартный метод reverse.
// console.log(reverseArray(["A", "B", "C"]));
// // → ["C", "B", "A"];
// var arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);
// // → [5, 4, 3, 2, 1]
let reverseArray = (arr) => {
  res = new Array
  for(let el of arr){
    res.unshift(el)
  }
  return res
}
let reverseArrayInPlace = function(arr) {
  tmp = reverseArray(arr)
  for (let el of tmp) {
    arr.shift()
    arr.push(el);
  }
}

