'use strict'
// Шахматная доска. Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки. На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска.
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #

let fun = function(){
  for(let i=0;i<8;i++){
    if(i%2){
      console.log('# '.repeat(4))
    }
    if(i%2 ===0){
      console.log(' #'.repeat(4))
    }  
  }
}