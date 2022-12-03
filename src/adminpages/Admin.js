import Sidebar from "../components/Sidebar";
import { Flex, Text, Box, Link, IconButton, VStack } from "@chakra-ui/react";

import AddJobPost from "../components/AddJobPost";
import AdminCompanyComponents from "../components/AdminCompanyComponents";

export default function Home() {
  return (
    <div>
      <Flex w="100%">
        <Sidebar />
        <VStack p="20px" w="100%">
          <Flex>
            <AddJobPost />
          </Flex>
          <Flex>
            <AdminCompanyComponents />
          </Flex>
        </VStack>
      </Flex>
    </div>
  );
}
