/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday
	I placed the old code at the bottom and commented it out. 
	
2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject {
	constructor(attrs){
		this.createdAt = attrs.createdAt;
		this.name = attrs.name;
		this.dimensions = attrs.dimensions;
	}
	destroy() {
		return `${this.name} was removed from the game.`;
	}
}

class CharacterStats extends GameObject {
	constructor(attrs) {
		super(attrs);

		this.healthPoints = attrs.healthPoints;
	}

	takeDamage() {
		return `${this.name} took damage`;
	}
}

class Humanoid extends CharacterStats {
	constructor(attrsHum) {
		super(attrsHum);

		this.team = attrsHum.team;
		this.weapons = attrsHum.weapons;
		this.language = attrsHum.language;
	}

	greet() {
		return `${this.name} offers a greeting in ${this.language}`;
	}
}

const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  
// // Old code.
// function GameObject(attrs){
//   this.createdAt = attrs.createdAt;
//   this.name = attrs.name;
//   this.dimensions = attrs.dimensions;
// }
// GameObject.prototype.destroy = function(){
//   return `${this.name} was removed from the game.`; 
// }


// /////////////////////////////
// function CharacterStats(attrsChar){
//   GameObject.call(this, attrsChar);
//   this.healthPoints = attrsChar.healthPoints;
// }
// // Gives access to prototype methods. 
// CharacterStats.prototype = Object.create(GameObject.prototype);

// CharacterStats.prototype.takeDamage = function(name){
//   return `${this.name} took damage`;
// }


// // //////////////////////////////////////
// function Humanoid(attrsHum){
//   CharacterStats.call(this, attrsHum);
//   this.team = attrsHum.team;
//   this.weapons = attrsHum.weapons;
//   this.language = attrsHum.language;
// }
// Humanoid.prototype = Object.create(CharacterStats.prototype);

// Humanoid.prototype.greet = function(name, language){
//   return `${this.name} offers a greeting in ${this.language}`;
// }


//   const mage = new Humanoid({
//     createdAt: new Date(),
//     dimensions: {
//       length: 2,
//       width: 1,
//       height: 1,
//     },
//     healthPoints: 5,
//     name: 'Bruce',
//     team: 'Mage Guild',
//     weapons: [
//       'Staff of Shamalama',
//     ],
//     language: 'Common Tongue',
//   });
//   const swordsman = new Humanoid({
//     createdAt: new Date(),
//     dimensions: {
//       length: 2,
//       width: 2,
//       height: 2,
//     },
//     healthPoints: 15,
//     name: 'Sir Mustachio',
//     team: 'The Round Table',
//     weapons: [
//       'Giant Sword',
//       'Shield',
//     ],
//     language: 'Common Tongue',
//   });

//   const archer = new Humanoid({
//     createdAt: new Date(),
//     dimensions: {
//       length: 1,
//       width: 2,
//       height: 4,
//     },
//     healthPoints: 10,
//     name: 'Lilith',
//     team: 'Forest Kingdom',
//     weapons: [
//       'Bow',
//       'Dagger',
//     ],
//     language: 'Elvish',
//   });

//   console.log(mage.createdAt); // Today's date
//   console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
//   console.log(swordsman.healthPoints); // 15
//   console.log(mage.name); // Bruce
//   console.log(swordsman.team); // The Round Table
//   console.log(mage.weapons); // Staff of Shamalama
//   console.log(archer.language); // Elvish
//   console.log(archer.greet()); // Lilith offers a greeting in Elvish.
//   console.log(mage.takeDamage()); // Bruce took damage.
//   console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
