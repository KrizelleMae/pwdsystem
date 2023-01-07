import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiLogOut, BiLogOutCircle, BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import CompanyProfile from "../../components/CompanyProfile";
import Applications from "../../components/Company/Applications";
import api from "../../restapi/api";

function Dashboard(props) {
  const [companyId, setCompanyId] = useState("");
  const [company, setCompany] = useState("");
  const [userId, setUserId] = useState(localStorage.getItem("id"));
  const [description, setDescription] = useState("");
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
  const [jobs, setJobs] = useState([]);

  let navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const fetchUser = async () => {
    let response = await api.get("/company/get_company_profile.php", {
      params: { id: userId },
    });

    if (response) {
      setCompany(response.data[0].COMPANY_NAME);
      setDescription(response.data[0].DESCRIPTION);
      setWebsite(response.data[0].WEBSITE);
      setFirstname(
        response.data[0].REP_FIRSTNAME + " " + response.data[0].REP_LASTNAME
      );
      setPosition(response.data[0].REP_POSITION);
      setCompanyId(response.data[0].COMPANY_ID);
    }
  };

  const fetchJobs = async () => {
    let response = await api.get("/get_jobs_spec.php", {
      params: { companyId: companyId },
    });

    if (response) {
      setJobs(response.data);
      // console.log(response.data);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchJobs();
  }, [companyId]);

  return (
    <Box bgColor="gray.100" height="100%" p={10}>
      <Container maxW="container.xl">
        <CompanyProfile />

        <Box mt={16}>
          <Tabs variant="soft-rounded" colorScheme="blue">
            <TabList>
              <Tab px={20}>Overview</Tab>
              <Tab px={20}>Jobs</Tab>
              <Tab px={20}>Application</Tab>
              <Spacer />
              <Tab py={0}>
                <Button
                  size="sm"
                  colorScheme="red"
                  onClick={logout}
                  rightIcon={
                    <BiLogOutCircle style={{ transform: "rotate(180deg)" }} />
                  }
                >
                  Logout
                </Button>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel p={0} mt={5}>
                <Box bg="gray.50" borderRadius={5} p={9} h={500}>
                  <HStack>
                    <Box>
                      <Text>
                        Website Link: <Link href={website}>{website}</Link>{" "}
                      </Text>
                      <Text
                        mt={10}
                        fontSize={14}
                        color="gray.700"
                        fontWeight={600}
                      >
                        COMPANY DESCRIPTION
                      </Text>
                      <Text mt={3}>{description}</Text>
                    </Box>
                    <Spacer />
                    <Box bgColor="gray.100" p={7} width={500} borderRadius={10}>
                      <Text mb={7} display="flex" alignItems="center">
                        <BiUser /> &nbsp; REPRESENTATIVE INFORMATION
                      </Text>

                      <Text fontSize={14} color="gray.700" fontWeight={600}>
                        Representative:
                      </Text>

                      <Text>{firstname}</Text>

                      <Text
                        mt={5}
                        fontSize={14}
                        color="gray.700"
                        fontWeight={600}
                      >
                        Position:
                      </Text>

                      <Text>{position}</Text>
                    </Box>
                  </HStack>
                </Box>
              </TabPanel>
              {/* JOBS */}
              <TabPanel p={0} mt={5}>
                <Box bg="gray.50" borderRadius={5} p={9} h={500}>
                  {jobs.map((el) => {
                    return (
                      <>
                        <li>{el.TITLE}</li>
                      </>
                    );
                  })}
                </Box>
              </TabPanel>
              {/* APPLICATIONS */}
              <TabPanel p={0} mt={5}>
                <Box bg="gray.50" borderRadius={5} p={9} h={500}>
                  <Applications companyId={companyId} />
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </Box>
  );
}

export default Dashboard;
