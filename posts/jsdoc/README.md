# **JSDoc**

![JSDoc](thumb.jpg)

## **[JSDoc](https://jsdoc.app/)이란?**
자바스크립트 소스 코드 파일들에 주해를 달기 위해 사용하는 마크업 언어이다.  
자바스크립트에 타입 힌트를 제공할 수 있다. JSDoc 주석은 `/** ... */` 사이에 기술한다. 

---

### @author
author은 항목의 작성자를 나타낸다. 이름 뒤에 꺾쇠를 넣고 이메일을 추가한다.
```js
/**
 * @author Brad Pitt <brad@example.com>
 */
function MyClass() {}
```

### @param
매개변수의 이름과 타입, 설명 등을 제공한다.  
```js
/**
 * @param {string} somebody - Somebody's name.
 */
function sayHello(somebody) {
    alert('Hello ' + somebody);
}
```
매개변수 somebody의 타입은 string이며, 'Somebody's name.'의 추가 설명을 제공하는 예제이다.

### @todo
말 그대로 해야할 작업을 나타낸다.
```js
/**
 * @todo Write the documentation.
 * @todo Implement this function.
 */
function foo() {
    // write me
}
```

### @version
문서의 버전을 나타낸다.
```js
/**
 * @version 1.2.3
 */
function func(a, b) {
    return b / a;
}
```