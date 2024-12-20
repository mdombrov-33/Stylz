import { toast } from "react-hot-toast";
import { Form, Link, useNavigation, redirect } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

import ReturnBtn from "@/components/ReturnBtn";
import useThemeStore from "@/store/theme-store";
import useUserStore from "@/store/user-store";

function Login() {
  const navigation = useNavigation();
  const { theme } = useThemeStore((state) => state);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // //////////////////////////////////
  return (
    <main className="grid h-screen justify-center md:grid-cols-2">
      <section className="mt-20 flex flex-col items-center justify-center">
        <h3 className="font-redHatDisplay text-4xl font-bold uppercase">
          Welcome Back
        </h3>
        <p className="py-2">Welcome back! Please enter your details</p>
        <fieldset>
          <legend className="sr-only">Login Details</legend>
          <Form method="post" className="flex w-96 flex-col items-center">
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

            <section className="mt-2 flex w-96 items-center justify-between">
              <div className="flex items-center justify-center">
                <input
                  type="checkbox"
                  className="h-[15px] w-[15px] text-stone-950 checked:bg-stone-950 focus:ring-stone-950"
                  id="checkbox"
                  name="remember_me"
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
            </section>
            <button className="btn my-2 w-full rounded-lg bg-accent py-2 text-lg text-white">
              {navigation.state === "submitting" ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                "Sign In"
              )}
            </button>
          </Form>

          {/* ///////////////// */}
        </fieldset>
        <p className="mt-2">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-accent hover:underline">
            Sign up
          </Link>
        </p>
        <div className="mt-12">
          <ReturnBtn to={"/"} />
        </div>
      </section>

      <img
        className="hidden h-screen w-full object-cover grayscale md:block"
        src="https://res.cloudinary.com/dymitbtl3/image/upload/v1730720462/login_thpwpu.jpg"
        alt="Picture of a person leaning against a brick wall, face is not visible"
      />
    </main>
  );
}

export async function action({ request }) {
  const data = await request.formData();
  const loginData = {
    email: data.get("email"),
    password: data.get("password"),
  };
  const remember_me = data.get("remember_me");

  try {
    const response = await axios.post(
      "https://xvcgdjm2l7.execute-api.eu-north-1.amazonaws.com/prod/login",
      loginData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const access_token = response.data.access_token;
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 2);

    if (remember_me) {
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("expiration", expiration.toISOString());
    } else {
      sessionStorage.setItem("access_token", access_token);
      sessionStorage.setItem("expiration", expiration.toISOString());
    }

    const { email, full_name } = response.data;

    useUserStore.getState().setUser(email, full_name);

    toast.success("Login successful!");
    return redirect("/");
  } catch (err) {
    const msg = err.response.data.message;
    toast.error(msg ? msg : err.response.data);
    return err;
  }
}
export default Login;
