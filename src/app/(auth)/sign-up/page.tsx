"use client";

import { authClient } from "@/lib/auth-client";
import {
  Form,
} from "@heroui/react";
import { redirect } from "next/navigation";
const SignUpPage = () => {
 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     const formData = new FormData(e.currentTarget);
     const data = Object.fromEntries(formData.entries())
     const { data:resData, error } = await authClient.signUp.email({
      name: data.name as string,
     email: data.email as string,
     password: data.password as string, 
     image: data.image as string,
     
     callbackURL: "/",
 });

if(resData){
  redirect('/')
}
else if(error){
  console.log(error)
}

 console.log('After sign in :',resData,error)
   };



const handleSignInSocial = async()=>{
  const SocialData = await authClient.signIn.social({
    provider: "google"
  })
}

  return (
    <Form onSubmit={handleSubmit} className="w-full max-w-96 container mx-auto m-8" >
      <h1 className="text-2xl font-bold text-red-500 flex justify-center m-5">সাইন আপ</h1>

      <fieldset className="fieldset bg-base-200 rounded-box   p-4 shadow-lg w-md">


  <label className=" label">নাম</label>
  <input name="name" type="text" className="input w-md" placeholder="তুমার নাম" />

  <label className="label">ইমেইল</label>
  <input name="email" type="email" className="input w-md" placeholder="Email" />

  <label className="label">Image</label>
  <input name="image" type="url" className="input w-md" placeholder="url" />

  <label className="label">পাসওয়ার্ড</label>
  <input name="password" type="password" className="input w-md" placeholder="পাসওয়ার্ড" />

  <button type="submit" className="btn bg-red-500 text-white mt-4">সাইন আপ</button>
  <button type="submit"  className="btn bg-green-500 text-white mt-4" onClick={handleSignInSocial}>Sign in With Google</button>
</fieldset>
    </Form>
  );
};

export default SignUpPage;