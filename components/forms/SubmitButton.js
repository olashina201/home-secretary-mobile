import React from "react";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} />;
};

export default SubmitButton;
