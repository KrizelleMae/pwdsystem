import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  Flex,
  Text,
  Center,
  SimpleGrid,
  Box,
  Link,
  IconButton,
  VStack,
  Feature,
  Heading,
  HStack,
  Spacer,
  Button,
  useColorMode,
  useColorModeValue,
  FormControl,
  FormLabel,
  Avatar,
  Divider,
  useDisclosure,
  Stack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  DrawerCloseButton,
  Image,
  Checkbox,
  Badge,
  Container,
} from "@chakra-ui/react";

import AdminPwdComponents from "../components/AdminPwdComponents";
import AdminCompanyComponents from "../components/AdminCompanyComponents";
import Body_Jobpost from "../components/Body_Jobpost";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";

export default function ProfilePWD(props) {
  const sizes = ["xs", "sm", "md", "lg", "xl", "full"];
  const [job, setJob] = useState([]);
  const [fontSize, setFontSize] = useState(20);

  const getJob = () => {
    axios.get("http://localhost/pwd-backend/get_job.php").then((response) => {
      setJob(response.data);
    });
  };

  useEffect(() => {
    getJob();
  }, [job]);

  const { isOpen: isOpen, onOpen: onOpen, onClose: onClose } = useDisclosure();
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure();

  const { colorMode, toggleColorMode } = useColorMode();
  const bgcolor = useColorModeValue("teal.500", "gray.700");
  const fontcolor = useColorModeValue("gray.600", "white");
  return (
    <div>
      <Flex w="100%" minW="100" pt="10">
        <VStack w="100%" minW="100">
          <Flex>
            <Center>
              <Box w="100%" minW="100" maxW="1000" ml={10} mr={10}>
                <SimpleGrid columns={{ sm: 1, md: 1 }} spacing="8" rounded="lg">
                  <Box boxShadow="md" p="30" rounded="md" bg="teal">
                    <HStack>
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
                      <Button
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
                    </HStack>
                    <HStack w="100%" minW="100%" maxW="full" ml={0} mr={0}>
                      <Heading fontSize={"8xl"}>PWD</Heading>
                    </HStack>
                    <Box
                      w="100%"
                      minW="100"
                      maxW="1000"
                      p="2"
                      colorScheme="teal"
                    >
                      <Heading py={10} color="White" size="md">
                        Person with Disability
                      </Heading>
                      <HStack>
                        <Box>
                          <Center>
                            <Avatar
                              ml={"auto"}
                              width={250}
                              height={250}
                              src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.30808-6/301128542_3292773417674320_4769438194347416596_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Daj5ssdBjmEAX9AeJLP&_nc_ht=scontent.fmnl8-3.fna&oh=00_AT-2vBziMe_nxjqjv7uoUI0xLreSJD-aVX1R6Ik8T8RX-A&oe=634432AE"
                            ></Avatar>
                          </Center>
                        </Box>
                        <Spacer />
                        <Box
                          minW={50}
                          maxW={"full"}
                          w={"full"}
                          boxShadow="md"
                          p="30"
                          rounded="md"
                          color={"Gray"}
                          bg={"White"}
                        >
                          <FormLabel fontSize={fontSize}>
                            Name:
                            <Text>Tuban, James Karl, C.</Text>
                          </FormLabel>
                          <FormLabel fontSize={fontSize}>
                            Age:
                            <Text>20</Text>
                          </FormLabel>
                          <FormLabel fontSize={fontSize}>
                            Address:
                            <Text>Guiwan, Zamboanga City.</Text>
                          </FormLabel>

                          <Button
                            bg={"teal.600"}
                            color={"white"}
                            w="full"
                            _hover={{
                              bg: "green.500",
                            }}
                            onClick={onOpen}
                          >
                            Available Job
                          </Button>
                          <Button
                            bg={"blue.400"}
                            color={"white"}
                            w="full"
                            _hover={{
                              bg: "blue.500",
                            }}
                            onClick={onOpen1}
                            mt="2"
                          >
                            My Documents
                          </Button>
                        </Box>
                      </HStack>
                    </Box>
                  </Box>
                  <Box
                    fontSize={fontSize}
                    w="full"
                    boxShadow="md"
                    p="50"
                    rounded="md"
                  >
                    <Center>
                      <Text fontStyle={"italic"}>
                        Hi, I’m James and I’m a software engineer. My current
                        focus is optimizing customer experience. Nice to meet
                        you all. My name is Michael and I’m the creative
                        director. I work in the Brooklyn office.
                        <Divider />
                        <Flex
                          align={"left"}
                          justify={"left"}
                          direction={"row"}
                          mt={6}
                        >
                          <Badge
                            px={2}
                            py={1}
                            bg={useColorModeValue("gray.50", "gray.800")}
                            fontWeight={"800"}
                            ml={10}
                          >
                            #art
                          </Badge>
                          <Badge
                            px={2}
                            py={1}
                            bg={useColorModeValue("gray.50", "gray.800")}
                            fontWeight={"800"}
                          >
                            #photography
                          </Badge>
                          <Badge
                            px={2}
                            py={1}
                            bg={useColorModeValue("gray.50", "gray.800")}
                            fontWeight={"800"}
                          >
                            #music
                          </Badge>
                        </Flex>
                        <FormControl pt={5}>
                          <Divider />
                          <FormLabel>Disabilities</FormLabel>
                          <Box colorScheme="f0f0f0" borderRadius="md" px={4}>
                            <FormControl>
                              <FormLabel>
                                Type of Disability
                                <Text>Deaf hard of hearing</Text>
                              </FormLabel>
                              <FormLabel>
                                Type <Text>Autism</Text>
                              </FormLabel>
                            </FormControl>
                          </Box>
                        </FormControl>
                        <FormControl>
                          <Divider />
                          <FormLabel>Contact Information</FormLabel>
                          <Box borderRadius="md" px={4}>
                            <FormControl>
                              <FormLabel>Email: Jtuban4@gmail.com</FormLabel>
                              <FormLabel>CP# : 09673890231</FormLabel>
                              <FormLabel>Landline:87000</FormLabel>
                            </FormControl>
                          </Box>
                        </FormControl>
                      </Text>
                    </Center>
                  </Box>

                  <Box boxShadow="md" p="50" rounded="md" bg="white">
                    <Stack spacing={6} direction={["column", "row"]} pb="20px">
                      <Button
                        bg={"red.400"}
                        color={"white"}
                        w="full"
                        _hover={{
                          bg: "red.500",
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        bg={"blue.400"}
                        color={"white"}
                        w="full"
                        _hover={{
                          bg: "blue.500",
                        }}
                      >
                        Save
                      </Button>
                    </Stack>
                  </Box>
                </SimpleGrid>
              </Box>
            </Center>
          </Flex>
          PWD
          <Flex></Flex>
        </VStack>
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xl">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>My Job Available</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
            <Container justify="center">
              {job.map((element, key) => {
                return (
                  <>
                    <Body_Jobpost
                      title={element.TITTLE}
                      description={element.DESCRIPTION}
                      salary={element.SALARY}
                      company={element.COMPANY}
                    />
                  </>
                );
              })}
            </Container>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Drawer placement="left" onClose={onClose1} isOpen={isOpen1}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            My Documents
            <Button
              colorScheme="teal"
              variant="outline"
              ml={8}
              onClick={() => this.refs.fileInput.click()}
            >
              Add File
            </Button>
          </DrawerHeader>
          <DrawerBody>
            <VStack>
              <Image
                src="gibbresh.png"
                fallbackSrc="https://via.placeholder.com/150"
              />
              <Checkbox defaultChecked value="Resume">
                Resume
              </Checkbox>
              <Image
                src="gibbresh.png"
                fallbackSrc="https://via.placeholder.com/150"
              />
              <Checkbox defaultChecked value="CV">
                CV
              </Checkbox>
              <Image
                src="gibbresh.png"
                fallbackSrc="https://via.placeholder.com/150"
              />
              <Checkbox defaultChecked value="Cert">
                Certivficattes
              </Checkbox>
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
