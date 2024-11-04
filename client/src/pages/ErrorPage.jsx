import notFound from "../assets/not-found.svg";
import ReturnBtn from "@/components/ReturnBtn";

function ErrorPage() {
  return (
    <>
      <div className="flex justify-center items-center w-full">
        <img src={notFound} alt="404 Not Found" />
      </div>
      <h2 className="text-center mt-36 md:mt-12 font-bold text-4xl">Oops!</h2>
      <p className="text-center py-6 text-2xl">
        We couldn&apos;t find the page you&apos;re looking for
      </p>
      <div className="flex justify-center">
        <ReturnBtn to={-1} />
      </div>
    </>
  );
}

export default ErrorPage;
