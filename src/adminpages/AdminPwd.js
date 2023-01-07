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
  Table,
  Thead,
  Th,
  Tbody,
  Tr,
  Td,
  Stack,
  Button,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { BiShow } from "react-icons/bi";
import AdminPwdComponents from "../components/AdminPwdComponents";
import AdminCompanyComponents from "../components/AdminCompanyComponents";
import AddJobPost from "../components/AddJobPost";
import Sidebar from "../components/Sidebar";
import api from "../restapi/api";
import PWDDetails from "../components/PWD/PWDDetails";

export default function Home() {
  let toast = useToast();
  const [pwdprofile, setPwdprofile] = useState([]);
  const [id, setId] = useState(0);
  const getPwdprofile = () => {
    axios
      .get("http://localhost/pwd-backend/API/get_pwd.php")
      .then((response) => {
        setPwdprofile(response.data);
      });
  };

  const accept = async (value) => {
    let response = await api.post("/admin/verify_account.php", {
      userId: value,
    });
    if (response.data.status === 1) {
      toast({
        title: "Success.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Error.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    getPwdprofile();
  }, [pwdprofile]);

  return (
    <div>
      <Flex w="100%">
        <Sidebar />
        <VStack p="20px" w="100%">
          <Flex>
            <Center>
              <Box w={500} minW={1155} maxW="full" ml="16%" mr="">
                <SimpleGrid
                  bg="gray.50"
                  columns={{ sm: 3, md: 1 }}
                  spacing="8"
                  p="10"
                  textAlign="center"
                  rounded="lg"
                  color="gray.400"
                >
                  <Box boxShadow="md" p="50" rounded="md" bg="white">
                    <HStack>
                      <Heading>PWD List</Heading>
                    </HStack>

                    <Table>
                      <Thead>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        <Th>Status</Th>
                        <Th>Action</Th>
                      </Thead>
                      <Tbody>
                        {pwdprofile.map((el) => {
                          return (
                            <>
                              <Tr>
                                <Td>{el.FIRSTNAME}</Td>
                                <Td>{el.EMAIL_ADDRESS}</Td>
                                <Td>{el.VERIFIED}</Td>

                                <Td>
                                  <Stack direction="row">
                                    {el.VERIFIED === 1 ? (
                                      <Button
                                        leftIcon={<BiShow />}
                                        colorScheme="teal"
                                        variant="outline"
                                        size="sm"
                                        onClick={() => {
                                          onOpen();
                                          setId(el.FK_USER_ID);
                                        }}
                                      >
                                        View
                                      </Button>
                                    ) : (
                                      <>
                                        {" "}
                                        <Button
                                          leftIcon={<BiShow />}
                                          colorScheme="teal"
                                          variant="outline"
                                          size="sm"
                                          onClick={() => {
                                            onOpen();
                                            setId(el.FK_USER_ID);
                                          }}
                                        >
                                          View
                                        </Button>
                                        <Button
                                          leftIcon={<AiFillEdit />}
                                          colorScheme="teal"
                                          variant="outline"
                                          size="sm"
                                          onClick={() => {
                                            accept(el.FK_USER_ID);
                                          }}
                                        >
                                          Verify
                                        </Button>
                                      </>
                                    )}

                                    {/* <Button
                    rightIcon={<GrView/>}
                    colorScheme="teal"
                    variant="outline"
                  >
                    veiw
                  </Button> */}
                                  </Stack>
                                </Td>
                              </Tr>
                            </>
                          );
                        })}
                      </Tbody>
                    </Table>
                  </Box>
                  {/* <Box w="full" boxShadow="md" p="50" rounded="md" bg="white">
                    <AdminPwdComponents />
                  </Box> */}

                  {/* <Box boxShadow="md" p="50" rounded="md" bg="white"></Box> */}
                </SimpleGrid>
              </Box>
            </Center>
          </Flex>
        </VStack>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Review Application</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <PWDDetails userId={id} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
