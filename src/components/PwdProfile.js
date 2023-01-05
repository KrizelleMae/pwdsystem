import React, { useEffect, useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Avatar,
  Center,
  Box,
  Badge,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Spacer,
  ButtonGroup,
  Divider,
  useColorMode,
  VStack,
  Checkbox,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Container,
  List,
  HStack,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import {
  BsSun,
  BsMoonStarsFill,
  BsFilePlus,
  BsFillPencilFill,
} from "react-icons/bs";

import "../css/navbar.css";
import JobSpecific from "./JobSpecific";
import Pwdsignup from "./Pwdsignup";
import api from "../restapi/api";
import { FiLogOut } from "react-icons/fi";
import { Navigate, useNavigate } from "react-router-dom";
import Documents from "./Documents";
import JobApplied from "./PWD/JobApplied";

function PwdProfile(props) {
  const [userid, setUserid] = useState(localStorage.getItem("id"));
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [skills, setSkills] = useState([]);
  const [jobForId, setJobForId] = useState(0);
  const { isOpen: isOpen, onOpen: onOpen, onClose: onClose } = useDisclosure();
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure();

  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();

  const sizes = ["xs", "sm", "md", "lg", "xl", "full"];
  const { colorMode, toggleColorMode } = useColorMode();
  let navigate = useNavigate();
  // FETCH USER DATA
  const fetchUser = async () => {
    let response = await api.get("/pwd/get_pwd_profile.php", {
      params: { id: userid },
    });

    if (response) {
      if (response.data[0].DISABILITY_TYPE === null) {
        onOpen2();
      } else {
        let res = response.data[0];
        setName(res.FIRSTNAME + " " + res.LASTNAME);
        setAge(res.BIRTHDATE);
        setAddress(
          res.STREET + ", " + res.CITY + ", " + res.PROVINCE + ", " + res.ZIP
        );
        setBio(res.BIO);
        setEmail(res.EMAIL_ADDRESS);
        setContact(res.CONTACT_NUMBER);
        setJobForId(res.DISABILITY_TYPE);

        let resp = await api.get("/pwd/get_pwd_skills.php", {
          params: { id: userid },
        });

        if (resp) {
          // console.log(resp.data);
          setSkills(resp.data);
        }
        onClose2();
      }
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Container maxW="container.xl">
      <Flex p="2" minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading color="teal" size="md">
            Person with Disability
            <Button
              aria-label="Toggle Color Mode"
              onClick={toggleColorMode}
              _focus={{ boxShadow: "none" }}
              w="fit-content"
              {...props}
            >
              {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
            </Button>
          </Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="30">
          <Button
            rightIcon={<FiLogOut />}
            colorScheme="red"
            color={"white"}
            w="full"
            onClick={logout}
          >
            Log out
          </Button>
        </ButtonGroup>
      </Flex>

      <Stack
        mx="10px"
        spacing={6}
        w={"full"}
        maxW={"full"}
        bg={useColorModeValue("white", "gray.900")}
        rounded={"xl"}
        boxShadow={"lg"}
        px={20}
        mb={20}
        pb={10}
      >
        <Heading
          pt="20px"
          lineHeight={1.1}
          fontSize={{ base: "2xl", sm: "3xl" }}
        >
          My Profile
        </Heading>
        <FormControl id="userName">
          <Flex pl="20" direction={["column", "row"]} spacing={6}>
            <Center>
              <Avatar
                size="2xl"
                src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.30808-6/301128542_3292773417674320_4769438194347416596_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Daj5ssdBjmEAX9AeJLP&_nc_ht=scontent.fmnl8-3.fna&oh=00_AT-2vBziMe_nxjqjv7uoUI0xLreSJD-aVX1R6Ik8T8RX-A&oe=634432AE"
              ></Avatar>
            </Center>
            <Spacer />

            <Box pt="15">
              <FormControl id="userName">
                <FormLabel>
                  Name:
                  <Text lineHeight={1.1} fontSize={{ base: "2xl", sm: "1xl" }}>
                    {name}
                  </Text>
                </FormLabel>
                <FormLabel>
                  Age:
                  <Text lineHeight={1.1} fontSize={{ base: "2xl", sm: "1xl" }}>
                    {getAge(age)}
                  </Text>
                </FormLabel>
                <FormLabel>
                  {" "}
                  Address:
                  <Text lineHeight={1.1} fontSize={{ base: "2xl", sm: "1xl" }}>
                    {address}
                  </Text>
                </FormLabel>
                <Button
                  mt={2}
                  w="full"
                  size="sm"
                  leftIcon={<BsFillPencilFill />}
                >
                  Edit profile
                </Button>
              </FormControl>
            </Box>
          </Flex>
        </FormControl>
        <Modal
          isOpen={isOpen2}
          size="5xl"
          isCentered
          position="absolute"
          zIndex="-10"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalBody>
              <Pwdsignup />
            </ModalBody>
          </ModalContent>
        </Modal>
        <Divider my={3} />
        {bio === "" || bio === null ? (
          <Button w="150px" size="sm">
            + Add bio
          </Button>
        ) : (
          <Text fontStyle={"italic"}>
            Hi, I’m James and I’m a software engineer. My current focus is
            optimizing customer experience. Nice to meet you all. My name is
            Michael and I’m the creative director. I work in the Brooklyn
            office.
          </Text>
        )}
        <Flex align={"left"} justify={"left"} direction={"row"} mt={6}>
          {skills.map((el) => {
            return (
              <>
                <Badge
                  px={2}
                  py={1}
                  fontWeight={"400"}
                  mr={3}
                  colorScheme="orange"
                >
                  #{el.SKILL_NAME.toUpperCase()}
                </Badge>
              </>
            );
          })}
        </Flex>
        <HStack>
          <Button
            as={Link}
            bg={"blue.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "blue.500",
            }}
            href="/pwdprofile/documents"
          >
            My Documents
          </Button>
          <Button
            p="20px"
            bg={"teal.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "teal.500",
            }}
            onClick={onOpen}
          >
            Available Jobs
          </Button>
        </HStack>
        {/* <Divider my={3} /> */}

        <Box mb={10}>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem bgColor="gray.50" borderLeft="3px solid gray">
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Contact and Skills
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Flex pb={10}>
                  <Box
                    w="50%"
                    bgColor="gray.100"
                    p={7}
                    mx="1"
                    borderRadius={5}
                    bg={useColorModeValue("white", "gray.900")}
                  >
                    <Text mb={2} fontWeight={600}>
                      SKILLS
                    </Text>
                    <Box colorScheme="f0f0f0" borderRadius="md" px={4}>
                      {skills.map((el) => {
                        return (
                          <>
                            <li>
                              {el.SKILL_NAME.charAt(0).toUpperCase() +
                                el.SKILL_NAME.slice(1).toLowerCase()}
                            </li>
                          </>
                        );
                      })}
                    </Box>
                  </Box>
                  <Spacer />
                  <Box
                    pb={10}
                    w="50%"
                    bgColor="gray.100"
                    p={7}
                    mx="1 "
                    bg={useColorModeValue("white", "gray.900")}
                  >
                    <Text textTransform="uppercase" fontWeight={600} mb={2}>
                      Contact Information
                    </Text>
                    <Box colorScheme="f0f0f0" borderRadius="md" px={4}>
                      <FormControl id="userName" mt={2}>
                        <FormLabel>Email: {email}</FormLabel>
                        <FormLabel>Contact number : {contact}</FormLabel>
                      </FormControl>
                    </Box>
                  </Box>
                </Flex>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem bgColor="gray.50" borderLeft="3px solid gray" mt={3}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Job Applications
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <JobApplied />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Stack>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xl">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Jobs Available</DrawerHeader>

          <DrawerBody>
            {/* <Input placeholder="Type herep..." /> */}
            <JobSpecific jobForId={jobForId} userId={userid} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Container>
  );
}
export default PwdProfile;
