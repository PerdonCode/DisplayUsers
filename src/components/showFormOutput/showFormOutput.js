import React, { useState, useEffect } from "react";
import styles from "./showFormOutput.module.css";
import Wrapper from "../helpers/Wrapper";

const ShowFormOutput = (props) => {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (props.data && props.data.length === 0 && !showError) {
      setShowError(true);
    } else if (props.data && props.data.length > 0 && showError) {
      setShowError(false);
    }
  }, [props.data, showError]);

  console.log("props for data", props.data);
  console.log(Array.isArray(props.data));

  const dataArray = Object.values(props.data || {});

  return (
    <Wrapper className={styles.container}>
      {showError ? (
        <p style={{ color: "white", fontSize: "50px" }}>no users yet</p>
      ) : (
        dataArray.length > 0 &&
        dataArray.map((user) => (
          <div className={styles.main} key={user.username}>
            <p>{user.username}({user.age})</p>
          </div>
        ))
      )}
    </Wrapper>
  );
};

export default ShowFormOutput;
