# **STA(Scroll Trigger Animation)**

<!-- ![](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/post/220520/thumb.jpg) -->

## **[STA](https://fe-jw.github.io/STA/)**
Vanilla JS와 css로 구성된 스크롤 트리거 애니메이션 플러그인이다.<br>스크롤 발생 시 요소의 일부분이 뷰포트에 노출됐을 때 트리거를 활성화시켜 애니메이션이 발생한다.<br>용량이 굉장히 가볍고 적용 방법이 쉽다는 것이 큰 장점이다.

## **원리**

```javascript
NodeList.prototype.STA = function(){
    ...
};
```
js 파일을 보면 NodeList에 STA 메소드를 추가한 것을 확인할 수 있다.<br>
[NodeList](https://developer.mozilla.org/ko/docs/Web/API/NodeList)는 docuement.querySelectorAll() 메소드에 의해 반환되는 노드의 콜렉션이며 유사배열이다.<br>
기본적으로 요소 높이의 80% _(높이 100px의 요소의 경우 80px이 노출됐을 때)_ 가 노출됐을 때 트리거가 활성화된다.<br>
트리거가 활성화되면 해당 요소에 class명 **sta-trigger**가 추가된다.<br>
css는 transition 속성을 이용해 애니메이션 효과를 담당한다.<br>
이렇게 역할이 분담되어 있어 css, js 두 파일을 모두 적용해야 플러그인을 제대로 이용할 수 있다.