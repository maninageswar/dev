var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Manager = /** @class */ (function () {
    function Manager(name, age, locatioin, password) {
        this.name = name;
        this.age = age;
        this.locatioin = locatioin;
        this.password = password;
    }
    Manager.prototype.getEmDetails = function () {
        console.log(this.name);
        console.log(this.age);
        console.log(this.locatioin);
    };
    Manager.prototype.conca = function () {
        var y = this.name + this.locatioin;
        return y;
    };
    return Manager;
}());
var E1 = new Manager("sai", 23, "saklespur");
var E3 = new Manager("man", 24, "anikman");
var k = E1.conca();
var o = E3.conca();
console.log(k);
console.log(o);
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, locatioin, password) {
        return _super.call(this, name, age, locatioin, password) || this;
    }
    Employee.prototype.getPass = function () {
        console.log(this.password);
    };
    return Employee;
}(Manager));
var E2 = new Employee("kumar", 34, "amalauram", "pass@123");
E2.getEmDetails();
E2.getPass();
