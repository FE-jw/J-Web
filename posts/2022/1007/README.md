# **JS로 이미지의 원본 사이즈 가져오기**

[테스트 페이지 바로가기](https://fe-jw.github.io/J-Web/posts/2022/1007/test.html)

이미지의 원본 사이즈가 필요할 때가 있다.  
이럴 땐 `img.width`와 같이 `width` 프로퍼티에 접근하게 되면 렌더링 된 이미지의 `width`를 가져오기 때문에 오류가 있다.  
이미지의 `naturalWidth`, `naturalHeight` 프로퍼티에 접근하여 값을 가져와야 한다.

## **JS**
```js
let img = document.querySelector('img');
let imgWidth = img.naturalWidth;
let imgHeight = img.naturalHeight;

console.log(imgWidth);
console.log(imgHeight);
```