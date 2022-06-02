# **background-image lazyload**

![](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/posts/220602/thumb.jpg)

웹 페이지 로딩 타임을 당길 수 있는 의외의 방법이 있어서 사용 중이다.<br><br>
보통 페이지가 로딩될 때 하단부의 배경 이미지들은 뷰포트에 노출되지 않는다.<br>
아래 참고 이미지에서 Section 2, 3의 배경 이미지는 처음에 불필요하다.<br>
이러한 **배경 이미지의 요청을 로딩 후로 미루는 것**이다.<br>
**[image lazyload](../220520)와 비슷한 개념**이다.
<br>

![](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/posts/220602/img_1.jpg)
<br>
방법은 굉장히 간단하다.<br>
**배경 이미지를 설정하지 않는 class를 추가하고 load 후에 제거하는 것**이다.<br>

```html
<!-- HTML -->
<div class="your-class bg-lazy">
```

```css
/* CSS */
.your-class	{backgorund-image:url('bg.jpg');}
.your-class.bg-lazy	{backgorund-image:none;}
```

```javascript
//JS
window.addEventListener('load', function(){
	//Background Image Lazyload
	var bg_lazys = document.querySelectorAll('.bg-lazy');

	for(var idx = 0; idx < bg_lazys.length; idx++){
		bg_lazys[idx].classList.remove('bg-lazy');
	}
});
```

for 문을 사용하여 페이지 내에 모든 bg-lazy class를 순서대로 제거한다.<br>
배경 이미지는 고용량인 경우도 많아 이 방법은 정말 유용하다.