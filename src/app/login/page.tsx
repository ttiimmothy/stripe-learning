"use client"
// import {useLoginMutation} from "@/lib/features/authApi";
import {useLogin} from "@/lib/services/user/useLogin";
import {AppDispatch} from "@/lib/store";
import Link from "next/link";
import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {useRouter} from "next/navigation"
import {setUser} from "@/lib/features/authSlice";

const Login = () => {
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch<AppDispatch>()
  // const [login, {isLoading: loginLoading}] = useLoginMutation()
  const [login] = useLogin()
  const router = useRouter()
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = {
      email,
      password
    }
    try {
      // const response = await login(data)
      // console.log(response)
      const response = await login({variables:{input:data}})
      // console.log(response)
      const {token, user} = response.data?.login
      dispatch(setUser({user}))
      alert("Login successful")
      router.push("/")
    } catch (error) {
      setMessage("Please provide a valid email and password")
    }
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
