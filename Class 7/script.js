// closures

// retain access to variable 

// afun para: first
// sfun para: second
//return first + second 

var awFunc = function (first) {  // 
    var someFunc = function (second) {
        return first + second;
    }
    return someFunc
}

var someMoreFunc = awFunc('awe')// someMoreFunc: parameter, is a func  // someMoreFunc = someFunc()

console.log(someMoreFunc('some'));



//function User() name, age

// getProfile: printing the name
// return another func: printing the age 
// create a new use 



function User(name, age) {
    this.name = name;
    this.age = age;

    this.getProfile = function () {
        //outer function cotext
        console.log(this.name); // user 

        return () => {

            // inner function context
            console.log(this.name);
            console.log("Im" + this.name + this.age + "yrs old")

        }
    }
}

var name = "Utkarshini"

var user = new User('John', 25)
var profile = user.getProfile()
profile();


// call, apply, bind 

// two person property - favourite food
// func (eatAction, afterEatAction)

var john = {
    favouriteFood: 'pizza'
}

var bob = {
    favouriteFood: 'pasta'
}

var favFood = function (eatAction, afterEatAction) {
    console.log("Before, I was " + eatAction + " but after eating " + this.favouriteFood + " I was " + afterEatAction);

}

//bob.favFood('hungry', 'sleepy')

// call method for bob
// john 
// pass an array 

favFood.call(bob, 'hungry', 'sleepy')
favFood.call(john, 'angry', 'happy')
favFood.apply(john, ['angry', 'happy'])


// create a new var that binding bob to favfood

var eatSomething = favFood.bind(bob)
eatSomething('gobble', 'full')


// ------------------
// Normal function 
// ------------------
var person = {
    firstName: 'Pradeep',
    lastName: 'Kumar',
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};
console.log("Normal function: " + person.fullName());

// ------------------------
// Using call() function 
// ------------------------


// create a new object and then refer to person

var myObject = {
    firstName: 'CSE',
    lastName: 'spec in Biotech'
}

var newName = person.fullName.call(myObject)


// --------------------
// apply() function
// --------------------
var numbers = [5, 6, 2, 3, 7];

// apply mathmax to this array

var max = Math.max.apply(null, numbers)

console.log(max);


// Example - 02
var array = ['a', 'b'];
var elements = [0, 1, 2];

var merged = array.push.apply(array, elements);



// ------------------
// Using bind() function 
// ------------------
var person = {
    firstName: 'Pradeep',
    lastName: 'Kumar',
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};

var myObject = person.fullName
var getFullName = myObject.bind(person)

console.log(getFullName());


