// Guess game
// User story: 
// System picks a random no bw 1 to 6
// If the number matches, you get 2 poits
// If the number id different by 1, user get 1 point else the user will get 0 points 
// User can decide to play the game as long as they want

// first try: use promise, .then, .catch
// second try: use await async 


const enterNumber = () => {
    return new Promise((resolve, reject) => {

        const userNumber = Number(window.prompt('Enter a no(1 to 6: '))
        const randomNumber = Math.floor(Math.random() * 6 + 1)


        // check whether the user entered a no
        // if no is matching = resolve
        // check if the no is diiffrent by 1 
        // else points : 0
    })
}


continueGame = () => {
    // return a promise 
    // if continue game 
    // else game end 
}

// .then .catch 
const handleGuess = () => {
    enterNumber()
        .then((result) => {
            //alert(randomNumber: points: )

        })
    continueGame().then(
        //     if: handleGuess()
        //else: game over

    ).catch((error) => alert(error))


}


// await async

const handleGuess = async () => {
    try {
        const result = await enterNumber()

        alert(// message)

            //const isContinuing = await continueGame()



    }
    catch (error) {
        alert('game over')
    }
}


const start = () => {
    handleGuess()
}

start()


