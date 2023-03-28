import {
  Button,
  FormLabel,
  HStack,
  Input,
  ListItem,
  Select,
  Textarea,
  UnorderedList,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTask } from "../Redux/action";
import { LOADING_TASK } from "../Redux/actionType";

// Tasks component
const TaskForm = () => {
  const [project, setProject] = useState("");
  const { projectList, loading, error } = useSelector((store) => store.app);
  const [projectData, setProjectData] = useState(projectList);
  const dispatch = useDispatch();

  const [taskName, setTaskName] = useState("");
  const [timeSpent, setTimeSpent] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);
  const navigate= useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const task = {
      project,
      taskName,
      timeSpent,
      description,
      date: new Date().toDateString(),
    };
    setTasks([...tasks, task]);
    setProject("");
    setTaskName("");
    setTimeSpent("");
    setDescription("");
  };

  const handleProjectChange = (event) => {
    setProject(event.target.value);
  };

  useEffect(() => {
    console.log("data");
    dispatch({ type: LOADING_TASK });
    dispatch(addTask(tasks));
  }, [tasks]);

  return (
    <div>
      <Heading>Tasks Page</Heading> 
      <Button onClick={()=>navigate("list")}> Go to List</Button>
      <HStack padding="30px 10px 30px 40px" m={3} spacing={"60px"}>
       
        <TableContainer>
            <Table size='sm'>
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
          {tasks.map((task, index) => (
            
                <Tr  key={index}>
                  <Td>{index+1}</Td>
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
          <form onSubmit={handleSubmit}>
          <FormLabel htmlFor="project">Select Project:</FormLabel>
          <Select id="project" value={project} onChange={handleProjectChange}>
            <option value="">Select Project</option>
            {projectData?.map((item, index) => (
              <option key={item + index} value={item}>
                {item}
              </option>
            ))}
          </Select>
          <FormLabel htmlFor="taskName">Task Name:</FormLabel>
          <Input
            type="text"
            id="taskName"
            value={taskName}
            onChange={(event) => setTaskName(event.target.value)}
          />
          <FormLabel htmlFor="timeSpent">Time Spent:</FormLabel>
          <Input
            type="number"
            id="timeSpent"
            value={timeSpent}
            onChange={(event) => setTimeSpent(event.target.value)}
          />
          <FormLabel htmlFor="description">Description:</FormLabel>
          <Textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <Button type="submit">Add Task</Button>
        </form>    
      </HStack>
    </div>
  );
};

export default TaskForm;
