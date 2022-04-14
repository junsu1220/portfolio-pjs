## 새롭게 발견한 문제점

node version 16에서는 버전 오류가 생겨 npm install 시에 시간이 오래걸려 패키지가<br>
정상적으로 실행되지 않으니 14버전으로 하시길 바랍니다.

시간이 오래걸리는 패키지를 오류명으로 구글링하여 스택오버플로우에서<br>
버전문제임을 확인

## 자잘자잘

우선 전체적으로 div로만 박스모델들을 다 잡아준뒤에<br>

새롭게 태그들을 재정립할 생각이다.<br>

또한 fontawesome을 npm으로 설치하여<br>

index.js에 넣어줬다.<br>

## style 설정관련

webpack에서 scss 사용하기<br>

webpack.config.js에서 모듈의 룰에 <br>

test와 use를 변경<br>

브라우저 style 초기화<br>

## 기본골격 잡기

adobe xd에서 설계한 그대로 scss를 이용해 기본만 style했다.<br>

주로 렐러티브를 이용해 부모요소들을 차례로 쌓았고<br>

position: absolute와 top, left 를 이용해 자식요소들을<br>

그 부모의 원하는 위치에 배치시켜 주었다.<br>

요소의 가운데 정렬은 margin: 0 auto 를 이용했다.<br>

## about 작업

일단은 일일이 nth child를 이용하여 위치를 잡아주었다.<br>

아이콘은 font awesome을 사용했다. <br>

특별히 어려운것은 없었지만 코드 리팩토링이 필요한 부분이다.<br>

## SKILLS 작업

이미지는 투명화가 가능한 webp 파일을 <br>

scss background-image url을 이용해 삽입했다. <br>

## footer 작업

우선 footer 먼저 이미지를 잘 살려서<br>

skills와 마찬가지로 마무리했다.<br>

## slider 작업

slider 적용까지는 잘했지만 slider를 두 개<br>

적용하는 것은 하지 못했다.<br>

아무래도 내가 js에 대한 지식이 아직 <br>

부족하기 때문인 것 같다. <br>

clones까지만 적용하고 좀 더 배운 후에 <br>

다시 시도해봐야겠다.<br>

## dark mode

dark mode는 생각보다 쉬웠다.<br>

js에서 하던대로 El뽑아서 classlist로 넣어주고 <br>

addEvent해주고 css에서 원래와는 다르게<br>

background #999 와 filter invert(20%)넣었다.<br>
