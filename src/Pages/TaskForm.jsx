import {
  Button,
  FormLabel,
  HStack,
  Input,
  Select,
  Textarea,
  Heading,
  Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TaskData from "../Components/TaskData";
import { addTask } from "../Redux/action";
import { LOADING_TASK } from "../Redux/actionType";

// Tasks component
const TaskForm = () => {
  const [project, setProject] = useState("");
  const { projectList, loading_task } = useSelector((store) => store.app);
  const [projectData] = useState(projectList);
  const dispatch = useDispatch();

  const [taskName, setTaskName] = useState("");
  const [timeSpent, setTimeSpent] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

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
      <Button onClick={() => navigate("/list")}> Go to List</Button>
      <HStack padding="30px 10px 30px 40px" m={3} spacing={"60px"}>
        {loading_task ? (
          <Image
            src="https://icon-library.com/images/loading-gif-icon/loading-gif-icon-9.jpg"
            alt="loading"
          />
        ) : (
          <TaskData data={tasks} />
        )}
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
            placeholde="Enter task name"
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
