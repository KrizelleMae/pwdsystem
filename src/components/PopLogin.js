import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  useDisclosure,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Heading,
  Text,
  useColorModeValue,
  useColorMode,
  useToast,
} from "@chakra-ui/react";

import Sample from "../images/sample.mp4";
import Glogin from "./glogin";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import api from "../restapi/api";
import { useNavigate } from "react-router-dom";

function PopLogin(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  let toast = useToast();
  let navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();

    let response = await api.post("/login.php", {
      email: email,
      password: password,
    });

    if (response.data.status === 1) {
      // SUCCESS LOGIN
      localStorage.setItem("id", response.data.id);
      if (response.data.role === 3) {
        navigate("/companyprofile");
      } else if (response.data.role === 2) {
        navigate("/pwdprofile");
      }
    } else if (response.data.status === 2) {
      // EMAIL DOES NOT EXIST
      toast({
        position: "top",
        title: "Email does not exist",
        variant: "top-accent",
        isClosable: true,
        status: "warning",
      });
    } else {
      toast({
        position: "top",
        title: "Invalid password",
        variant: "top-accent",
        isClosable: true,
        status: "error",
      });
    }
  };
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
          <ModalHeader></ModalHeader>
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
                py={14}
                px={10}
              >
                <form onSubmit={login}>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input
                      type="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="text"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
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
                      <Link href="/Signup" color={"blue.400"}>
                        Create Account
                      </Link>
                    </Stack>
                    <Glogin />
                    <Button colorScheme="blue" type="submit">
                      Sign in
                    </Button>
                  </Stack>
                </form>
              </Box>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default PopLogin;
