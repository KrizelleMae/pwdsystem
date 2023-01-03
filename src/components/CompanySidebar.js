import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  IconButton,
  Link,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import api from "../restapi/api";

function CompanySidebar(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("left");

  return (
    <Box>
      <IconButton icon={<BiMenu />} onClick={onOpen} fontSize={20}>
        Open
      </IconButton>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <Drawer />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody p={0}>
            <VStack mt={5}>
              <Box
                as={Link}
                width="100%"
                p={3}
                pl={6}
                _hover={{ textDecoration: "none", backgroundColor: "gray.400" }}
              >
                <Text>Dashboard</Text>
              </Box>

              <Box
                as={Link}
                width="100%"
                p={3}
                pl={6}
                _hover={{ textDecoration: "none", backgroundColor: "gray.400" }}
              >
                <Text>Profile</Text>
              </Box>

              <Box
                as={Link}
                width="100%"
                p={3}
                pl={6}
                _hover={{ textDecoration: "none", backgroundColor: "gray.400" }}
              >
                <Text>Jobs</Text>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default CompanySidebar;
