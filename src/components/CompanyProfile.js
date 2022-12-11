import { Box, Button, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../restapi/api";
import AddJobPost from "./AddJobPost";

function CompanyProfile(props) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [regNum, setRegNum] = useState("");
  const [incDate, setIncDate] = useState("");
  const [telNum, setTelNum] = useState("");
  const [compEmail, setCompEmail] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [website, setWebsite] = useState("");
  const [userId, setUserId] = useState(localStorage.getItem("id"));
  const [companyId, setCompanyId] = useState(0);
  const [jobs, setJobs] = useState([]);

  let navigate = useNavigate();

  const fetchUser = async () => {
    let response = await api.get("/company/get_company_profile.php", {
      params: { id: userId },
    });

    if (response) {
      setFirstname(response.data[0].REP_FIRSTNAME);
      setCompanyId(response.data[0].COMPANY_ID);
    }
  };

  const fetchJobs = async () => {
    let response = await api.get("/get_jobs.php", {
      params: { companyId: companyId },
    });

    if (response) {
      setJobs(response.data);
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    fetchUser();
    fetchJobs();
  }, [companyId]);
  return (
    <div>
      Account name: {firstname} <br />
      COMPANY ID: {companyId}
      <Button onClick={logout}>Logout</Button>
      <Box>
        <Button
          onClick={() => navigate(`/companyprofile/addjobpost?id=${companyId}`)}
        >
          Add job post
        </Button>
      </Box>
      <Box>
        <Text mt={10}>Job Lists</Text>
        {jobs.map((el) => {
          return (
            <>
              <li>{el.TITLE}</li>
            </>
          );
        })}
      </Box>
    </div>
  );
}

export default CompanyProfile;
