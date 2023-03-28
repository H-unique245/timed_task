import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

function TaskData({ data }) {
  return (
    <TableContainer>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>Sr. No.</Th>
            <Th>Project Name</Th>
            <Th>Task Name</Th>
            <Th isNumeric>Time Spent (in Hours)</Th>
            <Th>Description</Th>
            <Th>Date </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((task, index) => (
            <Tr key={index}>
              <Td>{index + 1}</Td>
              <Td>{task.project}</Td>
              <Td>{task.taskName}</Td>
              <Td isNumeric>{task.timeSpent}</Td>
              <Td>{task.description}</Td>
              <Td>{task.date}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default TaskData;
