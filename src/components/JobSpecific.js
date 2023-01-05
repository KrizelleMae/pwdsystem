import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Link,
  Box,
  Text,
  Button,
  Heading,
  Avatar,
  Stack,
  Badge,
  VStack,
  useToast,
} from "@chakra-ui/react";
import kcc from "../images/kcc.png";
import PopLogin from "./PopLogin";
import { useSpeechSynthesis } from "react-speech-kit";
import api from "../restapi/api";

function Body_Jobpost(props) {
  const toast = useToast();
  const { speak } = useSpeechSynthesis();
  const [list, setList] = useState([]);

  const [fontSize, setFontSize] = useState(16);
  const [userId, setUserId] = useState(localStorage.getItem("id"));
  const [pwdId, setPwdId] = useState("");
  const [verified, setVerified] = useState("");
  const [companyId, setCompanyId] = useState("");

  const fetchJobs = async () => {
    let response = await api.get("/pwd/get_pwd_jobs.php", {
      params: { jobForId: props.jobForId },
    });

    if (response) {
      setList(response.data);
      setCompanyId(response.data[0].FK_COMPANY_ID);
    }
  };

  const getData = async () => {
    let response = await api.get("/pwd/get_pwd_profile.php", {
      params: { id: userId },
    });

    setPwdId(response.data[0].PWD_ID);
    setVerified(response.data[0].VERIFIED);
  };

  const apply = async (e) => {
    // e.preventDefault();

    if (verified === 1) {
      let response = await api.post("/pwd/post_application.php", {
        userId: props.userId,
        jobId: e,
        companyId: companyId,
      });

      console.log(response.data);

      if (response.data.status === 1) {
        toast({
          title: "Job Applied.",
          // description: "Wait.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Error.",
          description: response.data.message,
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Account not verified",
        description: "Kindly upload your ID to be verified. ",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    fetchJobs();
    getData();
  }, []);

  return (
    <div id="target">
      <VStack>
        {/* <Stack pt="20px" spacing={1}></Stack> */}
        <VStack>
          <Box>
            {list.map((el) => {
              return (
                <>
                  <Box
                    w="600px"
                    // bg={useColorModeValue("white", "gray.900")}
                    boxShadow={"lg"}
                    rounded={"lg"}
                    p={6}
                  >
                    <Avatar
                      size={"xl"}
                      src={kcc}
                      alt={"Avatar Alt"}
                      pos={"relative"}
                      _after={{
                        content: '""',
                        w: 4,
                        h: 4,
                        bg: "green.300",
                        border: "2px solid white",
                        rounded: "full",
                        pos: "absolute",
                        bottom: 0,
                        right: 3,
                      }}
                    />
                    <Heading pt={5} fontFamily={"body"}>
                      {el.TITLE}
                      <Link
                        // onClick={() => speak({ text: Firstname })}
                        color={"blue.400"}
                      >
                        🎤
                      </Link>
                    </Heading>
                    <Text fontWeight={600} color={"gray.600"} mt={5}>
                      {el.COMPANY_NAME}
                    </Text>
                    <Badge variant="outline" colorScheme="green">
                      {el.JOB_TYPE}
                    </Badge>

                    <Text className="content">{el.JOB_DESCRIPTION}</Text>
                    <Badge
                      className="content"
                      colorScheme="orange"
                      py={1}
                      px={2}
                      fontWeight={"800"}
                    >
                      P {el.SALARY}
                    </Badge>

                    <Stack p={3} bg="" w="auto" mt={5}>
                      <Text fontWeight="bold">Requirements: </Text>
                      {JSON.parse(el.REQUIREMENTS).map((element) => {
                        return (
                          <>
                            <li>{element}</li>
                          </>
                        );
                      })}
                    </Stack>

                    <Stack mt={8} direction={"row"} spacing={4}>
                      {/* <Button
                        flex={1}
                        fontSize={"sm"}
                        rounded={"full"}
                        _focus={{
                          bg: "gray.200",
                        }}
                      >
                        View
                      </Button> */}

                      <Button
                        flex={1}
                        fontSize={"sm"}
                        rounded={"full"}
                        bg={"blue.400"}
                        color={"white"}
                        boxShadow={
                          "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                        }
                        _hover={{
                          bg: "blue.500",
                        }}
                        _focus={{
                          bg: "blue.500",
                        }}
                        onClick={() => {
                          apply(el.JOB_ID);
                        }}
                      >
                        Apply
                      </Button>
                    </Stack>
                  </Box>
                </>
              );
            })}
          </Box>
        </VStack>
      </VStack>
    </div>
  );
}

export default Body_Jobpost;
