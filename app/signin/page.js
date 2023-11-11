"use client";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Signin() {

  const router = useRouter();

  const [ error, setError ] = useState("");

  const [ formLoginData, setFormLoginData ] = useState({
    email: "",
    password: ""
  })

  const { session, sessionStatus } = useSession();

  const { email, password } = formLoginData;

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/main");
    }
  }, [sessionStatus, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    console.log(res)

    if (res?.error) {
      setError("Invalid email or password");
      if (res?.url) router.replace("/main");
    } else {
      setError("");
      router.replace("/main");
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }

  // const handleSubmission = async (e) => {
  //   e.preventDefault();
  //   const { email, password } = formLoginData;
  // }
    return (
      sessionStatus !== "authenticated" && (
      <div className='text-white w-full flex flex-col py-5 items-center justify-center'>
        <h1 className="font-bold text-2xl">Sign in</h1>
        <div className="w-[90%] mt-5 lg:w-[40%] bg-lgray py-5 rounded-lg ">
          <form className="w-full px-6 flex flex-col items-center justify-center" onSubmit={handleSubmit}>
            <input type="email" placeholder="Enter your email" id="email" name="email" className="bg-gray-300 mb-4 w-full py-2 rounded-lg" required value={formLoginData.email} onChange={(e) => setFormLoginData({...formLoginData, email: e.target.value})} />
            <input type="password" placeholder="Password" id="password" name="password" className="bg-gray-300 mb-4 w-full py-2 rounded-lg" required value={formLoginData.password} onChange={(e) => setFormLoginData({...formLoginData, password: e.target.value})} />
            <p>{error && error}</p>
            <button tpe="submit" className="py-2 bg-gray-600 text-center rounded-lg px-6">Sign in</button>
          </form>
        </div>
      </div>
      )
    )
}