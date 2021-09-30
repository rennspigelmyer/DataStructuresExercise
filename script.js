// 1a 
const jedi = [];
console.log(jedi);

// 1b 
jedi[0] = "Luke";
console.log(jedi);

// 1c
const arrayNum1 = jedi.push("Obi-Wan Kenobi");
console.log(arrayNum1);
console.log(jedi);

// 1d 
const arrayNum2 = jedi.unshift("Yoda");
console.log(arrayNum2);
console.log(jedi);

// 1e
console.log(jedi[1]); // "Luke"

// 1f
jedi.pop();
// jedi.splice(2, 1)
console.log(jedi); // [ 'Yoda', 'Luke' ]

// 1g
jedi.shift();
// jedi.splice(0, 1);
console.log(jedi); // [ 'Luke' ]

// 2a
const sithLords = [
  "Darth Vader",
  "Darth Sidious",
  "Darth Maul"
];

// 2b
const imperialOfficers = [
  "Grand Moff Tarkin",
  "Orson Krennic"
];

// 2c
const starWarsVillains = sithLords.concat(imperialOfficers);
console.log(starWarsVillains);

// 2d
console.log(starWarsVillains.slice(0, 2)); //  ['Darth Vader', 'Darth Sidious' ]
// console.log(sithLords.slice(0, 2));

// 3a
const droids = {
  astromech: "R2-D2",
  protocol: "C-3PO",
  assassin: "IG-88"
};
console.log(droids);

// 3b
console.log(droids["astromech"]); // R2-D2

// 3c
console.log(droids.protocol); // C-3PO

// 3d
droids.assassin = "IG-11";
// droids["assassin"] = "IG-11";
console.log(droids);
