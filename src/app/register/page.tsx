"use client"
import {useCreateUser} from "@/lib/services/useCreateUser";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, {useState} from 'react'

const Register = () => {
  const [message, setMessage] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [createUser] = useCreateUser()
  const router = useRouter()
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = {
      username,
      email,
      password
    }
    try {
      await createUser({variables: {input: data}})
      alert("Registration successful")
      router.push("/login")
    } catch (error) {
      setMessage("Registration failed")
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
      <h2 className="text-2xl font-semibold pt-5">Please Register</h2>
      <form className="space-y-5 max-w-sm mx-auto pt-8" onSubmit={handleLogin}>
        <input type="text" name="username" placeholder="Username" className="w-full bg-gray-100 focus:outline-none focus:bg-white px-5 py-3" required value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input type="email" name="email" placeholder="Email" className="w-full bg-gray-100 focus:outline-none focus:bg-white px-5 py-3" required value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" name="password" placeholder="Password" className="w-full bg-gray-100 focus:outline-none focus:bg-white px-5 py-3" required value={password} onChange={(e) => setPassword(e.target.value)}/>
        {message && <p className="text-red-500">{message}</p>}
        <button type="submit" className="w-full mt-5 bg-primary text-white hover:bg-indigo-500 font-medium rounded-md py-3">Register</button>
      </form>
      <p className="text-center my-5 text-sm italic">Already have an account? Please<Link href="/login" className="text-red-700 px-1 underline">Login</Link>.</p>
    </div>
    </section>
  )
}

export default Register
