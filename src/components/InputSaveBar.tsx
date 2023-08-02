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
      <input id="searchPlace" />
    </Form>
  );
};

const Form = styled.form`
  width: 327px;

  input {
    width: 100%;
  }
`;

export default InputSaveBar;
