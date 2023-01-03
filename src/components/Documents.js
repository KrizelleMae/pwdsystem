import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Container,
  Heading,
  IconButton,
  Input,
  Link,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
} from "@chakra-ui/react";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import {
  BiArrowBack,
  BiArrowToLeft,
  BiLeftArrow,
  BiPlusCircle,
  BiTrash,
} from "react-icons/bi";

function Documents(props) {
  return (
    <div>
      <Container mt={10} maxW="container.lg">
        <Box display="flex" alignItems={"center"}>
          <IconButton
            as={Link}
            href="/pwdprofile"
            icon={<BiArrowBack />}
            colorScheme="white"
            color="gray.800"
          />
          <Text>Back to Profile</Text>
        </Box>
        <Heading fontWeight={500} color="gray.600" mb={7} mt={8}>
          Documents
        </Heading>
        <AspectRatio ratio={12 / 2}>
          <Box
            borderColor="purple.300"
            borderStyle="dashed"
            borderWidth="2px"
            rounded="md"
            role="group"
            transition="all 150ms ease-in-out"
            _hover={{
              shadow: "md",
            }}
            initial="rest"
            animate="rest"
            whileHover="hover"
            background="purple.50"
          >
            <Input type={"file"} display="none"></Input>
            <Button rightIcon={<BiPlusCircle />} size="sm" colorScheme="purple">
              Browse file
            </Button>
          </Box>
        </AspectRatio>{" "}
        <Text mt={10} mb={3} color="gray.700" fontWeight={600}>
          All Documents
        </Text>
        <TableContainer bg="white" boxShadow="base" pt={3}>
          <Table variant="simple" size="sm">
            <Thead textAlign="center">
              <Th>Document name</Th>
              <Th>File</Th>
              <Th>Required</Th>
              <Th>Status</Th>
              <Th></Th>
            </Thead>
            <Tbody>
              <Td>Birth Certificate</Td>
              <Td>
                <Box fontStyle="italic">sampledata.jpg</Box>
              </Td>
              <Td>
                <b>YES</b>
              </Td>
              <Td>
                <Badge colorScheme="green" variant="outline">
                  Success
                </Badge>
              </Td>
              <Td>
                <IconButton icon={<BiTrash />} size="sm" />
              </Td>
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

export default Documents;
