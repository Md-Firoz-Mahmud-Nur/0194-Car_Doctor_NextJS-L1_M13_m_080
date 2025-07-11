"use client";
import SocialIcons from "@/components/shared/SocialIcons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Login = () => {
  const handleSignup = async (event) => {
    console.log("login");
  };
  return (
    <div className="container mx-auto px-24 py-24">
      <div className="grid grid-cols-2 items-center gap-20">
        <div>
          <Image
            src="/assets/images/login/login.svg"
            height={502}
            width={460}
            alt="login image"
          />
        </div>
        <div className="border-Dark-05 text-Dark-02 rounded-lg border p-16">
          <h6 className="mb-12 text-center text-[40px] font-semibold">
            Sign Up
          </h6>
          <form onSubmit={handleSignup} action="">
            <label className="text-lg font-semibold" htmlFor="name">
              Name
            </label>

            <input
              type="password"
              name="password"
              placeholder="Your name"
              className="input input-bordered border-Dark-06 placeholder:text-Dark-04 input-xl mt-5 w-full rounded-lg px-6 py-4"
            />
            <div className="mt-5">
              <label className="text-lg font-semibold" htmlFor="email">
                Email
              </label>
            </div>
            <input
              type="text"
              name="email"
              placeholder="Your email"
              className="input input-bordered border-Dark-06 placeholder:text-Dark-04 input-xl mt-5 w-full rounded-lg px-6 py-4"
            />

            <div className="mt-5">
              <label className="text-lg font-semibold" htmlFor="password">
                Password
              </label>
            </div>

            <input
              type="password"
              name="password"
              placeholder="Your password"
              className="input input-bordered border-Dark-06 placeholder:text-Dark-04 input-xl mt-5 w-full rounded-lg px-6 py-4"
            />
            <button
              type="submit"
              className="btn btn-primary mt-7 h-16 w-full rounded-lg text-xl leading-7 font-semibold"
            >
              Sign Up
            </button>
          </form>
          <div>
            <h6 className="text-Dark-02 my-7 text-center text-lg font-medium capitalize">
              or sign up with
            </h6>
            <SocialIcons></SocialIcons>
            <h6 className="text-Dark-03 mt-12 text-center text-lg capitalize">
              already Have an account?{" "}
              <Link className="text-primary font-semibold" href={"/login"}>
                Login
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
