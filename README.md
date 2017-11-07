# github-issues-clone

## Labraries
이 프로젝트는 [Create React App](https://github.com/facebookincubator/create-react-app)을 이용하여 프로젝트를 생성하고 `eject` 후 몇가지 설정을 추가한 것입니다. 따라서, 실제 구현시에는 사용하지 않았으나, 포함된 패키지가 있을 수 있습니다.

* **react** (16.0.0): 자바스크립트 View 프레임워크.
* **react-router-dom** (4.2.2): SPA(Single Page Application) 환경에서 History API를 이용한 페이지 처리를 위한 라이브러리.
* **graphql** (0.11.7): Github API V4를 이용하기 위한 graphql 쿼리 빌더. 이와 연관된 라이브러리 사용 (*graphql-tag*)
* **apollo-client** (2.0.1): graphql의 클라이언트 구현을 도와주는 라이브러리. 관련된 라이브러리 사용(*apollo-cache-inmemory*, *apollo-link-http* 등)
* **moment** (2.19.1): 시간 처리를 위한 라이브러리

## 구현 범위
이 과제에서는 GitHub Issues 페이지의 일부 부분에 대해서 구현되었습니다.

* Home 페이지: 몇몇 대표적인 저장소의 Issues 페이지로 이동하기 위한 Index 페이지 개발.
* 이슈 목록 및 헤더의 일부분에 대한 react 컴포넌트 및 페이지 개발.
* Github API Ver 4를 이용한 repository 정보 및 Issues 목록 패치(첫 20개).
* 이슈 각 목록의 제목/댓글 부분에 해당 이슈 페이지로 이동하는 링크 적용.

아래 사항은 구현되지 않았으니 참고하시고 보시기 바랍니다.
* avatar 및 사용자 닉네임에 대한 Github Profile 링크
* Pagination.
* Github 페이지의 Navigation 및 Footer 부분.

...등 많은 부분이 생략되어 개발되지 않았습니다.

## 실행방법
1. 터미널을 실행하여 프로젝트 폴더로 이동한 후 패키지를 설치합니다.
```sh
> cd /path/to/project-folder
> yarn install (or npm install)
```

2. Gihub personal access token 발급
* github 로그인 한 후 **Settings > Developer settins > Personal access tokens**페이지로 이동한 후 **Generate new token** 클릭하여 새로운 토큰을 발급받습니다.
* 프로젝트 폴더로 이동하여 **config > app.config.js** 파일을 열어서 발급받은 토큰을 `github.accessToken` 값으로 설정합니다.

```javascript
module.exports = {
  github: {
    // 여기에 발급받은 토큰을 복사
    accessToken: '...'
  }
```

3. 서버 실행 (개발 모드로 실행)
```sh
> yarn start (or npm start)
```

4. 페이지 확인
브라우저에서 [http://localhost:3000/](http://localhost:3000/) 으로 확인 할 수 있습니다.
> 참고 서버 실행 후 기본 브라우저가 자동으로 실행됩니다.

## 저장소 이동
Issues 페이지는 router의 패턴에 따라 브라우저에서 주소를 입력하면 저장소를 이동할 수 있습니다.
```
https://github.com/repos/:owner/:repo/issues
```
* **:onwer** : 저장소의 소유자(개인, 조직) ID입니다. (ex: *facebook*)
* **:repo** : 저장소 ID입니다. (ex: *react*)
