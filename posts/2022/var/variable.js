/*
function test_1(){
	var wo = 'bjw';
}

console.log(jw);
*/

/*
function test_2(){
	if(true){
		var wo = 'bjw';
	}
	console.log(wo);
}
test_2();
*/

/*
function test_3(){
	if(true){
		let wo = 'bjw';
	}
	console.log(wo);
}
test_3();
*/

/*
function test_4(){
	if(true){
		let wo = 'bjw';
		console.log(wo);
	}
}
test_4();
*/

/*
function test_5(){
	let txt = 'hello';
	if(true){
		let txt = 'world';
	}
	console.log(txt);
}
test_5();
*/

/*
function test_6(){
	var txt = 'hello';
	if(true){
		var txt = 'world';
	}
	console.log(txt);
}
test_6();
*/

/*
var a_myVar = 'var';
let a_myLet = 'let';

console.log(window);
*/

/*
var txt = '안녕하세요';

// 코드 수천 줄이 있다고 가정..

var txt = '반갑습니다';

console.log(txt);	// txt 변수가 중복 선언되어 최종적으로 '반갑습니다' 값을 가지게 된다.
*/

/*
let txt = '안녕하세요';

// 코드 수천, 수만 줄이 있다고 가정..

let txt = '반갑습니다';	// 동일한 이름의 변수 선언

console.log(txt);	// txt 변수가 중복 선언되어 최종적으로 '반갑습니다' 값을 가지게 된다.
*/

/*
console.log(num);
var num = 100;
*/

/*
console.log(num);
let num = 100;
*/

/*
const txt = 'hello';
txt = 'world';

const a;
*/

/*
const myObject = {
	name: 'bjw',
	age: 19
};
myObject.age = 20;
console.log(myObject);
*/

const myObject = Object.freeze({
	name: 'bjw',
	age: 19
});
myObject.age = 20;
console.log(myObject);