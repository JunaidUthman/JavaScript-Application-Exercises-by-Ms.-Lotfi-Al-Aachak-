export class Post{
    constructor(title , description , user){
        this.title = title;
        this.description=description;
        this.user=user;
    }

    static savePost(posts){
        localStorage.setItem("posts" , JSON.stringify(posts))
    }

    static getPosts(){
        const posts = JSON.parse(localStorage.getItem("posts"))
        return posts ? posts : [];
    }

    addPost(){
        let posts = Post.getPosts();
        posts.push(this)
        Post.savePost(posts);
    }

    static displayPosts(){
        const posts = this.getPosts();
        console.log(posts)
    }
}