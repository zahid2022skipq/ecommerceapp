import React from "react";

import AppButton from "./AppButton";

function SubmitButton(props) {
  return <AppButton title="Login" handleBtn={handleSubmit} />;
}

export default SubmitButton;
