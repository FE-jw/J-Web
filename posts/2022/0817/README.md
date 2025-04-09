# **Git 명령어 정리**

![Git 명령어 정리](https://cdn.jsdelivr.net/gh/fe-jw/J-Web/posts/2022/0817/thumb.jpg)

## **git init**
로컬에 Git 저장소를 생성한다.  
생성할 경로의 폴더로 이동한 뒤 아래와 같이 입력한다.
```
git init
```

## **git remote**
원격저장소를 추가한다.
```
git remote add origin [저장소 이름]
```

## **git add**
로컬 저장소에서 발생한 변경 사항을 스테이징 영역(staging area)에 추가한다.  
스테이징 영역은 로컬 저장소와 원격 저장소 사이에 있는 개념이다.  
커밋할 준비가 된 파일들이 대기하는 곳이라고 볼 수 있다.
```
<!-- 현재 디렉토리에서 변경된 모든 내용을 add 한다. -->
git add .
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
* git branch [branch name]: 로컬 브랜치 생성
	```
	git branch branch-1
	```
* git branch -d [branch name]: 로컬 브랜치 제거
	```
	git branch -d branch-1
	```
* git branch -r: 원격 브랜치 목록 조회
* git branch -a: 로컬, 원격 브랜치 목록 조회

## **git switch [branch name]**
'branch name'의 브랜치로 전환한다.
```
git switch branch name
```

## **git checkout [branch name]**
'branch name'의 브랜치로 전환한다.
```
git checkout branch name
```

## **git checkout [commit hash]**
'commit-hash'의 상태로 저장소를 되돌린다.  
최신 버전으로 되돌릴 때는 hash 대신 - 라고 입력한다.
```
git checkout sbbb5493830104e4a193723af060ffcb5d6fe7a7
git checkout -
```

## **git merge [branch name]**
'branch name'의 브랜치를 통합한다.  
기준이 되는 브랜치에서 실행하며 보통 **main(master)** 브랜치에서 실행한다.  
충돌 사항이 발생한 경우 해결 뒤에 커밋이 가능하다.
```
git merge branch name
```

## **git merge --squash [branch name]**
여러개의 커밋 이력을 하나로 정리한다.
```
git merge --squash branch name
```

## **git push origin [branch name]**
'branch name'의 원격 브랜치를 생성한다.  
먼저 로컬 브랜치를 생성하고 전환한 뒤에 실행해야 한다.
```
git push origin branch name
```

## **git push origin -d [branch name]**
'branch name'의 원격 브랜치를 제거한다.
```
git push origin -d branch name
```

## **git pull origin [branch name]**
특정 브랜치(branch name)를 pull 한다.
```
git pull origin branch name
```

## **git revert [commit hash]**
특정 hash 커밋으로 되돌아간다.
```
git revert a391c65997198131f985d04ecb206d433f0cb914
```

## **git checkout [branch name] -p**
특정 브랜치의 특정 파일만 merge한다.
```
git checkout develop -p test.js
git checkout develop -p style/reset.css
```

## **git checkout -p [branch name] --path**
특정 브랜치의 특정 폴더만 merge한다.
```
git checkout -p develop --path test/
```

## **git cherry-pick [commit hash]**
특정 hash 커밋만 merge한다.
```
git cherry-pick 0504624529cdd5bafb571068ca1c748c1c551ece
```

## **git mv [before file name] [after file name]**
파일명을 변경한다.  
수동으로 파일명을 변경하는 경우 기존 파일을 삭제로 인식하기 때문에 히스토리를 추적할 수 없다.  
mv 명령어를 사용하면 계속 추적할 수 있다.
```
git mv test.js TEST.js
```

## **git stash**
현재 변경 사항 파일들을 임시 저장한다.
```
<!-- 추적 중인 파일들만 임시 저장 -->
git stash

<!-- untracked 파일들까지 임시 저장 -->
git stash push -u

<!-- 특정 파일만 임시 저장 -->
git stash push -m "특정 파일만 stash" <파일-1> <파일-2>

<!-- 특정 파일만 임시 저장(untracked 파일 있는 경우) -->
git stash push -u -m "특정 파일만 stash" <파일-1> <파일-2>

```