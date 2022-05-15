import React, { useState, useMemo, useCallback } from "react";
import getComponent from "./helpers/getScreen";
import Header from "./components/Header";
import { ChangeCurrentStep } from "./components/context";
import { chatStages } from "./models";
import "./index.scss";

function App() {
  const [currentStep, setCurrentStep] = useState(chatStages.about);

  const ScreenComponent = useMemo(() => {
    return getComponent(currentStep);
  }, [currentStep]);

  const handleChangeStep = useCallback((step) => {
    setCurrentStep(step);
  }, [setCurrentStep]);

  const changeCurrentStepProvider = {
    changeStep: handleChangeStep,
  };

  return (
    <ChangeCurrentStep.Provider value={changeCurrentStepProvider}>
      <div className="wrapper">
        <Header changeStep={handleChangeStep} />
        <ScreenComponent />
      </div>
    </ChangeCurrentStep.Provider>
  );
}

export default App;
