'use client';
import {useRouter, redirect} from 'next/navigation';
import { useState } from 'react';

export default function Signup() {

  const router = useRouter();

  const [ error, setError ] = useState("");
  const [ button, setButton ] = useState("Register");
  const [ formData, setFormData ] = useState({
    email: "",
    password: ""
  })


  const handleSubmission = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    try {
      setButton("Please wait...")
      const res = await fetch('/api/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password})
      })
      if(res.status === 400) {
        setError("This user already exists")
        setButton("Register")
      }
      if(res.status === 404) {
        setError("Not found")
        setButton("Register")
      }
      if(res.ok) {
        setError("User successfully registered")
        router.push("/signin")
        setButton("Register")
        setFormData({ email: "", password: ""})
      }
    } catch (error) {
      console.log(error)
      setButton("Register")
    }
  }

  return (
    <div className='text-white w-full mx-auto flex flex-col py-5 items-center justify-center'>
      <h1 className="font-bold text-2xl">Register</h1>
      <div className="w-[90%] mt-5 lg:w-[40%] bg-lgray py-5 rounded-lg ">
        <form className="w-full px-6 flex flex-col items-center justify-center" onSubmit={handleSubmission}>
          <input type="email" placeholder="Enter your email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} id="email" name="email" className="bg-gray-300 mb-4 w-full py-2 rounded-lg" required />
          <input type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} id="password" name="password" className="bg-gray-300 mb-4 w-full py-2 rounded-lg" required />
          <p className=''>{error && error}</p>
          <button type="submit" className="py-2 bg-gray-600 text-center rounded-lg px-6">{button}</button>
        </form>
      </div>
    </div>
  )
}


