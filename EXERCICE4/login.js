import {User} from './User.js'



let submit = document.getElementById("submit")
submit.addEventListener("click" , ()=>{
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value


    let user = new User(username , password)

    let allUsers = User.getUsersFromLocalStorage()
    let found=0;

    for(let i=0 ; i<allUsers.length ; i++){
        if(allUsers[i].username == username && allUsers[i].password == password){
            window.location.replace("home.html");
            sessionStorage.setItem('loggedIn' , true)
            found=1
            break;
        }
    }

    if(found == 0){
        alert("the info you entred are not correct , try again")
    }



})

