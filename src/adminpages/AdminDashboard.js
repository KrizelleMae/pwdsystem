import Sidebar from "../components/Sidebar";
import {
  Flex,
  Text,
  SimpleGrid,
  Box,
  Link,
  IconButton,
  Table,
  Thead,
  Th,
  Tbody,
  Tr,
  Td,
  Center,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
// import { FiMenu } from "react-icons/fi";
import api from "../restapi/api";

export default function Home() {
  const [data, setData] = useState([]);

  const getCount = async () => {
    let response = await api.get("/admin/dashboard_data.php");

    if (response) {
      setData(response.data);
    }
  };

  const [company, setCompany] = useState([]);
  const getCompany = () => {
    axios
      .get("http://localhost/pwd-backend/API/get_company.php")
      .then((response) => {
        setCompany(response.data);
      });
  };

  useEffect(() => {
    getCount();
    getCompany();
  }, []);
  return (
    <Center>
      <Box ml="15%">
        <Sidebar />

        <SimpleGrid
          spacing="8"
          p="10"
          textAlign="center"
          rounded="lg"
          color="gray.400"
          w="100%"
          display="flex"
        >
          <Box boxShadow="md" p="30" rounded="md" bg="white" w={320}>
            <Text>AVIALABLE JOBS</Text>
            <Text fontSize="50px" color="teal.700">
              {data.jobs}
            </Text>
          </Box>

          <Box boxShadow="md" p="30" rounded="md" bg="white" w={320}>
            <Text>COMPANY</Text>
            <Text fontSize="50px" color="teal.700">
              {data.company}
            </Text>
          </Box>

          <Box boxShadow="md" p="30" rounded="md" bg="white" w={320}>
            <Text>PWDs</Text>
            <Text fontSize="50px" color="teal.700">
              {data.pwd}
            </Text>
          </Box>
        </SimpleGrid>

        <Heading pb={50}>List of Company</Heading>

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
                  </Tr>
                </>
              );
            })}
          </Tbody>
        </Table>
      </Box>
    </Center>
  );
}
