import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./styles.css";
import Orders from "./Orders";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import NewProduct from "./Products/new";

const Admin = () => {
  return (
    <div>
      <nav>
        <ul className="admin-menu">
          <li>
            <NavLink to="/admin/orders">
              <Button color="white" colorScheme="blue">
                Orders
              </Button>
            </NavLink>
          </li>

          <li>
            <NavLink to="/admin/products">
              <Button color="white" colorScheme="blue">
                Products
              </Button>
            </NavLink>
          </li>
        </ul>
      </nav>

      <Box mt="2">
        <Routes>
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<Products />} />
          <Route path="products/new" element={<NewProduct />} />
          <Route path="products/:id" element={<ProductDetail />} />
        </Routes>
      </Box>
    </div>
  );
};

export default Admin;
