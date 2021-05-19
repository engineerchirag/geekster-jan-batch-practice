//window.onload = () => {
//    randomUser()
//}

//const randomUser = () => {
//    fetch('https://randomuser.me/api/')
//        .then(response => {
//            return response.json()
//        })
//        .then(data => {
//            console.log(data);
//            showUser(data)
//        })
//}


//showUser = (user) => {
//    document.getElementById('name').innerText =
//        `${user.results[0].name.title}
//        ${user.results[0].name.first}
//         ${user.results[0].name.last}
//        `
//}


const x = fetch('https://randomuser.me/api/').then(res => {
    return res.json()
})


console.log(x);







