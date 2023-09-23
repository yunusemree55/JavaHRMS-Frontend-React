import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import CvService from "../../services/cvService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { updateActiveUserCv } from "../../store/actions/authActions";
import { cvAddValidationSchema } from "../../validators/cvValidator";
import CustomTextArea from "../../utilities/customInputs/CustomTextArea";

function CvAddForm() {
  const { activeUser } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  
  const notify = toast;
  const cvService = new CvService();
  const navigate = useNavigate();

  return (
    <>
      <Formik
        initialValues={{
          description: "",
        }}
        onSubmit={(values) => {
          const cv = {
            ...values,
            jobSeekerId: parseInt(activeUser.id),
          };
          setLoading(true)
          notify.success("CV Eklendi");

          cvService.add(cv)
          dispatch(updateActiveUserCv(cv))
          console.log(cv);
          setTimeout(() => {
            navigate("/");
          }, 1500);  
        }}

        validationSchema={cvAddValidationSchema}
      >
        {(props) => (
          <Form autoComplete="off">
            <CustomTextArea 
              className="w-100 text-area"
              name="description"
              placeholder="Açıklama"
              rows="6"
            />
            <Button className={loading ?  "disabled loading" : ""}  color="green" type="submit" fluid>
              Ekle
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default CvAddForm;
