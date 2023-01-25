# **마우스 패럴렉스 효과**

[테스트 페이지 바로가기](https://fe-jw.github.io/J-Web/posts/2023/0125/test.html)

---
## **HTML**
```html
<div class="MP-box">
	<div class="obj object_1"></div>
	<div class="obj object_2"></div>
	<div class="obj object_3"></div>
	<div class="obj object_4"></div>
</div>
```

## **CSS**
```css
.obj	{pointer-events:none;}
.obj.mouseleave	{transition:transform 0.2s;}
```

## **JS**
```js
/**
 * MP는 'Mouse Parallax'의 줄임말
 * 뷰포트 너비 1024px 이상인 경우 적용한 예제
 */
const MP = {
	box: document.querySelector('.MP-box'),	// 마우스 패럴렉스를 적용할 박스
	objs: document.querySelectorAll('.MP-box .obj'),	// 움직일 요소들
	start: {},	// 마우스 진입 시 좌표 저장(진입 시의 값을 기준으로 얼마나 움직였는지 판단하기 위함)
	onEnter: (evt) => {
		// 마우스 진입 시 실행
		if(window.matchMedia('(min-width: 1024px)').matches){
			MP.start.x = evt.offsetX;
			MP.start.y = evt.offsetY;

			MP.objs.forEach(ele => {
				ele.classList.remove('mouseleave');
			});
		}
	},
	onMove: (evt) => {
		// 마우스 움직일 때 실행
		if(window.matchMedia('(min-width: 1024px)').matches){
			const value = {
				x: MP.start.x - evt.offsetX,
				y: MP.start.y - evt.offsetY
			};
	
			MP.objs[0].style.transform = `translate(${value.x / 10}%, ${value.y / 5}%)`;
			MP.objs[1].style.transform = `translate(${value.x / -5}%, ${value.y / -30}%)`;
			MP.objs[2].style.transform = `translate(${value.x / 3}%, ${value.y/ -10}%)`;
			MP.objs[3].style.transform = `translate(${value.x / -20}%, ${value.y / 20}%)`;
		}
	},
	onLeave: () => {
		// 마우스 나갈 때 실행
		if(window.matchMedia('(min-width: 1024px)').matches){
			MP.objs.forEach(ele => {
				ele.classList.add('mouseleave');
				ele.style.transform = '';
			});
		}
	}
};

MP.box.addEventListener('mouseenter', MP.onEnter);
MP.box.addEventListener('mousemove', MP.onMove);
MP.box.addEventListener('mouseleave', MP.onLeave);
```