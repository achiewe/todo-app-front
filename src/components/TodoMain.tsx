import { styled } from "styled-components";

const TodoMain = (): JSX.Element => {
  return <MainSaveDiv></MainSaveDiv>;
};

const MainSaveDiv = styled.div`
  width: 327px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

export default TodoMain;
