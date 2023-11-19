import { styled } from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";
import { Mode } from "../store/redux";

interface propsBar {
  takeData: () => void;
}

const InputSaveBar = ({ takeData }: propsBar): JSX.Element => {
  const darkMode = useSelector((redux: Mode) => redux.Mode.gloomy);
  const addTask = async (e: any) => {
    try {
      e.preventDefault();
      const inputValue = e.target.searchPlace.value;
      await axios.post(
        "https://todo-app-api-production-388b.up.railway.app/api/addtask",
        {
          title: inputValue,
          succeed: false,
        }
      );
      takeData();
    } catch (error) {
      return error;
    }
  };

  return (
    <Form onSubmit={addTask} darkMode={darkMode}>
      <button></button>
      <input id="searchPlace" placeholder="Create a new todo…" />
    </Form>
  );
};

const Form = styled.form<{ darkMode: boolean }>`
  width: 100%;
  background-color: ${(props) => (props.darkMode ? "#25273D" : "#ffffff")};
  box-shadow: ${(props) =>
    props.darkMode
      ? "0px 35px 50px -15px rgba(0, 0, 0, 0.5)"
      : "0px 35px 50px -15px #c2c3d680"};

  padding: 14px 0 14px 20px;
  display: flex;
  border: none;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  @media (min-width: 1024px) {
    width: 540px;
    padding: 20px 0 20px 24px;
    gap: 24px;
    height: 64px;
  }

  button {
    width: 20px;
    height: 20px;
    background: ${(props) => (props.darkMode ? "#25273D" : "#ffffff")};
    border-radius: 50%;
    border: ${(props) =>
      props.darkMode ? "1px solid #393A4B" : "1px solid #e3e4f1"};
    @media (min-width: 1024px) {
      width: 24px;
      height: 24px;
    }
  }

  input {
    width: 100%;
    border: none;
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: -0.1666666716337204px;
    text-align: left;
    color: ${(props) => (props.darkMode ? "white" : "black")};
    background-color: ${(props) => (props.darkMode ? "#25273D" : "#FFFFFF")};
    outline: none;
    @media (min-width: 1024px) {
      font-size: 18px;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: -0.25px;
      text-align: left;
    }
  }

  input::placeholder {
    color: #9495a5;
  }
`;

export default InputSaveBar;
