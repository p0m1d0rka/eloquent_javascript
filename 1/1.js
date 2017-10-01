'use strict'
// Треугольник. Напишите цикл,  выводит такой треугольник:

// #
// ##
// ###
// ####
// #####
// ######
// #######
let fun = function(num){
  for(let i=0; i<=num; i++){
    console.log('#'.repeat(i+1))
  }
}