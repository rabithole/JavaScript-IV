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
	constructor(attrs) {
		super(attrs);

		this.specialty = attrs.specialty;
		this.favLanguage = attrs.favLanguage;
		this.catchPhrase = attrs.catchPhrase;
	}

	demo() {
		return `Today we are learning about ${subject}`;
	}
	grade() {
		`${student.name} receives a perfect score on ${subject}`;
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

console.log(fred.catchPhrase)