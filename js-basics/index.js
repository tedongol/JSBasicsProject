let person = {
  name: 'Mosh',
  age: 30,
};
person.name = 'john';
person['name'] = 'teena';
console.log(person.name);

function callThreeTimes(f) {
  f();
  f();
  f();
}
function cry() {
  console.log(" I'M SO SAD");
}
callThreeTimes(cry);
