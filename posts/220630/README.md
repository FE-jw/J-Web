# **Visual Studio Code에서 SCSS 셋팅하기**

![](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/posts/220630/thumb.jpg)

Visual Studio Code에서  **SCSS compiler**를 적용하기 위해 테스트를 진행했다.  
extension은 Live Sass Compiler와 Easy Sass를 비교했고, 최종적으로 **Live Sass Compiler**를 선택했다.

## [**Live Sass Compiler**](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass)
* css format
	* expanded
		* 계층 구조로 정리됨
			```css
			.selector	{
				width:100px;
				height:100px;
			}
			```
	* compressed
		* min 버전처럼 공백을 모두 제거함
		* @charset이 제거되지만 인코딩 문제 없도록 자동으로 변경([dart-sass 참고](https://github.com/sass/dart-sass/issues/1387), [개발자 답변](https://github.com/glenn2223/vscode-live-sass-compiler/issues/179))
			```css
			/* 컴파일 전 */
			.selector:after	{content:"\4F60\597D";}

			/* 컴파일 후 */
			.selector:after	{content:"你好";}
			```
* 설정(settings.json)
	```javascript
	"liveSassCompile.settings.generateMap": false,	//css map파일 생성
	"liveSassCompile.settings.autoprefix": false,	//벤더프리픽스
	"liveSassCompile.settings.compileOnWatch": false,	//Watch Sass 실행 시 모든 .scss 컴파일
	"liveSassCompile.settings.formats": [	//포맷 설정(복수 설정 가능)
		{
			"format": "expanded",
			"extensionName": ".css",
			"savePath": null
		},
		{
			"format": "compressed",
			"extensionName": ".min.css",
			"savePath": null
		}
	],
	"liveSassCompile.settings.excludeList": [	//컴파일 제외 파일
		"/**/node_modules/**",
		"/.vscode/**"
	]
	```

##  **자주 쓸만한 SCSS 기능 정리**

```scss
//rgba
.test_1	{color:rgba(0, 0, 0, 0.5);}
.test_2	{color:rgba(#000, 0.5);}	//매개변수 2개(#16 진수 색상 코드, opacity)로 가능

//연산
.test_3	{line-height:calc(26 / 20);}	//line-height:1.3;
.test_4	{width:percentage(480 / 960);}	//width:50%;

//변수 사용
$width: 960;
$main_color: #d33;
.test_5	{
	width:percentage(300 / $width);	//width:31.25%;
	background-color:$main_color;	//background-color:#d33;
}

//string 삽입하는 경우 #{$변수명}
$path: 'test';
.test_6	{background-image:url("#{$path}/img.png");}	//background-image:url("test/img.png");

//조건문
$i: 10;
@if($i == 10){
	//참인 경우 실행
	.test_7	{width:100px;}
}
```

## **mixin과 function**
* mixin: 스타일 묶음을 반환
```scss
@mixin my-mixin($w, $h){
	width: $w;
	height: $h;
}

.test_mixin	{@include my-mixin(100px, 200px);}

//컴파일 후
.test_mixin	{
	width:100px;
	height:100px;
}
```

* function: 하나의 값을 반환
```scss
@function my-func($num1, $num2){
	@return percentage($num1 / $num2);
}

.test_func	{width:my-func(100, 200);}

//컴파일 후
.test_func	{width:50%;}
```