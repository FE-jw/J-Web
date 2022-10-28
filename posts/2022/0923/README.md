# **flexbox**

![flexbox](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/posts/2022/0923/thumb.jpg)

## **flexbox란?**
flexbox는 행과 열 형태로 자식 요소를 배치하기 위한 레이아웃 속성이다.  
[테스트 페이지 바로가기](https://fe-jw.github.io/J-Web/posts/2022/0923/flex.html)

---

### **기본 용어 정리**
* flex container: 정렬할 요소들을 감싸는 부모 요소
* flex item: flex container의 자식 요소(정렬할 요소)  

간단한 예제로 `<ul>` 안의 `<li>` 3개를 정렬해보는 예제이다.  
우선 아래와 같이 마크업 한다.
```html
<ul>
	<li>list 1</li>
	<li>list 2</li>
	<li>list 3</li>
</ul>
```

구분을 위해 `<li>` 요소에 배경색 지정 후 화면을 확인해보면 아래와 같다.  
![](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/posts/2022/0923/img_1.png)

정렬을 위해서 flex container에 display 속성 값을 지정한다.
```css
ul	{display:flex;}
```

처음엔 블록 요소의 특성상 단이 나뉘었지만 속성 값 추가 후 확인해보면 정렬된 것을 확인할 수 있다.  
![](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/posts/2022/0923/img_2.png)

### **flexbox 축의 개념**
* 주축(main axis): 왼쪽에서 오른쪽 방향으로 흐른다.
* 교차축(cross axis): 위에서 아래 방향으로 흐른다.

flex item의 흐름은 축에 따라 결정된다.  
축의 방향은 flex container에 flex-direction 속성으로 설정한다.  
주요 속성 값은 4가지가 있다.  

|속성|설명|
|---|---|
|row|기본값으로, 왼쪽으로 오른쪽 방향으로 정렬된다.|
|row-reverse|기본값과 동일하게 가로 정렬이지만 오른쪽에서 왼쪽으로 정렬된다.|
|column|위에서 아래 방향으로 정렬된다.|
|column-reverse|아래에서 위 방향으로 정렬된다.|

flex container에 높이와 배경색 추가 후 하나씩 확인해보면 다음과 같다.
```css
ul	{
	display:flex;
	height:300px;
	background-color:#333;
}
```

1) row  
![](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/posts/2022/0923/img_3.png)

2) row-reverse  
![](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/posts/2022/0923/img_4.png)

3) column  
![](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/posts/2022/0923/img_5.png)

4) column-reverse  
![](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/posts/2022/0923/img_6.png)

### **flex container 영역을 이탈하는 flex item 정렬하기**
우선 flex item의 flex 속성에 대한 이해가 필요하다.  
아래 코드와 같이 `<ul>`에는 **'flex-wrap'**, `<li>`에는 **'flex'** 속성을 추가한다.
```css
ul	{
	display:flex;
	height:300px;
	background-color:#333;
	flex-wrap:wrap;
}

li	{flex:300px;}
```

flex 값으로 300px을 설정했다.  
이는 {min-width:300px;}와 비슷하게 동작한다. (완벽하게 똑같지는 않다)  
즉 가로로 최대 100% 너비를 가지지만 300px 미만으로는 감소하지 않는다.  
때문에 브라우저 너비 900px 이상과 이하 사이즈에서 확인한 UI가 다르게 나타난다.

1) 브라우저 너비 900px  
![](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/posts/2022/0923/img_7.png)

2) 브라우저 너비 899px  
![](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/posts/2022/0923/img_8.png)

### **flex item의 비율 조절**
위 예제에 이어서 `<li>`에 flex 속성 값을 1로 수정한다.
```css
li	{flex:1;}
```

