import Head from "next/head"

import React, { useState, useEffect, FormEvent } from "react"

const Login = () => {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    fetch("http://localhost:8000/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(auth),
    })
      .then((response) => console.log(response))
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    console.log(auth)
  }, [auth])

  return (
    <>
      <Head>
        <title>Login | chat space</title>
      </Head>

      <main>
        <h1>login</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setAuth({ ...auth, email: e.target.value })}
              value={auth.email}
            />
          </div>

          <div>
            <label htmlFor="password">password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setAuth({ ...auth, password: e.target.value })}
              value={auth.password}
            />
          </div>

          <div>
            <button type="submit">Envoyer</button>
          </div>
        </form>
      </main>
    </>
  )
}

export default Login
