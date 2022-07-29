import { useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchProductList, deleteProduct } from "../../../api";
import { Table, Popconfirm } from "antd";
import { Text, Button, Flex } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";

const Products = () => {
  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery(
    [`admin`, `products`],
    fetchProductList
  );

  const deleteMutation = useMutation(deleteProduct, {
    // refetchQueries: [`admin`, `products`],
    onSuccess: queryClient.invalidateQueries([`admin`, `products`]),
  });

  const columns = useMemo(() => {
    return [
      {
        title: "Title",
        dataIndex: "title",
        key: "title",
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price",
      },
      {
        title: "Created At",
        dataIndex: "createdAt",
        key: "createdAt",
      },
      {
        title: "Action",
        key: "action",
        render: (record) => (
          <>
            <NavLink to={`/admin/products/${record.id}`}> Edit</NavLink>
            <Popconfirm
              title="Are you sure?"
              okText="Yes"
              cancelText="No"
              placement="left"
              onCancel={() => alert("Canceled")}
              onConfirm={() => {
                deleteMutation.mutate(record.id, {
                  onSuccess: () => {
                    console.log("silindi");
                    // queryClient.invalidateQueries([`admin`, `products`]);
                  },
                });
              }}
            >
              <a href="/#" style={{ marginLeft: 10 }}>
                Delete
              </a>
            </Popconfirm>
          </>
        ),
      },
    ];
  }, [deleteMutation]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>error: {error.message}</div>;
  }

  console.log(data);

  return (
    <div>
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="2xl" p="5">
          Products
        </Text>
        <Link to="/admin/products/new">
          <Button>New</Button>
        </Link>
      </Flex>

      <Table dataSource={data} columns={columns} rowKey="id" />
    </div>
  );
};

export default Products;
