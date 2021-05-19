//task 2: create a guess game

// User story: User can enter a number
// System picks a number randomly bw 1 to 6
// if no matches, user get 2 points
// If no is differnet by 1, give user 1 point else give the user 0 points
// User can decide to play the game as long as they want to 


const enterNumber = () => {
    return new Promise((resolve, reject) => {
        const userNumber = Number(window.prompt("Enter a number(1 to 6): "));
        const randomNumber = Math.floor(Math.random() * 6 + 1);

        if (isNaN(userNumber)) {
            reject(new Error("Wrong input type"))
        }
        if (userNumber === randomNumber) {
            resolve({
                points: 2, randomNumber
            })
        } else if (userNumber === randomNumber - 1 || userNumber === randomNumber + 1) {
            resolve({
                points: 1, randomNumber
            })
        } else {
            resolve({
                points: 0, randomNumber

            })

        }

    })
}


const continueGame = () => {
    return new Promise((resolve) => {
        if (window.confirm("Do you want to continue the game?")) {
            resolve(true);
        } else {
            resolve(false);
        }
    });
};

//const handleGuess = () => {
//    enterNumber()
//        .then((result) => {
//            alert(`Dice: ${result.randomNumber}:  you got ${result.points}`);

//            continueGame().then((result) => {
//                if (result) {
//                    handleGuess();

//                } else {
//                    alert("Game over")
//                }
//            });
//        })
//        .catch((error) => alert(error));
//};


const handleGuess = async () => {
    try {
        const result = await enterNumber();

        alert(`Dice: ${result.randomNumber}:  you got ${result.points}`);

        const isContinuing = await continueGame();
        if (isContinuing) {
            handleGuess()
        } else {
            alert('Game over')
        }
    }
    catch (error) {
        alert(error)
    }


}

const start = () => {
    handleGuess()

}

start();