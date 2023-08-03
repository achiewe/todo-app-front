import { styled } from "styled-components";

const ControlPanel = (): JSX.Element => {
  return <MainControl></MainControl>;
};

const MainControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #ffffff;
  padding: 15px 0 19px 0;
  border-radius: 5px;
  width: 327px;
  margin-bottom: 24px;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  gap: 18px;
`;

export default ControlPanel;
