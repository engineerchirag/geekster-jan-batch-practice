// 1. What are arrays in JavaScript and why are they useful ?
// 2. What are objects in JavaScript and why are they useful ?
// 3. What are a couple of key differences between objects and arrays ?
// 4. What is the index of an array ? What is it used for?
// 5. What is a property ?
// 6. What is a method ?

//7. Create an array named colors that contains five different names of colors as strings.
//8. Access the first color in the array and print it to the console using console.log()
//9. Now do the same with the third color in the list. 
//10. Write one line of code that changes the value of the last color in the list to "ultraviolet".
//11. Create a new variable called fourthColor and set it equal to the fourth color in the list.
//12. Add another color to the end of the list.
//13. Add another color to the beginning of the list.
//14. Print the length of the array to the console with console.log()
//15. Remove the last color from the end of list, and then print the length of the array to the console one more time.
//16. Write a for loop to iterate through every color in the array and print each color's value to the console.
//17. Copying from that loop you just wrote, modify it to print every color's value and every color's index in this format: 3, purple or 0, blue etc.
//18. Create a variable named lastColor that will always point to the last element of the colors array, no matter how many colors are in the list.

var colors = ["red", "blue", "yellow", "violet", "green"]
console.log(colors[0]);
console.log(colors[2]);

colors[4] = "ultraviolet"
console.log(colors);

var fourthColor = "black"
colors[3] = fourthColor
console.log(colors);

colors.push("pink");

colors.unshift("white");
console.log(colors);

console.log(colors.length);
colors.pop()
console.log(colors.length);

for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);

}

for (var i = 0; i < colors.length; i++) {
    console.log(i + ":" + colors[i]);

}

var last = colors.length - 1;
var lastColor = colors[last]
console.log(lastColor);


//19. Pick a penguin from Wikipedia's List of Fictional Penguins and create an object named myPenguin with properties that represent the information listed in each column on that Wikipedia page.
//20. Use console.log() to print the penguin's name to the console as part of a welcome message.
//21. Write another line of code that adds a new property to your penguin called canFly and set it to false. 
//22. Add a method to your penguin called chirp that prints to the console: "CHIRP CHIRP! Is this what penguins sound like?"
//23. Add another method to your penguin called sayHello that prints to the console the same message from step 20 above. 
//24. Next, call your penguin's sayHello() method and make sure that it works.
//25. Without modifying any of your previous code, change the penguin's name to "Penguin" and then call your penguin's sayHello() function one more time to make sure it still works.
//26. Write another method called fly, and inside that method, use an if / else statement to print "I can fly!" to the console if your penguin's canFly property is true, or "No flying for me!" if its canFly property is false.
//27. Call your penguin's fly() method and make sure it works.
//28. Change the canFly property to true
//29. Now call your penguin's fly() method again and make sure it works as expected.
//30. Write a for ... in loop to print each key to the console.
//31. Write another for ... in loop to print the value of each key to the console.


var myPenguin = {
    character: "Sergant Penguin",
    origin: "Donald Duck",
    notes: "A military penguin"
}

//var character = "hello"
console.log("Hello, Im a penguin and my name is" + myPenguin.character);

myPenguin.canFly = false

myPenguin.chirp = function () {
    console.log("Chirp. Is this what I sound like?");

}

myPenguin.chirp()

myPenguin.sayHello = function () {
    console.log("Hello! Im powerful military penguin" + this.character);

}

myPenguin.sayHello()

myPenguin.character = "Penguin"
myPenguin.sayHello()


myPenguin.fly = function () {
    if (this.canFly) {
        console.log("I can fly!");

    } else {
        console.log("No flying for me");

    }
}


myPenguin.fly()

myPenguin.canFly = true

myPenguin.fly()


for (var property in myPenguin) {
    console.log(property);

}

for (var property in myPenguin) {
    console.log(myPenguin[property]);

}

