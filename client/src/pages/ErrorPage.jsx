import notFound from "../assets/not-found.svg";
import ReturnBtn from "@/components/ReturnBtn";

function ErrorPage() {
  return (
    <>
      <div className="flex w-full items-center justify-center">
        <img src={notFound} alt="404 Not Found" />
      </div>
      <h2 className="mt-36 text-center text-4xl font-bold md:mt-12">Oops!</h2>
      <p className="py-6 text-center text-2xl">
        We couldn&apos;t find the page you&apos;re looking for
      </p>
      <div className="flex justify-center">
        <ReturnBtn to={-1} />
      </div>
    </>
  );
}

export default ErrorPage;
