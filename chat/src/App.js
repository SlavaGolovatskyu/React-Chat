import React from "react";
import { Chat } from "./components/Chat/Chat";
import { Header } from "./components/Header";
import { About } from "./components/About/About";
import { ChangeCurrentStep } from "./components/context";
import { chatStages } from "./models";
import "./index.scss";

function App() {
  const [currentStep, setCurrentStep] = React.useState(chatStages.about);

  const handleClickChangeStep = (step) => {
    setCurrentStep(step);
  };

  const changeCurrentStepProvider = {
    changeStep: handleClickChangeStep,
  };

  return (
    <ChangeCurrentStep.Provider value={changeCurrentStepProvider}>
      <div className="wrapper">
        <Header />
        {currentStep === chatStages.chat && <Chat />}
        {currentStep === chatStages.about && <About />}
      </div>
    </ChangeCurrentStep.Provider>
  );
}

export default App;
