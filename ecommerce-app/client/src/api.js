import axios from "axios";

export const fetchProductList = async ({ pageParam = 1 }) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/product?page=${pageParam}&limit=10`
  );

  return data;
};

export const fetchProduct = async (id) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/product/${id}`
  );

  return data;
};

export const fetchRegister = async (input) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/users`,
    input
  );

  return data;
};

export const getAllUsers = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/users`
  );

  return data;
};

export const controlUserEmail = async (mail) => {
  const allUser = await getAllUsers();

  return allUser.find((user) => user.email === mail);
};

export const fetchMe = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/users`
  );

  return data;
};

export const fetchLogout = async () => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/users`
  );

  return data;
};

export const fetchLogin = async (email) => {
  const allUser = await getAllUsers();
  const user = allUser.find((item) => item.email === email);
  console.log("api", user);
  return user;
};

export const controlUserPassword = async (password) => {
  const allUser = await getAllUsers();
  const user = allUser.find((item) => item.password === password);
  return user;
};

export const postOrder = async (input) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/order`,
    input
  );

  console.log(input);
  return data;
};

export const fetchOrders = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/order`
  );
  console.log(data);

  return data;
};

export const deleteProduct = async (id) => {
  console.log(id);
  const { data } = await axios.delete(
    `${process.env.REACT_APP_BASE_ENDPOINT}/product/${id}`
  );

  return data;
};

export const updateProduct = async (input, id) => {
  const { data } = await axios.put(
    `${process.env.REACT_APP_BASE_ENDPOINT}/product/${id}`,
    input
  );

  return data;
};

export const postProduct = async (input) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/product`,
    input
  );

  return data;
};
