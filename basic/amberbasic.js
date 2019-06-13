//Create a class constructor named Person that should hold information about name, age,  jobTitle and have a function that will return a string “Hello there, My name is (name) and I am (age) years old, and I am a (jobTitle)”
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, jobTitle) {
        this.name = "";
        this.age = "";
        this.jobTitle = "";
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.whoAreYou = function () {
        return "Hello there, My name is " + this.name + " and I am " + this.age + " years old, and I am a " + this.jobTitle;
    };
    return Person;
}());
var me = new Person("Amber", "29", "Student");
console.log(me.whoAreYou());
//Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”
var job = /** @class */ (function (_super) {
    __extends(job, _super);
    function job(name, age, jobTitle, salary, jobLocation) {
        var _this = _super.call(this, name, age, jobTitle) || this;
        _this.salary = "";
        _this.jobLocation = "";
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    job.prototype.whoAreYou2 = function () {
        return _super.prototype.whoAreYou.call(this) + " and I get " + this.salary + " every month, and I work in " + this.jobLocation;
    };
    return job;
}(Person));
var myJob = new job("Amber", "29", "Student", "£0", "Vienna");
console.log(myJob.whoAreYou2());
