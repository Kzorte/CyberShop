"use client";

import React, { FC, useState } from "react";
import Input from "@/shared/Input/Input";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Image from "next/image";
import Link from "next/link";
import RootLayout from "../layout";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import axios from "axios";
import { useRouter } from "next/navigation";

const PageSignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");
  const [error, setError] = useState<string>("");
const router = useRouter();

const handleSubmit = async (e: { preventDefault: () => void; }) => {
  e.preventDefault();
  if (password !== rePassword) {
    setError("Passwords do not match");
    return;
  }

  try {
    const response = await axios.post("http://localhost:3000/signup", {
      email,
      password,
    });
    if (response.data.success) {
      router.push("/login");
    } else {
      setError(response.data.errors);
    }
  } catch (err) {
    console.error(err);
    setError("An error occurred. Please try again.");
  }
};
  const params = {};

  return (
    <RootLayout params={params} hideHeader={true} hideFooter={true}>
      <div className={`nc-PageSignUp `} data-nc-id="PageSignUp">
        <div className="container mb-24 lg:mb-32">
          <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
            Signup
          </h2>
          <div className="max-w-md mx-auto space-y-6 ">
            {/* FORM */}
            <form className="grid grid-cols-1 gap-6" onSubmit= {handleSubmit} >
              {/* <label className="block">
                <span className="text-neutral-800 dark:text-neutral-200">
                  First name
                </span>
                <Input required
                  type="text"
                  placeholder="Enter Your First Name*"
                  className="mt-1"
                />
              </label>
              <label className="block">
                <span className="text-neutral-800 dark:text-neutral-200">
                  Last name
                </span>
                <Input required
                  type="text"
                  placeholder="Enter Your Last Name*"
                  className="mt-1"
                />
              </label> */}
              <label className="block">
                <span className="text-neutral-800 dark:text-neutral-200">
                  Email address
                </span>
                <Input
                  required
                  type="email"
                  placeholder="example@example.com"
                  className="mt-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className="block">
                <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                  Password
                </span>
                <Input
                  required
                  type="password"
                  placeholder="Enter Your Password*"
                  className="mt-1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <label className="block">
                <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                  Re-enter password
                </span>
                <Input
                  required
                  type="password"
                  placeholder="Enter Your Password*"
                  className="mt-1"
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                />
              </label>
              <ButtonPrimary type="submit">Continue</ButtonPrimary>
            </form>

            {/* ==== */}
            <span className="block text-center text-neutral-700 dark:text-neutral-300">
              Already have an account? {` `}
              <Link className="text-green-600" href="/login">
                Sign in
              </Link>
              <br />
              <br />
              <ButtonSecondary>
                <a className="text-blue-600" href="/">
                  Back Home
                </a>
              </ButtonSecondary>
            </span>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default PageSignUp;
