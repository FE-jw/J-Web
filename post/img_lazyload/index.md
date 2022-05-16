# **lazyload**

## lazyload란?
페이지를 로딩하는 시점에서 불필요한 **리소스의 요청을 미루는 기술**이다. 

## 왜 필요한가?
초기 요청 수를 줄여 로딩 속도를 높이고, 모바일에서 불필요한 데이터의 사용을 막을 수 있다.

## 적용 방법
두 가지 방법을 정리했다.
보통 javascript를 이용한 방법이 많이 사용되고 있지만 HTML loading 속성을 이용하면 쉽게 구현이 가능하다.

### 1. Native lazyload
```html
<!-- HTML -->
<img src="#" alt="" loading="lazy">
```
방법은 간단하다. loading 속성값으로 "lazy"를 선언해주면 된다. 참고로 선언할 수 있는 값은 아래 2가지가 있다.

|내용|설명|
|---|---|
|eager|리소스 즉시 로딩|
|lazy|일정 거리에 도달할 때까지 로딩 지연|

![](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/post/img_lazyload/img_1.jpg)
하지만 최신 버전만 지원하기 때문에 현업에서 도입하기엔 아직은 한계가 있어 보인다.
그래서 결국 두 번째 방법을 사용하게 된다.

### 2. javascript
```html
<!-- HTML -->
<img src="#" data-src="img/test.jpg" alt=""><!-- src dataset에 임시적으로 이미지 경로를 저장 -->
```

```javascript
//javascript
```