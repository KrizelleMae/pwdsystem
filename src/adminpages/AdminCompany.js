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

export default function Home() {
  const [user, setUser] = useState([]);

  const getUsers = () => {
    axios
      .get("http://localhost/pwd-backend/get_company.php")
      .then((response) => {
        setUser(response.data);
      });
  };

  useEffect(() => {
    getUsers();
  }, [user]);

  const [job, setJob] = useState([]);
  const getJobs = () => {
    axios.get("http://localhost/pwd-backend/get_job.php").then((response) => {
      setJob(response.data);
    });
  };

  useEffect(() => {
    getJobs();
  }, [job]);

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
                  color="gray.600"
                >
                  <Box boxShadow="md" p="50" rounded="md" bg="white">
                    <HStack>
                      <Heading pb={50}>List of Company</Heading>
                      <Spacer />
                      <AddJobPost />
                    </HStack>

                    <Table bordered hover responsive colorScheme={"teal.200"}>
                      <Thead>
                        <Th>ID</Th>
                        <Th> Name</Th>
                        <Th> Representative</Th>
                        <Th> Email</Th>
                        <Th> Actions</Th>
                      </Thead>
                      <Tbody>
                        {user.map((el) => {
                          return (
                            <>
                              <Tr>
                                <Td>{el.COMPANY_ID}</Td>
                                <Td>{el.COMPANY_NAME}</Td>
                                <Td>{el.REP_NAME}</Td>
                                <Td>{el.COMPANY_EMAIL}</Td>
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
                    <HStack>
                      <Heading pb={50}>Job List</Heading>
                      <Spacer />
                      <AddJobPost />
                    </HStack>

                    <Table colorScheme={"teal.200"}>
                      <Thead>
                        <Th>ID</Th>
                        <Th> Job Name</Th>
                        <Th> Salary</Th>
                        <Th> Status</Th>
                        <Th> Actions</Th>
                      </Thead>
                      <Tbody>
                        {job.map((el) => {
                          let color =
                            job.STATUS == "ACTIVE"
                              ? "GREEN"
                              : job.STATUS == "INACTIVE"
                              ? "yellow"
                              : "ORANGE";

                          return (
                            <>
                              <Tr>
                                <Td>{el.id}</Td>
                                <Td>{el.TITLE}</Td>
                                <Td>{el.SALARY}</Td>

                                <Td style={{ backgroundColor: color }}>
                                  {job.STATUS}
                                  {el.STATUS}
                                </Td>

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
