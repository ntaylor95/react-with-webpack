// method with properties and functions
// also called an Object Literal
const user = {
    firstName: 'Nicole',
    lastName: 'Taylor',
    fullName: function() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

// function
const getFullName = (firstName, lastName) => {
    console.log(`${firstName} ${lastName}`);
}

const userObject = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

userObject.prototype.fullName = function(){
    console.log(`${this.firstName} ${this.lastName}`);
    return this;
}

class UserClass {
    constructor(firstName, lastName) {
        //setup properties on the object
        this.firstName = firstName;
        this.lastName = lastName;
        this.score = 0;
    }
    fullName() {
        console.log(`${this.firstName} ${this.lastName}`);
        return `${this.firstName} ${this.lastName}`;
    }
    incScore() {
        this.score += 1;
        console.log(`${this.fullName()} has a score of ${this.score}`);
        return this;
    }
}

class Admin extends UserClass {
    constructor(firstName, lastName, title) {
        super(firstName, lastName);
        this.title = title;
    }
    deleteUser(id) {
        console.log(`Deleting user ${id}`);
        return this;
    }
}

user.fullName();
getFullName('Tod','Peters');

const cUser1 = new UserClass('Jack', 'Taylor');
console.log(cUser1);
cUser1.incScore();

const cUser2 = new UserClass('Brad', 'Taylor');
console.log(cUser1);
cUser2.incScore().fullName();

let userObj1 = new userObject('Ted','Minute');
console.log(userObj1);
userObj1.fullName();

// adds a function outside the prototype
userObj1.fullName = function() {
    console.log('Test');
}
console.log(userObj1);

const userObj2 = new userObject('Jan','Freeman');
userObj2.fullName();

const admin1 = new Admin('Nicole', 'Taylor','administrator');
console.log(admin1);
admin1.deleteUser(1243);
