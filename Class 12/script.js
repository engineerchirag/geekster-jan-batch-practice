// gives us a promise
fetch('https://api.chucknorris.io/jokes/random')
    // handle a positive response

    //    .then() // gives a  2
    //// handle a 
    //    .then() // gives b  3 //$


    //try(){ // try for c 2+ 3

    //}
    //    .catch (error) {

    //    }

    .then(response => {
        //console.log(response);
        //console.log(response.json);
        //console.log("API: ", response.json);
        return response.json()
    })
    //.then((data) => {
    //    //console.log('Data is: ', data);
    //    var joke = data.value;
    //    console.log("Joke: ", joke);

    //})



