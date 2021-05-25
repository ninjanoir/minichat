import { Router, Request, Response } from "express"
import { applyTryCatch } from "../middlewares/applyTryCatch"

const router = Router()

router.post(
  "/api/auth",
  applyTryCatch(async(req: Request, res: Response) => {
    console.log(req.body)
    res.json({ succes: true, message: "tetststststststs" })
  })
)

export { router }
