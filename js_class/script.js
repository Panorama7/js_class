//Level 1
//Задани 1
let numStr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumEvens = (numStr) => {
  let sum = 0;
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] % 2 === 1) {
    sum = sum + numStr[i];
    }
  }
  return sum;
}
console.log(sumEvens(numStr));

//Задание 2
let num = [1, 0, 2, 4, 0, 0, 10];
let zero = Array.from(num.entries()).filter(i => i[1] === 0).map(i => i[0]);
console.log(zero); 

//Задание 3

let a = [1, 2, 3, 4, 5];
let b = [6, 7, 8, 9, 10];
const c = ([...a,...b].join(","));
console.log(c);

//Задание 4

let ab = [1, 2, 0, 4, 5, 0, 7, 0, 9, 10];
let ac = ab.filter(i => i != 0);
console.log(ac);

//Задание 5

const worker = {
  name: "Oleh",
  surname: "Troyanov",
  age: 23,
  edu: {
    university: "ZNTU",
    degree: "master",
  }
}
console.log(worker);
console.log(worker.edu);

// Задание 6

class worker1 {
  constructor(name, surname, age, edu, university, degree) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.edu = edu;
    this.university = university;
    this.degree = degree;
  }
   getWorkerEdu() {
      return console.log(this.name, this.surname, this.age, this.edu, this.university, this.degree);
  } 
}
let Oleh = new worker1("Oleh", 'Troyanov,', "20.", "My education:", "ZNTU,", "master.");
Oleh.getWorkerEdu();  

