# **TypeScript**

![TypeScript](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/posts/2022/1202/thumb.jpg)

## **[타입스크립트(TypeScript)란?](https://www.typescriptlang.org/)**
타입스크립트(TypeScript)는 자바스크립트의 슈퍼셋<sub class="type-1">(상위 확장)</sub>인 오픈소스 프로그래밍 언어이다.  
마이크로소프트에서 개발, 유지하고 있으며 엄격한 문법을 지원한다.  
타입스크립트는 자바스크립트 엔진을 사용하면서 커다란 애플리케이션을 개발할 수 있게 설계된 언어이다.  
자바스크립트의 슈퍼셋이기 때문에 자바스크립트로 작성된 프로그램이 타입스크립트 프로그램으로도 동작한다.  
타입스크립트에서 자신이 원하는 타입을 정의하고 프로그래밍을 하면 자바스크립트로 컴파일되어 실행할 수 있다.  

## **사용하는 이유**
* TS는 코드에 목적을 명시하고 목적에 맞지 않는 타입의 변수나 함수들에서 에러를 발생시켜 **버그를 사전에 제거**한다.  
프로젝트가 복잡하거나 규모가 크다면 TS의 장점이 부각될 것이다.  
(매개변수 1, 2와 return 값이 모두 Number 타입이라는 것을 설정한 예제이다. sum 함수 호출 시 string을 전달했더니 에러가 발생한다.)  
![](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/posts/2022/1202/img_2.png)
* **JS와 100% 호환**된다. JS가 사용되는 곳이라면 프론트엔드, 백엔드 상관없이 TS를 사용할 수 있다.  
리액트 공식 홈페이지에서도 TS 가이드를 제공하고 있으며, 뷰 3.0부터 TS를 공식 지원한다. 앵귤러 버전 2부터는 TS를 권장하고 있다.

## **설치 방법**
Node.js가 설치되어 있지 않다면 먼저 설치해 줘야 한다.
```
//글로벌 설치
npm install -g typescript

//특정 폴더 설치
npm install typescript
```

## **버전 확인**
```
//글로벌
tsc -v

//특정 폴더
npx tsc -v
```

## **환경 설정**
```
//글로벌
tsc --init

//특정 폴더
npx tsc --init
```
해당 명령어를 실행하면 아래 이미지처럼 `tsconfig.json`라는 파일이 생성된 것을 확인할 수 있다.  
컴파일 관련 설정을 할 수 있는 파일이다.  
![](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/posts/2022/1202/img_1.png)

## **컴파일 방법**
```
//글로벌
tsc

//특정 폴더
npx tsc
```
TS 파일은 바로 실행할 수 없는 파일이며 js 파일로 컴파일이 필요하다.  
위 방법으로 컴파일을 해보면 js 파일이 생성되는 것을 확인할 수 있다.  
`target` 값을 변경하여 문법 기준을 설정할 수 있다.
```ts
let nums: number[] = [1, 2, 3];
nums.forEach(ele => {
	console.log(ele);
});
```

위와 같이 화살표 함수를 사용한 경우 `tsconfig.json`에서 `"target": "ES5"`로 설정하면 아래와 같이 컴파일이 된다.  
ES5 문법에서는 화살표 함수 사용이 불가능하기 때문에 ES5 문법 기준에 맞게 자동으로 변경된 것이다.
```js
"use strict";
var nums = [1, 2, 3];
nums.forEach(function (ele) {
	console.log(ele);
});
```

`"target": "ES6"`로 설정하면 화살표 함수가 그대로 유지되는 것을 확인할 수 있다.
```js
"use strict";
let nums = [1, 2, 3];
nums.forEach(ele => {
	console.log(ele);
});
```

수정할 때마다 이렇게 실행해 줘야 하면 너무 불편하다.  
그래서 필요한 기능이 `-w` 옵션이다.  
수정 사항이 생기면 자동으로 컴파일을 해준다.
```
//글로벌
tsc -w

//특정 폴더
npx tsc -w
```

## **타입**
JS와 사용법이 동일하며 TS는 단지 타입을 지정할 뿐이다.

### **Number**
```ts
let cnt: number = 0;
```

### **String**
```ts
let txt: string = 'hello';
txt = 1;	//에러 발생
```

### **Boolean**
```ts
let isDone: boolean = true;
```

### **Any**
어떤 타입도 할당 가능하며, 생략하면 any 타입이 지정된다.
```ts
let myAny: any = 1;
myAny = 'any';
```

### **Number Array**
```ts
let numArr: number[] = [0, 1, 2];
```

### **String Array**
```ts
let txtArr: string[] = ['hello', 'world'];
txtArr.push(1);	//문자열 배열인데 Number 타입을 push하면 에러 발생
```

### **Boolean Array**
```ts
let booArr: boolean[] = [false, false, true];
```

### **Any Array**
```ts
let anyArr: any[] = [1, 'hello', 2, 'world', {age: 20}];
```

### **tuple**
배열을 보다 특수한 형태로 사용할 수 있는 타입이다. 지정된 형식에 따라 아이템 순서를 설정해야 한다.
```ts
let tupleArr: [number, string] = [1, 'hello'];
tupleArr = ['world', 2];	// Number 타입이 먼저 와야 하므로 에러 발생
```

### **enum**
여러 값들의 이름을 미리 정의하여 사용하는 열거형 타입이다. 값을 설정할 수 있으며, 미설정 시 0부터 시작한다.
```ts
enum Direction	{
	Up,
	Down,
	Left,
	Right
}
console.log(Direction.Up);	//0 출력
console.log(Direction.Down);	//1 출력

enum Lang	{
	Korea = 'ko',
	America = 'en',
	China = 'zh-hans'
}
console.log(Lang.Korea);	//'ko' 출력
```