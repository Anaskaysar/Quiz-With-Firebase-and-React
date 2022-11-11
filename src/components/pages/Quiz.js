import React from "react";
import Answers from "../QuizeComps/Answers";
import MiniPlayer from "../QuizeComps/MiniPlayer";
import ProgressBar from "../QuizeComps/ProgressBar";

export default function Quiz() {
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <ProgressBar />
      <MiniPlayer />
    </>
  );
}
