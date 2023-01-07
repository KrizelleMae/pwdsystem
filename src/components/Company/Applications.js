import {
  Badge,
  Box,
  Button,
  IconButton,
  Link,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  ModalFooter,
  ModalCloseButton,
  ModalHeader,
  useToast,
} from "@chakra-ui/react";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { BsEye, BsFillEyeFill } from "react-icons/bs";
import api from "../../restapi/api";
import PWDDetails from "../PWD/PWDDetails";

function Applications(props) {
  const [list, setList] = useState([]);

  const [id, setId] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  let toast = useToast();

  const applications = async () => {
    let response = await api.get("/company/get_applications.php", {
      params: { companyId: props.companyId },
    });
    setList(response.data);
  };

  const acceptApplication = async (userId, appId) => {
    let response = await api.post("/company/accept_application.php", {
      userId: userId,
    });
    if (response.data.status === 1) {
      toast({
        title: "Success.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Error.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    applications();
  }, [list, id]);
  return (
    <div>
      <Box>
        <TableContainer bg="white" boxShadow="base">
          <Table variant="simple" size="sm">
            <Thead textAlign="center ">
              <Th>Applicant Name</Th> <Th py={3}>Job Title</Th>
              <Th>Date Applied</Th>
              <Th>Status</Th>
              <Th>Action</Th>
            </Thead>
            <Tbody>
              {list.map((el) => {
                return (
                  <>
                    <Tr>
                      {" "}
                      <Td py={4}>{el.FIRSTNAME + " " + el.LASTNAME}</Td>{" "}
                      <Td>
                        <Box>{el.TITLE}</Box>
                      </Td>
                      <Td>
                        <Text fontWeight="bold" textTransform="uppercase">
                          {moment(el.DATE_APPLIED).format("lll")}
                        </Text>
                      </Td>
                      <Td>
                        <Badge colorScheme="green" variant="outline">
                          {el.STATUS}
                        </Badge>
                      </Td>
                      <Td align="center">
                        <IconButton
                          icon={<BsEye />}
                          mr={2}
                          onClick={() => {
                            onOpen();
                            setId(el.FK_USER_ID);
                          }}
                        />
                        <Button
                          fontSize={14}
                          colorScheme="green"
                          onClick={() => {
                            acceptApplication(el.FK_USER_ID, el.APPLICATION_ID);
                          }}
                        >
                          Accept
                        </Button>
                      </Td>
                    </Tr>
                  </>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Review Application</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <PWDDetails userId={id} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Applications;
