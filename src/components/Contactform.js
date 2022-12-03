import React from "react";
import emailjs from "emailjs-com";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
  Text,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from "react-icons/bs";

export default function Contactform() {
  //   function success() {
  //     <Box textAlign="center" py={10} px={6}>
  //       <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
  //       <Heading as="h2" size="xl" mt={6} mb={2}>
  //         This is the headline
  //       </Heading>
  //       <Text color={"gray.500"}>
  //         Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  //         eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  //         voluptua.
  //       </Text>
  //     </Box>;
  //   }
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k3713iu",
        "template_h9uvoj6",
        e.target,
        "EyVwIoEQF0V6aoT-q"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    // e.target.success();
    e.target.reset();
  }

  return (
    <div>
      <Box
        bg={useColorModeValue("white", "gray.700")}
        color={useColorModeValue("gray.700", "whiteAlpha.900")}
        w={"full"}
        maxW={"500"}
        borderRadius="xl"
        p={10}
      >
        <form onSubmit={sendEmail}>
          <FormControl isRequired>
            <FormLabel>What</FormLabel>
            <InputGroup>
              <InputLeftElement children={<BsPerson />} />
              <Input type="text" Name="What" placeholder=" What" />
            </InputGroup>
            <FormLabel>Where</FormLabel>
            <InputGroup>
              <InputLeftElement children={<BsPerson />} />
              <Input type="text" Name="Where" placeholder=" Where" />
            </InputGroup>
            <FormLabel>When</FormLabel>
            <InputGroup>
              <InputLeftElement children={<BsPerson />} />
              <Input type="text" Name="When" placeholder=" When" />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <InputGroup>
              <InputLeftElement children={<BsPerson />} />
              <Input type="text" name="name" placeholder="Your Name" />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <InputLeftElement children={<MdOutlineEmail />} />
              <Input type="email" name="email" placeholder="Your Email" />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Message</FormLabel>

            <Textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              resize="none"
            />
          </FormControl>
          <div className="col-8 pt-3 mx-auto">
            <Button
              href="Contactform"
              mt={5}
              colorScheme="blue"
              bg="blue.400"
              color="white"
              _hover={{
                bg: "blue.500",
              }}
              isFullWidth
              type="submit"
              placeholder="SendMessage"
              name="message"
            >
              Send Message
            </Button>
            {/* <Link href="AdminCompany">
              <Text>Send Details</Text>
            </Link> */}
          </div>
        </form>
      </Box>
    </div>
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="name" />
    //   <label>Email</label>
    //   <input type="email" name="mail" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>
  );
}
