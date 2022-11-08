var mas = []
var count = 42
var n = 100
var m = -5

let min = n>m ? m : n;
let max = n>m ? n : m;

/* 
if (n>m) {
    max = n
    min = m
} else {
    max = m
    min = n
}
*/

    for (let i = 1; i <= count; i++) { 
        mas.push(Math.floor(Math.random() * (max - min)) + min) 
    }
    
  console.log(mas)
  