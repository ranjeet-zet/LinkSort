import NodeCase from "node-cache";
import asyincHandler from "express-async-handler";
const chase = new NodeCase();
import express from "express";
import router from "./LinkSort/controller.js";
import LinkModel from "./LinkSort/schema.js";
const app = express();
app.use(express.json());
app.use("/api", router);
app.get(
  "/:link",
  asyincHandler(async (req, res) => {
    const { link } = req.params;
    const url = chase.get(link);
    const data = await LinkModel.findOne({ sort: link },{link:1,_id:0});
    res.redirect(302,data.link);
  })
);

app.use((req, res) => {
  res.status(404).send({ message: `Route${req.originalUrl} not found` });
});
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

export default app;
