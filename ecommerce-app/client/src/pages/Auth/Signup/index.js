import React from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
} from "@chakra-ui/react";

import { useFormik } from "formik";
import validationSchema from "./validations";
import { fetchRegister } from "../../../api";
import { controlUserEmail } from "../../../api";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  let navigate = useNavigate();
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      role: "user",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      const checkUserEmail = await controlUserEmail(values.email);

      if (checkUserEmail !== undefined) {
        return bag.setErrors({ email: "This e-mail already using" });
      }
      const registerResponse = await fetchRegister(values);
      login(registerResponse);
      navigate("/profile");
      console.log(registerResponse);
    },
  });

  return (
    <div>
      <Flex align="center" w="full" justifyContent="center">
        <Box pt="10">
          <Box textAlign="center">
            <Heading>Sign Up</Heading>
          </Box>
          <Box my={5}>
            {formik.errors.email && (
              <Alert status="error">{formik.errors.email}</Alert>
            )}
          </Box>
          <Box textAlign="left" my="5">
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  isInvalid={formik.touched.email && formik.errors.email}
                />
              </FormControl>

              <FormControl mt="4">
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  isInvalid={formik.touched.password && formik.errors.password}
                />
              </FormControl>

              <FormControl mt="4">
                <FormLabel>Password Confirm</FormLabel>
                <Input
                  name="passwordConfirm"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.passwordConfirm}
                  isInvalid={
                    formik.touched.passwordConfirm &&
                    formik.errors.passwordConfirm
                  }
                />
              </FormControl>

              <Button mt="4" w="full" type="submit">
                Sign Up
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export default Signup;
