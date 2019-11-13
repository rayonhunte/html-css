interface User {
    name: string;
    email: string;
    createDate: number;
    age?: number;
    token: string;
}

const rayon: User = {

    name: "Rayon",
    email: "rayon.hunte@gmail.com",
    createDate: 1573661309859,
    token: "12345678",
};

class Rayon implements User {
    name: string;
    email: string;
    createDate: number;
    age?: number;
    token: string;
    constructor(name: string, email: string, createDate: number, token: string) {
        this.name = name;
        this.email = email;
        this.createDate = createDate;
        this.token = token;
    }
}
const newRayon: User =  new Rayon("Rayon","rayon.hunte@gmail.com",1573661309859,"12345678");
console.log(newRayon);


// function deceleration, implementing the User interface
function makeNewUser(someUser: User): User {
    return {
        name: someUser.name,
        email: someUser.email,
        createDate: someUser.createDate,
        token: someUser.token
    };
}

console.log(
    // pass user object to the makeNewUser function
    makeNewUser({
        name: "Rayon",
        email: "rayon.hunte@gmail.com",
        createDate: 1573661309859,
        token: "12345678"
    })
);