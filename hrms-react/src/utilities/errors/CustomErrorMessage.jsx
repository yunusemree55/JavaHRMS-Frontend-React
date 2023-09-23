import { useField } from "formik";
import React from "react";

function CustomErrorMessage({...props}) {

    const [field,meta] = useField(props)

  return (
    
    <>
      {meta.error && meta.touched && (
        <small className="flex error-message">
          {meta.error}
        </small>
      )}
    </>
  );
}

export default CustomErrorMessage;
