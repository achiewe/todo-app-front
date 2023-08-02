import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import InputSaveBar from "./components/InputSaveBar";
import TodoMain from "./components/TodoMain";
import BgMobileLight from "../src/assets/bg-mobile-light.jpg";
import axios from "axios";
import { DataProps } from "./types";
import { useEffect, useState } from "react";

function App(): JSX.Element {
  const [info, setInfo] = useState<DataProps[] | []>([]);

  const takeData = async () => {
    const response = await axios.get("http://localhost:3000/api/tasks");
    const data = response.data;
    setInfo(data);
  };
  useEffect(() => {
    takeData();
  }, []);
  console.log(info);

  const deleteAll = async () => {
    await axios.delete("http://localhost:3000/api/deleteAll");
    setInfo([]);
  };
  return (
    <MainContainer>
      <GlobalStyles />
      <Header />
      <InputSaveBar takeData={takeData} />
      <List>
        <div>
          {info.map((infoItem, index) => (
            <div key={index}>{infoItem?.title}</div>
          ))}
        </div>
      </List>
      <button onClick={deleteAll}> delete all</button>
      <TodoMain />
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

const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default App;
