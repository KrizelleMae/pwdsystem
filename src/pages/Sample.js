import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useColorMode,
    Container,
    Table,
    Thead,
    Th,
    Tbody,
    Td,
    InputGroup,
    InputRightElement,
    Tr,
  } from "@chakra-ui/react";

import api from '../restapi/api';
import { BsSun, BsMoonStarsFill } from "react-icons/bs";

function Sample(props) {
    const { colorMode, toggleColorMode } = useColorMode();
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState([]);

    const login = () => {
        // let response = api.post('/insert.php', {email: email, password: password});
        // console.log(response)

        // REQUEST FOR INSERTION
        axios.post('http://localhost/pwd-backend/insert.php', {
            email: email, 
            password: password
        }).then((response) => {console.log(response.data)});
    }

    const getUsers = () => {
        axios.get('http://localhost/pwd-backend/get_users.php').then((response) => {setUser(response.data)})
    }

    useEffect(()=> {
        getUsers();
    }, [user])
    
    return (
        <div>
            <Container mt={10}
          
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
          <Heading
        className="content"
        w="100%"
        textAlign={"center"}
        fontWeight="normal"
        
      >
        PWD User Registration
        <Text className="content" fontSize={"md"} color={"gray.600"}>
          Enter the login information to your account. You will be able to
          create additional information after registering. Thank you!
        </Text>
        <Text className="content" fontSize={"md"}>
          Enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          <Button
            aria-label="Toggle Color Mode"
            onClick={toggleColorMode}
            _focus={{ boxShadow: "none" }}
            w="fit-content"
            {...props}
          >
            {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
          </Button>
        </Text>
 
      </Heading>
       
              <Input placeholder='Username' size={"lg"} type="email" onChange={(e) => {setEmail(e.target.value)}}/>
    
            {/* <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
               type="password" onChange={(e) => {setPassword(e.target.value)}}/>
            </FormControl> */}
            <InputGroup size="lg">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            onChange={(e) => {setPassword(e.target.value)}}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>

            
          </InputRightElement>
                 </InputGroup>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Link href="" color={"blue.400"}>
                  Forgot password?
                </Link>
                <Link href="Signup" color={"blue.400"}>
                  Create Account
                </Link>
              </Stack>
              
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={login}
                
              >

                Create Account
              </Button>
            </Stack>
          </Stack>
        </Container>

        

        <Container w='container.lg'>
            
          <Table>
            <Thead>
                <Th>Email</Th>
                <Th>Password</Th>
            </Thead>
            <Tbody>
                {user.map((el) => {
                    return (
                        <> 
                        <Tr><Td>{el.email}</Td>
                            <Td>{el.password}</Td></Tr>
                            
                        </>
                    )
                })}
               
            </Tbody>
          </Table>
        </Container>
        </div>
    );
}
  
export default Sample
  