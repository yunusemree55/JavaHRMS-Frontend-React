import { Field, useField } from "formik";
import React from "react";

function CustomTextArea({ ...props }) {
  const [field,meta] = useField(props);

  return (
    <>
      <Field component="textarea" {...props} {...field}  />
      {meta.error && meta.touched && <small className="flex error-message">{meta.error}</small>}
      
    </>
  );
}

export default CustomTextArea;
