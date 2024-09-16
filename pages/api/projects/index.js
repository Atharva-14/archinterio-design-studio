import { getAllProjects } from "@/libs/services/projectService";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const projects = await getAllProjects();

      res.status(200).json({ success: true, projects });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Failed to fetch projects", error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
