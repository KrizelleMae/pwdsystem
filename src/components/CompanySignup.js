import React, { useState } from "react";
import axios from "axios";
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
  InputGroup,
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
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import { BsSun, BsMoonStarsFill, BsLink } from "react-icons/bs";
import api from "../restapi/api";
import { useNavigate } from "react-router-dom";

export default function CompanySignup(props) {
  // INITIALIZE VAR

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [regNum, setRegNum] = useState("");
  const [incDate, setIncDate] = useState("");
  const [telNum, setTelNum] = useState("");
  const [compEmail, setCompEmail] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [website, setWebsite] = useState("");

  const { colorMode, toggleColorMode } = useColorMode();
  const bgcolor = useColorModeValue("teal.400", "whiteAlpha.50");
  const fontcolor = useColorModeValue("gray.50", "white");
  const [fontSize, setFontSize] = useState(16);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(50);

  let navigate = useNavigate();

  const postCompany = async (e) => {
    e.preventDefault();

    let response = await api.post("/company/post_company_reg.php", {
      email: email,
      password: password,
      firstname: firstname,
      lastname: lastname,
      position: position,
      companyName: companyName,
      website: website,
      regNum: regNum,
      incDate: incDate,
      telNum: telNum,
      compEmail: compEmail,
      address: address,
    });

    if (response.data.status === 1) {
      localStorage.setItem("id", response.data.id);
      navigate("/companyprofile");
    }
  };
  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={"900"}
        p={10}
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
        />
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
        <form onSubmit={postCompany}>
          {step === 1 ? (
            <>
              <Heading
                className="content"
                w="100%"
                textAlign={"center"}
                fontWeight="normal"
              >
                Company Registration
              </Heading>
              <Alert status="info" fontSize={14}>
                <AlertIcon />
                Input the information to your Company account. You will be able
                to create additional information after signing up.
              </Alert>
              {/* DATA */}
              <Box mt={10}>
                <Text fontWeight={600} textTransform="uppercase">
                  Company Representative
                </Text>
                <HStack mt={5}>
                  <FormControl fontWeight={600} isRequired>
                    <FormLabel fontSize={fontSize} htmlFor="first-name">
                      First name
                    </FormLabel>
                    <Input
                      placeholder="First name"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </FormControl>

                  <FormControl fontWeight={600} isRequired>
                    <FormLabel fontSize={fontSize} htmlFor="last-name">
                      Last name
                    </FormLabel>
                    <Input
                      id="last-name"
                      placeholder="Last name"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </FormControl>
                </HStack>
                <FormControl fontWeight={600} isRequired mt={3}>
                  <FormLabel fontSize={fontSize} htmlFor="position">
                    Position
                  </FormLabel>
                  <Input
                    id="position"
                    placeholder="Positon"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                  />
                </FormControl>
              </Box>

              <Text fontWeight={600} textTransform="uppercase" mt={12}>
                ACCOUNT DETAILS
              </Text>
              <FormControl fontWeight={600} isRequired mt={3}>
                <FormLabel fontSize={fontSize} htmlFor="email" fontWeight={600}>
                  Email address
                </FormLabel>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <FormControl fontWeight={600} isRequir>
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
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </>
          ) : (
            <>
              <Heading
                className="content"
                w="100%"
                textAlign={"center"}
                fontWeight="normal"
                mb="2%"
              >
                Company Profile
                <Text className="content" fontSize={"lg"} color={"gray.600"}>
                  Complete your company profile to continue. Kindly input the
                  required fields to continue.
                </Text>
              </Heading>
              <FormControl
                fontWeight={600}
                isRequired
                className="content"
                as={GridItem}
                colSpan={6}
              >
                <FormLabel
                  fontSize={fontSize}
                  htmlFor="Company Name"
                  fontWeight={600}
                  color="gray.700"
                  _dark={{
                    color: "gray.50",
                  }}
                >
                  Company Name
                </FormLabel>
                <Input
                  type="text"
                  autoComplete="Company Name"
                  focusBorderColor="brand.400"
                  shadow="sm"
                  w="full"
                  rounded="md"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </FormControl>

              <FormControl fontWeight={600} className="content">
                <FormLabel
                  fontSize={fontSize}
                  fontWeight={600}
                  color="gray.700"
                  _dark={{
                    color: "gray.50",
                  }}
                  display="flex"
                  alignItems="center"
                >
                  Company Website Link <BsLink />
                </FormLabel>
                <Input
                  type="link"
                  placeholder="https://companyme.com/"
                  focusBorderColor="brand.400"
                  shadow="sm"
                  w="full"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  rounded="md"
                />
              </FormControl>
              <HStack>
                <FormControl fontWeight={600} isRequired>
                  <FormLabel
                    fontSize={fontSize}
                    htmlFor="RegistrationNumber"
                    fontWeight={600}
                  >
                    Registration Number
                  </FormLabel>
                  <Input
                    id="RegistrationNumber"
                    placeholder="00-0000-00"
                    value={regNum}
                    onChange={(e) => setRegNum(e.target.value)}
                  />
                </FormControl>

                <FormControl fontWeight={600} isRequired>
                  <FormLabel
                    fontSize={fontSize}
                    htmlFor="IncoporationDate"
                    fontWeight={600}
                  >
                    Incorporation Date
                  </FormLabel>
                  <Input
                    type="date"
                    id="IncoporationDate"
                    placeholder="Incoporation Date"
                    value={incDate}
                    onChange={(e) => setIncDate(e.target.value)}
                  />
                </FormControl>
              </HStack>
              <HStack mt={5}>
                <FormControl fontWeight={600} isRequired>
                  <FormLabel
                    fontSize={fontSize}
                    htmlFor="telnumber"
                    fontWeight={600}
                  >
                    Telephone
                  </FormLabel>
                  <Input
                    id="telnumber"
                    placeholder="+63"
                    value={telNum}
                    onChange={(e) => setTelNum(e.target.value)}
                  />
                </FormControl>

                <FormControl fontWeight={600} isRequired>
                  <FormLabel
                    fontSize={fontSize}
                    htmlFor="Company Email Address"
                    fontWeight={600}
                  >
                    Company's Email Address
                  </FormLabel>
                  <Input
                    id="Company Email Address"
                    placeholder="companyme@gmail.com"
                    value={compEmail}
                    onChange={(e) => setCompEmail(e.target.value)}
                  />
                </FormControl>
              </HStack>

              <FormControl
                fontWeight={600}
                isRequired
                className="content"
                as={GridItem}
                colSpan={6}
              >
                <FormLabel
                  fontSize={fontSize}
                  htmlFor="street_address"
                  fontWeight="md"
                  color="gray.700"
                  _dark={{
                    color: "gray.50",
                  }}
                >
                  Company Address
                </FormLabel>
                <Input
                  type="text"
                  focusBorderColor="brand.400"
                  shadow="sm"
                  w="full"
                  onChange={(e) => setAddress(e.target.value)}
                  rounded="md"
                  value={address}
                />
              </FormControl>
            </>
          )}
        </form>
        {/* FORM CLOSE */}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 50);
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
                isDisabled={step === 2}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 2) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 50);
                  }
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 2 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={postCompany}
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
