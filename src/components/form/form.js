import React, { useState } from "react";
import styles from "./form.module.css";

// get data from values
// check if credentials are correct otherwise set a error popup message

const initialUserInput = {
    "username": "",
    "age": ""
  }

const Form = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);
  const handleOnChange = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.getData(userInput);
    setUserInput(initialUserInput);
  };

  return (
    <div className={styles.main}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <p>Username</p>
        <input
          onChange={(event) => handleOnChange("username", event.target.value)}
          type="text"
          value={userInput["username"]}
        ></input>
        <p>Age(years)</p>
        <input
          onChange={(event) => handleOnChange("age", event.target.value)}
          type="number"
          value={userInput["age"]}
        ></input>
        <br />
        <button>Add User</button>
      </form>
    </div>
  );
};

export default Form;
