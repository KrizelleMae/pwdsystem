import React, { useState } from "react";
import {
  Flex,
  Text,
  IconButton,
  Link,
  Divider,
  Avatar,
  Heading,
} from "@chakra-ui/react";
import {
  FiMenu,
  FiHome,
  FiCalendar,
  FiUser,
  FiDollarSign,
  FiBriefcase,
  FiSettings,
} from "react-icons/fi";
import { IoPawOutline } from "react-icons/io5";
import NavItem from "../components/NavItem";

export default function Sidebar() {
  const [navSize, changeNavSize] = useState("large");
  return (
    <Flex
      pos="fixed"
      left="0"
      h="100vh"
      marginTop="0vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize == "small" ? "0px" : "5px"}
      w={navSize == "small" ? "75px" : "250px"}
      flexDir="column"
      justifyContent="space-between"
      bg="#008374"
    >
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        as="nav"
        color="white"
      >
        <IconButton
          background=""
          _hover={{ background: "none" }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize == "small") changeNavSize("large");
            else changeNavSize("small");
          }}
        />

        <Link href="AdminDashboard">
          <NavItem
            navSize={navSize}
            icon={FiHome}
            title="Dashboard"
            description="This is the dashboard."
          />
        </Link>
        <Link href="AdminCompany">
          <NavItem navSize={navSize} icon={FiCalendar} title="Company" />
        </Link>
        <Link href="AdminPwd">
          <NavItem navSize={navSize} icon={FiUser} title="PWD" />
        </Link>
        <Link href="AdminReports">
          <NavItem navSize={navSize} icon={FiBriefcase} title="Reports" />
        </Link>
        <Link href="AdminSettings">
          <NavItem navSize={navSize} icon={FiSettings} title="Settings" />
        </Link>
      </Flex>

      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        mb={4}
        color="white"
      >
        <Divider display={navSize == "small" ? "none" : "flex"} />
        <Flex mt={4} align="center">
          <Avatar size="sm" src="avatar-1.jpg" />
          <Flex
            flexDir="column"
            ml={2}
            display={navSize == "small" ? "none" : "flex"}
          >
            <Heading as="h3" size="sm">
              Admin@gmail.com
            </Heading>
            <Text color="#f0f0f0">Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
