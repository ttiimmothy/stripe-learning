"use client"
import {useCreateUser} from "@/lib/services/user/useCreateUser";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, {useState} from 'react'
import {toast} from "react-toastify";
import {useForm, Controller} from "react-hook-form"
import z from "zod"
import {zodResolver} from '@hookform/resolvers/zod'

const Register = () => {
  const [message, setMessage] = useState("")
  const [createUser] = useCreateUser()
  const router = useRouter()
  const handleLogin = async ({email, username, password}:{email:string, username:string, password:string}) => {
    try {
      await createUser({variables: {input: {email, username, password}}})
      toast.dismiss()
      toast.success("Registration successful")
      router.push("/login")
    } catch (error) {
      setMessage("Registration failed")
    }
  }
  const registerSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    username: z.string().min(2, {message: "Must be 2 or more characters long"}),
    password: z.string()
  });
  const {handleSubmit, control,formState:{errors}} = useForm({defaultValues:{
    email: "",
    username: "",
    password: ""
  }, resolver: zodResolver(registerSchema)})
  return (
    <section className="h-screen flex items-center justify-center">
    <div className="max-w-sm border shadow bg-white mx-auto p-8">
      <h2 className="text-2xl font-semibold pt-5">Please Register</h2>
      <form className="space-y-5 max-w-sm mx-auto pt-8" onSubmit={handleSubmit((register) => {handleLogin(register)})}>
        <Controller rules={{required:true}} control={control} name={"username"} render={({field}) => <input type="text" placeholder="Username" className="w-full bg-gray-100 focus:outline-none focus:bg-white px-5 py-3" value={field.value} onChange={field.onChange}/>}/>
        {errors.username?.message && <p className="text-red-500 text-sm font-medium">{errors.username?.message}</p>}
        <Controller rules={{required:true}} control={control} name={"email"} render={({field}) => <input type="email" placeholder="Email" className="w-full bg-gray-100 focus:outline-none focus:bg-white px-5 py-3" value={field.value} onChange={field.onChange}/>}/>
        {errors.email?.message && <p className="text-red-500">{errors.email?.message}</p>}
        <Controller rules={{required:true}} control={control} name={"password"} render={({field}) => <input type="password" placeholder="Password" className="w-full bg-gray-100 focus:outline-none focus:bg-white px-5 py-3" value={field.value} onChange={field.onChange}/>}/>
        {message && <p className="text-red-500 text-sm font-medium">{message}</p>}
        <button type="submit" className="w-full mt-5 bg-primary text-white hover:bg-indigo-500 font-medium rounded-md py-3">Register</button>
      </form>
      <p className="text-center my-5 text-sm italic">Already have an account? Please<Link href="/login" className="text-red-700 px-1 underline">Login</Link>.</p>
    </div>
    </section>
  )
}

export default Register
