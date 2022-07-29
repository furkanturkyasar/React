import { Grid, Box, Flex, Button } from "@chakra-ui/react";
import React from "react";
import Card from "../../components/Card";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchProductList } from "../../api";

function Products() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(["products"], fetchProductList, {
    getNextPageParam: (lastGroup, allGroups) => {
      const morePagesExist = lastGroup?.length === 10;
      if (!morePagesExist) return;

      return allGroups.length + 1;
    },
  });

  if (status === "loading") return "Loading...";

  if (status === "error") return "An error has occurred: " + error.message;

  console.log("data", data);

  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {/* {data.map((item, key) => (
          <Card item={item} key={key} />
        ))} */}
        {data.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.map((item) => (
              <Box w="100%" key={item.id}>
                <Card item={item} />
              </Box>
            ))}
          </React.Fragment>
        ))}
      </Grid>

      <Flex mt="10" justifyContent="center">
        <Button
          onClick={() => fetchNextPage()}
          isLoading={isFetchingNextPage}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </Button>
      </Flex>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
}

export default Products;
