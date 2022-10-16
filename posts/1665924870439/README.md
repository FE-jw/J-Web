# **Flexbox Layer Popup**

[테스트 페이지 바로가기](test.html)

```html
<div id="SMARTpop-1" class="smart-pop start">
	<div class="pop-layer">
		<span class="pop-txt">상단 노출 팝업</span>
		<button type="button" class="btn-close">Close Popup</button>
	</div>
</div>
<div id="SMARTpop-2" class="smart-pop center">
	<div class="pop-layer">
		<span class="pop-txt">중앙 노출 팝업</span>
		<button type="button" class="btn-close">Close Popup</button>
	</div>
</div>
<div id="SMARTpop-3" class="smart-pop end">
	<div class="pop-layer">
		<span class="pop-txt">하단 노출 팝업</span>
		<button type="button" class="btn-close">Close Popup</button>
	</div>
</div>
```

```css
*	{margin:0;padding:0;}
button	{border:none;background:none;cursor:pointer;}
.wrap button	{padding:10px;font-size:16px;font-weight:bold;color:#fff;background-color:#222;}

.smart-pop	{display:none;justify-content:center;width:100%;height:100%;padding:20px;position:fixed;left:0;top:0;background-color:rgba(0, 0, 0, 0.8);box-sizing:border-box;}
.smart-pop.on	{display:flex;}

/* 팝업 위치 설정 */
.smart-pop.start	{align-items:flex-start;}	
.smart-pop.center	{align-items:center;}	
.smart-pop.end	{align-items:flex-end;}

/* 팝업 스타일 */
.smart-pop .pop-layer	{display:flex;justify-content:center;align-items:center;width:90%;max-width:600px;min-height:150px;padding:20px;position:relative;background-color:#fff;}
.smart-pop.center .pop-layer	{margin:auto;}	/* 팝업이 길어지는 경우 대응 */
.smart-pop .btn-close {width:40px;height:40px;position:absolute;right:0;top:0;font:0/0 a;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='72' height='72'%3E%3Cpath d='m17.5 17.5 37 37m0-37-37 37' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' stroke-width='2'/%3E%3C/svg%3E") no-repeat;background-size:100% 100%;}
```