const { default: mongoose } = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  project: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  coverImageUrl: {
    type: String,
    required: true,
  },
  imageUrls: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Project =
  mongoose.models?.Project || mongoose.model("Project", projectSchema);

module.exports = Project;
