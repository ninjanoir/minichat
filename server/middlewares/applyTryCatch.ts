import { Request, Response, NextFunction } from "express"

interface Handler {
  (req: Request, res: Response): void 
  
}

export function applyTryCatch(fn: Handler) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res)
    } catch (ex) {
      next(ex)
    }
  }
}
