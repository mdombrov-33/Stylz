import { FaGoogle } from "react-icons/fa";

import { ReturnBtn } from "../components";
import loginImg from "../assets/login.jpg";
import { Link } from "react-router-dom";
// import Loader from "../components/Loader";
// import { useState } from "react";

function Login() {
  // const [isLoading, setIsLoading] = useState(true);

  // const handleImageLoad = () => {
  //   setIsLoading(false);
  // };

  // const handleImageError = () => {
  //   setIsLoading(false);
  // };

  return (
    <section className="grid h-screen justify-center md:grid-cols-2">
      <div className="mt-20 flex flex-col items-center justify-center">
        <h3 className="font-redHatDisplay text-4xl font-bold uppercase">
          Welcome Back
        </h3>
        <p className="py-2">Welcome back! Please enter your details.</p>
        <fieldset>
          <legend className="sr-only">Login Details</legend>
          <form className="flex w-96 flex-col items-center">
            <label
              className="w-96 justify-start font-redHatDisplay font-bold"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="my-2 w-full rounded-lg border border-stone-950 px-4 py-2 placeholder-gray-500"
              type="email"
              placeholder="stylzmc@gmail.com"
              id="email"
              name="email"
              autoComplete="username"
            />
            <label
              className="w-96 justify-start font-redHatDisplay font-bold"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="my-2 w-full rounded-lg border border-stone-950 px-4 py-2 placeholder-gray-500"
              type="password"
              placeholder="********"
              id="password"
              name="password"
              autoComplete="current-password"
            />

            <div className="mt-2 flex w-96 items-center justify-between">
              <div className="flex items-center justify-center">
                <input
                  type="checkbox"
                  className="h-[15px] w-[15px] text-stone-950 checked:bg-stone-950 focus:ring-stone-950"
                  id="checkbox"
                />
                <label
                  htmlFor="checkbox"
                  className="ml-2 font-redHatDisplay text-base-content"
                >
                  Remember me
                </label>
              </div>
              <a href="/" className="font-bold text-gray-500 hover:underline">
                Forgot password?
              </a>
            </div>
            <button className="btn my-2 w-full rounded-lg bg-accent py-2 text-lg text-white">
              Sign in
            </button>
            <button className="btn my-2 w-full rounded-lg bg-neutral-content py-2 text-lg text-white">
              <FaGoogle />
              Sign in with Google
            </button>
          </form>
        </fieldset>
        <p className="mt-2">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-accent hover:underline">
            Sign up
          </Link>
        </p>
        <div className="mt-12">
          <ReturnBtn />
        </div>
      </div>
      {/* <div className="relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader />
          </div>
        )} */}
      <img
        className="hidden h-screen w-full object-cover grayscale md:block"
        src={loginImg}
        alt="Picture of a person leaning against a brick wall, face is not visible"
        // onLoad={handleImageLoad}
        // onError={handleImageError}
      />
      {/* </div> */}
    </section>
  );
}

export default Login;
