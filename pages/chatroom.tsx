import Head from "next/head"

import { FormEvent, useState, useEffect } from "react"

import { io } from "socket.io-client"


interface Post {
  post: string
}

const socket = io("http://localhost:8000", { transports: ["websocket"] })

const ChatRoom = () => {
  //initialize current component state
  const [message, setMessage] = useState("")
  const [listMessage, setListMessage] = useState<Post[]>([])



  /**
   *
   * @param event
   * set current messsage
   */

  const sendMessage = (event: FormEvent) => {
    socket.emit("data", { post: message })
  }

  socket.on("message", (data: Post) => {
    console.log(data)
    setListMessage([...listMessage, data])
  })


  useEffect(() => {

    console.log(listMessage)
      
  }, [listMessage]);

  return (
    <>
      <Head>
        <title>Private chat room space</title>
      </Head>

      <main>
        <div>
          <span>message</span>
          <input
            type="text"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <button onClick={sendMessage}>Envoyer</button>
        </div>

        <div>
          <ul>
            {listMessage.length > 0 &&
              listMessage.map((message, i) => (
                <li key={`message${i}`}>{message.post}</li>
              ))}
          </ul>
        </div>
      </main>
    </>
  )
}

export default ChatRoom
