import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import {
  BiLocationPlus,
  BiMapPin,
  BiMessage,
  BiMessageDetail,
  BiVoicemail,
} from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import api from "../restapi/api";
import AddJobPost from "./AddJobPost";

function CompanyProfile(props) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [regNum, setRegNum] = useState("");
  const [incDate, setIncDate] = useState("");
  const [telNum, setTelNum] = useState("");
  const [compEmail, setCompEmail] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [website, setWebsite] = useState("");
  const [userId, setUserId] = useState(localStorage.getItem("id"));
  const [companyId, setCompanyId] = useState(0);
  const [jobs, setJobs] = useState([]);

  let navigate = useNavigate();

  const fetchUser = async () => {
    let response = await api.get("/company/get_company_profile.php", {
      params: { id: userId },
    });

    if (response) {
      setFirstname(response.data[0].REP_FIRSTNAME);
      setCompanyId(response.data[0].COMPANY_ID);
      setCompanyName(response.data[0].COMPANY_NAME);
      setEmail(response.data[0].COMPANY_EMAIL);
      setTelNum(response.data[0].TEL_NUMBER);
      setAddress(response.data[0].COMPANY_ADDRESS);
    }

    console.log(response);
  };

  // const fetchJobs = async () => {
  //   let response = await api.get("/get_jobs.php", {
  //     params: { companyId: companyId },
  //   });

  //   if (response) {
  //     setJobs(response.data);
  //   }
  // };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    fetchUser();
    // fetchJobs();
  }, []);

  return (
    <>
      <Container maxW="container.xl">
        <Flex alignItems="center">
          <Box>
            <Image
              borderRadius="full"
              boxSize="200px"
              src="gibbresh.png"
              fallbackSrc="https://via.placeholder.com/150"
            />
          </Box>
          <Box ml={10}>
            <Stack>
              <Text fontSize={26} fontWeight={700} textTransform="uppercase">
                {companyName}
              </Text>
              <Divider />
              <Text
                fontSize={15}
                fontWeight={400}
                mt={2}
                display="flex"
                alignItems="center"
              >
                <BiMapPin pr={3} />
                &nbsp; {address}
              </Text>
              <Text
                fontSize={15}
                fontWeight={400}
                display="flex"
                alignItems="center"
              >
                <BiMessage pr={4} /> &nbsp; {email} | {telNum}
              </Text>

              <Button
                colorScheme="green"
                rounded="full"
                size="sm"
                variant="outline"
                onClick={() => {
                  navigate("/companyprofile/addjobpost");
                }}
              >
                + Post job
              </Button>
            </Stack>
          </Box>
          {/* Account name: {firstname} <br /> */}
        </Flex>
      </Container>
    </>
  );
}

export default CompanyProfile;
