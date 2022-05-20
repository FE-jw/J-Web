# **lazyload**

## **lazyload란?**
페이지를 로딩하는 시점에서 불필요한 **리소스의 요청을 미루는 기술**이다. 

## **왜 필요한가?**
초기 요청 수를 줄여 로딩 속도를 높이고, 모바일에서 불필요한 데이터의 사용을 막을 수 있다.

## **적용 방법**
두 가지 방법을 정리했다.
보통 javascript를 이용한 방법이 많이 사용되고 있지만 HTML loading 속성을 이용하면 쉽게 구현이 가능하다.

### **1. Native lazyload**
```html
<!-- HTML -->
<img src="img/test.jpg" alt="" loading="lazy">
```
방법은 간단하다. img 태그의 loading 속성 값으로 "lazy"를 선언해주면 된다. 참고로 선언할 수 있는 값은 아래 2가지가 있다.

|내용|설명|
|---|---|
|eager|리소스 즉시 로딩|
|lazy|일정 거리에 도달할 때까지 로딩 지연|

<!-- ![caniuse.com](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/post/img_lazyload/img_1.jpg) -->
[caniuse에서 확인하기](https://caniuse.com/?search=loading)
하지만 최신 버전만 지원하기 때문에 현업에서 도입하기엔 아직은 무리가 있어 보인다.
그래서 결국 javascript를 사용하게 된다.

### **2. javascript**
```html
<!-- HTML -->
<img src="#" data-src="img/test.jpg" alt=""><!-- data-src에 임시적으로 이미지 경로를 저장 -->
```

```javascript
//javascript
//Call the funtion after window load
function imgLazyload(){
	var lazys = document.querySelectorAll('img[data-src]');

	for(let idx = 0; idx < lazys.length; idx++){
		lazys[idx].src = lazys[idx].dataset.src;
		delete lazys[idx].dataset.src;
	}
}
```
#### **코드 해설**
1. css 속성 선택자를 사용하여 data-src 속성을 가진 모든 img 태그를 변수 lazys에 담는다.
2. lazys.length 만큼 for문을 돌린다.
3. img 태그의 data-src 값을 src에 설정한다.
4. 코드 정리를 위해 dataset을 제거한다.