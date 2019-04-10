React Starter kit 알아보기
==================
프로젝트를 시작하기 위해 필요한 라이브러리들을 직접 엮어 프로젝트를 구성 할 수 있지만, 다양한 라이브러리들을 사용하는 node.js 환경상 이 기초작업만으로도 시간이
많이 걸리고 지치는 일이다.

때문에 구성하고자 하는 기술 스택에 따라 미리 만들어진 Starter kit을 사용하는게 일반적이고 무의미하게 삽질 하는 시간을 줄여주며, 표준화된 구성에 의해 작업
호환성도 좋아진다.

이번 Geek 프로젝트의 핵심은 React와 Typescript 이므로 이 두가지가 반드시 포함되어야 하고 SSR이 가능한 구성이라면 더욱 좋겠다. 주로 next.js를 쓰는것 같은데
Typescript 와 함께 next.js 가 구성된걸 찾을 수 있을지는 모르겠다. 그래도 React + Typescript는 찾기가 쉬울것이니 못찾으면 next.js는 직접 적용 해보자.

## Create React App
첫번재로 볼것은 facebook 에서 공식적으로 제공하는 Create React App 이다.

홈페이지 https://facebook.github.io/create-react-app/

<img height="400px" src="https://camo.githubusercontent.com/29765c4a32f03bd01d44edef1cd674225e3c906b/68747470733a2f2f63646e2e7261776769742e636f6d2f66616365626f6f6b2f6372656174652d72656163742d6170702f323762343261632f73637265656e636173742e737667"></img>

생성하는 방법은 여러가지 있지만 npx 명령어로 실행하면 편하다. 그리고 typescript를 기본적으로 지원한다. 하지만 공식 문서에는 next.js 에 대한 언급은 없다.

npx create-react-app my-app --typescript

이 명령어로 모든게 준비된다. 하지만 생각 하지 못했던 부분은 빌드, 패키징을 react-scripts 라는 툴을 사용하도록 구성이 되는데 이 부분은 좀더 알아봐야 할것 같다.
