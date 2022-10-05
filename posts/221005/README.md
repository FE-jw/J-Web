# **앞면 동일한 카드 맞추기**

[테스트 페이지 바로가기](https://fe-jw.github.io/J-Web/posts/221005/card.html)

## **HTML**
```html
<button type="button" class="btn-start">시작하기!</button>
<div class="comment">3</div>
<ul class="card">
	<li class="open">
		<div class="flip">
			<div class="front">?</div>
			<div class="back">back</div>
		</div>
	</li>
	<li class="open">
		<div class="flip">
			<div class="front">?</div>
			<div class="back">back</div>
		</div>
	</li>
	<li class="open">
		<div class="flip">
			<div class="front">?</div>
			<div class="back">back</div>
		</div>
	</li>
	<li class="open">
		<div class="flip">
			<div class="front">?</div>
			<div class="back">back</div>
		</div>
	</li>
	<li class="open">
		<div class="flip">
			<div class="front">?</div>
			<div class="back">back</div>
		</div>
	</li>
	<li class="open">
		<div class="flip">
			<div class="front">?</div>
			<div class="back">back</div>
		</div>
	</li>
	<li class="open">
		<div class="flip">
			<div class="front">?</div>
			<div class="back">back</div>
		</div>
	</li>
	<li class="open">
		<div class="flip">
			<div class="front">?</div>
			<div class="back">back</div>
		</div>
	</li>
	<li class="open">
		<div class="flip">
			<div class="front">?</div>
			<div class="back">back</div>
		</div>
	</li>
	<li class="open">
		<div class="flip">
			<div class="front">?</div>
			<div class="back">back</div>
		</div>
	</li>
</ul>
```

## **JS**
```js
var openCard = [];
var valArr = [];
while (true) {
	var val = Math.floor(Math.random() * 10) + 1;

	if(!valArr.includes(val)){
		valArr.push(val);

		if(valArr.length === 10){
			break;
		}
	}
}

document.querySelector('.btn-start').addEventListener('click', function(){
	this.style.display = 'none';

	document.querySelector('.comment').classList.add('on');
	document.querySelector('.card').classList.add('on');

	var cntdown = 3;
	var cnt_timer = setInterval(function(){
		document.querySelector('.comment').innerHTML = --cntdown;

		if(cntdown === 1){
			clearInterval(cnt_timer);

			setTimeout(function(){
				document.querySelector('.comment').classList.remove('on');
				document.querySelectorAll('.card li.open').forEach(function(e){
					e.classList.remove('open');
				});
			}, 1000);
		}
	}, 1000);
});

document.querySelectorAll('.card li').forEach(function(e){
	var randomVal = valArr.shift();
	e.dataset.value = randomVal > 5 ? randomVal - 5 : randomVal;

	e.addEventListener('click', function(){
		if(!this.classList.contains('open')){
			openCard.push(this);
			this.classList.add('open');

			var cardWrap = document.querySelector('.card');
	
			if(openCard.length === 2){
				cardWrap.classList.add('checking');
	
				if(openCard[0].dataset.value != openCard[1].dataset.value){
					setTimeout(function(){
						openCard.forEach(function(e){
							e.classList.remove('open');
						});
					}, 500);
				}
	
				setTimeout(function(){
					openCard = [];
					cardWrap.classList.remove('checking');

					if(cardWrap.querySelectorAll('li.open').length === 10){
						console.log('complete');
						document.querySelector('.comment').classList.add('on');
						document.querySelector('.comment').innerHTML = '성공';
					}
				}, 500);
			}
		}
	});
});
```