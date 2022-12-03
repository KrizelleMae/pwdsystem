import Sidebar from "../components/Sidebar";
import {
  Flex,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  Icon,
  useColorModeValue,
  createIcon,
} from "@chakra-ui/react";

import AdminPwdComponents from "../components/AdminPwdComponents";

export default function Home() {
  return (
    <div>
      <Sidebar />

      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        py={12}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          boxShadow={"2xl"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          p={10}
          spacing={8}
          align={"center"}
        >
          <Stack align={"center"} spacing={2}>
            <Heading
              textTransform={"uppercase"}
              fontSize={"3xl"}
              color={useColorModeValue("gray.800", "gray.200")}
            >
              Admin Reports
            </Heading>
            <Text fontSize={"lg"} color={"gray.500"}>
              Report to our newsletter & stay up to date!
            </Text>
          </Stack>
        </Stack>
      </Flex>
    </div>
  );
}
