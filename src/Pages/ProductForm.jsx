import { Box, Button, FormLabel, Heading, HStack, Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProject } from '../Redux/action';
import { LOADING_PROJECT } from '../Redux/actionType';

// Projects component
 const ProjectForm = () => {
  const [projectName, setProjectName] = useState('');
  const [projects, setProjects] = useState([]);
const {projectList}= useSelector((store)=> store.app)
const dispatch= useDispatch();  
const navigate= useNavigate();

const handleSubmit = (event) => {
    event.preventDefault();
    
    setProjects([...projects, projectName]);
    //localStorage.setItem("projectList",JSON.stringify(projects))

    setProjectName('');
  };

  useEffect(()=>{
    dispatch({type:LOADING_PROJECT})
    dispatch(addProject(projects))
},[projects])

  return (
    <>      <Heading>Projects</Heading> 
    <Button onClick={()=>navigate("addtask")}>Task Page</Button>
    <HStack p={"7rem"} spacing="50px">
      <form onSubmit={handleSubmit}>
        <FormLabel htmlFor="projectName">Project Name:</FormLabel>
        <Input
          type="text"
          id="projectName"
          value={projectName}
          placeholder="Enter Project name"
          onChange={(event) => setProjectName(event.target.value)}
        />
        <Button type="submit">Add Project</Button>
      </form>
      <Box>
      <ul>
        {projectList.map((project, index) => (
          <li key={index+project}>{project}</li>
        ))}
      </ul>
      </Box>
    </HStack>
    </>

  );
};

export default ProjectForm