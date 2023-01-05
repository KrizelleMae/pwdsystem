import React, { useEffect, useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Avatar,
  Center,
  Box,
  Badge,
  Text,
  useDisclosure,
  Spacer,
  ButtonGroup,
  Divider,
  useColorMode,
  Container,
  HStack,
  Link,
} from "@chakra-ui/react";
import {
  BsSun,
  BsMoonStarsFill,
  BsFilePlus,
  BsFillPencilFill,
} from "react-icons/bs";

import api from "../../restapi/api";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function PWDDetails(props) {
  const [userid, setUserid] = useState(localStorage.getItem("id"));
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [skills, setSkills] = useState([]);
  const [jobForId, setJobForId] = useState(0);
  const [data, setData] = useState([]);

  let navigate = useNavigate();
  // FETCH USER DATA
  const fetchUser = async () => {
    let response = await api.get("/pwd/get_pwd_profile.php", {
      params: { id: props.userId },
    });

    if (response) {
      console.log(response);
      let res = response.data[0];
      setName(res.FIRSTNAME + " " + res.LASTNAME);
      setAge(res.BIRTHDATE);
      setAddress(
        res.STREET + ", " + res.CITY + ", " + res.PROVINCE + ", " + res.ZIP
      );
      setBio(res.BIO);
      setEmail(res.EMAIL_ADDRESS);
      setContact(res.CONTACT_NUMBER);
      setJobForId(res.DISABILITY_TYPE);

      setData(response.data);

      let resp = await api.get("/pwd/get_pwd_skills.php", {
        params: { id: props.userId },
      });

      if (resp) {
        // console.log(resp.data);
        setSkills(resp.data);
      }
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Container maxW="container.xl">
      <FormControl id="userName">
        <Box pt="15" color="black">
          <FormControl>
            <HStack>
              <FormLabel>
                <Text lineHeight={1.1} fontSize={{ base: "xl", sm: "lg" }}>
                  Name: <b>{name}</b>
                </Text>
              </FormLabel>
              <Spacer />
              <FormLabel>
                <Text lineHeight={1.1} fontSize={{ base: "xl", sm: "lg" }}>
                  Age:<b>{getAge(age)}</b>
                </Text>
              </FormLabel>
            </HStack>
            <FormLabel>
              <Text lineHeight={1.1} fontSize={{ base: "xl", sm: "lg" }}>
                Address: <b>{address}</b>
              </Text>
            </FormLabel>{" "}
            <FormLabel>
              {" "}
              {data.map((el) => {
                return (
                  <>
                    <Text lineHeight={1.1} fontSize={{ base: "xl", sm: "lg" }}>
                      Educational Attainment: <b>{el.EDUCATION}</b>
                    </Text>
                  </>
                );
              })}
            </FormLabel>
          </FormControl>
        </Box>
      </FormControl>

      <Box mt={8}>
        {data.map((el) => {
          return (
            <>
              <Text fontSize={17}>Inborn/Acquired: {el.DISABILITY_INBORN}</Text>
              <Text fontSize={17}>Disability Cause: {el.DISABILITY_CAUSE}</Text>

              <Text mt="2">
                PWD ID:{" "}
                <Badge colorScheme="blue">Click the link to view ID</Badge>
              </Text>
              <Link
                fontStyle="italic"
                href={el.PWD_ID}
                fontWeight={500}
                target="_blank"
              >
                {el.PWD_ID}
              </Link>
            </>
          );
        })}
      </Box>

      <Divider my={3} />

      <Text fontStyle={"italic"}>{bio}</Text>

      <Flex pb={10}>
        <Box w="50%" bgColor="gray.100" p={7} mx="1" borderRadius={5}>
          <Text mb={2} fontWeight={600}>
            SKILLS
          </Text>
          <Box colorScheme="f0f0f0" borderRadius="md" px={4}>
            {skills.map((el) => {
              return (
                <>
                  <li>
                    {el.SKILL_NAME.charAt(0).toUpperCase() +
                      el.SKILL_NAME.slice(1).toLowerCase()}
                  </li>
                </>
              );
            })}
          </Box>
        </Box>
        <Spacer />
        <Box pb={10} w="50%" bgColor="gray.100" p={7} mx="1 ">
          <Text textTransform="uppercase" fontWeight={600} mb={2}>
            Contact Information
          </Text>
          <Box colorScheme="f0f0f0" borderRadius="md" px={4}>
            <FormControl id="userName" mt={2}>
              <FormLabel>Email: {email}</FormLabel>
              <FormLabel>Contact number : {contact}</FormLabel>
            </FormControl>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
export default PWDDetails;
