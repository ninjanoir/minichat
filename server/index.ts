import next from "next"

import * as http from "http"

import * as socketio from "socket.io"

import express, { Express, Request, Response } from "express"

import cors from "cors"

import { auth } from "./routes/auth"
import { rooms } from "./routes/rooms"

/**
 *
 * typescript types
 */

interface Post {
  post: string
}

const PORT: number = parseInt(process.env.PORT || "8000", 10)

const dev: boolean = process.env.NODE_ENV !== "production"

const nextApp = next({ dev })

const nextHandler = nextApp.getRequestHandler()

nextApp
  .prepare()
  .then(() => {
    const app: Express = express()
    const server: http.Server = http.createServer(app)
    const io: socketio.Server = new socketio.Server()

    //apply middlewares
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(cors())

    //bounding httpServer and socketio
    io.attach(server, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
    })

    //routes list
    app.use("/api/rooms", rooms, async (req: Request, res: Response) => {
      return nextApp.render(req, res, "/", req.body)
    })

    app.use("/api/auth", auth, async (req: Request, res: Response) => {
      return nextApp.render(req, res, "/login", req.body)
    })

    /**************************************************
     *     SOCKET IO
     **************************************************/

    io.on("connection", (socket: socketio.Socket) => {
      console.log(" connexion...")

      socket.on("data", (data: Post) => {
        io.emit("message", data)
      })

      socket.on("disconnect", () => {
        console.log("client disconnected")
      })
    })

    /** ********************************************** */

    //return nextHandler on *  routes
    app.all("*", (req: Request, res: Response) => nextHandler(req, res))

    //running the server
    server.listen(PORT, () => {
      console.log(`serveur running on port ${PORT}`)
    })
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
