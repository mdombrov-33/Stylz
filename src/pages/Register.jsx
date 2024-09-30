import { ReturnBtn } from "../components";

function Register() {
  return (
    <section className="flex h-screen items-center justify-center">
      <div className="mt-20 flex flex-col items-center justify-center">
        <h2 className="font-redHatDisplay text-4xl font-bold uppercase">
          Create your account
        </h2>
        <p className="py-2">It's quick and easy</p>
        <form className="flex w-96 flex-col items-center">
          <label
            className="w-96 justify-start font-redHatDisplay font-bold"
            htmlFor="full-name"
          >
            Full Name
          </label>
          <input
            className="my-2 w-full rounded-lg border border-stone-950 px-4 py-2 placeholder-gray-500"
            type="text"
            placeholder="John Doe"
            id="full-name"
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
          <label
            className="w-96 justify-start font-redHatDisplay font-bold"
            htmlFor="password"
          >
            Confirm Password
          </label>
          <input
            className="my-2 w-full rounded-lg border border-stone-950 px-4 py-2 placeholder-gray-500"
            type="password"
            placeholder="********"
            id="confirm-password"
          />

          <button className="btn my-2 w-full rounded-lg bg-accent py-2 text-lg text-white">
            Register
          </button>
        </form>
<<<<<<< HEAD
        <div className="mt-14">
          <ReturnBtn />
        </div>
=======

        <ReturnBtn />
>>>>>>> dc250f6a1bcacbb887f8daee0777ba0e756bafa5
      </div>
    </section>
  );
}

export default Register;
