import { useField, useFormikContext } from "formik";
import React from "react";
import ReactDatePicker from "react-datepicker";

function CustomDatePicker({ ...props }) {
  const { setFieldValue } = useFormikContext();

  const [field, meta] = useField(props);
  return (
    <>
      <ReactDatePicker
        dateFormat="dd/MM/yyyy"
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(val) => setFieldValue(field.name, val)}
      />

      {meta.error && meta.touched && (
        <small className="error-message flex">{meta.error}</small>
      )}
    </>
  );
}

export default CustomDatePicker;
