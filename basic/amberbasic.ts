//Create a class constructor named Person that should hold information about name, age,  jobTitle and have a function that will return a string “Hello there, My name is (name) and I am (age) years old, and I am a (jobTitle)”

class Person {
	name = "";
	age = "";
	jobTitle = "";
constructor(name, age, jobTitle) {
	this.name = name;
	this.age = age;
	this.jobTitle = jobTitle;
	}
	whoAreYou() {
		return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
	}

}

let me = new Person("Amber", "29", "Student");
console.log(me.whoAreYou());

//Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”

class job extends Person {
	salary = "";
	jobLocation = ""
	constructor(name, age, jobTitle, salary, jobLocation) {
	super(name, age, jobTitle);
	this.salary = salary;
	this.jobLocation = jobLocation;
}

whoAreYou2(){
	return `${super.whoAreYou()} and I get ${this.salary} every month, and I work in ${this.jobLocation}`;
}
}

let myJob = new job("Amber", "29", "Student", "£0", "Vienna",)
console.log(myJob.whoAreYou2())