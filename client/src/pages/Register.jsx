import ReturnBtn from "@/components/ReturnBtn";
import axios from "axios";
import { useRef } from "react";

function Register() {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullName = fullNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const data = {
      full_name: fullName,
      email,
      password,
    };

    try {
      const response = await axios.post(
        " https://xp3vs2ukp2.execute-api.eu-north-1.amazonaws.com/prod/register",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="flex h-screen items-center justify-center">
      <div className="mt-20 flex flex-col items-center justify-center">
        <h2 className="font-redHatDisplay text-3xl font-bold uppercase">
          Create your account
        </h2>
        <p className="py-2">It&apos;s quick and easy</p>
        <form
          onSubmit={handleSubmit}
          className="flex w-96 flex-col items-center"
          method="POST"
        >
          <fieldset className="w-full">
            <legend className="sr-only">Registration Form</legend>
            <label
              className="w-96 justify-start font-redHatDisplay font-bold"
              htmlFor="full_name"
            >
              Full Name
            </label>
            <input
              className="my-2 w-full rounded-lg border border-stone-950 px-4 py-2 placeholder-gray-500"
              type="text"
              placeholder="John Doe"
              id="full_name"
              name="full_name"
              autoComplete="name"
              required
              ref={fullNameRef}
            />
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
              ref={emailRef}
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
              autoComplete="new-password"
              required
              ref={passwordRef}
            />
            <label
              className="w-96 justify-start font-redHatDisplay font-bold"
              htmlFor="confirm_password"
            >
              Confirm Password
            </label>
            <input
              className="my-2 w-full rounded-lg border border-stone-950 px-4 py-2 placeholder-gray-500"
              type="password"
              placeholder="********"
              id="confirm_password"
              name="confirm_password"
              autoComplete="new-password"
              required
            />
            <button className="btn my-2 w-full rounded-lg bg-accent py-2 text-lg text-white">
              Register
            </button>
          </fieldset>
        </form>
        <div className="mt-14">
          <ReturnBtn />
        </div>
      </div>
    </section>
  );
}

export default Register;
