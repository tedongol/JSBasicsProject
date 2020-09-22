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
//callThreeTimes(cry);

function repeatNtime(action, num) {
  for (let i = 0; i < num; i++) {
    action();
  }
}
repeatNtime(cry, 10);

function makeBetween(x, y) {
  return function (num) {
    if (num >= x && num <= y) {
      return true;
    }
    return false;
  };
}
const averageWeather = makeBetween(20, 40);
console.log(averageWeather(50));

const btn = document.querySelector('button');
btn.addEventListener('click', function () {
  alert('Go Away!!');
});
