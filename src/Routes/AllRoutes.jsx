import React from "react";
import { Route, Routes } from "react-router-dom";
import ProjectForm from "../Pages/ProductForm";
import TaskForm from "../Pages/TaskForm";
import TaskList from "../Pages/TaskList";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProjectForm />} />
      <Route path="/addtask" element={<TaskForm />} />
      <Route path="/list" element={<TaskList />} />
    </Routes>
  );
};

export default AllRoutes;
