//변수
//var   --  초기부터 사용  ES6 이후에는 사용을 권장하지 않는다.
//let   --  ES6 이후 부터 이것을 사용할 것을 권장

//var --  중복선언가능, 호이스팅 됨. 스코프 (함수)
console.log(v);
test();
add();

var v = "test";

var v = 100;

function test(add) {
  if (true) {
    var value = 100;
  }
  console.log(value);
  return add;
}

test();

let add = function (a, b) {
  return a + b;
};

//let   -- 중복선언 불가능, 호이스팅 안됨.  스코프(블록)
let i = "test";

// let i = 100;

function letfuncTest() {
  if (true) {
    let letValue = "test";
  }

  console.log(letValue);
}
letfuncTest();

function test(add) {
  if (true) {
    var value = 100;
  }
  console.log(value + 200);
  return add;
}

// const  --  상수
