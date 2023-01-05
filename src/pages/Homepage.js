import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Flex,
  Container,
  Link,
  Box,
  Text,
  HStack,
  VStack,
  Button,
  Heading,
  Avatar,
  Stack,
  Center,
  useColorModeValue,
  Select,
  Input,
  Wrap,
  WrapItem,
  AspectRatio,
  useColorMode,
  Divider,
} from "@chakra-ui/react";
import "../css/navbar.css";
import JobPost from "../components/JobPost";
import WatchVideo from "../components/WatchVideo";
import Footer from "../components/Footer";
import SendMessage from "../components/SendMessage";
import Contactform from "../components/Contactform";
import Navigation from "../components/Navigation";
import Top_Navigation from "../components/Top_Navigation";
import { BrowserRouter, Route, Redirect, redirect } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import api from "../restapi/api";

import { BsSun, BsMoonStarsFill } from "react-icons/bs";
function Homepage(props) {
  const bgcolor = useColorModeValue("teal", "gray.700");
  const fontcolor = useColorModeValue("gray.50", "white");
  const [fontSize, setFontSize] = useState(16);

  const { colorMode, toggleColorMode } = useColorMode();

  const [job, setJob] = useState([]);

  useEffect(() => {}, []);

  // const commands = [
  //   {
  //     command: ["Go to *", "Open *"],
  //     callback: (redirectPage) => setRedirectUrl(redirectPage),
  //   },
  // ];
  // const { transcript } = useSpeechRecognition({ commands });
  // const [redirectUrl, setRedirectUrl] = useState("");

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  return (
    <div id="target">
      <Top_Navigation />
      <Container bg={bgcolor} maxW={"100%"}>
        <Box position="abolute" zIndex={40}>
          <Button
            mt="55px"
            position="fixed"
            aria-label="Toggle Color Mode"
            onClick={toggleColorMode}
            _focus={{ boxShadow: "none" }}
            {...props}
          >
            {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
          </Button>
          <Button
            mt="100px"
            position="fixed"
            aria-label="Toggle Color Mode"
            onClick={() => setFontSize(fontSize + 5)}
          >
            A+
          </Button>
          <Button
            mt="145px"
            position="fixed"
            aria-label="Toggle Color Mode"
            onClick={() => setFontSize(fontSize - 5)}
          >
            A-
          </Button>
        </Box>

        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              <Text as={"span"} color={"orange.400"}>
                PWD DSWD
              </Text>
              <br />
              <Text as={"span"} color={"orange.400"}>
                Job Hunting!
              </Text>
              <p it="transcript">Transcript: {transcript}</p>
              <button onClick={SpeechRecognition.startListening}>Start</button>
              {/* <div>
                <p>Microphone: {listening ? "on" : "off"}</p>
                <button onClick={SpeechRecognition.startListening}>
                  Start
                </button>
                <button onClick={SpeechRecognition.stopListening}>Stop</button>
                <button onClick={resetTranscript}>Reset</button>
                <p>transcript{transcript}</p>
              </div> */}
            </Heading>

            <Box id="target">
              <p className="content">
                <Text fontSize={fontSize} px>
                  "AN AMAZING INITIATIVE THAT ENABLES PEOPLE TO GET IN DIRECT
                  TOUCH WITH THE RECRUITMENT TEAMS OF THE MAIN INTERNATIONAL
                  ORGANIZATIONS. NOWHERE ELSE, ONE HAS THE CHANCE TO HAVE THIS
                  EXPERIENCE."
                </Text>
              </p>
            </Box>
            <Stack
              ml="10%"
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Link href="Signup">
                <Button
                  className="content"
                  rounded={"full"}
                  size={"lg"}
                  colorScheme={"red"}
                  bg={"orange"}
                  color="white"
                  _hover={{ bg: "green.500" }}
                  boxShadow="lg"
                  p="6"
                >
                  Get started
                </Button>
              </Link>
              <WatchVideo />
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
            >
              <AspectRatio maxW="full" ratio={4 / 2}>
                <iframe
                  title="Tutorial"
                  src="https://youtube.com/embed/mtixdJuLuRI"
                  allowFullScreen
                />
              </AspectRatio>
            </Box>
          </Flex>
        </Stack>
      </Container>

      {/* JOB POST */}
      <Box m={10}>
        <Center mb={10}>
          <Heading>All Jobs</Heading>
        </Center>
        <JobPost />

        <Box textAlign="center" mt={3}>
          {" "}
          <Link>View more jobs {">>>>"}</Link>
        </Box>
      </Box>

      <Center>
        <Container bg={"gray.300"} maxW={"100%"} py={10}>
          <Divider w="60%" p={4} />
          <Heading fontcolor={fontcolor} p={30} fontSize={"4xl"}>
            Send Email
          </Heading>
          <Contactform />
        </Container>
      </Center>
      <Footer />
      {/* <Wrap>
        <WrapItem bg="black">
          <Box>
            {data.map((element, key) => {
              return (
                <>
                  <JobPosting title={element.title} company={element.company} />
                </>
              );
            })}
          </Box>
        </WrapItem>
        <WrapItem bg="green" h="500px">
          <Box>
            <Stack pt="20px" spacing={1} align="right"></Stack>
            {data.map((element, key) => {
              return (
                <>
                  <JobPosting title={element.title} company={element.company} />
                </>
              );
            })}
          </Box>
        </WrapItem>
      </Wrap> */}
    </div>
  );
}

export default Homepage;
