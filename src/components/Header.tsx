import { styled } from "styled-components";
import TodoSvg from "../assets/TODO.svg";
import MoonSvg from "../assets/icon-moon.svg";
import { Mode } from "../store/redux";
import { dark } from "../store/ModeSlice";
import SunSvg from "../assets/icon-sun.svg";
import { useDispatch, useSelector } from "react-redux";

const Header = (): JSX.Element => {
  const darkMode = useSelector((redux: Mode) => redux.Mode.gloomy);
  const dispatch = useDispatch();
  const clickOnMode = (): void => {
    dispatch(dark(!darkMode));
  };

  return (
    <MainHeader>
      <img
        onClick={() => {
          location.reload();
        }}
        className="todoSvg"
        src={TodoSvg}
        alt="todo svg"
      />
      <img
        className="sunMonSvg"
        onClick={clickOnMode}
        src={darkMode ? SunSvg : MoonSvg}
        alt="Sun Moon svg"
      />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 48px;
  margin-bottom: 40px;
  cursor: pointer;
  @media (min-width: 1024px) {
    margin-top: 70px;
    max-width: 541px;
  }

  .todoSvg {
    @media (min-width: 1024px) {
      width: 167px;
      height: 40px;
      cursor: pointer;
    }
  }

  .sunMonSvg {
    width: 20px;
    height: 20px;
    cursor: pointer;
    @media (min-width: 1024px) {
      width: 26px;
      height: 26px;
    }
  }
`;

export default Header;
