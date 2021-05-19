//gives a promise
fetch('https://randomuser.me/api/')
    //// handling positive response 
    //.then() // gives a
    //// handles a
    //.catch()
    //try {

    //}

    //catch (error) {

    //}

    .then(response => {
        //console.log(response);
        //console.log(response.json);
        console.log('API: ', response.json);
        return response.json()
    })
    .then((data) => {
        console.log('DATA is: ', data);
        var user = data.gender;
        //    console.log("USER", user);


    })