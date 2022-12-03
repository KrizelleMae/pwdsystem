import Sidebar from "../components/Sidebar";
import {
  Flex,
  Text,
  Box,
  Link,
  IconButton,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Stack,
  Heading,
  useColorMode,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  showPassword,
  setShowPassword,
  InputRightElement,
  useColorModeValue,
  InputGroup,
  Checkbox,
  CheckboxGroup,
  colorMode,
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import NewSignup from "../components/Pwdsignup";
import Top_Navigation from "../components/Top_Navigation";
import "../css/navbar.css";
import SignupAs from "../components/SignupAs";
export default function Home(props) {
  const [showPassword, setShowPassword] = useState(false);

  const { colorMode, toggleColorMode } = useColorMode();
  const bgcolor = useColorModeValue("teal.400", "whiteAlpha.50");

  const fontcolor = useColorModeValue("gray.50", "white");
  return (
    <div>
      <Top_Navigation />
      <SignupAs />
      {/* <center>
        <box>
          <Tabs isFitted variant="enclosed" width="4xl" mt={10}>
            <TabList>
              <Tab bg={bgcolor}>
                <Text color={fontcolor}>Step 1 Profile</Text>
              </Tab>
              <Tab bg={bgcolor}>
                <Text color={fontcolor}>Step 2 Disability</Text>
              </Tab>
              <Tab bg={bgcolor}>
                <Text color={fontcolor}>Step 3 Skills</Text>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel px={0} py={0}>
                <Flex
                  minH={"100vh"}
                  align={"center"}
                  justify={"center"}
                  bg={useColorModeValue("gray.50", "gray.800")}
                >
                  <Stack spacing={10} mx={"auto"} width="100%" py={12} px={6}>
                    <Stack align={"center"} w="100%">
                      <Heading fontSize={"4xl"} textAlign={"center"}>
                        Sign up
                      </Heading>
                      <Text fontSize={"lg"} color={"gray.600"}>
                        Enter the login information to your account. You will be
                        able to create additional information after registering
                        ✌️
                      </Text>

                      <Button
                        aria-label="Toggle Color Mode"
                        onClick={toggleColorMode}
                        _focus={{ boxShadow: "none" }}
                        w="fit-content"
                        {...props}
                      >
                        {colorMode === "light" ? (
                          <BsMoonStarsFill />
                        ) : (
                          <BsSun />
                        )}
                      </Button>
                    </Stack>
                    <Box
                      width="100%"
                      rounded={"lg"}
                      bg={useColorModeValue("white", "gray.700")}
                      boxShadow={"lg"}
                      p={8}
                    >
                      <Stack spacing={4}>
                        <HStack>
                          <Box>
                            <FormControl id="firstName" isRequired>
                              <FormLabel>Username</FormLabel>
                              <Input type="text" />
                            </FormControl>
                          </Box>
                        </HStack>
                        <HStack>
                          <Box>
                            <FormControl id="email" isRequired>
                              <FormLabel>Email address</FormLabel>
                              <Input type="email" />
                            </FormControl>
                          </Box>
                        </HStack>
                        <HStack>
                          <Box>
                            <FormControl id="password" isRequired>
                              <FormLabel>Password</FormLabel>
                              <InputGroup>
                                <Input
                                  type={showPassword ? "text" : "password"}
                                />
                                <InputRightElement h={"full"}>
                                  <Button
                                    variant={"ghost"}
                                    onClick={() =>
                                      setShowPassword(
                                        (showPassword) => !showPassword
                                      )
                                    }
                                  >
                                    {showPassword ? (
                                      <ViewIcon />
                                    ) : (
                                      <ViewOffIcon />
                                    )}
                                  </Button>
                                </InputRightElement>
                              </InputGroup>
                            </FormControl>
                          </Box>
                        </HStack>
                        <Stack spacing={10} pt={2}>
                          <Button
                            loadingText="Submitting"
                            size="lg"
                            bg={"blue.400"}
                            color={"white"}
                            _hover={{
                              bg: "blue.500",
                            }}
                          >
                            Sign up
                          </Button>
                        </Stack>
                        <Stack pt={6}>
                          <Text align={"center"}>
                            Already a user?{" "}
                            <Link href="Login" color={"blue.400"}>
                              Login
                            </Link>
                          </Text>
                        </Stack>
                      </Stack>
                    </Box>
                  </Stack>
                </Flex>
              </TabPanel>
              <TabPanel px={0} py={0}>
                <Flex
                  minH={"100vh"}
                  align={"center"}
                  justify={"center"}
                  bg={useColorModeValue("gray.50", "gray.800")}
                >
                  <Stack spacing={10} mx={"auto"} width="100%" py={12} px={6}>
                    <Stack align={"center"} w="100%">
                      <Heading fontSize={"4xl"} textAlign={"center"}>
                        Disability
                      </Heading>
                      <Text fontSize={"lg"} color={"gray.600"}>
                        Enter the login information to your account. You will be
                        able to create additional information after registering
                        ✌️
                      </Text>
                      <Button
                        aria-label="Toggle Color Mode"
                        onClick={toggleColorMode}
                        _focus={{ boxShadow: "none" }}
                        w="fit-content"
                        {...props}
                      >
                        {colorMode === "light" ? (
                          <BsMoonStarsFill />
                        ) : (
                          <BsSun />
                        )}
                      </Button>
                    </Stack>
                    <Box
                      width="100%"
                      rounded={"lg"}
                      bg={useColorModeValue("white", "gray.700")}
                      boxShadow={"lg"}
                      p={8}
                    >
                      <Stack spacing={4}>
                        <HStack>
                          <Box>
                            <FormControl id="Disability" isRequired pt="20px">
                              <FormLabel>Type of Disability</FormLabel>
                              <CheckboxGroup colorScheme="green">
                                <Stack
                                  spacing={[5, 1]}
                                  direction={["row", "column"]}
                                  fontSize={"lg"}
                                >
                                  <Checkbox value="Deaf">
                                    Deaf or hard of Hearing
                                  </Checkbox>
                                  <Checkbox value="Intellectual">
                                    Intellectual Disability
                                  </Checkbox>
                                  <Checkbox value="Learning">
                                    Learning Disability
                                  </Checkbox>
                                  <Checkbox value="Mental">
                                    Mental Disability
                                  </Checkbox>{" "}
                                  <Checkbox value="Physical">
                                    Physical Disability
                                  </Checkbox>
                                </Stack>
                              </CheckboxGroup>
                            </FormControl>
                          </Box>
                          <Box>
                            <FormControl id="firstName" isRequired>
                              <FormLabel></FormLabel>
                              <CheckboxGroup colorScheme="green">
                                <Stack
                                  spacing={[5, 1]}
                                  direction={["row", "column"]}
                                  fontSize={"lg"}
                                >
                                  <Checkbox value="Phycosocial Disability">
                                    Phychosocial Disability
                                  </Checkbox>
                                  <Checkbox value="Speech Disability">
                                    Speech Disability
                                  </Checkbox>
                                  <Checkbox value="Cancer">
                                    Cancer (RA11215)
                                  </Checkbox>
                                  <Checkbox value="Rare Disease">
                                    Rare Disease(RA10947)
                                  </Checkbox>{" "}
                                </Stack>
                              </CheckboxGroup>
                            </FormControl>
                          </Box>
                          <Box>
                            <FormControl id="Conginital/inborn" isRequired>
                              <FormLabel>Congenital/Inborn</FormLabel>
                              <CheckboxGroup colorScheme="green">
                                <Stack
                                  spacing={[5, 1]}
                                  direction={["row", "column"]}
                                  fontSize={"lg"}
                                >
                                  <Checkbox value="Autism">Autisim</Checkbox>
                                  <Checkbox value="ADHD">ADHD</Checkbox>
                                  <Checkbox value="Cerebral Palsy">
                                    Cerebral Palsy
                                  </Checkbox>
                                  <Checkbox value="Down Syndrome">
                                    Down Syndrome{" "}
                                  </Checkbox>{" "}
                                </Stack>
                              </CheckboxGroup>
                            </FormControl>
                          </Box>
                          <Box>
                            <FormControl id="Conginital/inborn" isRequired>
                              <FormLabel>Acquired</FormLabel>
                              <CheckboxGroup colorScheme="green">
                                <Stack
                                  spacing={[5, 1]}
                                  direction={["row", "column"]}
                                  fontSize={"lg"}
                                >
                                  <Checkbox value="Injury">Injury</Checkbox>
                                  <Checkbox value="Cerebral Palsy">
                                    Cerebral Palsy
                                  </Checkbox>
                                  <Checkbox value="Cronic Illness">
                                    Cronic Illness{" "}
                                  </Checkbox>{" "}
                                </Stack>
                              </CheckboxGroup>
                            </FormControl>
                          </Box>
                        </HStack>
                        <Box>
                          <FormControl id="Others">
                            <FormLabel>Others</FormLabel>
                            <Input type="text" placeholder="Other" />
                          </FormControl>
                        </Box>
                        <Stack spacing={10} pt={2}>
                          <Button
                            loadingText="Submitting"
                            w="50%"
                            mx="10px"
                            size="lg"
                            bg={"blue.400"}
                            color={"white"}
                            _hover={{
                              bg: "blue.500",
                            }}
                          >
                            Sign up
                          </Button>
                        </Stack>
                        <Stack pt={6}>
                          <Text align={"center"}>
                            Already a user?{" "}
                            <Link href="Login" color={"blue.400"}>
                              Login
                            </Link>
                          </Text>
                        </Stack>
                      </Stack>
                    </Box>
                  </Stack>
                </Flex>
              </TabPanel>
              <TabPanel px={0} py={0}>
                <Flex
                  minH={"100vh"}
                  align={"center"}
                  justify={"center"}
                  bg={useColorModeValue("gray.50", "gray.800")}
                >
                  <Stack spacing={10} mx={"auto"} width="100%" py={12} px={6}>
                    <Stack align={"center"} w="100%">
                      <Heading fontSize={"4xl"} textAlign={"center"}>
                        Your Skills
                      </Heading>
                      <Text fontSize={"lg"} color={"gray.600"}>
                        Enter the login information to your account. You will be
                        able to create additional information after registering
                        ✌️
                      </Text>
                      <Button
                        aria-label="Toggle Color Mode"
                        onClick={toggleColorMode}
                        _focus={{ boxShadow: "none" }}
                        w="fit-content"
                        {...props}
                      >
                        {colorMode === "light" ? (
                          <BsMoonStarsFill />
                        ) : (
                          <BsSun />
                        )}
                      </Button>
                    </Stack>
                    <Box
                      width="100%"
                      rounded={"lg"}
                      bg={useColorModeValue("white", "gray.700")}
                      boxShadow={"lg"}
                      p={8}
                    >
                      <Flex>
                        <Stack spacing={4}>
                          <HStack>
                            <Box>
                              <FormControl id="firstName" isRequired pt="20px">
                                <FormLabel>Soft Skills</FormLabel>
                                <CheckboxGroup colorScheme="green">
                                  <Stack
                                    spacing={[5, 1]}
                                    direction={["row", "column"]}
                                    fontSize={"lg"}
                                  >
                                    <Checkbox value="Intellectual">
                                      Enter Personal Skills
                                    </Checkbox>
                                    <Checkbox value="Learning">
                                      Communication Skills
                                    </Checkbox>
                                    <Checkbox value="Mental">Editing</Checkbox>{" "}
                                    <Checkbox value="Physical">
                                      Writing
                                    </Checkbox>
                                  </Stack>
                                </CheckboxGroup>
                              </FormControl>
                            </Box>
                            <Box>
                              <FormControl id="firstName" isRequired>
                                <FormLabel>Hard Skills</FormLabel>
                                <CheckboxGroup colorScheme="green">
                                  <Stack
                                    spacing={[5, 1]}
                                    direction={["row", "column"]}
                                    fontSize={"lg"}
                                  >
                                    <Checkbox value="Phycosocial Disability">
                                      Computer Skills
                                    </Checkbox>
                                    <Checkbox value="Speech Disability">
                                      Administrative Skills
                                    </Checkbox>
                                    <Checkbox value="Cancer">
                                      Customer Service Skills
                                    </Checkbox>
                                    <Checkbox value="Rare Disease">
                                      Skills
                                    </Checkbox>
                                  </Stack>
                                </CheckboxGroup>
                              </FormControl>
                            </Box>
                          </HStack>
                          <Box>
                            <FormControl id="Others">
                              <FormLabel>Others</FormLabel>
                              <Input type="panel" placeholder="Other" h="200" />
                            </FormControl>
                          </Box>
                          <Stack spacing={10} pt={2}>
                            <Button
                              loadingText="Submitting"
                              w="50%"
                              mx="10px"
                              size="lg"
                              bg={"blue.400"}
                              color={"white"}
                              _hover={{
                                bg: "blue.500",
                              }}
                            >
                              Submit
                            </Button>
                          </Stack>
                          <Stack pt={6}>
                            <Text align={"center"}>
                              Already a user?{" "}
                              <Link color={"blue.400"}>Login</Link>
                            </Text>
                          </Stack>
                        </Stack>
                      </Flex>
                    </Box>
                  </Stack>
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </box>
      </center> */}
    </div>
  );
}
