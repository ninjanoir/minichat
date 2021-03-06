import { Router, Request, Response } from "express"
import { applyTryCatch } from "../middlewares/applyTryCatch"

const rooms = Router()

rooms.get(
  "/",
  applyTryCatch(async (req: Request, res: Response) => {
    res.json({ success: true, message: "what's news ?" })
  })
)

export { rooms }
