import { useNavigate } from "react-router-dom";

import { FaGoogle } from "react-icons/fa";
import login from "../assets/login.jpg";

function Login() {
  const navigate = useNavigate();

  return (
    <section className="grid h-screen justify-center md:grid-cols-2">
      <div className="mt-20 flex flex-col items-center justify-center">
        <h3 className="font-redHatDisplay text-4xl font-bold uppercase">
          Welcome Back
        </h3>
        <p className="py-2">Welcome back! Please enter your details.</p>
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
          />

          <div className="mt-2 flex w-96 justify-between">
            <div>
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
        <p className="mt-2">
          Don't have an account?{" "}
          <a href="/" className="text-accent hover:underline">
            Sign up
          </a>
        </p>
        <button
          onClick={() => navigate(-1)}
          className="btn mt-12 text-2xl font-bold uppercase"
        >
          Go Back
        </button>
      </div>
      <div>
        <img
          className="hidden h-screen w-full border-l-2 border-stone-950 object-cover grayscale md:block"
          src={login}
          alt="Illustration of a elegant woman with a big white hat"
        />
      </div>
    </section>
  );
}

export default Login;
