import { styled } from "styled-components";
import axios from "axios";

interface propsBar {
  takeData: () => void;
}

const InputSaveBar = ({ takeData }: propsBar): JSX.Element => {
  const addTask = async (e: any) => {
    try {
      e.preventDefault();
      const inputValue = e.target.searchPlace.value;
      await axios.post("http://localhost:3000/api/addtask", {
        title: inputValue,
        succeed: false,
      });
      takeData();
    } catch (error) {
      return error;
    }
  };

  return (
    <Form onSubmit={addTask}>
      <button></button>
      <input id="searchPlace" placeholder="Create a new todo…" />
    </Form>
  );
};

const Form = styled.form`
  width: 100%;
  background-color: #ffffff;
  padding: 14px 0 14px 20px;
  display: flex;
  border: none;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  gap: 12px;

  button {
    width: 20px;
    height: 20px;
    background: #ffffff;
    border-radius: 50%;
    border: 1px solid #e3e4f1;
  }

  input {
    width: 100%;
    border: none;
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: -0.1666666716337204px;
    text-align: left;
    color: black;
    background-color: #ffffff;
    outline: none;
  }

  input::placeholder {
    color: #9495a5;
  }
`;

export default InputSaveBar;
