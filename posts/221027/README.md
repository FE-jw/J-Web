# **Flexbox Layer Popup**

[테스트 페이지 바로가기](https://fe-jw.github.io/J-Web/posts/221027/test.html)

## **HTML**
```html
<div id="SMARTpop" class="smart-pop">
	<div class="pop-layer">
		<span class="pop-txt">팝업입니다.</span>
		<button type="button" class="btn-close">Close Popup</button>
	</div>
</div>
```

## **CSS**
```css
.smart-pop	{overflow-y:auto;display:none;justify-content:center;align-items:center;width:100%;height:100%;padding:20px;position:fixed;left:0;top:0;background-color:rgba(0, 0, 0, 0.8);box-sizing:border-box;}
.smart-pop.on	{display:flex;}
.smart-pop .pop-layer	{display:flex;justify-content:center;align-items:center;width:90%;max-width:600px;min-height:150px;margin:auto;padding:20px;position:relative;background-color:#fff;}
.smart-pop .btn-close {width:40px;height:40px;position:absolute;right:0;top:0;font:0/0 a;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='72' height='72'%3E%3Cpath d='m17.5 17.5 37 37m0-37-37 37' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' stroke-width='2'/%3E%3C/svg%3E") no-repeat;background-size:100% 100%;}
```