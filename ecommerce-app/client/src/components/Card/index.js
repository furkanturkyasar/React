import { Box, Image, Button } from "@chakra-ui/react";
import moment from "moment";
import { Link } from "react-router-dom";
import { useBasket } from "../../contexts/BasketContext";

const Card = ({ item }) => {
  const { addToBasket, items } = useBasket();

  const findBasketItem = items.find(
    (basket_item) => basket_item.id === item.id
  );

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
      <Link to={`/product/${item.id}`}>
        <Image src={item.images[0]} alt="product" />
        <Box p="6">
          <Box display="flex" alignItems="baseline">
            {moment(item.createdAt).format("DD/MM/YYYY")}
          </Box>
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            {item.title}
          </Box>
          <Box>{item.price}$</Box>
        </Box>
      </Link>
      <Button
        colorScheme={findBasketItem ? "blackAlpha" : "blue"}
        variant="solid"
        onClick={() => addToBasket(item, findBasketItem)}
      >
        {findBasketItem ? "Remove from basket" : "Add to basket"}
      </Button>
    </Box>
  );
};

export default Card;
