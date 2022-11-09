# **Class**

![Class](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/posts/2022/1108/thumb.jpg)

## **Class란?**
> **_"Class는 객체를 생성하기 위한 템플릿입니다. 클래스는 데이터와 이를 조작하는 코드를 하나로 추상화합니다. 자바스크립트에서 클래스는 프로토타입을 이용해서 만들어졌지만 ES5의 클래스 의미와는 다른 문법과 의미를 가집니다. - MDN"_**  

---

### **Class 선언 & Constructor(생성자)**
constructor 메서드는 class 로 생성된 객체를 생성하고 초기화하기 위한 특수한 메서드이다.  
"constructor" 라는 이름을 가진 특수한 메서드는 클래스 안에 한 개만 존재할 수 있습니다.  
constructor는 부모 클래스의 constructor를 호출하기 위해 super 키워드를 사용할 수 있다.
```js
class Rectangle{
	constructor(width, height){
		this.width = width;
		this.height = height;
	}
}
```

### **Hoisting**
```js
const rectangle_1 = new Rectangle(200, 200);
```

### **메서드 정의**
```js
class Rectangle{
	constructor(width, height){
		this.width = width;
		this.height = height;
	}

	//Getter
	get area(){
		return this.calcArea();
	}

	//Method
	calcArea(){
		return this.width * this.height;
	}
}

const rectangle_1 = new Rectangle(200, 200);

console.log('rectangle_1.calcArea(): ', rectangle_1.calcArea());	//200 * 200 = 40000
console.log('rectangle_1.area: ', rectangle_1.area);	//200 * 200 = 40000
```

### **정적 메서드와 속성**
static 키워드는 클래스를 위한 정적(static) 메서드를 정의한다.  
정적 메서드는 클래스의 인스턴스화(instantiating) 없이 호출되며, 클래스의 인스턴스에서는 호출할 수 없다.  
정적 메서드는 어플리케이션(application)을 위한 유틸리티(utility) 함수를 생성하는 데 주로 사용된다.
```js
class Rectangle{
	constructor(width, height){
		this.width = width;
		this.height = height;
	}

	static firstName = 'Yes';
	static lastName = 'No';
	...
}

const rectangle_2 = new Rectangle(200, 200);
console.log(rectangle_2.firstName);	//undefined
console.log(rectangle_2.lastName);	//undefined
```