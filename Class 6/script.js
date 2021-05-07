//# 1
//Warm up
//Scope
//    - Study the code bellow and answer the following without checking the console.
//- Are the variables what they claim to be ?
//    - What would console.log(y) and console.log(x) print ? Why ?
//        - Write you answer bellow the code.
(function () {
    "use strict";

    var x = "I'm a local variable";
    //console.log(y)

    function scopeThis() {
        var y = "I'm a global variable";
        console.log(x);
    }
    scopeThis();
})();

//"use strict"
//x = 1;

//console.log(x);




//function myFunc() {
//   var y
//    y = 2;
//}

//myfunc()


//x = { p1: 10, }


// delete not allowed

//function x(x, x)


//# 2
//Warm up
//Hoisting
//    - Study the code bellow and answer the following without checking the console.
//- What would console.log(x) and console.log(foo()) print ? Why ?
//    - Write you answer bellow the code.

(function () {
    "use strict";

    function warmUp() {

        console.log(x);
        console.log(foo());

        var x = "variable hosting!";

        function foo() {
            return "function hoisting";
        }
    }
    warmUp();
})();

//# 3
//Warm up
//Date Object
//    - Declare a variable 'todayIs'.
//- Using the date constructor, it should print today's date
// write a function and check whether todayIs = that function



//function (today) {
//    var todayIs = new Date('3/03/2021')
//    var month = todayIs.getMonth()
//}



//# 4
//Warm up
//    - Study the code below.What will console.log(add) print ? Why ? Write your answer below.
//- Do not uncomment console.log(add);

(function () {
    //"use strict";
    const add = 2 + 2;
    //console.log(add);
})();
//console.log(add);


//Object notation
//Hoisting
//    - Using dot notation, do the following:
//- add a property of "sauceType" with a value of "tomato".
//  - add a property of "protien" with a value of "chicken".
//  - add a propety of "orderNow" with a value of that would make it pass the assertion.
//  - add a property of "sauce" with a value of that would make it pass the assertion.
//- Fix hoisting issues
//    - It should return, "We are making your pizza with tomato and chicken. Pickup in 20 minutes.".



(function () {
    "use strict"
    var pizza = {
        sauce: "",
        orderNow: "",

        pizzaMkr: function () {
            if (pizza.orderNow == true && pizza.sauce == true) {
                return " We are making your pizza" + this.sauceType + "and" + this.protien + " . Pickup in 20 mins"
            } else {
                return "Didnt select sauce or protien"
            }

        }
    }

    pizza.sauce = true
    pizza.orderNow = true
    pizza.sauceType = "tomato"
    pizza.protien = "chicken"
    pizza.pizzaMkr();


    console.log("Thanks for ordering!", pizza.pizzaMkr());



})();




















