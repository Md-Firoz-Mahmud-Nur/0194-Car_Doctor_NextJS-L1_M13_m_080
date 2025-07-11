import Image from "next/image";
import Link from "next/link";
import React from "react";

const Login = () => {
  const handleLogin = async (event) => {
    console.log("login");
  };
  return (
    <div className="container mx-auto px-24 py-24">
      <div className="grid grid-cols-2 items-center gap-20">
        <div>
          <Image
            src="/assets/images/login/login.svg"
            height="540"
            width="540"
            alt="login image"
          />
        </div>
        <div className="border-Dark-05 text-Dark-02 rounded-lg border p-16">
          <h6 className="mb-12 text-center text-[40px] font-semibold">Login</h6>
          <form action="">
            <label className="text-lg font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              name="email"
              placeholder="Your email"
              className="input input-bordered border-Dark-06 placeholder:text-Dark-04 mt-5 w-full rounded-lg px-6 py-4 input-xl"
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
              className="input input-bordered border-Dark-06 placeholder:text-Dark-04 mt-5 w-full rounded-lg px-6 py-4 input-xl"
            />
            <button
              type="submit"
              className="btn btn-primary mt-7 w-full rounded-lg text-lg"
            >
              Sign In
            </button>
          </form>
          <div>
            <h6 className="my-12 text-center">or sign in with</h6>
            facebook
            <h6 className="my-12 text-center">
              not have account ?{" "}
              <Link className="text-primary font-semibold" href={"/signup"}>
                Sign Up
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