//32. Add a new property to your penguin called favoriteFoods and set it equal to an array containing a list of three strings.
//33. Access your penguin's second favorite food and print it to the console using console.log()
//34. Create a new variable called firstFavFood and set it equal to the first item in your penguin's array of favorite foods.
//35. Add another food to the end of the list.
//36. Print the length of your penguin's favoriteFoods array to the console with console.log()
//37. Without modifying any of your previous code, write a new line of code that changes the value of the last item in the list to “pineapples".
//38. Create a new variable named lastFavFood that will always point to the last element of your penguin's favoriteFoods array, no matter how many items are in the list. 
//39. Write a for loop to iterate through every food in your penguin's favoriteFood property and print each one to the console.  


myPenguin.favouriteFoods = ["fish", "ice", "chocolate"];

console.log(myPenguin.favouriteFoods[1]);



var firstFavFood = myPenguin.favouriteFoods[0]

myPenguin.favouriteFoods.push("salmon")

console.log(myPenguin.favouriteFoods.length);


myPenguin.favouriteFoods[3] = "pinapples"

var lastFavFood = myPenguin.favouriteFoods[myPenguin.favouriteFoods.length - 1]


for (var index = 0; index < myPenguin.favouriteFoods.length; index++) {
    console.log(myPenguin.favouriteFoods[index]);


}


//40. Add a new property to your penguin called outfit and set it equal to another object with the following properties: hat, shirt, pants, and shoes -- each property should have a string as its value!
//41. Create a new variable called penguinHatType and set it equal to the value of the hat in your penguin's outfit! Then print your new variable to the console.
//42. Without modifying any of your previous code, write one new line of code to add an accessory property to your penguin's outfit and set it equal to the string "pocket watch"
//43. Write one more line of code to change the hat in your penguin's outfit to "top hat" and override the previous value.
//44. This penguin is a freelancer who always works from home, so it doesn't actually need to wear any pants! Let's delete the pants property from this penguin's outfit property
//45. Write a for ... in loop to print the value of each piece of clothing in your penguin's outfit so you can see a list of clothing items in the console. 



myPenguin.outfit = {
    hat: "baseball cap",
    shirt: "Black shirt",
    pants: "shorts",
    shoes: "slippers"
}

var penguinHatType = myPenguin.outfit.hat;
console.log(penguinHatType);

myPenguin.outfit.accessory = "pocket watch"


myPenguin.outfit.hat = "top hat"

delete myPenguin.outfit.pants


for (var property in myPenguin.outfit) {
    console.log(myPenguin.outfit[property]);

}

//46. Create a new variable named penguins and set it equal to an array that lists these three penguins!
//47. Access the first penguin in the list and print it to the console using console.log()-- notice that you can see all the properties and methods of that object listed in the console
//48. Create a new variable called secondPenguin and set it equal to the second penguin in your penguins array.
//49. Print to the console the name of the last penguin in the list.
//50. Remember the penguin you created earlier, with the variable name of myPenguin ? Add that penguin to the end of the penguins array!
//51. Print the length of the penguins array to the console.
//52. Write one more line of code to change the first penguin's canFly property to the value true (overriding its existing value).
//53. Call the sayHello method of the first penguin in your penguins array
//54. Write a for loop to iterate through every penguin in the array and print the value of each penguin's name property to the console.
//55. Write a for loop to call the sayHello method of every penguin in the array
//56. Write a for loop to iterate through every penguin in the array, and add a new property to each penguin called numberOfFeet with the value 2
//57. Write another for loop to iterate through every penguin in the array, and for each penguin that can fly, print to the console a message containing the penguin's name and " can fly!"


var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
        console.log("QUACK!!!");
    }
};

var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
        console.log("Estoy encantado de conocerle.");
    }
};

var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
        console.log("Hi there!");
    }
};

var penguins = [gunter, ramon, fred]

console.log(penguins[0]);

penguins.push(myPenguin)

console.log(penguins.length);

penguins[0].canFly = true;

penguins[0].sayHello()


for (var i = 0; i < penguins.length; i++) {
    console.log(penguins[i].name);

}

for (var i = 0; i < penguins.length; i++) {
    penguins[i].numberOfFeet = 2

}


for (var i = 0; i < penguins.length; i++) {
    if (penguins[i].canFly) {
        console.log(penguins[i].name + "can fly");

    }

}



















