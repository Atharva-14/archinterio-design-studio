import connectDB from "@/utils/db";
import Project from "../models/Project";

export async function getAllProjects() {
  await connectDB();
  try {
    const projects = await Project.find();

    return projects;
  } catch (error) {
    throw new Error("Failed to fetch projects");
  }
}

export async function getProjectByID(id) {
  await connectDB();
  try {
    const project = await Project.findById(id).lean();

    return project;
  } catch (error) {
    throw new Error("Failed to fetch book by ID");
  }
}
