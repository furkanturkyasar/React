import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../../api";
import { Box, Text, Button } from "@chakra-ui/react";
import moment from "moment";
import ImageGallery from "react-image-gallery";
import { useBasket } from "../../contexts/BasketContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToBasket, items } = useBasket();

  const { isLoading, isError, data } = useQuery(["product", id], () =>
    fetchProduct(id)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error.</div>;
  }

  console.log(data);

  const findBasketItem = items.find((item) => item.id === id);
  const images = data.images.map((url) => ({ original: url }));

  return (
    <div>
      <Button
        colorScheme={findBasketItem ? "blackAlpha" : "blue"}
        onClick={() => addToBasket(data, findBasketItem)}
      >
        {findBasketItem ? "Remove from basket" : "Add to basket"}
      </Button>
      <Text as="h2" fontSize="2xl">
        {data.title}
      </Text>
      <Text>{moment(data.createdAt).format("DD/MM/YYYY")}</Text>
      <p>{data.description}</p>

      {/* <img src={data.image} alt="" /> */}

      <Box margin="10">
        <ImageGallery items={images} />
      </Box>
    </div>
  );
};

export default ProductDetail;
