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
  Box,
  FormLabel,
  Link,
} from "@chakra-ui/react";
import kcc from "../images/kcc.png";

function ViewApplicants(props) {
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
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Open
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
          <ModalHeader>PWD Applicant</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={3}>
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
                <FormLabel>
                  Name:
                  <Text>Tuban, James Karl, C.</Text>
                </FormLabel>
                <FormLabel>
                  Age:
                  <Text>20</Text>
                </FormLabel>
                <FormLabel>
                  Address:
                  <Text>Guiwan, Zamboanga City.</Text>
                </FormLabel>

                <Button
                  bg={"blue.400"}
                  color={"white"}
                  w="full"
                  _hover={{
                    bg: "blue.500",
                  }}
                  mt="2"
                >
                  My Documents
                </Button>
              </Box>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
            <Link href="ContactForm">
              <Button colorScheme="teal" ml="20px" onClick={addjobpost}>
                Send Info
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ViewApplicants;
