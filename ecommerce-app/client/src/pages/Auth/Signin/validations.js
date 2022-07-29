import * as yup from "yup";

const validations = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required field"),
  password: yup.string().required(),
});

export default validations;
