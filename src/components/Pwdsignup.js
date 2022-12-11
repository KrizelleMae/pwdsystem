import React, { useEffect, useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  Textarea,
  FormHelperText,
  Text,
  useColorMode,
  useColorModeValue,
  Stack,
  Checkbox,
  CheckboxGroup,
  HStack,
  Radio,
  RadioGroup,
  Divider,
} from "@chakra-ui/react";

// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";
import { useSpeechSynthesis } from "react-speech-kit";
import { useToast } from "@chakra-ui/react";
import { BsSun, BsMoonStarsFill, BsFileMinus } from "react-icons/bs";
import "../css/checkbox.css";
import api from "../restapi/api";
import Swal from "sweetalert2";

export default function Pwdsignup(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgcolor = useColorModeValue("teal.400", "whiteAlpha.50");
  const fontcolor = useColorModeValue("gray.50", "white");
  const [fontSize, setFontSize] = useState(16);

  // DATA TO POST
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("Zamboanga City");
  const [province, setProvince] = useState("Zamboanga Del Sur");
  const [zip, setZip] = useState("7000");
  const [disType, setDisType] = useState(0);
  const [disInborn, setDisInborn] = useState("");
  const [disCause, setDisCause] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [contact, setContact] = useState("");
  const [education, setEducation] = useState("");
  const [skills, setSkills] = useState([]);
  const [other, setOther] = useState([]);
  const userId = localStorage.getItem("id");

  // State with list of all checked item
  const [checked, setChecked] = useState([]);
  const [Deaf, setDeaf] = useState("You Checked Deaf or hard of Hearing");
  const { speak } = useSpeechSynthesis();
  const [checkList, setCheckList] = useState([]);

  // Add/Remove checked item from list

  const handleCheck = (e, value) => {
    if (e.target.checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((val) => val !== value));
    }
  };

  // Generate string of checked handleCh
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + " ✅ ," + item;
      })
    : "";

  // OTHER SKILLS
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...other];
    list[index][name] = value;
    setOther(list);
  };

  //handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...other];
    list.splice(index, 1);
    setOther(list);
  };

  // handle click event of the Add button
  const handleAddClick = (e, index) => {
    setOther([...other, { skill: "" }]);
  };

  const fetchDisabilities = async () => {
    let response = await api.get("/get_disabilities.php");

    if (response) {
      setCheckList(response.data);
    }
  };

  const submit = async (e) => {
    e.preventDefault();

    let response = await api.post("/pwd/post_pwd_info.php", {
      id: userId,
      birthdate: birthdate,
      contact: contact,
      street: street,
      city: city,
      province: province,
      zip: zip,
      disType: disType,
      disInborn: disInborn,
      disCause: disCause,
      education: education,
      skills: skills,
      other: other,
    });

    if (response.data.status === 1) {
      window.location.reload(false);
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong!",
      });
    }
  };

  useEffect(() => {
    fetchDisabilities();
  }, []);

  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  return (
    <Box p={10}>
      <Progress
        hasStripe
        borderRadius="10"
        value={progress}
        mb="1%"
        mx="1%"
        isAnimated
        size="md"
        colorScheme="teal"
      ></Progress>

      {step === 1 ? (
        <>
          <div id="target">
            <Button
              aria-label="Toggle Color Mode"
              onClick={toggleColorMode}
              _focus={{ boxShadow: "none" }}
              w="fit-content"
              {...props}
            >
              {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
            </Button>
            <Button
              mx={2}
              aria-label="Toggle Color Mode"
              onClick={() => setFontSize(fontSize + 5)}
            >
              A+
            </Button>
            <Button
              aria-label="Toggle Color Mode"
              onClick={() => setFontSize(fontSize - 5)}
            >
              A-
            </Button>
            <Heading w="100%" textAlign={"center"} fontWeight="600">
              Information
            </Heading>
            <Text
              textAlign={"center"}
              fontSize={fontSize}
              color={"gray.600"}
              mt={2}
            >
              Kindly fill up the required fields to continue.
            </Text>

            <HStack mt={10} fontSize={fontSize}>
              <FormControl
                fontWeight={600}
                as={GridItem}
                colSpan={6}
                isRequired
              >
                <FormLabel
                  htmlFor="street_address"
                  fontSize={fontSize}
                  fontWeight={600}
                  color="gray.700"
                  _dark={{
                    color: "gray.50",
                  }}
                >
                  Contact Number
                </FormLabel>
                <Input
                  fontSize={fontSize}
                  type="text"
                  focusBorderColor="brand.400"
                  shadow="sm"
                  w="full"
                  rounded="md"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </FormControl>
              <FormControl fontWeight={600} isRequired>
                <FormLabel
                  fontSize={fontSize}
                  htmlFor="city"
                  fontWeight={600}
                  color="gray.700"
                  _dark={{
                    color: "gray.50",
                  }}
                >
                  Birthdate
                </FormLabel>
                <Input
                  fontSize={fontSize}
                  type="date"
                  focusBorderColor="brand.400"
                  shadow="sm"
                  w="full"
                  rounded="md"
                  onChange={(e) => setBirthdate(e.target.value)}
                />
              </FormControl>
            </HStack>
            <HStack mt={6} fontSize={fontSize}>
              <FormControl
                fontWeight={600}
                as={GridItem}
                colSpan={6}
                isRequired
              >
                <FormLabel
                  htmlFor="street_address"
                  fontSize={fontSize}
                  fontWeight={600}
                  color="gray.700"
                  _dark={{
                    color: "gray.50",
                  }}
                >
                  Street address
                </FormLabel>
                <Input
                  fontSize={fontSize}
                  type="text"
                  name="street_address"
                  id="street_address"
                  autoComplete="street-address"
                  focusBorderColor="brand.400"
                  shadow="sm"
                  w="full"
                  rounded="md"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </FormControl>
              <FormControl fontWeight={600} isRequired>
                <FormLabel
                  fontSize={fontSize}
                  htmlFor="city"
                  fontWeight={600}
                  color="gray.700"
                  _dark={{
                    color: "gray.50",
                  }}
                >
                  City
                </FormLabel>
                <Input
                  fontSize={fontSize}
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="city"
                  focusBorderColor="brand.400"
                  shadow="sm"
                  w="full"
                  rounded="md"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </FormControl>
            </HStack>
            <HStack mt={4} mb="10">
              <FormControl fontWeight={600} isRequired>
                <FormLabel
                  htmlFor="state"
                  fontSize={fontSize}
                  fontWeight={600}
                  color="gray.700"
                  _dark={{
                    color: "gray.50",
                  }}
                >
                  State / Province
                </FormLabel>
                <Input
                  fontSize={fontSize}
                  type="text"
                  name="state"
                  id="state"
                  autoComplete="state"
                  focusBorderColor="brand.400"
                  shadow="sm"
                  w="full"
                  rounded="md"
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                />
              </FormControl>
              <FormControl fontWeight={600} isRequired>
                <FormLabel
                  fontSize={fontSize}
                  htmlFor="postal_code"
                  fontWeight={600}
                  color="gray.700"
                  _dark={{
                    color: "gray.50",
                  }}
                >
                  ZIP / Postal
                </FormLabel>
                <Input
                  fontSize={fontSize}
                  type="text"
                  name="postal_code"
                  id="postal_code"
                  autoComplete="postal-code"
                  focusBorderColor="brand.400"
                  shadow="sm"
                  w="full"
                  onChange={(e) => setZip(e.target.value)}
                  rounded="md"
                  defaultValue={zip}
                />
              </FormControl>
            </HStack>
            <Divider />
            <Box mt={7}>
              <FormControl isRequired>
                <FormLabel
                  fontSize={fontSize}
                  fontWeight={600}
                  color="gray.700"
                  _dark={{
                    color: "gray.50",
                  }}
                >
                  Type of Disability
                </FormLabel>
                <Select
                  placeholder="Select option"
                  focusBorderColor="brand.400"
                  shadow="sm"
                  w="full"
                  rounded="md"
                  onChange={(e) => setDisType(e.target.value)}
                >
                  {checkList.map((el) => {
                    return (
                      <>
                        <option value={el.JOB_FOR_ID}>{el.JOB_FOR_NAME}</option>
                      </>
                    );
                  })}
                </Select>

                <Flex mt={7}>
                  <FormControl id="Conginital/inborn" isRequired>
                    <FormLabel fontSize={fontSize} fontWeight={600}>
                      Cause of Disability
                    </FormLabel>
                    <Select
                      id="country"
                      name="country"
                      autoComplete="country"
                      focusBorderColor="brand.400"
                      shadow="sm"
                      w="full"
                      rounded="md"
                      fontSize={fontSize}
                      onChange={(e) => setDisInborn(e.target.value)}
                    >
                      <option>Autism</option>
                      <option>ADHD</option>
                      <option>Cerebral Palsy</option>
                      <option>Down Syndrome</option>
                      <option>Acquired</option>
                    </Select>
                    {disInborn === "Acquired" ? (
                      <Select
                        fontSize={fontSize}
                        mt={2}
                        id="country"
                        name="country"
                        autoComplete="country"
                        placeholder="Select option if Acquired"
                        focusBorderColor="brand.400"
                        shadow="sm"
                        w="full"
                        rounded="md"
                        onChange={(e) => setDisCause(e.target.value)}
                      >
                        <option>Chronic Illness</option>
                        <option>Cerebral Palsy</option>
                        <option>Injury</option>
                      </Select>
                    ) : (
                      ""
                    )}
                  </FormControl>
                </Flex>
              </FormControl>
            </Box>
          </div>
        </>
      ) : (
        // <STEP 2
        <div id="target">
          <Button
            aria-label="Toggle Color Mode"
            onClick={toggleColorMode}
            _focus={{ boxShadow: "none" }}
            w="fit-content"
            {...props}
          >
            {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
          </Button>
          <Button
            mx={2}
            aria-label="Toggle Color Mode"
            onClick={() => setFontSize(fontSize + 5)}
          >
            A+
          </Button>
          <Button
            aria-label="Toggle Color Mode"
            onClick={() => setFontSize(fontSize - 5)}
          >
            A-
          </Button>
          <Heading fontWeight={600} w="100%" textAlign={"center"} mb={7}>
            Education and Skills
          </Heading>
          <Box fontSize={fontSize}>
            <SimpleGrid columns={1} spacing={6}>
              <FormControl as={GridItem} colSpan={[3, 2]} isRequired>
                <FormLabel fontWeight={600} mb="4">
                  Educational Attainment
                </FormLabel>
                <RadioGroup
                  colorScheme="green"
                  defaultValue={"None"}
                  onChange={(e) => setEducation(e)}
                >
                  <HStack>
                    <Radio w="25%" value="None" isDisabled>
                      None
                    </Radio>
                    <Radio w="25%" value="Kindergarten">
                      Kindergarten
                    </Radio>
                    <Radio w="25%" value="Elementary">
                      Elementary
                    </Radio>
                    <Radio w="25%" value="Junior High School">
                      Junior High School
                    </Radio>
                  </HStack>
                  <HStack mt={2}>
                    <Radio w="25%" value="Senior High School">
                      Senior High School
                    </Radio>
                    <Radio w="25%" value="College Graduate">
                      College Graduate
                    </Radio>
                    <Radio w="25%" value="Vocational">
                      Vocational
                    </Radio>
                    <Radio w="25%" value="Post Graduate">
                      Post Graduate
                    </Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
            </SimpleGrid>

            <HStack>
              <Box w="50%">
                {" "}
                <FormLabel fontWeight={600} mt="6" mb="4">
                  Soft Skills
                </FormLabel>
                <CheckboxGroup colorScheme="green">
                  <Stack
                    spacing={[5, 2]}
                    direction={["row", "column"]}
                    fontSize={fontSize}
                  >
                    <Checkbox
                      value="Intellectual"
                      onChange={(e) => {
                        handleCheck(e, "Intellectual");
                      }}
                    >
                      Interpersonal Skills
                    </Checkbox>
                    <Checkbox
                      value="Learning"
                      onChange={(e) => {
                        handleCheck(e, "Learning");
                      }}
                    >
                      Communication Skills
                    </Checkbox>
                    <Checkbox
                      value="Mental"
                      onChange={(e) => {
                        handleCheck(e, "Mental");
                      }}
                    >
                      Editing
                    </Checkbox>
                    <Checkbox
                      value="Physical"
                      onChange={(e) => {
                        handleCheck(e, "Physical");
                      }}
                    >
                      Writing
                    </Checkbox>
                  </Stack>
                </CheckboxGroup>
              </Box>

              <Box>
                <FormLabel fontWeight={600} mt="6" mb="4">
                  Hard Skills
                </FormLabel>
                <CheckboxGroup colorScheme="green">
                  <FormControl>
                    <Stack
                      spacing={[5, 1]}
                      direction={["row", "column"]}
                      fontSize={fontSize}
                    >
                      <Checkbox
                        value="Phycosocial Disability"
                        onChange={(e) => {
                          handleCheck(e, "Phycosocial Disability");
                        }}
                      >
                        Computer Skills
                      </Checkbox>
                      <Checkbox
                        value="Speech Disability"
                        onChange={(e) => {
                          handleCheck(e, "Speech Disability");
                        }}
                      >
                        Administrative Skills
                      </Checkbox>
                      <Checkbox
                        value="Cancer"
                        onChange={(e) => {
                          handleCheck(e, "Cancer");
                        }}
                      >
                        Customer Service Skills
                      </Checkbox>
                      <Checkbox
                        value="Rare Disease"
                        onChange={(e) => {
                          handleCheck(e, "Rare Disease");
                        }}
                      >
                        Skills
                      </Checkbox>
                    </Stack>
                  </FormControl>
                </CheckboxGroup>
              </Box>
            </HStack>

            <FormControl id="email" mt={1}>
              <FormLabel
                mt="6"
                mb="2"
                fontWeight={600}
                color="gray.700"
                _dark={{
                  color: "gray.50",
                }}
              >
                Others
              </FormLabel>

              {other.map((x, i) => {
                return (
                  <Flex>
                    <Textarea
                      mt={2}
                      rows={1}
                      value={x.skill}
                      fontSize={{
                        sm: "sm",
                        lg: "md",
                      }}
                      name="skill"
                      onChange={(e) => handleInputChange(e, i)}
                    />

                    {other.length !== 1 && (
                      <button
                        onClick={() => handleRemoveClick(i)}
                        style={{
                          margin: 0,
                          color: "red",

                          fontSize: "18px",
                        }}
                      >
                        <BsFileMinus />
                      </button>
                    )}
                  </Flex>
                );
              })}
              <Button
                style={{ marginTop: "5px", marginBottom: "5px" }}
                colorScheme="blue"
                size="sm"
                onClick={handleAddClick}
              >
                + Add skill
              </Button>

              <FormHelperText>
                You can edit your profile briefly upon loging in to your new
                account.
              </FormHelperText>
            </FormControl>
          </Box>
        </div>
      )}
      <ButtonGroup mt={10} w="100%">
        <Flex w="100%" justifyContent="space-between">
          <Flex>
            <Button
              onClick={() => {
                setStep(step - 1);
                setProgress(progress - 50);
              }}
              isDisabled={step === 1}
              colorScheme="teal"
              variant="solid"
              w="7rem"
              mr="5%"
            >
              Back
            </Button>
            <Button
              w="7rem"
              isDisabled={step === 2}
              onClick={() => {
                setStep(step + 1);
                if (step === 2) {
                  setProgress(100);
                } else {
                  setProgress(progress + 50);
                }
              }}
              colorScheme="teal"
              variant="outline"
            >
              Next
            </Button>
          </Flex>
          {step === 2 ? (
            <Button w="7rem" colorScheme="red" variant="solid" onClick={submit}>
              Submit
            </Button>
          ) : null}
        </Flex>
      </ButtonGroup>
    </Box>
  );
}
