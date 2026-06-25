import {BrowserRouter, Route, Routes} from "react-router";
import Header from "./components/header";
import JoinPage from "./pages/JoinPAge";
import LoginPage from "./pages/LoginPage";

/**
 *  1. JSX란 
 *  - JavaScript의 확장문법으로 
 *    자바스크립트 파일(.jsx)안에 HTML과 매우 유사한 코드를 작성할 수 있게 해준다.
 *  
 *  2. JSX 특징
 *  - 변환 필수 : 브라우저는 JSX를 그대로 이해하지 못한다. 
 *    실행 시 vite 변환기와 같은 도구가 실제 JS문법으로 변환해준다
 *  - 단일 루트 요소 : return 문 안의 코드는
 *    반드시 하나의 최상위 부모 태그로 감싸져 있어야 한다.
 *  - JS 표현식 포함 : 태그 내부에서 중괄호{ }를 사용하면 
 *    자바스크립트 변수, 함수 연산의 결과를 바로 렌더링 할 수 있다.
 *  - 카멜케이스 사용 : 일반 HTML 속성명과 달리 단어 연결 시 
 *    대문자를 사용해주어야 JSX 문법이 정상 동작 한다.
 *    예) onclick <- jsx <-- onClick
 *  - 태그 닫기 : <img><input> 처럼 닫기 태그가 없던 태그들도
 *    JSX 문법에서는 받드시 / 닫기 태그를 달아 주어야 한다.
 * 
 * 
 */
function App() {

  return(
  //   // 1. 브라우저 라우터로 앱 전체를 감싼 CSR 환경을 구성한다.

    <BrowserRouter>
    {/* Header 컴포넌트 사용 */}
      <Header/>

      {/* 
          JSX 인라인 스타일 문법
          1. 이중 괄호 {{}} 의미
          바깥쪽 {} : 지금부터 JSX안에서 자바스크립트 표현식을 쓰겠다. 선언
          안쪽 {} : 자바스크립트 객체 리터럴을 의미한다.
          - CSS 속성들을 자바스크리트 객체로 묶어서 style 속성을 전달하는 방식

          2. 일반 CSS 와 주요 차이점
          - 카멜 케이스 적용 : css에서 (-)하이픈으로 연결하던 속성을 카멜 케이스로 사용해야 적용 가능
          예 ) max-width --> maxWidht, background-color --> backgroundColor 
          - 이유 : " - " : 마이너스 연산자로만 인식하기 때문이다.
      */}
      <main style={{maxWidth: "900px", margin: "0 auto", padding: "0 20px"}}>
        <Routes>
           <Route path="/login" element={<LoginPage />} />
          <Route path="/join" element={<JoinPage />} />
        </Routes>
      </main>


    </BrowserRouter>
  
      )
}


export default App;