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
            autoComplete="name"
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
            autoComplete="new-password"
          />
          <label
            className="w-96 justify-start font-redHatDisplay font-bold"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <input
            className="my-2 w-full rounded-lg border border-stone-950 px-4 py-2 placeholder-gray-500"
            type="password"
            placeholder="********"
            id="confirm-password"
            autoComplete="new-password"
          />

          <button className="btn my-2 w-full rounded-lg bg-accent py-2 text-lg text-white">
            Register
          </button>
        </form>
        <div className="mt-14">
          <ReturnBtn />
        </div>
      </div>
    </section>
  );
}

export default Register;
