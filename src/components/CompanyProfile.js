import React, { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
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
  Square,
  Spacer,
  ButtonGroup,
  Divider,
  toggleColorMode,
  colorMode,
  useColorMode,
  VStack,
  Checkbox,
  Image,
} from "@chakra-ui/react";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import Footer from "./Footer";
import { SmallCloseIcon } from "@chakra-ui/icons";
import "../css/navbar.css";
import Body_Jobpost from "./Body_Jobpost";
import Addjobpost from "./AddJobPost";
import kcc from "../images/kcc.png";
import ViewApplicants from "./ViewApplicants";

function CompanyProfile(props) {
  const { isOpen: isOpen, onOpen: onOpen, onClose: onClose } = useDisclosure();
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure();

  const sizes = ["xs", "sm", "md", "lg", "xl", "full"];
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Flex p="2" minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading px={2} color="teal" size="md">
            PWD DSWD
            <Button
              mx={2}
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
            bg={"red.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "red.500",
            }}
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
      >
        <Heading
          pt="20px"
          lineHeight={1.1}
          fontSize={{ base: "2xl", sm: "3xl" }}
        >
          Company Profile
        </Heading>
        <FormControl id="userName">
          <FormLabel></FormLabel>
          <Flex direction={["column", "row"]} spacing={6}>
            <Center>
              <Avatar
                size={"xxl"}
                src={kcc}
                alt={"Avatar Alt"}
                pos={"relative"}
                _after={{
                  content: '""',
                  w: 4,
                  h: 4,
                  bg: "green.300",
                  border: "2px solid white",
                  rounded: "full",
                  pos: "absolute",
                  bottom: 0,
                  right: 3,
                }}
              />
            </Center>
            <Spacer />

            <Box pt="50">
              <Divider />
              <FormControl id="userName">
                <FormLabel>
                  Company Representative:
                  <Text lineHeight={1.1} fontSize={"xl"}>
                    KCC MALL ZAMBOANGA
                  </Text>
                </FormLabel>

                <FormLabel>
                  Address:
                  <Text lineHeight={1.1} fontSize={"xl"}>
                    Guiwan, Zamboanga City.
                  </Text>
                </FormLabel>

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
                  My JOB POST
                </Button>
                <Button
                  mt={2}
                  bg={"blue.400"}
                  color={"white"}
                  w="full"
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={onOpen1}
                >
                  Applicants
                </Button>

                <Divider />
              </FormControl>
            </Box>
          </Flex>
        </FormControl>
        <Center>
          <Text fontStyle={"italic"}>
            <FormLabel>
              Company Name:
              <Text lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
                KCC MALL ZAMBOANGA
              </Text>
            </FormLabel>
            <FormLabel>
              Address:
              <Text lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
                Guiwan, Zamboanga City.
              </Text>
            </FormLabel>
            <Divider />
            Hi, I’m James and I’m a software engineer. My current focus is
            optimizing customer experience. Nice to meet you all. My name is
            Michael and I’m the creative director. I work in the Brooklyn
            office.
          </Text>
        </Center>

        <Flex align={"left"} justify={"left"} direction={"row"} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
            ml={10}
          >
            #art
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #photography
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #music
          </Badge>
        </Flex>

        <FormControl>
          <Divider />
          <FormLabel>My Disability</FormLabel>
          <Box colorScheme="f0f0f0" borderRadius="md" px={4}>
            <FormControl id="userName">
              <FormLabel>
                Type of Disability<Text>Deaf hard of hearing</Text>
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
          <Box colorScheme="f0f0f0" borderRadius="md" px={4}>
            <FormControl id="userName">
              <FormLabel>Email: Jtuban4@gmail.com</FormLabel>
              <FormLabel>CP# : 09673890231</FormLabel>
              <FormLabel>Landline:87000</FormLabel>
            </FormControl>
          </Box>
        </FormControl>

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
      </Stack>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xl">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Addjobpost />
          </DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
            <Text lineHeight={1.1} fontSize={{ base: "2xl", xl: "3xl" }}>
              JOB POST LIST
            </Text>
            <Body_Jobpost />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button bg="red.300" mr={3}>
              Edit
            </Button>
            <Button bg="blue.500">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Drawer placement="left" onClose={onClose1} isOpen={isOpen1}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            Applicants
            <Button
              colorScheme="teal"
              variant="outline"
              ml={8}
              onClick={onClose}
            >
              Add File
            </Button>
          </DrawerHeader>
          <DrawerBody>
            <VStack>
              <HStack>
                <Text>Name: James Tuban</Text>
                <ViewApplicants />
              </HStack>
              <HStack>
                <Text>Name: James Tuban</Text>
                <ViewApplicants />
              </HStack>
              <HStack>
                <Text>Name: James Tuban</Text>
                <ViewApplicants />
              </HStack>
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <Text>All right reserve</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
export default CompanyProfile;
