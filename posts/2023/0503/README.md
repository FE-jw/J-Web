# **SmartCursor로 마우스 커서 커스텀하기**

[테스트 페이지 바로가기](https://fe-jw.github.io/J-Web/posts/2023/0503/test.html)

CSS의 cursor 속성을 이용하는 경우 구현의 한계가 있다.  
요소를 생성하여 더 멋지게 커스텀 해본 예제이다.  
JS로 체크해서 PC웹에서만 적용이 가능하다.

---

## CSS
```css
/* Smart Cursor Style */
.smart_cursor	{display:none;position:fixed;left:0;top:0;z-index:10000;pointer-events:none;}
.smart_cursor.enter	{display:block;}
.smart_cursor:before	{content:'';display:block;width:20px;height:20px;border-radius:50%;background-color:#d33;transform:translate(-50%, -50%);}	/* 디폴트 커서 */
.smart_cursor [data-smart-cursor]	{opacity:0;visibility:hidden;width:100px;height:100px;position:absolute;left:-50px;top:-50px;background-repeat:no-repeat;background-size:100% 100%;transform:scale(0.2);transition:all 0.2s;}
.smart_cursor [data-smart-cursor].on	{opacity:1;visibility:visible;transform:scale(1);}
.smart_cursor [data-smart-cursor='clickable']	{background-image:url('cursor_1.png');}
.smart_cursor [data-smart-cursor='anchor']	{background-image:url('cursor_2.png');}
```

## JS
```js
const SmartCursor = {
	cursor: {},
	enter: function(){
		SmartCursor.cursor.parent.classList.add('enter');
	},
	leave: function(){
		SmartCursor.cursor.parent.classList.remove('enter');
	},
	move: function(mouse){
		SmartCursor.cursor.parent.style.transform = 'translate(' + mouse.clientX + 'px, ' + mouse.clientY + 'px)';
	},
	toggle: function(cursorType){
		SmartCursor.cursor[cursorType].classList.toggle('on');
	},
	init: function(){
		const cursors = document.querySelectorAll('[data-cursor]');

		if(cursors.length){
			// 커서 생성
			SmartCursor.cursor.parent = document.createElement('div');
			SmartCursor.cursor.parent.classList.add('smart_cursor');

			// 커서 1: 클릭 가능
			SmartCursor.cursor.clickable = document.createElement('div');
			SmartCursor.cursor.clickable.dataset.smartCursor = 'clickable';

			// 커서 2: 링크 이동
			SmartCursor.cursor.anchor = document.createElement('div');
			SmartCursor.cursor.anchor.dataset.smartCursor = 'anchor';

			// 커서 요소 삽입
			SmartCursor.cursor.parent.append(
				SmartCursor.cursor.clickable,
				SmartCursor.cursor.anchor
			);
			document.body.append(SmartCursor.cursor.parent);

			cursors.forEach(function(ele){
				const cursorType = ele.dataset.cursor;

				ele.addEventListener('mouseenter', function(){
					SmartCursor.toggle(cursorType);
				});
				ele.addEventListener('mouseleave', function(){
					SmartCursor.toggle(cursorType);
				});
			});

			document.documentElement.addEventListener('mouseenter', SmartCursor.enter);
			document.documentElement.addEventListener('mouseleave', SmartCursor.leave);
			document.documentElement.addEventListener('mousemove', SmartCursor.move);
		}
	}
};
SmartCursor.init();
```