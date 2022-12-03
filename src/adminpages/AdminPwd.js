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
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { BiShow } from "react-icons/bi";
import AdminPwdComponents from "../components/AdminPwdComponents";
import AdminCompanyComponents from "../components/AdminCompanyComponents";
import AddJobPost from "../components/AddJobPost";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [pwdprofile, setPwdprofile] = useState([]);
  const getPwdprofile = () => {
    axios.get("http://localhost/pwd-backend/get_pwd.php").then((response) => {
      setPwdprofile(response.data);
    });
  };

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
                      <Spacer />
                      <AddJobPost />
                    </HStack>

                    <Table>
                      <Thead>
                        <Th>ID</Th>
                        <Th>Email</Th>
                        <Th>Password</Th>
                        <Th>Role</Th>
                        <Th>Status</Th>
                      </Thead>
                      <Tbody>
                        {pwdprofile.map((el) => {
                          return (
                            <>
                              <Tr>
                                <Td>{el.id}</Td>
                                <Td>{el.FIRSTNAME}</Td>
                                <Td>{el.LASTNAME}</Td>
                                <Td>{el.EMAIL_ADDRESS}</Td>
                                <Td>
                                  <Stack direction="row">
                                    <Button
                                      leftIcon={<AiFillEdit />}
                                      colorScheme="teal"
                                      variant="outline"
                                    >
                                      Edit
                                    </Button>
                                    <Button
                                      leftIcon={<BiShow />}
                                      colorScheme="teal"
                                      variant="outline"
                                    >
                                      View
                                    </Button>

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
                  <Box w="full" boxShadow="md" p="50" rounded="md" bg="white">
                    <AdminPwdComponents />
                  </Box>

                  <Box boxShadow="md" p="50" rounded="md" bg="white"></Box>
                </SimpleGrid>
              </Box>
            </Center>
          </Flex>
          PWD
          <Flex></Flex>
        </VStack>
      </Flex>
    </div>
  );
}
