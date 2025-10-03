export default class UserModel {

    constructor(id,name,email,password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static getAll() {
        return users;
    }

    static signUp(name,email,password) {
        const newUser = new UserModel(name,email,password);
        users.push(newUser);
        return newUser;
    }

    static signIn(email,password) {
        const user = users.find((u) => u.email == email && u.password == password);
        return user;
    }

    
}

let users = [
    new UserModel('1','Tony','tony@stark.com','1'),
    new UserModel('2','Thor','Thor@odin.com','1')
]