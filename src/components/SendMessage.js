import React, { useState } from "react";
import {
  Box,
  useColorModeValue,
  useColorMode,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  AspectRatio,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";

import Contactform from "../components/Contactform";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";

function SendMessage(props) {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgcolor = useColorModeValue("teal.400", "whiteAlpha.50");
  const fontcolor = useColorModeValue("gray.50", "white");

  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) " />
  );
  const OverlayTwo = () => (
    <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <div>
      <Link
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Send Message
      </Link>
      <Modal isCentered isOpen={isOpen} size="2xl" onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalBody>
            <Flex
              align={"center"}
              justify={"center"}
              bg={useColorModeValue("gray.50", "gray.800")}
            >
              <Stack spacing={8} mx={"auto"} maxW={"lg"}>
                <Stack align={"center"}>
                  <Heading fontSize={"4xl"}>Send Email</Heading>
                  <Text fontSize={"lg"} color={"gray.600"}>
                    Enjoy all of our cool{" "}
                    <Link color={"blue.400"}>features</Link> ✌️{" "}
                    <Button
                      aria-label="Toggle Color Mode"
                      onClick={toggleColorMode}
                      _focus={{ boxShadow: "none" }}
                      w="fit-content"
                      {...props}
                    >
                      {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
                    </Button>
                  </Text>
                </Stack>
                <Box
                  w={"full"}
                  rounded={"lg"}
                  bg={useColorModeValue("white", "gray.700")}
                  boxShadow={"lg"}
                  p={5}
                >
                  <Contactform />
                </Box>
              </Stack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default SendMessage;
