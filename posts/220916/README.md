# **임시 샘플 이미지(placeholder image) 추가하기**

![placeholder image](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/posts/220916/thumb.jpg)

## **[placeholder image](https://placeholder.com/)이란?**
임시로 이미지를 표시하는 서비스이다.  
이미지 크기와 형식, 배경색, 텍스트 등을 지정할 수 있다.

---

### **기본 사용법**
url 뒤에 /이미지사이즈 만 입력하면 끝이다.  
150px * 100px 사이즈의 이미지를 표시하는 예시이다.  
```html
<img src="https://via.placeholder.com/150x100" alt="">
```

![](https://via.placeholder.com/150x100)

너비와 높이 사이즈가 동일하다면 한 번만 적어도 된다.  
```html
<img src="https://via.placeholder.com/200" alt="">
```

![](https://via.placeholder.com/200)

### **포맷 설정**
선택 옵션이고 기본값은 gif이다.
* .gif
* .jpg
* .jpeg
* .png  
```html
<img src="https://via.placeholder.com/300.png" alt="">
```

![](https://via.placeholder.com/300.png)

### **텍스트 설정**
기본적으로 이미지의 사이즈가 텍스트로 노출되지만 변경이 가능하다.  
url 뒷부분에 파라미터 `?text=`를 전달하면 된다.  
```html
<img src="https://via.placeholder.com/200?text=Hello" alt="">
```

![](https://via.placeholder.com/200?text=Hello)

띄어쓰기는 +를 사용한다.  
```html
<img src="https://via.placeholder.com/320?text=Hello+World" alt="">
```

![](https://via.placeholder.com/320?text=Hello+World)

### **배경색과 텍스트 칼라 설정**
기본적으로 회색 계열로 노출되지만 변경이 가능하다.  
`/배경색/텍스트칼라` 순서로 적어주면 된다.  
배경색은 ff0, 텍스트 칼라는 000으로 표시하는 예시이다.  
```html
<img src="https://via.placeholder.com/320/ff0/000?text=Hello+World" alt="">
```

![](https://via.placeholder.com/320/ff0/000?text=Hello+World)