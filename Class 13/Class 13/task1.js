// promise to make a cake for my birthday which is after two weeks
// frd is not sick then i am happy I will get the cake
// if frd is sick I am sad i will not get a cake 
// i will still have a party 




//new Promise(resolve, reject)
//    //fetch(// getting some data)
//    .then()
//     .then()
//    .catch()


const onMyBirthday = (isFrdSick) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isFrdSick) {
                resolve(1)
            } else {
                reject(new Error('I am sad'))
            }
        }, 2000)

    })
}

console.time("Timer")

onMyBirthday(false)
    .then((result) => {
        console.timeLog("Timer")
        console.log(`I have ${result} cake`);

    }).catch((error) => {
        console.timeLog("Timer")
        console.log(error);

    }).finally(() => {
        console.log("Party");

    })