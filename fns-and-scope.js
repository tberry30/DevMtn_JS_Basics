//Once you complete a problem, open up Chrome and check the answer in the console.
var name = 'Tyler';


//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.
function isTyler(name) {
	if (name === "Tyler") {
		return true;
	} else {
		return false;
	}
}
console.log(isTyler(name));


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.
function getName() {
	var name = prompt("What is your name?");
    return name;
}
console.log(getName());


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.
function welcome() {
	alert("Welcome, " + getName());
}
welcome();


//Next problem



//What is the difference between arguments and parameters?
// A parameter is the variable or placeholder written as part of the function definition, and the argument is the actual value being passed when the function is invoked.
function someFunc(x) {
//	              ^ parameter
}

someFunc(5);
//       ^ argument


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?
// ""(empty string), 0, false, null, undefined, NaN
function isFalsey(value) {
	if (value) {
		return true;
	} else {
		return false;
	}
}


//Next Problem



//Create a function called myName that returns your name
function myName() {
	return "Tim";
}
console.log(myName());

//Now save the function definition of myName into a new variable called newMyName
var newMyName = myName;

//Now alert the result of invoking newMyName
alert(newMyName());


//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.
function outerFn() {
  return function () { return "Tim"; };
}

//Now save the result of invoking outerFn into a variable called innerFn.
var innerFn = outerFn();

//Now invoke innerFn.
console.log(innerFn());