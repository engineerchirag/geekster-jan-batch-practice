console.log("Hey");
var name = "Kanika"

// function sayTime() {
  var hey = setInterval(sayHello, 1000);
  setTimeout( function clear() {
    clearInterval(hey);
  }, 4000);
  
// }

function sayHello() {
  console.log("Hey there");
}

console.log(name);
// sayTime();


// start timer, pause it, stop it
// output, callback stack, queue