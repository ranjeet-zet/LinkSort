import mongoose from "mongoose";

const LinkSortSchema = new mongoose.Schema(
  {
    link: {
      type: String,
      required: true,
    },
    sort: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const LinkModel= mongoose.model("LinkSort", LinkSortSchema);

export default LinkModel;