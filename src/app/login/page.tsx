"use client"
import Link from "next/link";
import React, {useState} from 'react'

const Login = () => {
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = {
      email,
      password
    }
    // const res = await fetch("/api/login", {
    //   method: "POST",
    //   body: JSON.stringify(data)
    // })
    // setMessage("Invalid email or password")
  }
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="max-w-sm border shadow bg-white mx-auto p-8">
        <h2 className="text-2xl font-semibold pt-5">Please Login</h2>
        <form className="space-y-5 max-w-sm mx-auto pt-8" onSubmit={handleLogin}>
          <input type="email" name="email" placeholder="Email" className="w-full bg-gray-100 focus:outline-none focus:bg-white px-5 py-3" required value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" name="password" placeholder="Password" className="w-full bg-gray-100 focus:outline-none focus:bg-white px-5 py-3" required value={password} onChange={(e) => setPassword(e.target.value)}/>
          {message && <p className="text-red-500">{message}</p>}
          <button type="submit" className="w-full mt-5 bg-primary text-white hover:bg-indigo-500 font-medium rounded-md py-3">Login</button>
        </form>
        <p className="text-center my-5 text-sm italic">Don't have an account?<Link href="/register" className="text-red-700 px-1 underline">Register</Link>here.</p>
      </div>
    </section>
  )
}

export default Login
