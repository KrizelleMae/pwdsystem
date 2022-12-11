import React, { useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  Text,
  useColorMode,
  useColorModeValue,
  Link,
  Center,
  VStack,
  Divider,
  useToast,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import api from "../restapi/api";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function PwdRegistration(props) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const toast = useToast();

  let navigate = useNavigate();
  // REGISTRATION FUNCTION
  const submit = async (e) => {
    e.preventDefault();

    // console.log("Click");

    let response = await api.post("/pwd/post_pwd_reg.php", {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    });

    // console.log(response.data);

    if (response.data.status === 1) {
      //   console.log(response.data.message);
      localStorage.setItem("id", response.data.id);
      navigate("/pwdprofile");
      // console.log(response.data.id);
    } else if (response.data.status === 2) {
      console.log(response.data.message);
    } else {
      console.log(response.data.message);
    }
  };

  const { colorMode, toggleColorMode } = useColorMode();
  const bgcolor = useColorModeValue("teal.400", "whiteAlpha.50");
  const fontcolor = useColorModeValue("gray.50", "white");
  const [fontSize, setFontSize] = useState(16);

  return (
    <div id="target">
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={"700"}
        p={6}
        m="10px auto"
      >
        <Button
          aria-label="Toggle Color Mode"
          onClick={toggleColorMode}
          _focus={{ boxShadow: "none" }}
          w="fit-content"
          {...props}
        >
          {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
        </Button>
        <Button
          mx={2}
          aria-label="Toggle Color Mode"
          onClick={() => setFontSize(fontSize + 5)}
        >
          A+
        </Button>
        <Button
          aria-label="Toggle Color Mode"
          onClick={() => setFontSize(fontSize - 5)}
        >
          A-
        </Button>
        <Heading
          className="content"
          w="100%"
          textAlign={"center"}
          fontWeight="normal"
        >
          PWD User Registration
          {/* <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>transcript{transcript}</p>
    </div> */}
        </Heading>{" "}
        <Alert status="info" fontSize={14} mb={10}>
          <AlertIcon />
          Enter the login information to your account. You will be able to
          create additional information after registering.
        </Alert>
        <form onSubmit={submit}>
          <Flex>
            <FormControl isRequired mr="5%">
              <FormLabel
                fontSize={fontSize}
                htmlFor="first-name"
                fontWeight={"normal"}
              >
                First name
              </FormLabel>
              <Input
                fontSize={fontSize}
                // value={transcript}
                id="first-name"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel
                fontSize={fontSize}
                htmlFor="last-name"
                fontWeight={"normal"}
              >
                Last name
              </FormLabel>
              <Input
                fontSize={fontSize}
                onChange={(e) => setLastname(e.target.value)}
                id="last-name"
              />
            </FormControl>
          </Flex>
          <FormControl isRequired my="2%">
            <FormLabel
              fontSize={fontSize}
              htmlFor="email"
              fontWeight={"normal"}
            >
              Email address
            </FormLabel>
            <Input
              fontSize={fontSize}
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormHelperText>
              Make sure your email account is active.
            </FormHelperText>
          </FormControl>

          <FormControl isRequired>
            <FormLabel
              fontSize={fontSize}
              htmlFor="password"
              fontWeight={"normal"}
              mt="2%"
            >
              Password
            </FormLabel>
            <InputGroup size="md">
              <Input
                fontSize={fontSize}
                pr="4.5rem"
                type={show ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Center>
            <Button
              m={5}
              w="9rem"
              colorScheme="blue"
              variant="solid"
              type="submit"
            >
              Submit
            </Button>
          </Center>
        </form>
      </Box>
    </div>
  );
}

export default PwdRegistration;
