# **Git 명령어 정리**

![Git 명령어 정리](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/posts/220817/thumb.jpg)

## **git add**
로컬 저장소에서 발생한 변경 사항을 스테이징 영역(staging area)에 추가한다.  
스테이징 영역은 로컬 저장소와 원격 저장소 사이에 있는 개념이다.  
커밋할 준비가 된 파일들이 대기하는 곳이라고 볼 수 있다.
```
<!-- 현재 디렉토리의 모든 변경된 내용을 add 한다. -->
git add .

<!-- 작업 디렉토리의 모든 변경된 내용을 add 한다. -->
git add -A
```

## **git commit**
커밋은 변경 사항에 대해 버전이 생긴다는 것이다.  
하지만 아직 원격 저장소에 업로드를 한 것은 아니다.  
커밋 메시지를 작성해야 하며 -m 뒤에 따옴표로 감싸 작성한다.
```
git commit -m "commit test"
```

## **git push**
커밋한 변경 사항을 원격 저장소에 업로드한다.

## **git clone**
원격 저장소를 로컬에 복제한다.
```
git clone repository-url
```

## **git pull**
다운로드라고 이해하면 쉽다.  
원격 저장소의 최신 버전을 로컬 저장소에 적용한다.

## **git branch**
* git branch: 로컬 브랜치 목록 조회
* git branch [name]: 로컬 브랜치생성
	```
	git branch branch-1
	```
* git branch -d [name]: 로컬 브랜치 제거
	```
	git branch -d branch-1
	```
* git branch -r: 원격 브랜치 목록 조회
* git branch -a: 로컬, 원격 브랜치 목록 조회

## **git switch branch-name**
'branch-name'의 브랜치로 전환한다.
```
git switch branch-name
```

## **git merge branch-name**
'branch-name'의 브랜치를 통합한다.  
기준이 되는 브랜치에서 실행하며 보통 **main(master)** 브랜치에서 실행한다.  
충돌 사항이 발생한 경우 해결 뒤에 커밋이 가능하다.
```
git merge branch-name
```

## **git push origin branch-name**
'branch-name'의 원격 브랜치를 생성한다.  
먼저 로컬 브랜치를 생성하고 전환한 뒤에 실행해야 한다.
```
git push origin branch-name
```

## **git push origin -d branch-name**
'branch-name'의 원격 브랜치를 제거한다.
```
git push origin -d branch-name
```