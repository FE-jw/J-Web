# **Swiper 센터 슬라이드 크기 키우기**

[테스트 페이지 바로가기](swiper.html)

기본적으로 transform scale로 센터 슬라이드를 확대할 경우 좌우 간격이 좁아지게 된다.  
swiper-slide 자식 요소의 width, height를 확대하여 해결한 예제이다.

---

## **CSS**
```css
/* 스와이퍼 설정 */
.mySwiper	{width:100%;height:600px;background-color:lightyellow;}
.mySwiper:after	{content:'';width:150px;height:100%;padding-top:50px;position:absolute;left:50%;top:0;font-size:20px;font-weight:bold;color:#fff;text-align:center;background-color:rgba(255, 0, 0, 0.3);box-sizing:border-box;transform:translateX(-50%);z-index:10;}
.mySwiper .swiper-slide {display:flex;align-items:center;transform:translateX(-20px);}/* 늘어나는 만큼의 절반을 translateX에 음수로 설정 */
.mySwiper .swiper-slide img {min-width:100%;max-height:100%;transition:all 0.3s;}
.mySwiper .swiper-slide.portrait	{width:200px;}
.mySwiper .swiper-slide.landscape	{width:300px;}
.mySwiper .swiper-slide-active img	{min-width:calc(100% + 40px);}/* 늘어나는 만큼 너비 추가 */
.mySwiper .swiper-slide-active ~ .swiper-slide img	{transform:translateX(40px);}/* 늘어나는 만큼 translateX 설정 */
.mySwiper .swiper-button-next	{padding:10px;right:20px;background-color:#fff;z-index:20;}
.mySwiper .swiper-button-prev	{padding:10px;left:20px;background-color:#fff;z-index:20;}
```

## **JS**
```js
window.addEventListener('load', function(){
	//가로형, 세로형 이미지 판단
	var slideImgs = document.querySelectorAll('.mySwiper .swiper-slide img');
	for(var idx = 0; idx < slideImgs.length; idx++){
		slideImgs[idx].naturalWidth > slideImgs[idx].naturalHeight ? slideImgs[idx].parentElement.classList.add('landscape') : slideImgs[idx].parentElement.classList.add('portrait');
	}

	//Swiper 호출
	var swiper = new Swiper('.mySwiper', {
		slidesPerView: 'auto',
		centeredSlides: true,
		spaceBetween: 20,
		loop: true,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true
		},
		speed: 500,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		breakpoints: {
			'768': {
				spaceBetween: 30
			},
			'1280': {
				spaceBetween: 60
			}
		}
	});
});
```