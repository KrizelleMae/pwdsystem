import React, { useState } from "react";
import {
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
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Heading,
  Text,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";

import Sample from "../images/sample.mp4";
import Glogin from "./Glogin";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";

function PopLogin(props) {
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
      <Button
        display={{ base: "none", md: "inline-flex" }}
        fontSize={"sm"}
        fontWeight={600}
        color={"white"}
        bg={"teal.400"}
        _hover={{
          bg: "orange.300",
        }}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Login
      </Button>
      <Modal p="0" isCentered isOpen={isOpen} size="xl" onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack mx={"auto"}>
              <Stack align={"center"}>
                <Heading fontSize={"xl"}>Login in to your account</Heading>
                <Text fontSize={"md"} color={"gray.600"}>
                  Enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
                  ✌️
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
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={8}
              >
                <Stack>
                  <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input type="password" />
                  </FormControl>
                  <Stack spacing={10}>
                    <Stack
                      direction={{ base: "column", sm: "row" }}
                      align={"start"}
                      justify={"space-between"}
                    >
                      <Link href="" color={"blue.400"}>
                        Forgot password?
                      </Link>
                      <Link href="Loginas" color={"blue.400"}>
                        Create Account
                      </Link>
                    </Stack>
                    <Glogin />
                    <Button
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                    >
                      Sign in
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default PopLogin;
