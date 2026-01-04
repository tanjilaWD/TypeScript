var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("userName: ".concat(this.userName, ", age: ").concat(this.age));
    };
    return User;
}());
var user1 = new User('Tanjila khatun', 21);
user1.display();
var user2 = new User('Bithi', 20);
user2.display();
