import { styled } from "styled-components";
import TodoSvg from "../assets/TODO.svg";
import MoonSvg from "../assets/icon-moon.svg";
import SunSvg from "../assets/icon-sun.svg";

const Header = (): JSX.Element => {
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
      <img className="sunMonSvg" src={MoonSvg} alt="Sun Moon svg" />
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

  .sunMonSvg {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

export default Header;
