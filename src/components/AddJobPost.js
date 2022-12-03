import React, { useEffect, useState } from "react";
import axios from "axios";
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
import kcc from "../images/kcc.png";

function AddJobPost(props) {
  const [TITTLE, setTittle] = useState("");
  const [DESCRIPTION, setDescription] = useState("");
  const [SALARY, setSalary] = useState("");

  const addjobpost = () => {
    // let response = api.post('/insert.php', {email: email, password: password});
    // console.log(response)

    // REQUEST FOR INSERTION
    axios
      .post("http://localhost/pwd-backend/addjobpost.php", {
        TITTLE: TITTLE,
        DESCRIPTION: DESCRIPTION,
        SALARY: SALARY,
      })
      .then((response) => {
        console.log(response.data);
      });
  };

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
      <Button
        colorScheme={"blue"}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Add Job Post
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
          <ModalHeader>Add Job Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={3}>
              <Input
                focusBorderColor="Teal"
                variant="flushed"
                placeholder="Job Tittle"
                onChange={(e) => {
                  setTittle(e.target.value);
                }}
              />
              <Input
                focusBorderColor="Teal"
                variant="flushed"
                placeholder="Description"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
              <Input
                focusBorderColor="Teal"
                variant="flushed"
                placeholder="Requirements"
                onChange={(e) => {
                  setSalary(e.target.value);
                }}
              />
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
            <Button colorScheme="teal" ml="20px" onClick={addjobpost}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default AddJobPost;
