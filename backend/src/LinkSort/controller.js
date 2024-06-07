import express, { Router } from "express";
import asyincHandler from "express-async-handler";
import { ApiResponse } from "../utils/ApiResponse.js";
const router = express.Router();
import LinkModel from "./schema.js";
router.route("/create").get(
  asyincHandler(async (req, res) => {
    const name = Date.now().toString(36);
    const { url } = req.query;
    console.log(url);
    const newLink = await LinkModel.create({
      link: url,
      sort: name,
    });
    newLink.save();
    res.send( new ApiResponse(201, {
      message: "Link Created",
      link: `${process.env.DOMAIN}${name}`,
    }));
  })
);

export default router;
