import React from "react";
import classes from "../../styles/Answers.module.css";
import CheckBox from "../Shared/CheckBox";
export default function Answers() {
  return (
    <div className={classes.answers}>
      <CheckBox className={classes.answer} text="Test Answer" />
    </div>
  );
}
