import express from "express";
import { getVideos } from "../controllers/videoController.js";

const videoRouter = express.Router();

videoRouter.get("/",getVideos);

export default videoRouter;