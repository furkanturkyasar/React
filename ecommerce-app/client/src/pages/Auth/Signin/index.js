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
import {
  controlUserEmail,
  fetchLogin,
  controlUserPassword,
} from "../../../api";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  let navigate = useNavigate();
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      role: "user",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      const checkUserEmail = await controlUserEmail(values.email);
      const checkUserPassword = await controlUserPassword(values.password);

      if (checkUserEmail === undefined) {
        bag.setErrors({ email: "E-mail address could not find" });
      } else if (checkUserPassword === undefined) {
        bag.setErrors({ password: "E-mail or password incorrect" });
      } else {
        const loginResponse = await fetchLogin(values.email);
        login(loginResponse);
        navigate("/profile");
        console.log(loginResponse);
      }
    },
  });

  return (
    <div>
      <Flex align="center" w="full" justifyContent="center">
        <Box pt="10">
          <Box textAlign="center">
            <Heading>Sign In</Heading>
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

              <Button mt="4" w="full" type="submit">
                Sign In
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export default Signin;
