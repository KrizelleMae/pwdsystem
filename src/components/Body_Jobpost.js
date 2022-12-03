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
} from "@chakra-ui/react";
import kcc from "../images/kcc.png";
import PopLogin from "../components/PopLogin";
import { useSpeechSynthesis } from "react-speech-kit";

function Body_Jobpost(props) {
  const toast = useToast();
  const [user, setUser] = useState([]);
  const [job, setJob] = useState([]);
  const { speak } = useSpeechSynthesis();
  const [Firstname, setFirstname] = useState(
    "cook chicken nuggetscook chicken nuggetscook chicken"
  );

  const [fontSize, setFontSize] = useState(16);

  // const getJob = () => {
  //   axios.get("http://localhost/pwd-backend/get_job.php").then((response) => {
  //     setJob(response.data);
  //   });
  // };

  // useEffect(() => {
  //   getJob();
  // }, [job]);

  return (
    <div id="target">
      <VStack>
        <Stack pt="20px" spacing={1}></Stack>
        <Stack>
          <Center py={5} w="100%">
            <Box
              w="100%"
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"2xl"}
              rounded={"lg"}
              p={6}
              textAlign={""}
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
                {props.title}
                <Link
                  onClick={() => speak({ text: Firstname })}
                  color={"blue.400"}
                >
                  🎤
                </Link>
              </Heading>
              <Text className="content" fontWeight={600} color={"gray.600"}>
                {props.company_id}
              </Text>
              <Text
                color={useColorModeValue("gray.700", "gray.400")}
                className="content"
              >
                {props.description}
                <Link href={"#"} color={"blue.400"}>
                  #tag
                </Link>
                me in your posts
                <br></br>
                <br></br>
              </Text>
              <Badge
                className="content"
                py={1}
                bg={useColorModeValue("yellow.400", "yellow.800")}
                fontWeight={"800"}
              >
                {props.salary}
              </Badge>

              <Stack
                className="content"
                align={"left"}
                justify={"left"}
                direction={"row"}
                mt={6}
              >
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  #art
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  #photography
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  #music
                </Badge>
              </Stack>

              <Stack mt={8} direction={"row"} spacing={4}>
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  _focus={{
                    bg: "gray.200",
                  }}
                >
                  View
                </Button>

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
              </Stack>
            </Box>
          </Center>
        </Stack>
      </VStack>
    </div>
  );
}

export default Body_Jobpost;
