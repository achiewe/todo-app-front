import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import TodoMain from "./components/TodoMain";
import BgMobileLight from "../src/assets/bg-mobile-light.jpg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(): JSX.Element {
  return (
    <MainContainer>
      <Router>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<TodoMain />} />
          <Route path="/Active" />
          <Route path="/Completed" />
        </Routes>
      </Router>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #fafafa;
  background-image: url(${BgMobileLight});
  background-repeat: no-repeat;
  background-size: 100% 200px;
  padding: 0 24px;
`;

export default App;
