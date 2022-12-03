import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Stack,
  Input,
  Text,
  useDisclosure,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  MenuDivider,
  MenuGroup,
  MenuItem,
} from "@chakra-ui/react";
import FontSizeChanger from "react-font-size-changer";
import kcc from "../images/kcc.png";

function Apply(props) {
  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) " />
  );
  const OverlayTwo = () => (
    <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <div>
      <div className="app">
        <FontSizeChanger
          targets={["#target .content"]}
          onChange={(element, newValue, oldValue) => {
            console.log(element, newValue, oldValue);
          }}
          options={{
            stepSize: 2,
            range: 100,
          }}
          customButtons={{
            up: <span style={{ fontSize: "36px" }}>A+</span>,
            down: <span style={{ fontSize: "20px" }}>A-</span>,
            style: {
              color: "black",
              WebkitBoxSizing: "border-box",
              WebkitBorderRadius: "5px",
              width: "60px",
            },
            buttonsMargin: 10,
          }}
        />
        <div id="target">
          <p className="title">This is the title of my target text</p>
          <p className="content">This is the content of my target text</p>
        </div>
      </div>

      <Button
        flex={1}
        fontSize={"sm"}
        rounded={"full"}
        bg={"blue.400"}
        color={"white"}
        boxShadow={
          "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
        }
        _hover={{
          bg: "blue.500",
        }}
        _focus={{
          bg: "blue.500",
        }}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Send Application
      </Button>

      {/* <Button
        ml="4"
        onClick={() => {
          setOverlay(<OverlayTwo />);
          onOpen();
        }}
      >
        Add Job Post
      </Button> */}
      <Modal isCentered isOpen={isOpen} size="xl" onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Apply Job</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={3}>
              <FontSizeChanger
                targets={["#target .content"]}
                onChange={(element, newValue, oldValue) => {
                  console.log(element, newValue, oldValue);
                }}
                options={{
                  stepSize: 10,
                  range: 100,
                }}
                customButtons={{
                  up: <span style={{ fontSize: "36px" }}>A</span>,
                  down: <span style={{ fontSize: "20px" }}>A</span>,
                  style: {
                    backgroundColor: "red",
                    color: "white",
                    WebkitBoxSizing: "border-box",
                    WebkitBorderRadius: "5px",
                    width: "60px",
                  },
                  buttonsMargin: 10,
                }}
              />
              <div id="target">
                <p className="content">
                  <Input
                    classname="content"
                    focusBorderColor="Teal"
                    variant="flushed"
                    placeholder="Name"
                  />
                  <Input
                    focusBorderColor="Teal"
                    variant="flushed"
                    placeholder="Description"
                  />
                  <Input
                    focusBorderColor="Teal"
                    variant="flushed"
                    placeholder="Requirements"
                  />
                </p>
              </div>
              <HStack>
                <Menu closeOnSelect={false}>
                  <MenuButton as={Button} colorScheme="blue">
                    Job Type
                  </MenuButton>
                  <MenuList minWidth="250px">
                    <MenuOptionGroup
                      defaultValue="asc"
                      title="Job Type"
                      type="radio"
                    >
                      <MenuItemOption value="asc1">Full Time</MenuItemOption>
                      <MenuItemOption value="desc1">Temporary</MenuItemOption>
                      <MenuItemOption value="asc">Permanent</MenuItemOption>
                      <MenuItemOption value="desc">Contact</MenuItemOption>
                    </MenuOptionGroup>
                  </MenuList>
                </Menu>
                <Menu closeOnSelect={false}>
                  <MenuButton as={Button} colorScheme="blue">
                    Ability
                  </MenuButton>
                  <MenuList minWidth="250px">
                    <MenuOptionGroup title="Basic Ability" type="checkbox">
                      <MenuItemOption value="email">Walk</MenuItemOption>
                      <MenuItemOption value="phone1">Read</MenuItemOption>
                      <MenuItemOption value="country1">Write</MenuItemOption>
                    </MenuOptionGroup>
                  </MenuList>
                </Menu>

                <Button colorScheme="teal" ml="20px">
                  Add Image
                </Button>
              </HStack>
              <Input
                focusBorderColor="Teal"
                variant="flushed"
                placeholder="Rate/Hour Php"
              />
              <Input
                focusBorderColor="Teal"
                variant="flushed"
                placeholder="Position"
              />
              <Input
                focusBorderColor="Teal"
                variant="flushed"
                placeholder="Location"
              />
              <HStack></HStack>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
            <Button colorScheme="teal" ml="20px">
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Apply;
