# **Smart Layer Popup**

![SmartPop](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/posts/2022/1109/thumb.jpg)

## **SmartPop**
특정 버튼 클릭 시 레이어 팝업을 노출시켜주는 JS 플러그인이다.  
주요 특징은 다음과 같다.  
* 팝업 노출 후 포커스가 팝업으로 이동하여 정보 탐색 순서가 자연스럽다.
* ESC 키를 눌러 팝업을 닫을 수 있다.
* 닫기 버튼에서 실수로 Tab 키를 누르면 포커스가 다시 팝업으로 이동한다. 실수로 팝업을 닫지 못한 상황을 방지하고 키보드 접근성을 확보한다.
* 팝업을 닫으면 클릭했던 버튼으로 포커스가 다시 이동하여 다음 정보를 탐색할 수 있다.

---

### **How To Use**
1. `<a>` 태그 적용 시: 연결할 팝업의 ID 값을 href 속성에 설정
	```html
	<a href="#SMARTpop-1" class="your-class">...</a>
	```

2. `<button>` 태그 적용 시: 연결할 팝업의 ID 값을 data-smartpop 속성에 설정 (버튼 이외에 다른 태그도 가능)
	```html
	<button type="button" class="your-class" data-smartpop="#SMARTpop-2">...</button>
	```

### **Get Started**
1. JS
	```html
	<!-- 아래 CDN을 상용 서비스에 적용하지 마세요. 수정 시 서비스에 영향을 줄 수도 있습니다. -->
	<script src="https://cdn.jsdelivr.net/gh/fe-jw/SmartPop/SmartPop.min.js"></script>
	```

2. Initialize
	```js
	document.querySelectorAll('.your-class').SmartPop({
		popClose: 'your-close',	//닫기 버튼 class name (기본값은 btn-close)
		cssModeClass: 'on'	//팝업 활성화 class name (적지 않으면 style 속성으로 none/block 결정)
	});
	```

위 내용은 **Version 1** 기준으로 작성되었습니다.
* [GitHub 바로가기](https://github.com/FE-jw/SmartPop#readme)
* [Demo 페이지 바로가기](https://fe-jw.github.io/SmartPop)