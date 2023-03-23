let firstName = "kang";

console.log("hello " + firstName);
console.log(`hello ${firstName}`);

const person = {
  name: "kang",
  age: 20,
};

console.log(person.name);

let name = "kang";
let age = 20;

const person2 = {
  name: name,
  age: age,
};

console.log(person2.name);

const person3 = {
  name,
  age,
};

const world = {
  number: 23,
  person,
};

console.log(world.person);
console.log(world.person.name);

//구조분해문법

const student = {
  school: "dasan",
  level: 2,
  name: "kang",
  test: "test",
};

const s1 = student.school;
const s2 = student.level;

console.log(s1, s2);

const { school, level } = student;

console.log(school, level);

function test(person) {
  console.log(
    `이 학생의 학교는 ${person.school} 이고, level 은 ${person.level} 입니다.`
  );
}

test(student);

function test({ school, level }) {
  console.log(`이 학생의 학교는 ${school} 이고, level 은 ${level} 입니다.`);
}

test(student);
