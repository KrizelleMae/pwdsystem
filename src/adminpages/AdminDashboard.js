import Sidebar from "../components/Sidebar";
import {
  Flex,
  Text,
  SimpleGrid,
  Box,
  Link,
  IconButton,
  Center,
} from "@chakra-ui/react";
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

  useEffect(() => {
    getCount();
  }, [data]);
  return (
    <Center>
      <Box ml="20%">
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
          <Box boxShadow="md" p="30" rounded="md" bg="white" w={300}>
            <Text>AVIALABLE JOBS</Text>
            <Text fontSize="50px" color="Yellow">
              {data.jobs}
            </Text>
            ;
          </Box>

          <Box boxShadow="md" p="30" rounded="md" bg="white" w={300}>
            <Text>COMPANY</Text>
            <Text fontSize="50px" color="Yellow">
              {data.company}
            </Text>
          </Box>

          <Box boxShadow="md" p="30" rounded="md" bg="white" w={300}>
            <Text>PWDs</Text>
            <Text fontSize="50px" color="Yellow">
              {data.pwd}
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Center>
  );
}
