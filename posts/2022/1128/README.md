# **Smart Tab**

![SmartTab](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/posts/2022/1128/thumb.jpg)

## **SmartTab**
탭 버튼 클릭 시 연결된 콘텐츠를 노출시켜주는 플러그인이다.  
주요 특징은 다음과 같다.  
* 적용 방법이 쉽다.
* role, aria 속성 등을 지원하여 웹 접근성을 높여준다.
* 탭 버튼 클릭 시 연결된 콘텐츠로 포커스가 이동하여 키보드 접근성을 보장한다.

---

### **Get Started**
1. Add Markup: 아래와 같은 형태로 마크업을 추가한다. `<a>`태그의 `href` 속성값과 연결할 콘텐츠의 `id`값을 일치시킨다.
	```html
	<ul class="your-class-1">
		<li><a href="#ST-1">Tab 1</a></li>
		<li><a href="#ST-2">Tab 2</a></li>
		<li><a href="#ST-3">Tab 3</a></li>
	</ul>
	<div id="ST-1" class="your-class-2">
		Tab 1
	</div>
	<div id="ST-2" class="your-class-2">
		Tab 2
	</div>
	<div id="ST-3" class="your-class-2">
		Tab 3
	</div>
	```

2. Add CSS: show, hide에 해당하는 CSS 속성을 추가한다. class 명은 JS에서 커스텀이 가능하다.
	```css
	.your-class-2	{display:none;}
	.your-class-2.active	{display:block;}
	```

3. Add JS
	```html
	<!-- 아래 CDN을 상용 서비스에 적용하지 마세요. 수정 시 서비스에 영향을 줄 수도 있습니다. -->
	<script src="https://cdn.jsdelivr.net/gh/fe-jw/SmartTab/SmartTab.min.js"></script>
	```

4. Initialize
	```js
	const myTab = new SmartTab({
		//필수 옵션
		btnEle: '.your-class-1',
		contentEle: '.your-class-2',
		cssModeClass: 'active',

		//선택 옵션
		firstTabIndex: 0,
		tabOutline: false
	});
	```

### **SmartTab API**

|name|type|required|description|
|---|---|:---:|---|
|btnEle|string|O|탭 버튼 전체를 감싸는 요소의 class 명|
|contentEle|string|O|탭 콘텐츠의 공통 class 명|
|cssModeClass|string|O|탭 콘텐츠 활성화 class 명|
|firstTabIndex|number||최초로 노출할 콘텐츠의 index(기본값은 0)|
|tabOutline|boolean||탭 콘텐츠의 outline 속성을 유지할 것인지 결정(기본값은 false)|

위 내용은 **Version 1.0.2** 기준으로 작성되었습니다.
* [GitHub 바로가기](https://github.com/FE-jw/SmartTab#readme)
* [Demo 페이지 바로가기](https://fe-jw.github.io/SmartTab)