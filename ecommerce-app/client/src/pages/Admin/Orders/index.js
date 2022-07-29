import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchOrders } from "../../../api";
import {
  Th,
  Tbody,
  Tr,
  Td,
  Table,
  Text,
  Thead,
  TableCaption,
} from "@chakra-ui/react";

const Orders = () => {
  const { isLoading, isError, data, error } = useQuery(
    [`admin`, `orders`],
    fetchOrders
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error {error.message}</div>;
  }

  console.log(data);

  return (
    <div>
      <Text fontSize="2xl" p="5">
        Orders
      </Text>

      <Table variant="simple">
        <TableCaption>Order Details</TableCaption>
        <Thead>
          <Tr>
            <Th>Order Id</Th>
            <Th>Address</Th>
            <Th isNumeric>Items</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr key={item.id}>
              <Td>{item.id}</Td>
              <Td>{item.address}</Td>
              <Td isNumeric>{item.items.length}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default Orders;
