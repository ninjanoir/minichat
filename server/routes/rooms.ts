import { Router, Request, Response } from "express"

const router = Router()

router.get("/api/rooms", (req:Request, res: Response) => {
  res.json({ success: true, message: "what's news ?" })
})

export { router }
