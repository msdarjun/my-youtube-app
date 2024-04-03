import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Sports" />
      <Button name="News" />
      <Button name="Cricket" />
      <Button name="Football" />
      <Button name="Shorts" />
      <Button name="Trending" />
    </div>
  );
};

export default ButtonList;
