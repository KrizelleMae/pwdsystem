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
import { FiMenu } from "react-icons/fi";

export default function Home() {
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
            <Box boxShadow="md" p="50" rounded="md" bg="white">
              <Text>PWD</Text>
              <Text fontSize="50px" color="Yellow">
                20
              </Text>
            </Box>
            <Box boxShadow="md" p="50" rounded="md" bg="white">
              <Text>Company</Text>
              <Text fontSize="50px" color="Green">
                10
              </Text>
            </Box>
            <Box boxShadow="md" p="50" rounded="md" bg="white">
              <Text>JobPosted</Text>
              <Text fontSize="50px" color="tomato">
                126
              </Text>
            </Box>
            <Box boxShadow="md" p="50" rounded="md" bg="white">
              <Text>Hired</Text>
              <Text fontSize="50px" color="Blue">
                150
              </Text>
            </Box>
            {/* <Box boxShadow="xs" p="6" rounded="md" bg="white">
              xs
            </Box>
            <Box boxShadow="sm" p="6" rounded="md" bg="white">
              sm
            </Box>
            <Box boxShadow="base" p="6" rounded="md" bg="white">
              Base
            </Box> */
            /* <Box boxShadow="lg" p="6" rounded="md" bg="white">
              lg
            </Box>
            <Box boxShadow="xl" p="6" rounded="md" bg="white">
              xl
            </Box>
            <Box boxShadow="2xl" p="6" rounded="md" bg="white">
              2xl
            </Box>
            <Box boxShadow="dark-lg" p="6" rounded="md" bg="white">
              Dark lg
            </Box>
            <Box boxShadow="outline" p="6" rounded="md" bg="white">
              Outline
            </Box>
            <Box boxShadow="inner" p="6" rounded="md" bg="white">
              Inner
            </Box> */}
          </SimpleGrid>
        </Box>
      </Center>
    </div>
  );
}
