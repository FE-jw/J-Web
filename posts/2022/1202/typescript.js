"use strict";
let nums = [1, 2, 3];
nums.forEach(ele => {
    console.log(ele);
});
//Number
let cnt = 0;
//String
let txt = 'hello';
//txt = 1;	//에러 발생
//Boolean
let isDone = true;
//Any: 어떤 타입도 할당 가능하며, 생략하면 any 타입이 지정된다.
let myAny = 1;
myAny = 'any';
//Number Array
let numArr = [0, 1, 2];
//String Array
let txtArr = ['hello', 'world'];
//txtArr.push(1);	//문자열 배열인데 Number 타입을 push하면 에러 발생
//Boolean Array
let booArr = [false, false, true];
//Any Array
let anyArr = [1, 'hello', 2, 'world', { age: 20 }];
//tuple: 배열을 보다 특수한 형태로 사용할 수 있는 타입(지정된 형식에 따라 아이템 순서를 설정해야 한다)
let tupleArr = [1, 'hello'];
//tupleArr = ['world', 2];	// Number 타입이 먼저 와야 하므로 에러 발생
//enum: 여러 값들의 이름을 미리 정의하여 사용하는 열거형 타입(값을 설정할 수 있으며, 미설정 시 0부터 시작)
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Down); //1 출력
var Lang;
(function (Lang) {
    Lang["Korea"] = "ko";
    Lang["America"] = "en";
    Lang["China"] = "zh-hans";
})(Lang || (Lang = {}));
console.log(Lang.Korea); //'ko' 출력
