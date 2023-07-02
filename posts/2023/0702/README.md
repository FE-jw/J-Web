# **CSS var()**

![](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/posts/2023/0702/thumb.jpg)

사용자 지정 속성(CSS 변수, 종속 변수)은 CSS 저작자가 정의하는 개체로, 문서 전반적으로 재사용할 임의의 값을 담는다.  
사용자 지정 속성은 전용 표기법을 사용해 정의하고, `var()` 함수를 사용해 접근할 수 있다.

---

## CSS
```css
:root {
  --main-bg-color:#000;
}

body {
  background-color:var(--main-bg-color);
}

/* 미디어 쿼리로 분기마다 다른 적용 */
@media all and (min-width: 768px){
	:root	{
		--main-bg-color:#fff;
	}
}
```

## JS
```js
document.querySelector('.selector').style.setProperty('--main-color', '#d33');
```