import { User } from './User.js';  
import { Post } from './Post.js'; 

window.addEventListener('load' , ()=>{
    if(!sessionStorage.getItem("loggedIn")){
        alert("hello")
        window.location.replace("index.html")
    }
})

let Allposts = Post.getPosts();
let postContainer = document.getElementById("postContainer");

for(let i=0 ; i<Allposts.length ; i++){
    let div = document.createElement("div")
    div.innerHTML = "<strong>title</strong> :"+Allposts[i].title + "<br><strong> description</strong> : "+Allposts[i].description
    div.style.boxShadow = "-4px 10px 10px rgba(8, 5, 5, 0.2)";
    div.style.backgroundColor="white"
    div.style.margin="10px"
    div.style.padding="10px"
    div.style.borderRadius="10px"

    postContainer.appendChild(div)
}

let logout = document.getElementById("logout")
logout.addEventListener("click" , ()=>{
    sessionStorage.removeItem("loggedIn");
    window.location.replace("index.html")
})