import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import Glogin from "./Glogin";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
export default function NewLogin(props) {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgcolor = useColorModeValue("teal.400", "whiteAlpha.50");
  const fontcolor = useColorModeValue("gray.50", "white");
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Create your PWD account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
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
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
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
                <Link href="Signup" color={"blue.400"}>
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
    </Flex>
  );
}
