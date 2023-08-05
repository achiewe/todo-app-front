import { styled } from "styled-components";
import { Link } from "react-router-dom";

const ControlPanel = (): JSX.Element => {
  return (
    <MainControl>
      <Link to="/">All </Link>
      <Link to="/Active">Active</Link>
      <Link to="Completed">Completed</Link>
    </MainControl>
  );
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

  a {
    font-size: 14px;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: -0.1944444477558136px;
    text-align: left;
    color: #9495a5;
    text-decoration: none;
    cursor: pointer;

    :hover {
      color: #494c6b;
    }

    :focus {
      color: #3a7cfd;
    }
  }
`;

export default ControlPanel;
