import { useField } from "formik";
import React from "react";
import { Input } from "semantic-ui-react";

function CustomIconInput({ ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <Input style={{margin:"5px 0px"}} {...props} {...field} fluid iconPosition="left" className={meta.error && meta.touched ? "error-border" : ""} />

      
      {meta.error && meta.touched && <small className="error-message flex">{meta.error}</small>}

    </>
  );
}

export default CustomIconInput;
