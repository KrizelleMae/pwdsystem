import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Container,
  Heading,
  IconButton,
  Input,
  Link,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { BiArrowBack, BiPlusCircle, BiTrash } from "react-icons/bi";
import axios from "axios";
import api from "../restapi/api";

function Documents(props) {
  let toast = useToast();
  const [pwdId, setPwdId] = useState("");
  const [verified, setVerified] = useState("");
  const [file, setFile] = useState("");
  const [userId, setUserId] = useState(localStorage.getItem("id"));

  const getData = async () => {
    let response = await api.get("/pwd/get_pwd_profile.php", {
      params: { id: userId },
    });

    setPwdId(response.data[0].PWD_ID);
    setVerified(response.data[0].VERIFIED);
  };

  const upload = () => {
    // console.log(file);
    const data = new FormData();
    data.append("file", file[0]);
    data.append("upload_preset", "e5say80h");
    data.append("cloud_name", "dnxkttjve");
    // setLoading(true);

    axios
      .post("https://api.cloudinary.com/v1_1/dnxkttjve/image/upload", data)
      .then((resp) => {
        axios
          .post("http://localhost/pwd-backend/API/pwd/post_pwd_id.php", {
            file: resp.data.url,
            userId: userId,
          })
          .then((response) => {
            if (response) {
              if (response.data.status === 1) {
                setFile("");

                toast({
                  title: "Posted.",
                  description: "The document has been posted.",
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
            }
          });
      });
  };

  useEffect(() => {
    getData();
  }, [pwdId]);

  return (
    <div>
      <Container mt={10} maxW="container.lg">
        <Box display="flex" alignItems={"center"}>
          <IconButton
            as={Link}
            href="/pwdprofile"
            icon={<BiArrowBack />}
            colorScheme="white"
            color="gray.800"
          />
          <Text>Back to Profile</Text>
        </Box>
        <Heading fontWeight={500} color="gray.600" mb={7} mt={8}>
          Documents
        </Heading>
        <AspectRatio ratio={12 / 2}>
          <Box
            borderColor="purple.300"
            borderStyle="dashed"
            borderWidth="2px"
            rounded="md"
            role="group"
            transition="all 150ms ease-in-out"
            _hover={{
              shadow: "md",
            }}
            initial="rest"
            animate="rest"
            whileHover="hover"
            background="purple.50"
            px={20}
          >
            <Input type={"file"} display="none"></Input>
            {/* <Button rightIcon={<BiPlusCircle />} size="sm" colorScheme="purple">
              Browse file
            </Button> */}

            <Input
              type="file"
              accept="image/png, image/gif, image/jpeg"
              onChange={(e) => {
                setFile(e.target.files);
              }}
            />
            <Button onClick={upload} ml={3} colorScheme="purple">
              Upload
            </Button>
          </Box>
        </AspectRatio>{" "}
        <Text mt={10} mb={3} color="gray.700" fontWeight={600}>
          All Documents
        </Text>
        <TableContainer bg="white" boxShadow="base" mt={18}>
          <Table variant="simple" size="sm">
            <Tbody>
              <Td>PWD ID</Td>
              <Td>
                <Link fontStyle="italic" href={pwdId} target="_blank">
                  {pwdId}
                </Link>
              </Td>

              <Td>
                <Badge
                  colorScheme={verified === 1 ? "green" : "red"}
                  variant="outline"
                >
                  {verified === 1 ? "verified" : "not verified"}
                </Badge>
              </Td>
            </Tbody>
          </Table>
        </TableContainer>
        {/* <TableContainer bg="white" boxShadow="base" pt={3} mt={7}>
          <Table variant="simple" size="sm">
            <Thead textAlign="center">
              <Th>Document name</Th>
              <Th>File</Th>
              <Th>Required</Th>
              <Th>Status</Th>
              <Th></Th>
            </Thead>
            <Tbody>
              <Td>Birth Certificate</Td>
              <Td>
                <Box fontStyle="italic">sampledata.jpg</Box>
              </Td>
              <Td>
                <b>YES</b>
              </Td>
              <Td>
                <Badge colorScheme="green" variant="outline">
                  Success
                </Badge>
              </Td>
              <Td>
                <IconButton icon={<BiTrash />} size="sm" />
              </Td>
            </Tbody>
          </Table>
        </TableContainer> */}
      </Container>
    </div>
  );
}

export default Documents;
