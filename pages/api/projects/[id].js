import { getProjectByID } from "@/libs/services/projectService";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { id } = req.query;
    try {
      const project = await getProjectByID(id);
      if (!project) {
        res.status(400).json({ success: false, message: "Project not found" });
      }

      res.status(200).json({ success: true, project });
    } catch (error) {
      res.status(500).json({
        message: "Failed to fetch project by ID",
        error: error.message,
      });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
