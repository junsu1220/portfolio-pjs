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

## gsap

gsap을 이용한 scroll에 드디어 성공했다...<br>

아직 완벽한 성공이라고 할 수는 없는데<br>

모듈화를 제대로 하지 못했기 때문이다. <br>

이론의 부족함을 느끼고 우선 부족한 부분만<br>

이론공부를 한 후에 다시 slider와 scroll을<br>

해결해야겠다.<br>

문제였던 부분은 gsap을 npm으로 설치하여<br>

사용시 import 하는데에 있어서 실행이 안되는<br>

부분이었다.<br>

이유는 내가 ScrollToPlugin을 사용해야하는데 <br>

그럴려면<br>

gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin); <br>

을 추가해야했다. 공식문서에 있는 내용이었는데<br>

다시 한번 공식문서의 힘을 느낀다.<br>

## 반응형 웹

지금까지의 내용들을 반응형으로 우선 만들어보았다.<br>

퍼블리싱은 이제 웬만하면 다 구현 가능해진것 같다.<br>

나의 포트폴리오의 슬라이드 기능에서 autoplay는 필요없기에 제거했다.<br>

## netlify를 이용한 지속적인 배포

netlify시 Deploy log에서 npm WARN old lockfile package-lock.json 이 뜨고 난 이후에<br>

error : timeout으로 배포가 안되는 문제 발생<br>

처음에는 CI = false를 했지만 안됐었고 계속 문제를 찾다보니 스택오버플로우에서 <br>

npm 이전 버전을 사용하면 된다는 글 확인 <br>

vscode에서는 이미 14.16.0을 쓰고있었기에 문제가 없었지만 netlify에서는 v16버전을 쓰고 있었다.<br>

따라서 공식문서에서 node version을 변경하는법을 확인 후 <br>

site setting -> build & deploy -> Environment variables 에서 NODE_VERSION 을 14.16.0으로 주고 <br>

다시 배포하니 문제가 해결되었다.<br>

## netlify 파일명 주의

vscode와 webpack devserver에서는 이미지파일의 대소문자가 차이나도<br>

잘 반영되지만 netlify에서는 오류가 뜨니 주의해야한다.<br>

## 반응형웹 슬라이더

알고나니 어처구니 없었지만 second슬라이드를 만들때<br>

stack-box는 보이지만 그 이외의 모든게 안보이는 에러가 있었다.<br>

검색하기도 상당히 까다로운에러였지만<br>

stack-box는 백그라운드컬러시 보이므로 <br>

그 밑의 자식요소들의 문제라고 판단했고 <br>

크롬 개발자도구의 element에서 그 element들을 찾아보니 <br>

태그가 다 오른쪽으로 꽉 붙어서 나오는것을 확인<br>

에러 원인은 부모요소의 컨테이너가 이미 슬라이드에서 <br>

left요소로 이동했는데<br>

자식요소를 한번더 이동해서 안보인것이었다. <br>

슬라이드였기에 이동해도 보이지가 않아서 단순에러였지만<br>

바로잡기 살짝 힘들었다.<br>

## 알고리즘 업로드

전에 했었던 알고리즘 정리를 업로드했다.
