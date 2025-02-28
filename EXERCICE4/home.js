import { User } from './User.js';  
import { Post } from './Post.js'; 

window.addEventListener('load' , ()=>{
    if(!sessionStorage.getItem("loggedIn")){
        alert("hello")
        window.location.replace("index.html")
    }
})

let submit = document.getElementById("submit")
submit.addEventListener("click" , ()=>{
    let title= document.getElementById("title").value
    let description= document.getElementById("description").value
    let user = localStorage.getItem("user")

    let post = new Post(title , description , user)
    post.addPost();
})

let logout = document.getElementById("logout")
logout.addEventListener("click" , ()=>{
    sessionStorage.removeItem("loggedIn");
    window.location.replace("index.html")
})
