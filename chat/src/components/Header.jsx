import React, { useContext, useCallback } from "react";
import { ChangeCurrentStep } from "./context";
import { chatStages } from "../models";
import "./header.scss";

const changeStagesData = [
  {
    id: "1",
    displayName: "Chat",
    stage: chatStages.chat,
  },
  {
    id: "2",
    displayName: "About",
    stage: chatStages.about,
  },
];

export const Header = () => {
  const { changeStep } = useContext(ChangeCurrentStep);

  const handleChangeStage = useCallback(
    (step) => {
      changeStep(step);
    },
    [changeStep]
  );

  return (
    <header>
      <div className="container">
        <div className="header">
          <nav className="navbar">
            <ul className="menu_links">
              {changeStagesData.map(({ id, displayName, stage }) => (
                <li
                  className="menu__link_item"
                  key={id}
                  onClick={() => handleChangeStage(stage)}
                >
                  <a className="menu__link">{displayName}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
