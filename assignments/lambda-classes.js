// CODE here for your Lambda Classes
class Person {
	constructor(attrs) {
		this.name = attrs.name;
		this.age = attrs.age;
		this.location = attrs.location;
		this.gender = attrs.gender;
	}

	speak() {
		return `Hello, my name is ${this.name}.`;
	}
}

class Instructor extends Person {
	constructor(attrs) {
		super(attrs);

		this.specialty = attrs.specialty;
		this.favLanguage = attrs.favLanguage;
		this.catchPhrase = attrs.catchPhrase;
	}

	demo(subject) {
		return `Today we are learning about ${subject}.`;
	};
	grade(subject) {
		return `${this.name} receives a perfect score on ${subject}.`;
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
		return `${favSubjects}`;
	}
	PRAassignment(subject) {
		return `${this.name} has submitted a PR for ${subject}`;
	}
	sprintChallenge(subject) {
		return `${this.name} has begun sprint challenge on ${subject}`;
	}
}

class ProjectManager extends Instructor {
	constructor(attrs) {
		super(attrs);

		this.gradClassName = attrs.gradClassName;
		this.favInstructor = attrs.favInstructor;
	}

	standUp(channel) {
		return `${this.name} announces to ${channel}`;
	}
	debugsCode(subject) {
		return `${this.name} debugs ${this.name}'s code on ${subject}`;
	}
}


// Instructors
const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const elvis = new Instructor({
  name: 'Elvis',
  location: 'Graceland',
  age: 67,
  gender: 'male',
  favLanguage: 'Rock n Roll',
  specialty: 'Movin the hips',
  catchPhrase: `There’s no job too immense, when you got confidence.`
});

// console.log(fred.name);
// console.log(fred.age);
// console.log(fred.location);
// console.log(fred.gender);
// console.log(fred.specialty);
// console.log(fred.favLanguage);
// console.log(fred.catchPhrase);
// console.log(fred.demo('Redux'));
// console.log(fred.grade('JS IV'));
// console.log(fred.speak());

// console.log(elvis.name);
// console.log(elvis.age);
// console.log(elvis.location);
// console.log(elvis.gender);
// console.log(elvis.specialty);
// console.log(elvis.favLanguage);
// console.log(elvis.catchPhrase);
// console.log(elvis.demo('Rock n Roll'));
// console.log(elvis.grade('love'));
// console.log(elvis.speak());


// Students.
const bobo = new Student ({
	name: 'Bobo',
	location: 'Outer Space',
	age: 2024,
	gender: 'Tog',
	favSubjects: ['Warp Physics', 'Transporter Technology', 'Neuro Science'],
	previousBackground: 'Space Captain',
	className: 'CS 201,105'
});

const charlie = new Student ({
	name: 'Charlie',
	location: 'Choclate Factory',
	age: 12,
	gender: 'Male',
	favSubjects: ['Wonka Bars', 'Blueberry Girls', 'Oompa Loopas'],
	previousBackground: 'Poor kid',
	className: 'CB academy'
});

// console.log(bobo.name);
// console.log(bobo.location);
// console.log(bobo.age);
// console.log(bobo.gender);
// console.log(bobo.favSubjects);
// console.log(bobo.previousBackground);
// console.log(bobo.className);
// console.log(bobo.speak());
// console.log(bobo.PRAassignment('Java'));
// console.log(bobo.sprintChallenge('JS IV'));

// console.log(charlie.name);
// console.log(charlie.location);
// console.log(charlie.age);
// console.log(charlie.gender);
// console.log(charlie.favSubjects);
// console.log(charlie.previousBackground);
// console.log(charlie.className);
// console.log(charlie.speak());
// console.log(charlie.PRAassignment('Wonka Bars'));
// console.log(charlie.sprintChallenge('Boating in rivers of chocolate'));


// Project Managers.
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

const howie = new ProjectManager ({
	name: 'Howie',
	age: 26,
	location: 'LA',
	gender: 'Male',
	specialty: 'Stand Up',
	favLanguage: 'English',
	catchPhrase: "Welcome to the Howie duty show!",
	gradClassName: 'CS Never',
	favInstructor: 'Dave Leno'
});


// console.log(jibby.name);
// console.log(jibby.age);
// console.log(jibby.location);
// console.log(jibby.gender);
// console.log(jibby.specialty);
// console.log(jibby.favLanguage);
// console.log(jibby.catchPhrase);
// console.log(jibby.gradClassName);
// console.log(jibby.favInstructor);
// console.log(jibby.speak());
// console.log(jibby.demo('C#'));
// console.log(jibby.grade('Java'));
// console.log(jibby.standUp('CS 1Billion'));
// console.log(jibby.debugsCode('JavaScript'));

console.log(howie.name);
console.log(howie.age);
console.log(howie.location);
console.log(howie.gender);
console.log(howie.specialty);
console.log(howie.favLanguage);
console.log(howie.catchPhrase);
console.log(howie.gradClassName);
console.log(howie.favInstructor);
console.log(howie.speak());
console.log(howie.demo('stand up comedy'));
console.log(howie.grade('his show'));
console.log(howie.standUp('the audience'));
console.log(howie.debugsCode('his computer'));