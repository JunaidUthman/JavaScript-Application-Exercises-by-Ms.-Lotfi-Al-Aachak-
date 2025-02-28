import {User} from './User.js'
User.displayUsers();
let submit = document.getElementById("submit")
submit.addEventListener("click" , ()=>{
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    let user = new User(username , password);

    let allUsers = User.getUsersFromLocalStorage()
    let exist=0

    for(let i=0 ; i<allUsers.length ; i++){
        if(allUsers[i].username == username && allUsers[i].password == password){
            alert("the info u entred already exists")
            exist=1
            return;
            
        }
    }

    if(exist == 0){
        user.addUser();
        User.displayUsers();
        alert("the is registration is done successfully")
        window.location.href = "index.html";

        console.log(User.users)
    }
    //localStorage.clear()

})