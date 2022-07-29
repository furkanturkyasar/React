import * as yup from "yup";

const validations = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required field"),
  password: yup.string().min(5, "At least 5 charachter required").required(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required(),
});

export default validations;
