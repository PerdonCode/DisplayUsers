import React from "react";
import styles from "./showFormOutput.module.css"

const ShowFormOutput = (props) => {
   console.log("props for data", props.data);
   console.log(Array.isArray(props.data))
   const dataArray = [...props.data];
   if (!Array.isArray(dataArray)) {
      return null; // or any fallback component/message you want to render
    }


  return (
    <div>
      {dataArray.map((user) => {
        return (
          <div className={styles.main} key={user.username}>
            <p>{user.username}</p>
            <p>{user.age}</p>
          </div>
        );
      })}
    </div>
  );
};
export default ShowFormOutput;
