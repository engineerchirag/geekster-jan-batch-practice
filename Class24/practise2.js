// Ques 1 
function tellMeOutput() {
  console.log("inside tellMeOutput")
}

function highPriority() {
  setTimeout(() => {  
    console.log(2)
  }, 0)
}

highPriority(tellMeOutput)


// Ques 2

function isItHell() {
  setTimeout(() => {
    console.log("1**")
    setTimeout(() => {
      console.log("2**")
      setTimeout(() => {
        console.log("3**")
      }, 500)
    }, 2000)
  }, 1000)
}

function isItHell2() {
  setTimeout(() => {
    console.log("1")}, 1000)
  setTimeout(() => {
    console.log("2")}, 2000);
  setTimeout(() => {
    console.log("3")
  }, 500)
}
// console.log(isItHell()+"1")
// console.log(isItHell2()+"2")


// Ques 3

