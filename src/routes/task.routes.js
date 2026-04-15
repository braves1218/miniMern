import { Router } from "express";
import { gesTasks,createTask,upadAtetask, deleteTask } from "../controllers/task.controller.js";

const router = Router()

router.get("/", gesTasks)
router.post("/", createTask)
router.put("/:id",upadAtetask)
router.delete("/:id",deleteTask)

export default router;
