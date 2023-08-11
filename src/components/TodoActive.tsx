import { styled } from "styled-components";
import ControlPanel from "./ControlPanel";
import { DataProps } from "../types";
import InputSaveBar from "./InputSaveBar";
import { useSelector } from "react-redux";
import iconchek from "../assets/icon-check.svg";
import crossSvg from "../assets/icon-cross.svg";
import { useEffect } from "react";
import axios from "axios";
import { Mode } from "../store/redux";

interface TodoActiveProps {
  setInfo: (data: DataProps[]) => void;
  info: DataProps[];
}
const TodoActive = ({ setInfo, info }: TodoActiveProps): JSX.Element => {
  const darkMode = useSelector((redux: Mode) => redux.Mode.gloomy);
  const active = info.filter((info) => info.succeed === false);

  const takeData = async () => {
    const response = await axios.get("http://localhost:3002/api/tasks");
    const data = response.data;
    setInfo(data);
  };
  useEffect(() => {
    takeData();
  }, []);

  const cancelWord = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3002/api/tasks/${id}`);
      takeData();
    } catch (error) {
      console.log("sass");
    }
  };
  return (
    <MainSaveDiv darkMode={darkMode}>
      <InputSaveBar takeData={takeData} />
      <ul className="itemsUl">
        {info.map((infoItem, index) => (
          <div key={index}>
            <TextLi darkMode={darkMode}>
              <div className="circleText">
                <button className="circle">
                  <img className="check-icon" src={iconchek} alt="check icon" />
                </button>
                <h3> {infoItem?.title} </h3>
              </div>
              <img
                onClick={() => {
                  cancelWord(infoItem._id);
                }}
                className="cross-svg"
                src={crossSvg}
                alt="cross svg"
              />
            </TextLi>
            <hr />
          </div>
        ))}
        <div className="itemsClear">
          <h2> {active.length} items left</h2>
          <button className="clear">Clear Completed</button>
        </div>
      </ul>
      <ControlPanel />
    </MainSaveDiv>
  );
};

const MainSaveDiv = styled.div<{ darkMode: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    gap: 24px;
  }

  .itemsUl {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => (props.darkMode ? "#25273D" : "#FFFFFF")};
    box-shadow: ${(props) =>
      props.darkMode
        ? "0px 35px 50px -15px rgba(0, 0, 0, 0.5)"
        : "0px 35px 50px -15px rgba(194, 195, 214, 0.5)"};
    border-radius: 5px;
    margin-top: 5px;
    padding: 16px 0 22px 0;
    gap: 16px;
    @media (min-width: 1024px) {
      width: 540px;
      padding: 20px 0;
      gap: 20px;
    }

    hr {
      width: 100%;
      background-color: ${(props) => (props.darkMode ? "#393A4B" : "#e3e4f1")};
      border: none;
      height: 1px;
    }

    .itemsClear {
      width: 100%;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (min-width: 1024px) {
        padding: 0 24px;
      }

      h2 {
        font-size: 12px;
        font-weight: 400;
        line-height: 12px;
        letter-spacing: -0.1666666716337204px;
        text-align: left;
        color: #9495a5;
        @media (min-width: 1024px) {
          font-size: 14px;
          font-weight: 400;
          line-height: 14px;
          letter-spacing: -0.1944444477558136px;
          text-align: left;
        }
      }

      .clear {
        border: none;
        background: none;
        font-size: 12px;
        font-weight: 400;
        line-height: 12px;
        letter-spacing: -0.1666666716337204px;
        text-align: left;
        color: #9495a5;
        @media (min-width: 1024px) {
          font-size: 14px;
          font-weight: 400;
          line-height: 14px;
          letter-spacing: -0.1944444477558136px;
          text-align: right;
        }
      }

      .clear:hover {
        color: ${(props) => (props.darkMode ? "#E3E4F1" : "#494C6B")};
        cursor: pointer;
      }
    }
  }
`;

const TextLi = styled.li<{ darkMode: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0 20px;
  padding-bottom: 10px;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1024px) {
    padding: 0 24px;
    padding-bottom: 20px;
  }

  .circleText {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    @media (min-width: 1024px) {
      gap: 24px;
    }

    .circle {
      width: 20px;
      position: relative;
      height: 20px;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      border: ${(props) =>
        props.darkMode ? "1px solid #393A4B" : "1px solid #e3e4f1"};
      background: none;
      @media (min-width: 1024px) {
        width: 24px;
        height: 24px;
      }
    }

    .circle:hover {
      border: 1px solid #c058f3;
    }

    .check-icon {
      display: none;
      position: absolute;
      top: 4px;
      left: 4px;
      right: 4px;
      bottom: 4px;
      @media (min-width: 1024px) {
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 2px;
      }
    }

    h3 {
      font-size: 12px;
      font-weight: 400;
      line-height: 12px;
      letter-spacing: -0.1666666716337204px;
      text-align: left;
      cursor: pointer;
      color: ${(props) => (props.darkMode ? "#C8CBE7" : "#494c6b")};
      @media (min-width: 1024px) {
        font-size: 18px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: -0.25px;
        text-align: left;
      }
    }
  }

  .cross-svg {
    width: 11.79px;
    height: 11.79px;
    cursor: pointer;
    @media (min-width: 1024px) {
      width: 17.68px;
      height: 17.68px;
    }
  }
`;

export default TodoActive;