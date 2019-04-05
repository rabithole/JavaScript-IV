// CODE here for your Lambda Classes
class Person {
	constructor(attrs) {
		this.name = attrs.name;
		this.age = attrs.age;
		this.location = attrs.location;
		this.gender = attrs.gender;
	}

	speak() {
		return `Hello, my name is ${this.name}`;
	}
}

class Instructor extends Person {
	constructor(attrs, subject) {
		super(attrs);

		this.specialty = attrs.specialty;
		this.favLanguage = attrs.favLanguage;
		this.catchPhrase = attrs.catchPhrase;
	}

	demo(subject) {
		return `Today we are learning about ${subject}`;
	}
	grade(subject) {
		`${this.name} receives a perfect score on ${subject}`;
	}
}

class Student extends Person {
	constructor(attrs) {
		super(attrs);

		this.previousBackground = attrs.previousBackground;
		this.className = attrs.className;
		this.favSubjects = attrs.favSubjects;
	}

	listsSubjects() {
///////// DON'T FORGET TO DO THIS ////////////		
	}
	PRAassignment() {
		return `${student.name} has submitted a PR for ${this.subject}`;
	}
	sprintChallenge() {
		return `${student.name} has begun sprint challenge on ${this.subject}`;
	}
}

class ProjectManager extends Instructor {
	constructor(attrs) {
		super(attrs);

		this.gradClassName = attrs.gradClassName;
		this.favInstructor = attrs.favInstructor;
	}

	standUp() {
		return `${student.name} announces to ${this.channel}`;
	}
	debugsCode() {
		`${this.name} debugs ${student.name}'s code on ${this.subject}`;
	}
}

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const bobo = new Student ({
	name: 'Bobo',
	location: 'Outer Space',
	age: 2024,
	gender: 'Tog',
	favSubjects: 'Warp Physics',
	previousBackground: 'Space Captain',
	className: 'CS 201,105'
});

const jibby = new ProjectManager ({
	name: 'Jibby',
	age: 23,
	location: 'Russia',
	gender: 'Male',
	specialty: 'JavaScript',
	favLanguage: 'Basic',
	catchPhrase: "Let's get Jibby",
	gradClassName: 'CS 20',
	favInstructor: 'Cam Pope'
});

console.log(fred.demo);
console.log(fred.catchPhrase);
console.log(fred.demo('CSS'));
console.log(fred.grade('B'));

console.log(bobo.name);
console.log(bobo.speak());
console.log(bobo.previousBackground);