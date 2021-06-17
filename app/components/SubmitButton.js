import React from "react";
import { useFormikContext } from "formik";

import AppButton from "./AppButton";
import colors from "../config/colors";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      title={title}
      color={colors.primary}
      onPress={handleSubmit}
    ></AppButton>
  );
}

export default SubmitButton;
