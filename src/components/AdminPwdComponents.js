import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Stack,
  Button,
} from "@chakra-ui/react";
import { AiFillEdit } from "react-icons/ai";
import { BiShow } from "react-icons/bi";

function AdminPwdComponents() {
  return (
    <div>
      <TableContainer w="100%" mr="10px">
        <Table variant="striped" colorScheme="teal">
          <TableCaption>PWD Records</TableCaption>
          <Thead>
            <Tr align="center">
              <Th>PWD ID</Th>
              <Th>PWD Name</Th>
              <Th>Job Title</Th>
              <Th>Satatus</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>001</Td>
              <Td>James</Td>
              <Td>Janitor</Td>
              <Td>Active</Td>
              <Td>
                <Stack direction="row">
                  <Button
                    leftIcon={<AiFillEdit />}
                    colorScheme="teal"
                    variant="outline"
                  >
                    Edit
                  </Button>
                  <Button
                    leftIcon={<BiShow />}
                    colorScheme="teal"
                    variant="outline"
                  >
                    View
                  </Button>

                  {/* <Button
                    rightIcon={<GrView/>}
                    colorScheme="teal"
                    variant="outline"
                  >
                    veiw
                  </Button> */}
                </Stack>
              </Td>
            </Tr>
            <Tr>
              <Td>001</Td>
              <Td>Joshua</Td>
              <Td>Janitor</Td>
              <Td>Active</Td>
            </Tr>
            <Tr>
              <Td>001</Td>
              <Td>KCC</Td>
              <Td>Janitor</Td>

              <Td>Active</Td>
            </Tr>
            <Tr>
              <Td>001</Td>
              <Td>Jaylord</Td>
              <Td>Janitor</Td>

              <Td>Active</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Total</Th>
              <Th></Th>
              <Th></Th>
              <Th></Th>
              <Th></Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AdminPwdComponents;
