# **let과 const를 써야하는 이유**

![](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/posts/2022/1216/thumb.jpg)

let과 const는 2015년 ES6에서 탄생한 문법이다.  
이전에는 모두 var를 사용했지만 문제점들이 있었고 이를 보완하기 위해 만들어진 문법이다.

---

## **var와 let**
변수를 선언할 때 사용하는 var와 let은 비슷하지만 크게 세 가지 차이점이 있다.

### **1. 스코프(scope)**
var 키워드로 선언한 변수는 function scope, let 키워드로 선언한 변수는 block scope를 가지게 된다.  
scope(범위)는 아래와 같이 크게 세 가지가 있다.
1. function scope: 함수 내에서만 접근 가능
2. block scope: 블록 내에서만 접근 가능
3. global scope: 전체 접근 가능

var 키워드의 변수는 function scope를 가지기 때문에 test_1 함수 외부에서는 변수 wo에 접근이 불가능하다.
```js
function test_1(){
	var wo = 'bjw';
}
console.log(wo);	// 참조 에러 발생
```

아래와 같이 if 블록 내부의 변수에 접근하더라도 에러를 발생시키지 않는다.
```js
function test_2(){
	if(true){
		var wo = 'bjw';
	}
	console.log(wo);	// 'bjw' 출력
}
test_2();
```

let 키워드의 변수는 block scope를 가지게 때문에 if 블록 외부에서 wo에 접근이 불가능하다.
```js
function test_3(){
	if(true){
		let wo = 'bjw';
	}
	console.log(wo); // 참조 에러 발생
}
test_3();
```

if 블록 안에서 출력하면 에러를 발생시키지 않는다.
```js
function test_4(){
	if(true){
		let wo = 'bjw';
		console.log(wo);	// 'bjw' 출력
	}
}
test_4();
```

아래와 같이 let 키워드의 txt 변수에 'hello' string을 할당한 후 if 블록 안에서 'world' string을 할당한 경우에는 'hello'를 출력하게 된다.  
'world'를 할당한 구문은 if 블록 내에서만 유효하기 때문이다.
```js
function test_5(){
	let txt = 'hello';
	if(true){
		let txt = 'world';
	}
	console.log(txt);	// 'hello' 출력
}
test_5();
```

위와 똑같은 예제를 var 키워드로 변경하게 되면 'world'를 출력하게 된다.  
'world'를 할당한 구문이 덮어씌우게 된다. var 키워드는 function scope를 가지기 때문이다.
```js
function test_6(){
	var txt = 'hello';
	if(true){
		var txt = 'world';
	}
	console.log(txt);
}
test_6();
```

아래와 같이 global 변수로 선언된 2개의 변수가 있는 경우 브라우저의 전역 객체(window)의 속성을 확인해 보면 var 키워드로 선언된 변수만 속성으로 등록된 것을 확인할 수 있다.  
프로젝트 규모가 커지는 경우, 협업을 하는 경우, 외부 라이브러리를 사용하는 경우 등이라면 window 객체는 단 하나뿐이기 때문에 건드리지 않는 것이 안전하다.
```js
var a_myVar = 'var';
let a_myLet = 'let';
console.log(window);
```

![](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/posts/2022/1216/img_1.jpg)

### **2. 중복 선언(variable redeclaration)**
var 키워드는 중복 선언이 가능하다.  
프로젝트가 커져 변수 선언이 많아지거나 협업 시 문제가 될 수 있다.
```js
var txt = '안녕하세요';

/*
	코드 수천, 수만 줄이 있다고 가정..
*/

var txt = '반갑습니다';	// 동일한 이름의 변수 선언 가능

console.log(txt);	// '반갑습니다' 출력
```

let 키워드를 사용하여 중복 선언하는 경우는 문법 에러를 발생시킨다.  
```js
let txt = '안녕하세요';

/*
	코드 수천, 수만 줄이 있다고 가정..
*/

let txt = '반갑습니다';	// 동일한 이름의 변수 선언 불가능
```

### **3. 호이스팅(hoisting)**
변수 호이스팅이란 변수의 선언과 변수의 초기화를 분리해서 변수의 선언 부분만 프로그램 맨 위로 끌어올려 주는 것을 의미한다.  
프로그램이 실행되기 이전에 JavaScript에게 사용할 변수를 미리 알려주는 것이다.
```js
console.log(num);	// undefined
var num = 100;
```

위 코드는 에러를 발생시키지 않고 'undefined'를 출력하며 아래 코드와 같은 원리로 작동된다.
```js
var num;
console.log(num);
num = 100;
```

var 키워드의 경우 호이스팅이 될 시 'undefined'로 자동 초기화된다.  
아직 선언되지 않은 변수에 접근하는 것은 의미가 없는 일이며, 프로그래밍 과정에서 해서는 안 될 일이지만 var 키워드는 에러를 발생시키진 않는다.  
  
let 키워드로 선언하는 경우에도 호이스팅은 되지만 'undefined'로 초기화하지 않기 때문에 참조 에러를 발생시킨다.  
let 키워드로 선언하는 경우 변수의 선언과 초기화 사이의 과정을 TDZ(Temporal Dead Zone, 일시적 사각지대)라고 한다.  
JavaScript는 일시적 사각지대의 변수 접근을 허용하지 않는다.
```js
console.log(num);	// 참조 에러 발생
let num = 100;
```

## **const**
let 키워드와 동일하게 block scope, 중복 선언 불가, 선언문 이전 접근 불가의 특징이 있다.  
다른 점은 변수가 아니라 **상수를 선언할 때 사용한다는 것**이다.  
즉, 재할당이 안 되기 때문에 선언을 했으면 초기화도 같이 해야 한다.  
아래와 같이 선언만 하는 경우 에러를 발생시킨다.
```js
const a;
```

하지만 Number, String 등의 원시 타입이 아닌 **객체 타입의 경우 내부 속성값을 변경하는 것은 가능**하다.  
새로운 객체를 할당하는 것이 아니라 이미 가지고 있던 객체의 내부 속성을 변경하는 것이기 때문이다.
```js
const myObject = {
	name: 'bjw',
	age: 19
};
myObject.age = 20;
console.log(myObject);	// {name: 'bjw', age: 20}
```

속성값을 변경하는 것도 막아야 한다면 Object 객체의 freeze 함수를 이용하면 된다.
```js
const myObject = Object.freeze({
	name: 'bjw',
	age: 19
});
myObject.age = 20;
console.log(myObject);	// {name: 'bjw', age: 19}
```