"use client"
import {useLogin} from "@/lib/services/user/useLogin";
import {AppDispatch} from "@/lib/store";
import Link from "next/link";
import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {setUser} from "@/lib/features/authSlice";
import {useRouter} from "next/navigation";
import {toast} from "react-toastify";
import {useForm, Controller} from "react-hook-form"
import z from "zod"
import {zodResolver} from '@hookform/resolvers/zod'

const Login = () => {
  const [message, setMessage] = useState("")
  const dispatch = useDispatch<AppDispatch>()
  const [login] = useLogin()
  const router = useRouter()
  const handleLogin = async ({email, password}:{email:string, password:string}) => {
    try {
      const response = await login({variables:{input:{email, password}}})
      const {user} = response.data?.login
      dispatch(setUser({user}))
      toast.dismiss()
      toast.success("Login successful")
      router.push("/")
    } catch (error) {
      setMessage("Please provide a valid email and password")
    }
  }
  const loginSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string()
  });
  const {handleSubmit, control, formState:{errors}} = useForm({defaultValues:{
    email: "",
    password: ""
  }, resolver: zodResolver(loginSchema)})
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="max-w-sm border shadow bg-white mx-auto p-8">
        <h2 className="text-2xl font-semibold pt-5">Please Login</h2>
        <form className="space-y-5 max-w-sm mx-auto pt-8" onSubmit={handleSubmit((login) => handleLogin(login))}>
          <Controller name={"email"} rules={{required:true}} control={control} render={({field}) => (<input type="email" placeholder="Email" className="w-full bg-gray-100 focus:outline-none focus:bg-white px-5 py-3" 
          value={field.value} onChange={field.onChange}/>)}/>
          {errors.email?.message && <p className="text-red-500">{errors.email?.message}</p>}
          <Controller name={"password"} rules={{required:true}} control={control} render={({field}) => (<input type="password" placeholder="Password" className="w-full bg-gray-100 focus:outline-none focus:bg-white px-5 py-3" value={field.value} 
          onChange={field.onChange} />)} />
          {message && <p className="text-red-500 text-sm font-medium">{message}</p>}
          <button type="submit" className="w-full mt-5 bg-primary text-white hover:bg-indigo-500 font-medium rounded-md py-3">Login</button>
        </form>
        <p className="text-center my-5 text-sm italic">Don&apos;t have an account?<Link href="/register" className="text-red-700 px-1 underline">Register</Link>here.</p>
      </div>
    </section>
  )
}

export default Login
