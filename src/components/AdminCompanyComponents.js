import React, {useEffect, useState} from 'react';
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
import axios from 'axios';



function admincompanycomponents(props) {

//   const [user, setUser] = useState([]);

// //   const getUsers = () => {
// //     axios.get('http://localhost/pwd-backend/get_users.php').then((response) => {setUser(response.data)})
// //   }
// //   useEffect(()=> {
// //     getUsers();
// // }, [user])
  
  return (
    <div>
      <TableContainer w="100%" mr="10px">
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Company Job Post</TableCaption>
          <Thead>
            <Tr align="center">
              <Th>Company ID</Th>
              <Th>Company Name</Th>

              <Th>JOb Title</Th>
              <Th>Satatus</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>001</Td>
              <Td>KCC</Td>
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
              <Td>KCC</Td>
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
              <Td>KCC</Td>
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

export default admincompanycomponents;
