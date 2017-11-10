var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = (function () {
    function User(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        console.log(this.name + "'s age is " + this.age);
    }
    User.prototype.register = function () {
        console.log('name is registered ' + this.name);
    };
    return User;
}());
var mad = new User('madhuri', 23, 'female');
console.log(mad);
var otherUser = (function (_super) {
    __extends(otherUser, _super);
    function otherUser(id, name, age, gender) {
        var _this = _super.call(this, name, age, gender) || this;
        _this.id = id;
        console.log('id created');
        return _this;
    }
    return otherUser;
}(User));
var man = new otherUser(3, 'manaswini', 24, 'female');
