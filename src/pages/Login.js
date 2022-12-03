import {
  Button,
  Input,
  Center,
  Box,
  FormLabel,
  Text,
  useDisclosure,
  Image,
  Grid,
  GridItem,
  Circle,
  Link,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

import "../css/login.css";

import NewLogin from "../components/NewLogin";

import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import api from "../restapi/api";
import axios from "axios";

import React, { useEffect, useState } from "react";

const clientId =
  "463065432871-c6n0ltb05akftuj1m0metquv49cumha5.apps.googleusercontent.com";
function Login(props) {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fetchUsers = async (e) => {
    e.preventDefault();
    let response = await api.get("users.php");

    setUsers(response.data);
    console.log(response.data);
  };

  const { isOpen: isOpen, onOpen: onOpen, onClose: onClose } = useDisclosure();
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure();

  const login = async (e) => {
    e.preventDefault();
    let response = await api.post("login.php", {
      email: email,
      password: password,
    });

    if (response) {
      console.log(response.data);
    }
  };

  return (
    <div>
      <Tabs isFitted variant="enclosed">
        <TabList mb="2em">
          <Tab>Comapny Register</Tab>
          <Tab>PWD Register</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <NewLogin />
          </TabPanel>
          <TabPanel>
            <NewLogin />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default Login;
