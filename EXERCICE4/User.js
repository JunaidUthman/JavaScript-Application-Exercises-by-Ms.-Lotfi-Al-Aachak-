export class User {
    user_id;
    username;
    password;

    constructor(username, password) {
        this.username = username;
        this.password = password;

    }

    static getUsersFromLocalStorage() {
        const users = JSON.parse(localStorage.getItem("users"));
        return users ? users : [];
    }

    static saveUsersToLocalStorage(users) {
        localStorage.setItem("users", JSON.stringify(users));
    }

    addUser() {
        let users = User.getUsersFromLocalStorage();
        users.push(this); 
        User.saveUsersToLocalStorage(users);
    }

    static displayUsers() {
        const users = User.getUsersFromLocalStorage();
        console.log(users);
    }
}
