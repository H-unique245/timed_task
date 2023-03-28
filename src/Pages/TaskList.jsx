import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TaskData from "../Components/TaskData";

function TaskList() {
  const { taskList } = useSelector((store) => store.app);

  const [Data, setData] = useState([]);

  useEffect(() => {
    setData(taskList);
  }, [taskList]);
  const projectDates = [...new Set(Data.map((task) => task.project))];
  return (
    <HStack>
      <TaskData data={Data} />
      <Box>
        <Heading>Total Hours Counted</Heading>
        {projectDates.map((project) => (
          <TotalHours key={project} tasks={Data} project={project} />
        ))}
      </Box>
    </HStack>
  );
}

const TotalHours = ({ tasks, project }) => {
  const totalHours = tasks
    .filter((task) => task.project === project)
    .reduce((acc, curr) => acc + parseFloat(curr.timeSpent), 0);

  return (
    <VStack>
      <HStack>
        <Box>
          {" "}
          Total hours for <Text as="b">{project} :</Text>{" "}
        </Box>
        <Box>{totalHours} Hours</Box>
      </HStack>
    </VStack>
  );
};

export default TaskList;
