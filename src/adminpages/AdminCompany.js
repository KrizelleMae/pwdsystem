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
  useToast,
  Badge,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { BiCheck, BiShow } from "react-icons/bi";
import AdminPwdComponents from "../components/AdminPwdComponents";
import AdminCompanyComponents from "../components/AdminCompanyComponents";
import AddJobPost from "../components/AddJobPost";
import api from "../restapi/api";

export default function Home() {
  const [company, setCompany] = useState([]);
  const getCompany = () => {
    axios
      .get("http://localhost/pwd-backend/API/get_company.php")
      .then((response) => {
        setCompany(response.data);
      });
  };

  const [job, setJob] = useState([]);
  let toast = useToast();

  const getJob = () => {
    axios
      .get("http://localhost/pwd-backend/API/get_jobs.php")
      .then((response) => {
        setJob(response.data);
      });
  };

  const accept = async (value) => {
    let response = await api.post("/admin/verify_job.php", {
      jobId: value,
    });

    // console.log(response.data);
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

  useEffect(() => {
    getJob();
    getCompany();
  }, [job, company]);

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
                      {/* <AddJobPost /> */}
                    </HStack>

                    <Table bordered hover responsive colorScheme={"teal.200"}>
                      <Thead>
                        <Th>ID</Th>
                        <Th> Name</Th>
                        <Th> Representative</Th>
                        <Th> Email</Th>
                        {/* <Th> Actions</Th> */}
                      </Thead>
                      <Tbody>
                        {company.map((el) => {
                          return (
                            <>
                              <Tr>
                                <Td>{el.COMPANY_ID}</Td>
                                <Td>{el.COMPANY_NAME}</Td>
                                <Td>{el.REP_FIRSTNAME}</Td>
                                <Td>{el.COMPANY_EMAIL}</Td>
                                {/* <Td>
                                  <Stack direction="row">
                                    {/* <Button
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
                                  Accept
                                </Button>
                                */}
                                {/* <Button
                    rightIcon={<GrView/>}
                    colorScheme="teal"
                    variant="outline"
                  >
                    veiw
                  </Button> */}
                                {/* </Stack>
                                </Td> */}
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
                    </HStack>

                    <Table variant="simple" colorScheme="teal.700">
                      <Thead>
                        <Th>Company</Th>
                        <Th> Job Name</Th>
                        <Th> Status</Th>
                        <Th> Actions</Th>
                      </Thead>
                      <Tbody>
                        {job.map((e) => {
                          return (
                            <Tr>
                              <Td>{e.COMPANY_NAME}</Td>
                              <Td>{e.TITLE}</Td>
                              <Td>
                                <Badge
                                  colorScheme={
                                    e.STATUS === "ACTIVE" ? "green" : "orange"
                                  }
                                >
                                  {e.STATUS}
                                </Badge>
                              </Td>
                              <Td>
                                {e.STATUS === "ACTIVE" ? (
                                  "-----"
                                ) : (
                                  <Button
                                    leftIcon={<BiCheck />}
                                    colorScheme="teal"
                                    variant="outline"
                                    size="sm"
                                    onClick={() => {
                                      accept(e.JOB_ID);
                                    }}
                                  >
                                    Accept
                                  </Button>
                                )}
                              </Td>
                            </Tr>
                          );
                        })}
                      </Tbody>
                    </Table>
                  </Box>
                  {/* <Box boxShadow="md" p="50" rounded="md" bg="white"></Box> */}
                </SimpleGrid>
              </Box>
            </Center>
          </Flex>
          PWD
        </VStack>
      </Flex>
    </div>
  );
}
