import React, { useState } from "react";
import axios from 'axios';
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
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";

const Form1 = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgcolor = useColorModeValue("teal.400", "whiteAlpha.50");
  const fontcolor = useColorModeValue("gray.50", "white");
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div id="target">
      <Heading
        className="content"
        w="100%"
        textAlign={"center"}
        fontWeight="normal"
        mb="2%"
      >

        Company Registration
        <Text className="content" fontSize={"md"} color={"gray.600"}>
          Enter the login information to your Company account. You will be able
          to create additional information after registering
        </Text>
        <Text py={0} className="content" fontSize={"md"}>
          Enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
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
      <FormLabel htmlFor="first-name" fontWeight={"normal"}>
        Company Representative
      </FormLabel>
      <Flex className="content">
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            First name
          </FormLabel>
          <Input id="first-name" placeholder="First name" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            Last name
          </FormLabel>
          <Input id="last-name" placeholder="Last name" />
        </FormControl>
      </Flex>
      <FormControl mr="5%">
        <FormLabel htmlFor="position" fontWeight={"normal"}>
          Position
        </FormLabel>
        <Input id="position" placeholder="Positon" />
      </FormControl>
      <FormControl mr="5%">
        <FormLabel htmlFor="company-name" fontWeight={"normal"}>
          Company Name
        </FormLabel>
        <Input id="first-name" placeholder="Company name" />
      </FormControl>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={"normal"}>
          Email address
        </FormLabel>
        <Input id="email" type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="password" fontWeight={"normal"} mt="2%">
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </div>
  );
};

const Form2 = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgcolor = useColorModeValue("teal.400", "whiteAlpha.50");
  const fontcolor = useColorModeValue("gray.50", "white");

  return (
    <div id="target">
      <Heading
        className="content"
        w="100%"
        textAlign={"center"}
        fontWeight="normal"
        mb="2%"
      >
        Company Profile
        <Text className="content" fontSize={"lg"} color={"gray.600"}>
          Setting up you company Profile Enjoy all of our cool
          <Link color={"blue.400"}>features</Link> ✌️
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
      <FormControl className="content" as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="Company Name"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          Company Name
        </FormLabel>
        <Input
          type="text"
          name="Company Name"
          id="Company Name"
          autoComplete="Company Name"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>
      <Flex className="content">
        <FormControl mr="5%">
          <FormLabel htmlFor="RegistrationNumber" fontWeight={"normal"}>
            Registration Number
          </FormLabel>
          <Input id="RegistrationNumber" placeholder="Registration Number" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="IncoporationDate" fontWeight={"normal"}>
            Incoporation Date
          </FormLabel>
          <Input id="IncoporationDate" placeholder="Incoporation Date" />
        </FormControl>
      </Flex>
      <Flex className="content">
        <FormControl mr="5%">
          <FormLabel htmlFor="telnumber" fontWeight={"normal"}>
            Tel Number
          </FormLabel>
          <Input id="telnumber" placeholder="Tel Number" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="Company Email Address" fontWeight={"normal"}>
            Comp. Email Add.
          </FormLabel>
          <Input id="Company Email Address" placeholder="Last name" />
        </FormControl>
      </Flex>
      <FormControl className="content" as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          Street address
        </FormLabel>
        <Input
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
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          City
        </FormLabel>
        <Input
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
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          State / Province
        </FormLabel>
        <Input
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
          htmlFor="postal_code"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          ZIP / Postal
        </FormLabel>
        <Input
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

  return (
    <div id="target">
      <Heading
        className="content"
        w="100%"
        textAlign={"center"}
        fontWeight="normal"
      >
        Company Mission And Vision
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
      <FormControl id="Mission" mt={1}>
        <FormLabel
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          Mission
        </FormLabel>
        <Textarea
          placeholder="Mission"
          rows={3}
          shadow="sm"
          focusBorderColor="brand.400"
          fontSize={{
            sm: "sm",
          }}
        />
        <FormLabel
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          Vision
        </FormLabel>
        <Textarea
          placeholder="Vision"
          rows={3}
          shadow="sm"
          focusBorderColor="brand.400"
          fontSize={{
            sm: "sm",
          }}
        />
        <FormHelperText>
          You can edit your Mission briefly upon loging in to your new account.
        </FormHelperText>
      </FormControl>
    </div>
  );
};



export default function CompanySignup(props) {
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
