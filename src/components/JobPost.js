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
  Center,
  useColorModeValue,
  Badge,
  Wrap,
  Select,
  Input,
  Flex,
  VStack,
  Toast,
  useToast,
  WrapItem,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import kcc from "../images/kcc.png";
import PopLogin from "./PopLogin";
import { useSpeechSynthesis } from "react-speech-kit";
import api from "../restapi/api";
import {
  BsCheckAll,
  BsFileCheck,
  BsListCheck,
  BsUiChecks,
} from "react-icons/bs";

function JobPost(props) {
  const toast = useToast();
  const { speak } = useSpeechSynthesis();
  const [list, setList] = useState([]);

  const [fontSize, setFontSize] = useState(16);

  const fetchJobs = async () => {
    let response = await api.get("/get_all_jobs.php");

    if (response) {
      setList(response.data);
      console.log(response.data);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      {/* <Stack pt="20px" spacing={1}></Stack> */}
      <Wrap spacing="30px" justify="center" py={2}>
        {list.map((el) => {
          return (
            <>
              <WrapItem
                w="400px"
                // bg={useColorModeValue("white", "gray.900")}
                boxShadow="md"
                rounded={"lg"}
                p={7}
              >
                <Box>
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
                  <Text
                    fontSize="3xl"
                    fontWeight={600}
                    pt={5}
                    fontFamily={"body"}
                  >
                    {el.TITLE}
                    <Link
                      // onClick={() => speak({ text: Firstname })}
                      color={"blue.400"}
                    >
                      🎤
                    </Link>
                  </Text>
                  <Text
                    fontWeight={600}
                    color={"gray.500"}
                    mb={3}
                    fontSize={14}
                  >
                    {el.COMPANY_NAME}
                  </Text>
                  <Badge
                    variant="outline"
                    colorScheme={
                      el.JOB_TYPE === "Temporary"
                        ? "orange"
                        : el.JOB_TYPE === "permanent"
                        ? "green"
                        : "gray"
                    }
                  >
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
                    <List>
                      {JSON.parse(el.REQUIREMENTS).map((element) => {
                        return (
                          <>
                            <ListItem>
                              <ListIcon as={BsCheckAll} color="green.500" />
                              {element}
                            </ListItem>
                          </>
                        );
                      })}{" "}
                    </List>
                  </Stack>

                  <Center>
                    <Button
                      fontSize={"sm"}
                      rounded={"full"}
                      bg={"blue.400"}
                      color={"white"}
                      w="100%"
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
                        toast({
                          title: "Application Send.",
                          description: "The company has been notified!",
                          status: "success",
                          duration: 3000,
                          isClosable: true,
                        });
                      }}
                    >
                      Apply
                    </Button>
                  </Center>
                </Box>
              </WrapItem>
            </>
          );
        })}
      </Wrap>
    </div>
  );
}

export default JobPost;
