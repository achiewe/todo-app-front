import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Mode } from "../store/redux";
import { DataProps } from "../types";

interface ControlPanelProps {
  info: DataProps[];
}

const ControlPanel = ({ info }: ControlPanelProps): JSX.Element => {
  const darkMode = useSelector((redux: Mode) => redux.Mode.gloomy);
  return (
    <MainControl darkMode={darkMode} info={info}>
      <Link to="/">All </Link>
      <Link to="/Active">Active</Link>
      <Link to="/Completed">Completed</Link>
    </MainControl>
  );
};

const MainControl = styled.div<{ darkMode: boolean; info: DataProps[] }>`
  display: ${(props) => (props.info.length === 0 ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${(props) => (props.darkMode ? "#25273D" : "#ffffff")};
  padding: 15px 0 19px 0;
  border-radius: 5px;
  width: 327px;
  margin-bottom: 24px;
  box-shadow: ${(props) =>
    props.darkMode
      ? "0px 35px 50px -15px rgba(0, 0, 0, 0.5)"
      : "0px 35px 50px -15px rgba(194, 195, 214, 0.5)"};
  gap: 18px;
  @media (min-width: 1024px) {
    width: 540px;
  }

  a {
    font-size: 14px;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: -0.1944444477558136px;
    text-align: left;
    color: ${(props) => (props.darkMode ? "#5B5E7E" : "#9495a5")};
    text-decoration: none;
    cursor: pointer;

    :hover {
      color: ${(props) => (props.darkMode ? "#494C6B" : "#E3E4F1")};
    }

    :focus {
      color: #3a7cfd;
    }
  }
`;

export default ControlPanel;
