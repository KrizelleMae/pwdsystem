import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Stack,
  Input,
  Flex,
  HStack,
  Textarea,
  FormControl,
  FormLabel,
  Container,
  Select,
  Checkbox,
  CheckboxGroup,
  Box,
  InputGroup,
  InputLeftElement,
  Heading,
  VStack,
} from "@chakra-ui/react";
import kcc from "../images/kcc.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { BiArrowBack, BiSend } from "react-icons/bi";
import api from "../restapi/api";

function AddJobPost(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [position, setPosition] = useState("");
  const [requirements, setRequirements] = useState([]);
  const [jobType, setJobType] = useState("");
  const [salary, setSalary] = useState("");

  const [department, setDepartment] = useState("");
  const [target, setTarget] = useState([]);
  const [checkList, setCheckList] = useState([]);

  let navigate = useNavigate();

  // DISABILITIES
  const fetchDisabilities = async () => {
    let response = await api.get("/get_disabilities.php");

    if (response) {
      setCheckList(response.data);
    }
  };

  const location = useLocation();
  const parameter = new URLSearchParams(location.search);
  const [companyId, setCompanyId] = useState(parameter.get("id"));

  const postJob = async (event) => {
    event.preventDefault();

    let response = await api.post("/company/post_job.php", {
      title: title,
      position: position,
      description: description,
      requirements: JSON.stringify(requirements),
      jobType: jobType,
      salary: salary,
      department: department,
      target: target,
      companyId: companyId,
    });

    if (response) {
      console.log(response.data);
      // if( response.data.status === 1) {
      // }
    } else {
      console.log("No data fetched.");
    }
  };
  const handleCheck = (e, value) => {
    if (e.target.checked) {
      setRequirements([...requirements, value]);
    } else {
      setRequirements(requirements.filter((val) => val !== value));
    }
  };

  const handleTarget = (e, value) => {
    if (e.target.checked) {
      setTarget([...target, value]);
    } else {
      setTarget(target.filter((val) => val !== value));
    }
  };

  useEffect(() => {
    fetchDisabilities();
  }, []);

  return (
    <Container p={8} maxW="container.4xl">
      <Flex alignItems="center" justifyContent="space-between">
        <Button
          onClick={() => {
            navigate("/companyprofile");
          }}
          mr={2}
          leftIcon={<BiArrowBack />}
        >
          Back to Company profile
        </Button>{" "}
        <Heading fontSize={23}>New Job Post</Heading>
      </Flex>

      <form onSubmit={postJob}>
        <Flex mt={12}>
          <Box mr={10} w="35%">
            <FormControl isRequired>
              <FormLabel fontWeight={600}>Job Title</FormLabel>
              <Input
                focusBorderColor="Teal"
                placeholder="Job Tittle"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </FormControl>
            <FormControl isRequired mt={4}>
              <FormLabel fontWeight={600}>Job Position</FormLabel>
              <Input
                focusBorderColor="Teal"
                placeholder="Position"
                value={position}
                onChange={(e) => {
                  setPosition(e.target.value);
                }}
              />
            </FormControl>
            <FormControl isRequired mt={4}>
              <FormLabel fontWeight={600}>Job Description</FormLabel>
              <Textarea
                focusBorderColor="Teal"
                placeholder="Write the job description here"
                value={description}
                rows={5}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </FormControl>
          </Box>
          <Box w="35%">
            <FormControl isRequired>
              <FormLabel fontWeight={600}>Job Type</FormLabel>{" "}
              <Select
                onChange={(e) => {
                  setJobType(e.target.value);
                }}
                value={jobType}
              >
                <option value="">Select Job type</option>
                <option value="Full Time">Full Time</option>
                <option value="Temporary">Temporary</option>
                <option value="Permanent">Permanent</option>
                <option value="Contractual">Contractual</option>
              </Select>
            </FormControl>{" "}
            <FormControl isRequired>
              <FormLabel fontWeight={600} mt={4}>
                Salary (Range)
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.400"
                  fontSize="1.1em"
                  children="₱"
                />
                <Input
                  placeholder="0000 - 00000"
                  value={salary}
                  onChange={(e) => {
                    setSalary(e.target.value);
                  }}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontWeight={600} mt={4}>
                Location / Department
              </FormLabel>
              <Input
                value={department}
                focusBorderColor="Teal"
                placeholder="Location"
                onChange={(e) => {
                  setDepartment(e.target.value);
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel fontWeight={600} my="3" mt={5}>
                Requirements
              </FormLabel>
              <CheckboxGroup colorScheme="green">
                <HStack p={5} bg="gray.50">
                  <Stack width="50%">
                    <Checkbox
                      value="Resume"
                      onChange={(e) => {
                        handleCheck(e, "Resume");
                      }}
                    >
                      Resume
                    </Checkbox>
                    <Checkbox
                      value="Birth Certificate"
                      onChange={(e) => {
                        handleCheck(e, "Birth Certificate");
                      }}
                    >
                      Birth Certificate
                    </Checkbox>
                    <Checkbox
                      value="2 Valid IDs"
                      onChange={(e) => {
                        handleCheck(e, "2 Valid IDs");
                      }}
                    >
                      2 Valid IDs
                    </Checkbox>

                    <Checkbox
                      value="NBI Cleareance"
                      onChange={(e) => {
                        handleCheck(e, "NBI Cleareance");
                      }}
                    >
                      NBI Cleareance
                    </Checkbox>
                  </Stack>

                  <Stack>
                    <Checkbox
                      value="Police Cleareance"
                      onChange={(e) => {
                        handleCheck(e, "Police Cleareance");
                      }}
                    >
                      Police Cleareance
                    </Checkbox>
                    <Checkbox
                      value="Transcript of Record"
                      onChange={(e) => {
                        handleCheck(e, "Transcript of Record");
                      }}
                    >
                      Transcript of Records / Diploma (Form 137 for High School
                      graduates)
                    </Checkbox>{" "}
                    <Checkbox
                      value="COR (Certification of Registration)"
                      onChange={(e) => {
                        handleCheck(e, "COR");
                      }}
                    >
                      Certification of Registration (for Students)
                    </Checkbox>
                  </Stack>
                </HStack>
              </CheckboxGroup>
            </FormControl>
          </Box>

          <Box ml={10} w="">
            <FormControl>
              <FormLabel fontWeight={600} mb={3}>
                Target PWDs
              </FormLabel>{" "}
              <CheckboxGroup colorScheme="green">
                <Stack p={5} bg="gray.50">
                  {checkList.map((el) => {
                    return (
                      <>
                        <Checkbox
                          onChange={(e) => {
                            handleTarget(e, el.JOB_FOR_ID);
                          }}
                        >
                          {el.JOB_FOR_NAME}
                        </Checkbox>
                      </>
                    );
                  })}
                </Stack>
              </CheckboxGroup>
            </FormControl>
          </Box>
        </Flex>

        <Flex mt={10}>
          <Button
            w="full"
            onClick={() => {
              navigate("/companyprofile");
            }}
            mr={2}
            leftIcon={<BiArrowBack />}
          >
            Back
          </Button>
          <Button
            colorScheme="blue"
            w="full"
            rightIcon={<BiSend />}
            type="submit"
          >
            Save
          </Button>
        </Flex>
      </form>
    </Container>
  );
}

export default AddJobPost;
