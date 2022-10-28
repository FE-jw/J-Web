# **drag and drop으로 파일 올리기**

[테스트 페이지 바로가기](https://fe-jw.github.io/J-Web/posts/2022/0925/drag_and_drop.html)

## **HTML**
```html
<div class="upload-wrap">
	<div class="file-zone">
		<button type="button" class="btn-upload">file upload</button>
		<input type="file" name="file-1">
	</div>
</div>
```

## **JS**
```js
//파일 업로드 영역 안에 drag 들어옴
document.querySelector('input[type=file]').addEventListener('dragenter', function(){
	console.log('dragenter');

	document.querySelector('.file-zone').classList.add('dragenter');
});

//파일 업로드 영역 밖으로 drag 나감
document.querySelector('input[type=file]').addEventListener('dragleave', function(){
	console.log('dragleave');
	
	document.querySelector('.file-zone').classList.remove('dragenter');
});

//파일 업로드 영역 안에서 파일 drop
document.querySelector('input[type=file]').addEventListener('drop', function(e){
	console.log('drop');
	console.log(e.dataTransfer.files[0]);	//evt 객체의 dataTransfer 속성 확인

	document.querySelector('.file-zone').classList.remove('dragenter');
	document.querySelector('.file-zone').classList.add('dropped');
	
	document.getElementById('info-1').innerHTML = e.dataTransfer.files[0].name;
	document.getElementById('info-2').innerHTML = e.dataTransfer.files[0].size;
	document.getElementById('info-3').innerHTML = e.dataTransfer.files[0].type;
});

//그냥 업로드
document.querySelector('input[type=file]').addEventListener('change', function(){
	document.getElementById('info-1').innerHTML = this.files[0].name;
	document.getElementById('info-2').innerHTML = this.files[0].size;
	document.getElementById('info-3').innerHTML = this.files[0].type;
});
```