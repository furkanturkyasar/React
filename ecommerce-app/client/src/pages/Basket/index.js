import {
  Alert,
  Box,
  Button,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { postOrder } from "../../api";
import { useBasket } from "../../contexts/BasketContext";
import styles from "./styles.module.css";

const Basket = () => {
  const [address, setAddress] = useState("");

  const initialRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const { items, removeFromBasket, emptyBasket } = useBasket();
  const total = items.reduce((acc, obj) => acc + Number(obj.price), 0);

  const handleSubmitForm = async (e) => {
    // const itemIds = items.map((item) => item.id);

    const input = {
      address,
      items,
    };

    const response = await postOrder(input);
    console.log("order response:", response);
    emptyBasket();
    onClose(
      toast({
        title: `Order Recieved!`,
        description: "As soon as possible cargo will be.",
        status: "success",
        duration: 6000,
        isClosable: true,
        position: "top",
      })
    );
  };

  return (
    <Box p="5">
      {items.length < 1 && (
        <Alert status="warning">You have not any items in your basket</Alert>
      )}

      {items.length > 0 && (
        <>
          <ul className={styles.basketUl} style={{ listStyleType: "decimal" }}>
            {items.map((item) => (
              <li key={item.id} style={{ marginBottom: 15 }}>
                <Link to={`/product/${item.id}`}>
                  <Text fontSize="18">
                    {item.title} - {item.price}$
                  </Text>
                  <Image
                    htmlWidth={200}
                    src={item.images[0]}
                    alt="basket item"
                    loading="lazy"
                  />
                </Link>

                <Button
                  onClick={() => removeFromBasket(item.id)}
                  mt="2"
                  size="md"
                  colorScheme="blue"
                >
                  Remove from basket
                </Button>
              </li>
            ))}
          </ul>
          <Box mt="10" className={styles.siparisOnaylaBox}>
            <Text fontSize="22">Total: {total}$</Text>
          </Box>
          <Button mt="2" colorScheme="green" onClick={onOpen}>
            Order
          </Button>

          <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Order</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Textarea
                    ref={initialRef}
                    placeholder="Adress"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleSubmitForm}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )}
    </Box>
  );
};

export default Basket;
