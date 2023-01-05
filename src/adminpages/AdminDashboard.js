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
    <div>
      <Center>
        <Box w={1000} minW={200} ml="20%">
          <Sidebar />

          <SimpleGrid
            bg="gray.50"
            columns={{ sm: 2, md: 4 }}
            spacing="8"
            p="10"
            textAlign="center"
            rounded="lg"
            color="gray.400"
          >
            {data.map((el, key) => {
              return (
                <>
                  <Box boxShadow="md" p="50" rounded="md" bg="white">
                    <Text>{el.value}</Text>
                    <Text fontSize="50px" color="Yellow">
                      {el}
                    </Text>
                  </Box>
                </>
              );
            })}
          </SimpleGrid>
        </Box>
      </Center>
    </div>
  );
}
