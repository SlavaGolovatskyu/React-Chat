import React, { useState } from "react";
import "./index.scss";

const MIN_USERNAME_LENGTH = 3;
const MAX_USERNAME_LENGTH = 32;

const Username = ({ saveUsername, nextStep }) => {
  const [username, setUsername] = useState("");
  const [usernameIsValid, setUsernameIsValid] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChangeUsername = (e) => {
    const { value } = e.target;

    setUsername(value);
    saveUsername(value);

    if (
      value.length >= MIN_USERNAME_LENGTH &&
      value.length <= MAX_USERNAME_LENGTH
    ) {
      setUsernameIsValid(true);
      setIsError(false);
    } else {
      setIsError(true);
      setUsernameIsValid(false);
    }
  };

  return (
    <section className="chat">
      <div className="column">
        <div className="column__row">
          <div>
            <input
              placeholder="Enter the name"
              className={
                "username__input " + (isError ? "error_color error_border" : "")
              }
              value={username}
              onChange={handleChangeUsername}
            />
          </div>
          {isError && (
            <p className="error_color">
              Username length should be from {MIN_USERNAME_LENGTH} to{" "}
              {MAX_USERNAME_LENGTH}
            </p>
          )}
        </div>
        <div className="column__row">
          <button
            className="nextStep"
            onClick={nextStep}
            disabled={!usernameIsValid}
          >
            Continue
          </button>
        </div>
      </div>
    </section>
  );
};

export default Username;
