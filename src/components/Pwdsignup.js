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
  Stack,
  Checkbox,
  CheckboxGroup,
  HStack,
  Radio,
  RadioGroup,
  Center,
  VStack,
  Divider,
} from "@chakra-ui/react";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useSpeechSynthesis } from "react-speech-kit";
import { useToast } from "@chakra-ui/react";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import "../css/checkbox.css";
const Form1 = (props) => {
  const [value, setValue] = useState(
    "Enter the login information to your account. You will be able to create additional information after registering! You can make adjustment of the font size, there is button above. Starting with Fistname, Lastname, Email Address and Password"
  );
  const [Firstname, setFirstname] = useState(
    "You are now inputing your firstname"
  );
  const [Lastname, setLastname] = useState(
    "You are now inputing your Lastname"
  );
  const [Email, setEmail] = useState(
    "You are now inputing your Email address. Make sure your email address is active"
  );
  const [Password, setPassword] = useState(
    "You are now inputing your Password. Your password will be send to your email address above incase of memory lost"
  );
  const { speak } = useSpeechSynthesis();

  const { colorMode, toggleColorMode } = useColorMode();
  const bgcolor = useColorModeValue("teal.400", "whiteAlpha.50");
  const fontcolor = useColorModeValue("gray.50", "white");
  const [fontSize, setFontSize] = useState(25);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div id="target">
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
        mb="2%"
      >
        PWD User Registration
        <Text
          onClick={() => speak({ text: value })}
          className="content"
          fontSize={fontSize}
          color={"gray.600"}
        >
          Enter the login information to your account. You will be able to
          create additional information after registering!
          <Link color={"blue.400"}>Click me🎤</Link>
        </Text>
        <Text fontSize={fontSize} className="content">
          Enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
        </Text>
        {/* <div>
          <p>Microphone: {listening ? "on" : "off"}</p>
          <button onClick={SpeechRecognition.startListening}>Start</button>
          <button onClick={SpeechRecognition.stopListening}>Stop</button>
          <button onClick={resetTranscript}>Reset</button>
          <p>transcript{transcript}</p>
        </div> */}
      </Heading>
      <Flex className="content">
        <FormControl mr="5%">
          <FormLabel
            fontSize={fontSize}
            htmlFor="first-name"
            fontWeight={"normal"}
          >
            First name
          </FormLabel>
          <Input
            fontSize={fontSize}
            onClick={() => speak({ text: Firstname })}
            // onClick={SpeechRecognition.startListening}
            // value={transcript}
            id="first-name"
          />
        </FormControl>

        <FormControl>
          <FormLabel
            fontSize={fontSize}
            htmlFor="last-name"
            fontWeight={"normal"}
          >
            Last name
          </FormLabel>
          <Input
            onClick={() => speak({ text: Lastname })}
            fontSize={fontSize}
            // onClick={SpeechRecognition.startListening}
            id="last-name"
          />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel fontSize={fontSize} htmlFor="email" fontWeight={"normal"}>
          Email address
        </FormLabel>
        <Input
          onClick={() => speak({ text: Email })}
          fontSize={fontSize}
          id="email"
          type="email"
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl>
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
            onClick={() => speak({ text: Password })}
            fontSize={fontSize}
            pr="4.5rem"
            type={show ? "text" : "password"}
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
          w="7rem"
          colorScheme="red"
          variant="solid"
          onClick={() => {
            toast({
              title: "Account created.",
              description: "We've created your account for you.",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          }}
        >
          Submit
        </Button>
      </Center>
    </div>
  );
};

const Form2 = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgcolor = useColorModeValue("teal.400", "whiteAlpha.50");
  const fontcolor = useColorModeValue("gray.50", "white");
  const [fontSize, setFontSize] = useState(16);
  // State with list of all checked item
  const [checked, setChecked] = useState([]);

  const [Deaf, setDeaf] = useState("You Checked Deaf or hard of Hearing");
  const { speak } = useSpeechSynthesis();
  const checkList = [
    " Deaf or hard of Hearing",
    " Intellectual Disability",
    " Learning Disability",
    " Mental Disability",
    " Physical Disability",
    " Phychosocial Disability",
    " Speech Disability",
    " Cancer (RA11215)",
    " Rare Disease(RA10947)",
  ];

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + " ✅ ," + item;
      })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";
  return (
    <div id="target">
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
        mb="2%"
      >
        Disability
        <Text className="content" fontSize={fontSize} color={"gray.600"}>
          Enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
        </Text>
      </Heading>
      <Stack spacing={[5, 5]} direction={["row", "column"]} fontSize={fontSize}>
        <FormControl as={GridItem} colSpan={[6, 3]}>
          <FormLabel>
            <Text fontSize={fontSize} className="content">
              Type of Disability
            </Text>
          </FormLabel>
          {/* <Select
          id="country"
          name="country"
          autoComplete="country"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        >
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </Select> */}

          <Box>
            <div>
              <div className="checkList">
                <div>
                  <Box
                    className="content"
                    fontSize={fontSize}
                    as="button"
                    borderRadius="md"
                    bg="teal"
                    color="white"
                    px={2}
                    py={2}
                    mb={2}
                  >
                    Items checked are:
                    <Box
                      id="choice"
                      className="content"
                      fontSize={fontSize}
                      as="button"
                      borderRadius="md"
                      bg="powderblue"
                      color="Black"
                      px={2}
                      py={2}
                      border={2}
                    >{`     ${checkedItems}  `}</Box>
                  </Box>
                </div>
                <div className="list-container">
                  {checkList.map((item, index) => (
                    <div className="inside-container" key={index}>
                      <Box borderRadius="md" px={2} my={2} h={8}>
                        <Divider />
                        <input
                          colorScheme="red"
                          className="chck"
                          value={item}
                          type="checkbox"
                          onChange={handleCheck}
                        />
                        <span className={isChecked(item)}>{item}</span>
                      </Box>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Box>
          {/* <CheckboxGroup className="content" colorScheme="green">
            <vStack
              className="content"
              spacing={[10, 1]}
              direction={["row", "column"]}
              fontSize={fontSize}
            >
              <Checkbox mr="5" value="Deaf">
                Deaf or hard of Hearing
              </Checkbox>
              <Checkbox mr="5" value="Intellectual">
                Intellectual Disability
              </Checkbox>
              <Checkbox mr="5" value="Learning">
                Learning Disability
              </Checkbox>
              <Checkbox mr="5" value="Mental">
                Mental Disability
              </Checkbox>
              <Checkbox mr="5" value="Physical">
                Physical Disability
              </Checkbox>
              <Checkbox mr="5" value="Phycosocial Disability">
                Phychosocial Disability
              </Checkbox>
              <Checkbox mr="5" value="Speech Disability">
                Speech Disability
              </Checkbox>
              <Checkbox mr="5" value="Cancer">
                Cancer (RA11215)
              </Checkbox>
              <Checkbox mr="5" value="Rare Disease">
                Rare Disease(RA10947)
              </Checkbox>
            </vStack>
          </CheckboxGroup> */}
        </FormControl>
        <FormControl className="content" id="Conginital/inborn" isRequired>
          <FormLabel fontSize={fontSize}>Cause of Disability</FormLabel>
          <Select
            id="country"
            name="country"
            autoComplete="country"
            placeholder="Select option if Conginital/inborn"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            fontSize={fontSize}
          >
            <option>Autism</option>
            <option>ADHD</option>
            <option>Cerebral Palsy</option>
            <option>Down Syndrome</option>
          </Select>
          <Select
            fontSize={fontSize}
            mt={2}
            id="country"
            name="country"
            autoComplete="country"
            placeholder="Select option if Acquired"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
          >
            <option>Chronic Illness</option>
            <option>Cerebral Palsy</option>
            <option>Injury</option>
          </Select>
        </FormControl>
      </Stack>
      <FormControl className="content" as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="street_address"
          fontSize={fontSize}
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          Street address
        </FormLabel>
        <Input
          fontSize={fontSize}
          type="text"
          name="street_address"
          id="street_address"
          autoComplete="street-address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl className="content" as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          fontSize={fontSize}
          htmlFor="city"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          City
        </FormLabel>
        <Input
          fontSize={fontSize}
          type="text"
          name="city"
          id="city"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value="Zamboanga City"
        />
      </FormControl>

      <FormControl className="content" as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="state"
          fontSize={fontSize}
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          State / Province
        </FormLabel>
        <Input
          fontSize={fontSize}
          type="text"
          name="state"
          id="state"
          autoComplete="state"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value="Zamboanga Del Sur"
        />
      </FormControl>

      <FormControl className="content" as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          fontSize={fontSize}
          htmlFor="postal_code"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          ZIP / Postal
        </FormLabel>
        <Input
          fontSize={fontSize}
          type="text"
          name="postal_code"
          id="postal_code"
          autoComplete="postal-code"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          value="7000"
        />
      </FormControl>
    </div>
  );
};

const Form3 = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgcolor = useColorModeValue("teal.400", "whiteAlpha.50");
  const fontcolor = useColorModeValue("gray.50", "white");
  const [fontSize, setFontSize] = useState(25);

  return (
    <div id="target">
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
        Your Skills
        <Text className="content" fontSize={"md"} color={"gray.600"}>
          Enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️{" "}
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
      </Heading>
      <SimpleGrid className="content" columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel m="2">Educational Attainment</FormLabel>
          <RadioGroup colorScheme="green" defaultValue={"None"}>
            <hStack>
              <Radio value="None" isDisabled>
                None
              </Radio>
              <Radio mr="2" value="Kindergarten">
                Kindergarten
              </Radio>
              <Radio mr="2" value="Elementary">
                Elementary
              </Radio>
              <Radio mr="2" value="Junior High School">
                Junior High School{" "}
              </Radio>
              <Radio mr="2" value="Senior High School">
                Senior High School
              </Radio>
              <Radio mr="2" value="College">
                College
              </Radio>
              <Radio mr="2" value="Vocational">
                Vocational
              </Radio>
              <Radio mr="2" value="Post Graduate">
                Post Graduate
              </Radio>
            </hStack>
          </RadioGroup>
          <FormLabel m="2">Soft Skills</FormLabel>
          <CheckboxGroup colorScheme="green">
            <Stack
              spacing={[5, 2]}
              direction={["row", "column"]}
              fontSize={fontSize}
            >
              <Checkbox value="Intellectual">Enter Personal Skills</Checkbox>
              <Checkbox value="Learning">Communication Skills</Checkbox>
              <Checkbox value="Mental">Editing</Checkbox>{" "}
              <Checkbox value="Physical">Writing</Checkbox>
            </Stack>
          </CheckboxGroup>
          <FormLabel m="2">Hard Skills</FormLabel>
          <CheckboxGroup colorScheme="green">
            <Stack
              spacing={[5, 1]}
              direction={["row", "column"]}
              fontSize={fontSize}
            >
              <Checkbox value="Phycosocial Disability">
                Computer Skills
              </Checkbox>
              <Checkbox value="Speech Disability">
                Administrative Skills
              </Checkbox>
              <Checkbox value="Cancer">Customer Service Skills</Checkbox>
              <Checkbox value="Rare Disease">Skills</Checkbox>
            </Stack>
          </CheckboxGroup>
        </FormControl>

        <FormControl id="email" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: "gray.50",
            }}
          >
            Others
          </FormLabel>
          <Textarea
            placeholder="example / example /  example"
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: "sm",
            }}
          />
          <FormHelperText>
            You can edit your profile briefly upon loging in to your new
            account.
          </FormHelperText>
        </FormControl>
      </SimpleGrid>
    </div>
  );
};

export default function Pwdsignup(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgcolor = useColorModeValue("teal.400", "whiteAlpha.50");
  const fontcolor = useColorModeValue("gray.50", "white");

  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={"900"}
        p={6}
        m="10px auto"
        as="form"
      >
        <Progress
          hasStripe
          borderRadius="10"
          value={progress}
          mb="1%"
          mx="1%"
          isAnimated
          size="md"
          colorScheme="teal"
        ></Progress>
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: "Account created.",
                    description: "We've created your account for you.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  });
                }}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
