import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import TodoMain from "./components/TodoMain";
import TodoActive from "./components/TodoActive";
import bgMLight from "../src/assets/bg-mobile-light.jpg";
import bgMDark from "../src/assets/bg-mobile-dark.jpg";
import bgDDark from "../src/assets/bg-desktop-dark.jpg";
import bgDLight from "../src/assets/bg-desktop-light.jpg";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Mode } from "./store/redux";
import { DataProps } from "./types";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(): JSX.Element {
  const [info, setInfo] = useState<DataProps[] | []>([]);
  const darkMode = useSelector((redux: Mode) => redux.Mode.gloomy);
  return (
    <MainContainer darkMode={darkMode}>
      <Router>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route
            path="/"
            element={<TodoMain setInfo={setInfo} info={info} />}
          />
          <Route
            path="/Active"
            element={<TodoActive setInfo={setInfo} info={info} />}
          />
          <Route path="/Completed" />
        </Routes>
      </Router>
    </MainContainer>
  );
}

const MainContainer = styled.div<{ darkMode: boolean }>`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${(props) => (props.darkMode ? "#171823" : "#fafafa")};
  background-image: url(${(props) => (props.darkMode ? bgMDark : bgMLight)});
  background-repeat: no-repeat;
  background-size: 100% 200px;
  padding: 0 24px;
  @media (min-width: 1024px) {
    background-image: url(${(props) => (props.darkMode ? bgDDark : bgDLight)});
    background-size: 100% 300px;
    padding: 0;
    align-items: center;
  }
`;

export default App;
