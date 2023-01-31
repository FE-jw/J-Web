# **a 태그와 iframe 태그로 유튜브 영상 연결하기**

[테스트 페이지 바로가기](https://fe-jw.github.io/J-Web/posts/2023/0130/test.html)

a 태그의 `target`값과 iframe의 `name`값을 일치시킨다.  
iframe의 `src="about:blank"`는 빈 페이지를 띄울 때 사용한다.  
영상 주소는 `https://youtube.com/embed/동영상ID값`으로 설정해야 한다.

---

```html
<div class="btns">
	<a href="https://youtube.com/embed/1C_zuHf6lP4" target="vdo_frame">영상 1</a>
	<a href="https://youtube.com/embed/69uT90tEJdE" target="vdo_frame">영상 2</a>
	<a href="https://youtube.com/embed/9tXlqWldVVk" target="vdo_frame">영상 3</a>
</div>
<iframe src="about:blank" name="vdo_frame"></iframe>
```

```js
// 버튼을 클릭하여 종료할 때는 src 값을 수동으로 변경
document.querySelector('button').addEventListener('click', () => {
	document.querySelector('iframe').src = 'about:blank';
});
```