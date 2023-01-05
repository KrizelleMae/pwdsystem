import React, { useEffect, useState } from "react";
import {
  Badge,
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import api from "../../restapi/api";
import moment from "moment";

function JobApplied(props) {
  const [userId, setUserId] = useState(localStorage.getItem("id"));
  const [list, setList] = useState([]);

  const fetchJobs = async () => {
    let response = await api.get("/pwd/get_job_applied.php", {
      params: { userId: userId },
    });

    if (response) {
      setList(response.data);
      //   setCompanyId(response.data[0].FK_COMPANY_ID);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <TableContainer bg="white" boxShadow="base" pt={3}>
        <Table variant="simple" size="sm">
          <Thead textAlign="center">
            <Th>Job Title</Th>
            <Th>Company</Th>
            <Th>Job Type</Th>
            <Th>Date Applied</Th>
            <Th>Status</Th>
          </Thead>
          <Tbody>
            {list.map((el) => {
              return (
                <>
                  <Tr>
                    <Td py={4}>{el.TITLE}</Td>
                    <Td>
                      <Box>{el.COMPANY_NAME}</Box>
                    </Td>
                    <Td>
                      <Text fontWeight="bold" textTransform="uppercase">
                        {el.JOB_TYPE}
                      </Text>
                    </Td>
                    <Td>
                      <Text>{moment(el.DATE_APPLIED).format("lll")}</Text>
                    </Td>
                    <Td>
                      <Badge colorScheme="green" variant="outline">
                        {el.STATUS}
                      </Badge>
                    </Td>
                  </Tr>
                </>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default JobApplied;
