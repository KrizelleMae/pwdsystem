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
import Footer from "../components/Footer";
import { SmallCloseIcon } from "@chakra-ui/icons";
import "../css/navbar.css";
import Body_Jobpost from "./Body_Jobpost";

function PwdProfile(props) {
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
          My Profile
        </Heading>
        <FormControl id="userName">
          <FormLabel></FormLabel>
          <Flex pl="20" direction={["column", "row"]} spacing={6}>
            <Center>
              <Avatar
                size="2xl"
                src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.30808-6/301128542_3292773417674320_4769438194347416596_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Daj5ssdBjmEAX9AeJLP&_nc_ht=scontent.fmnl8-3.fna&oh=00_AT-2vBziMe_nxjqjv7uoUI0xLreSJD-aVX1R6Ik8T8RX-A&oe=634432AE"
              ></Avatar>
            </Center>
            <Spacer />

            <Box pt="15">
              <Divider />
              <FormControl id="userName">
                <FormLabel>
                  Name:{" "}
                  <Text lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
                    Tuban, James Karl, C.
                  </Text>
                </FormLabel>
                <FormLabel>
                  Age:
                  <Text lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
                    20
                  </Text>
                </FormLabel>
                <FormLabel>
                  {" "}
                  Address:
                  <Text lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
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
                  Available Job
                </Button>

                <Divider />
              </FormControl>
            </Box>
          </Flex>
        </FormControl>
        <Center>
          <Text fontStyle={"italic"}>
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
        <Button
          bg={"blue.400"}
          color={"white"}
          w="full"
          _hover={{
            bg: "blue.500",
          }}
          onClick={onOpen1}
        >
          Documents
        </Button>
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
          <DrawerHeader>My Job Available</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
            <Body_Jobpost />
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
              onClick={onClose}
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
export default PwdProfile;
