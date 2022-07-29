import React from "react";
import { useParams } from "react-router-dom";
import { fetchProduct, updateProduct } from "../../../api";
import { useQuery } from "@tanstack/react-query";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Formik, FieldArray } from "formik";
import validationSchema from "./validations";
import { message } from "antd";

const ProductDetail = () => {
  const { id } = useParams();

  const { isLoading, isError, data, error } = useQuery(
    [`admin`, `product`, id],
    () => fetchProduct(id)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const handleSubmit = async (values, bag) => {
    console.log("submitted");
    message.loading({ content: "Loading...", key: "product_update" });

    try {
      await updateProduct(values, id);
      message.success({
        content: "The product succesfully updated",
        key: "product_update",
        duration: 2,
      });
    } catch (e) {
      message.error("The product does not updated");
    }
  };

  return (
    <div>
      <Text fontSize="2xl">Edit</Text>

      <Formik
        initialValues={{
          title: data.title,
          description: data.description,
          price: data.price,
          images: data.images,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          handleSubmit,
          errors,
          touched,
          handleChange,
          handleBlur,
          values,
          isSubmitting,
        }) => (
          <>
            <Box>
              <Box my="5" textAlign="left">
                <form onSubmit={handleSubmit}>
                  <FormControl>
                    <FormLabel>Title</FormLabel>
                    <Input
                      name="title"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title}
                      disabled={isSubmitting}
                      isInvalid={touched.title && errors.title}
                    />
                    {touched.title && errors.title && (
                      <Text color="red.500">{errors.title}</Text>
                    )}
                  </FormControl>
                  <FormControl mt="4">
                    <FormLabel>Description</FormLabel>
                    <Textarea
                      name="description"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                      disabled={isSubmitting}
                      isInvalid={touched.description && errors.description}
                    />
                    {touched.description && errors.description && (
                      <Text color="red.500">{errors.description}</Text>
                    )}
                  </FormControl>
                  <FormControl mt="4">
                    <FormLabel>Price</FormLabel>
                    <Input
                      name="price"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.price}
                      disabled={isSubmitting}
                      isInvalid={touched.price && errors.price}
                    />
                    {touched.price && errors.price && (
                      <Text color="red.500">{errors.price}</Text>
                    )}
                  </FormControl>
                  <FormControl mt="4">
                    <FormLabel>Images</FormLabel>
                    <FieldArray
                      name="images"
                      render={({ remove, push }) => (
                        <div>
                          {values.images &&
                            values.images.map((image, index) => (
                              <div key="index">
                                <Input
                                  name={`images.${index}`}
                                  value={image}
                                  disabled={isSubmitting}
                                  onChange={handleChange}
                                  width="3xl"
                                />
                                <Button
                                  ml="4"
                                  type="button"
                                  colorScheme="red"
                                  onClick={() => remove(index)}
                                >
                                  Remove
                                </Button>
                              </div>
                            ))}
                          <Button mt="4" onClick={() => push("")}>
                            Add a photo
                          </Button>
                        </div>
                      )}
                    />
                  </FormControl>

                  <Button
                    mt="4"
                    width="full"
                    type="submit"
                    isLoading={isSubmitting}
                  >
                    Update
                  </Button>
                </form>
              </Box>
            </Box>
          </>
        )}
      </Formik>
    </div>
  );
};

export default ProductDetail;
