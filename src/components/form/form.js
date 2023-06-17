import React, { useState } from "react";
import styles from "./form.module.css";
import Wrapper from "../helpers/Wrapper";

// get data from values
// check if credentials are correct otherwise set an error popup message

const initialUserInput = {
  username: "",
  age: ""
};

const Form = (props) => {
  const [userInput, setUserInput] = useState([initialUserInput]);
  const [showPopup, setShowPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleOnChange = (input, value) => {
    setUserInput((prevInput) =>
      prevInput.map((item, index) => {
        if (index === prevInput.length - 1) {
          return {
            ...item,
            [input]: value
          };
        }
        return item;
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userInput[userInput.length - 1].username === "") {
      setErrorMessage("Please enter a username");
      setShowPopup(true);
    } else if (userInput[userInput.length - 1].age === "") {
      setErrorMessage("Please enter an age");
      setShowPopup(true);
    } else if (userInput[userInput.length - 1].age < 0) {
      setErrorMessage("Age cannot be less than 0");
      setShowPopup(true);
    } else {
      setShowPopup(false);
      props.getData(userInput);

      setUserInput((prevInput) => [...prevInput, { ...initialUserInput }]);
    }
  };

  return (
    <Wrapper className={styles.container}>
      <div className={styles.main}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <p>Username</p>
          <input
            onChange={(event) =>
              handleOnChange("username", event.target.value)
            }
            type="text"
            value={userInput[userInput.length - 1].username}
          />
          <p>Age(years)</p>
          <input
            onChange={(event) => handleOnChange("age", event.target.value)}
            type="number"
            value={userInput[userInput.length - 1].age}
          />
          <br />
          <button>Add User</button>
        </form>
        {showPopup && (
          <div className={styles.popup}>
            <p className={styles.error}>{errorMessage}</p>
            <button
              onClick={() => setShowPopup(false)}
              className={styles.closeButton}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Form;
