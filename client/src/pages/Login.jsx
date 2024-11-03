import { FaGoogle } from "react-icons/fa";

import ReturnBtn from "@/components/ReturnBtn";
import loginImg from "../assets/login.jpg";
import { Form, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/features/user/userSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.user);

  console.log(status, error);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const user = {
      email: data.email,
      password: data.password,
    };

    const response = await dispatch(loginUser(user));

    if (loginUser.fulfilled.match(response)) {
      navigate("/");
    }
  };

  return (
    <section className="grid h-screen justify-center md:grid-cols-2">
      <div className="mt-20 flex flex-col items-center justify-center">
        <h3 className="font-redHatDisplay text-4xl font-bold uppercase">
          Welcome Back
        </h3>
        <p className="py-2">Welcome back! Please enter your details</p>
        <fieldset>
          <legend className="sr-only">Login Details</legend>
          <Form
            method="post"
            onSubmit={handleSubmit}
            className="flex w-96 flex-col items-center"
          >
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
              required
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
              required
            />

            {error && <p className="text-red-500">{error}</p>}

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
              {status === "loading" ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                "Sign In"
              )}
            </button>
            <button className="btn my-2 w-full rounded-lg bg-neutral-content py-2 text-lg text-white">
              <FaGoogle />
              Sign in with Google
            </button>
          </Form>
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

      <img
        className="hidden h-screen w-full object-cover grayscale md:block"
        src={loginImg}
        alt="Picture of a person leaning against a brick wall, face is not visible"
      />
    </section>
  );
}

export default Login;
