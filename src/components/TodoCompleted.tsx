import { DataProps } from "../types";

interface TodoCompleteProps {
  info: DataProps[];
  setInfo(info: DataProps[]): void;
}

const TodoCompleted = ({ info, setInfo }: TodoCompleteProps): JSX.Element => {
  return <div> </div>;
};

export default TodoCompleted;
