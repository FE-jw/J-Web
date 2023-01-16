# **요소가 보이는지 판단하는 isVisible prototype**

[테스트 페이지 바로가기](https://fe-jw.github.io/J-Web/posts/2023/0116/isVisible.html)

요소가 뷰포트에 노출되어 있는 상태인지 확인하는 `HTMLElement`의 `prototype`이다.  
보이면 true, 안 보이면 false를 반환한다.

---

## **JS**
```js
HTMLElement.prototype.isVisible = function(){
	//요소가 보이면 true, 안 보이면 false 반환
	const winTop = window.scrollY;
	const winH = window.innerHeight;
	const thisTop = winTop + this.getBoundingClientRect().top;
	const thisBtm = winTop + this.getBoundingClientRect().bottom;

	return winTop + winH > thisTop && winTop < thisBtm;
};
```