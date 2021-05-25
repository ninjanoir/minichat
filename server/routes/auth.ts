import { Router, Request, Response } from "express"
import { applyTryCatch } from "../middlewares/applyTryCatch"
/**
 *  middleware next() avec redirect  
 * 
 * 
 */

const auth = Router()

auth.post(
  "/",
  applyTryCatch(async (req: Request, res: Response) => {
    res.json({ succes: true, message: "tetststststststs" })
  })
)

auth.get(
  "/",
  applyTryCatch(async (req: Request, res: Response) => {
    res.json({ succes: true, message: "tetststststststs" })
  })
)

export { auth }
