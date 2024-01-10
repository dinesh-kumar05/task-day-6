// a. Print odd numbers in an array

// Anonymous function

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

var say = function(){
for (var i=0;i<array.length;i++){
    if (array[i]%2!==0)
    console.log(array[i])
   
}}
say(array);

// Immediately Invoked function

var say = (function(){
  for (var i=0;i<array.length;i++){
      if (array[i]%2!==0)
      console.log(array[i])
     
  }})
  say(array);

// Arrow functions

let result = array.filter (num=>num %2 !== 0)
console.log(result)


// b.  Convert all the strings to title caps in a string array

// Anonymous function

var arr = function (sentence) {
    str = sentence.toLowerCase().split(' ');
    for (var i=0;i<str.length;i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
}
console.log(arr("hello we are from guvi"))

// Immediately Invoked function

var arr = (function (sentence) {
  str = sentence.toLowerCase().split(' ');
  for (var i=0;i<str.length;i++){
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
})
console.log(arr("hello we are from guvi"));

// Arrow functions

let arr1 = (sentence) => {
  return sentence.split(" ").reduce( (see,saw) => see+""+(saw.charAt(0).toUpperCase()+saw.slice(1)+" "), "");
  }
console.log(arr1("hello we are from guvi"));

// c. Sum of all numbers in an array

// Anonymous function

var a = function(array){
    if (array.length < 1) return 0;
    return array.pop() + a(array);         
}
console.log(a([1,2,3,4,5]));

// Immediately Invoked function

var a = (function(array){
  if (array.length < 1) return 0;
  return array.pop() + a(array)
   
})
console.log(a([1,2,3,4,5]));

// Arrow functions

let ab = (array) => array.reduce((a,b)=>a+b, 0);
    let abb = ab(array);
    console.log(abb)

// d. Return all the prime numbers in an array

// Anonymous function

var prime = function(){
  for (var i=0;i<array.length;i++){
      if (array[i]%2!==0)
      console.log(array[i])
     
  }}
  prime(array);

// Immediately Invoked function



// Arrow functions

array = array.filter((number) => {
  if (number < 2){
    return false
  }
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(array);

// e. Return all the palindromes in an array

// Anonymous function

var words = ['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip', 'dineshhsenid'];

var any = function(words){
    var arr = [];
    var stn = words.slice(0);
    var pal = stn.toString().split("").reverse().join("").split(",");

for (let i = 0; i < words.length; i++) {
  for (let k = 0; k < pal.length; k++) {
    if (words[i] == pal[k]) {
      arr.push(words[i])
    }
  }
}
return arr
}
console.log(any(words))

// Immediately Invoked function

var any = (function(words){
    var arr = [];
    var stn = words.slice(0);
    var pal = stn.toString().split("").reverse().join("").split(",");

for (let i = 0; i < words.length; i++) {
  for (let k = 0; k < pal.length; k++) {
    if (words[i] == pal[k]) {
      arr.push(words[i])
    }
  }
}
return arr
})
console.log(any(words));

// Arrow functions

var any = (words) => {
    var arr = [];
    var stn = words.slice(0);
    var pal = stn.toString().split("").reverse().join("").split(",");

for (let i = 0; i < words.length; i++) {
  for (let k = 0; k < pal.length; k++) {
    if (words[i] == pal[k]) {
      arr.push(words[i])
    }
  }
}
return arr
}
console.log(any(words))
