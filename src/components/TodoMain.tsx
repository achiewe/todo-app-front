import { styled } from "styled-components";
import ControlPanel from "./ControlPanel";
import InputSaveBar from "./InputSaveBar";
import iconchek from "../assets/icon-check.svg";
import { useEffect } from "react";
import axios from "axios";
import crossSvg from "../assets/icon-cross.svg";
import { DataProps } from "../types";
import { useState } from "react";

const TodoMain = (): JSX.Element => {
  const [info, setInfo] = useState<DataProps[] | []>([]);
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
      console.log("sasqq");
      await axios.delete(`http://localhost:3002/api/tasks/${id}`);
      takeData();
    } catch (error) {
      console.log("sass");
    }
  };

  return (
    <MainSaveDiv>
      <InputSaveBar takeData={takeData} />
      <ul className="itemsUl">
        {info.map((infoItem, index) => (
          <div key={index}>
            <TextLi>
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
          <h2> {} items left</h2>
          <button className="clear">Clear Completed</button>
        </div>
      </ul>
      <ControlPanel />
    </MainSaveDiv>
  );
};

const MainSaveDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;

  .itemsUl {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: "#FFFFFF";
    box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
    border-radius: 5px;
    margin-top: 30px;
    padding: 16px 0 22px 0;
    gap: 16px;

    hr {
      width: 100%;
      background-color: #e3e4f1;
      border: none;
      height: 1px;
    }

    .itemsClear {
      width: 100%;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        font-size: 12px;
        font-weight: 400;
        line-height: 12px;
        letter-spacing: -0.1666666716337204px;
        text-align: left;
        color: #9495a5;
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
      }

      .clear:hover {
        color: #494c6b;
        cursor: pointer;
      }
    }
  }
`;

const TextLi = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0 20px;
  padding-bottom: 10px;
  align-items: center;
  justify-content: space-between;

  .circleText {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;

    .circle {
      width: 20px;
      position: relative;
      height: 20px;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      border: 1px solid #e3e4f1;
      background: none;
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
    }

    h3 {
      font-size: 12px;
      font-weight: 400;
      line-height: 12px;
      letter-spacing: -0.1666666716337204px;
      text-align: left;
      cursor: pointer;
      color: #494c6b;
    }
  }

  .cross-svg {
    width: 11.79px;
    height: 11.79px;
  }
`;

export default TodoMain;