이런 경우 `<li>`에 각각 1이라는 값을 설정하게 되는데, 이는 마진과 패딩을 제외하고 동등한 영역을 가지게 된다.  
너비가 900px인 경우 각각 300px의 너비를 가지게 된다.   
`<li>`가 3개이니까 1+1+1=3이고, 1/3씩 영역을 가지게 되는 것으로 이해하면 쉽다.  
![](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/posts/2022/0923/img_9.png)

그렇다면 두 번째 `<li>`에 flex 속성을 2로 설정하면 어떻게 될까?
```css
li:nth-child(2)	{
	flex:2;
}
```

이 경우 1+2+1=4이고, 2/4 영역을 가지게 되므로 450px의 영역을 가지게 될 것이다.  
1번과 3번은 1/4 영역을 가지게 된다.  
![](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/posts/2022/0923/img_10.png)

### **flex item의 최소 크기 값 지정**
상단의 css를 지워두고 아래와 같이 수정한다.
```css
li	{flex:1 300px;}
```

이 경우, 최소 너비 300px을 가지게 되고 1/3 영역을 가지게 된다.
![](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/posts/2022/0923/img_11.png)

만약 브라우저의 너비가 900px 미만이라면 어떻게 될까? 800px에서 확인해보면 아래와 같다.  
같은 행(row)에서 비율을 계산하면 된다.  
flex 값이 1이기 때문에 1+1=2이므로 1번과 2번은 1/2 영역을 가지게 되고 최소 300px의 너비를 갖는다.  
3번은 다음 행으로 구분됐기 때문에 1/1, 즉 100% 영역을 가지게 되고 최소 300px의 너비를 갖는다.  
![](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/posts/2022/0923/img_12.png)

### **flex item의 수평 및 수직 정렬**
flex item을 수평, 수직 정렬하기 위해서는 justify-content와 align-items 두 속성이 중요하다.
```html
<ul>
	<li>list 1</li>
	<li>list 2</li>
	<li>list 3</li>
</ul>
```
```css
ul	{
	display:flex;
	height:200px;
	background-color:#333;
}
```

#### **justify-content(수평 정렬)**
justify-content은 flex item이 기본축에서 어디에 위치할 것인지를 제어하며 flex container 요소에 추가하는 속성이다.  

|속성|설명|
|---|---|
|flex-start|기본값으로, 모든 항목이 기본축의 시작 위치에 놓인다.|
|center|모든 항목이 기본축의 중앙 위치에 놓인다.|
|flex-end|모든 항목이 기본축의 마지막 위치에 놓인다.|  

이 외에도 space-around, space-between, space-evenly 가 있다.  
각각 화면을 확인해보면 아래와 같다.

1) flex-start
![](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/posts/2022/0923/img_13.png)

2) center
![](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/posts/2022/0923/img_14.png)

3) flex-end
![](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/posts/2022/0923/img_15.png)

#### **align-items(수직 정렬)**
align-items는 flex item이 교차축에서 어디에 위치할 것인지를 제어하며 flex container 요소에 추가하는 속성이다.  

|속성|설명|
|---|---|
|stretch|기본값으로, flex item이 부모 요소의 높이를 모두 채우게 된다.|
|flex-start|모든 항목이 교차축의 시작 위치에 놓인다.|
|center|모든 항목이 교차축의 중앙 위치에 놓인다.|
|flex-end|모든 항목이 교차축의 마지막 위치에 놓인다.|  

상단의 참고 이미지에서 list들이 모두 높이 100%를 가지고 있는데 stretch가 기본값이기 때문이다.  
나머지 속성들을 하나하나 확인해보면 아래와 같다.  

1) flex-start
![](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/posts/2022/0923/img_16.png)

2) center
![](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/posts/2022/0923/img_17.png)

3) flex-end
![](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/posts/2022/0923/img_18.png)

위 속성들을 활용하여 여러 형태의 레이아웃 구현이 가능하다.  
[테스트 페이지 바로가기](https://fe-jw.github.io/J-Web/posts/2022/0923/flex.html)