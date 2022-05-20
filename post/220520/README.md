# **image lazyload**

![](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/post/220520/thumb.jpg)

## **image lazyload란?**
페이지를 로딩하는 시점에서 불필요한 **이미지 리소스의 요청을 미루는 기술**이다. 

## **왜 필요한가?**
초기 요청 수를 줄여 로딩 속도를 높이기 위함

## **적용 방법**
두 가지 방법을 정리했다.
보통 javascript를 이용한 방법이 많이 사용되고 있지만 HTML loading 속성을 이용하면 쉽게 구현이 가능하다.

### **1. Native lazyload**
```html
<!-- HTML -->
<img src="img/test.jpg" alt="" loading="lazy">
```
방법은 간단하다. img 태그의 loading 속성 값으로 "lazy"를 선언해주면 된다.<br>
참고로 선언할 수 있는 값은 아래 2가지가 있다.

|내용|설명|
|---|---|
|eager|리소스 즉시 로딩|
|lazy|일정 거리에 도달할 때까지 로딩 지연|

![caniuse.com](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/post/220520/img_1.jpg)
[caniuse에서 확인하기](https://caniuse.com/?search=loading)<br>
하지만 최신 버전만 지원하기 때문에 현업에서 도입하기엔 아직은 무리가 있어 보인다.<br>
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

	for(var idx = 0; idx < lazys.length; idx++){
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

## **테스트 페이지**
https://fe-jw.github.io/J-Web/post/220520/lazyload.html<br>
최상단 이미지를 제외한 9장의 이미지에 모두 적용했을 때 로딩 시간을 비교해보았다.<br>
대략 1/5로 로딩 속도가 줄어들었다.<br>
_(테스트 환경에 따라 결과값은 다를 수 있습니다.)_

||적용 전|적용 후|
|:---:|:------:|:---:|
|1|520ms|173ms|
|2|647ms|104ms|
|3|530ms|97ms|
|4|573ms|88ms|
|5|560ms|121ms|
|6|459ms|100ms|
|7|505ms|100ms|
|8|570ms|117ms|
|9|542ms|101ms|
|10|625ms|121ms|
|평균|553.1ms|112.2ms|